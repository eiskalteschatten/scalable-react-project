# Scalable React Project

An experimental example of how to structure a React project to make it scalable.

This project is constantly evolving and I would love to hear any feedback, suggestions, questions, etc you might have. See the <a href="#contributing">Contributing</a> section for more information on that.


## Table of Contents

- <a href="#terminology">Terminology</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#file-division">File Division</a>
- <a href="#state-management">State Management</a>
- <a href="#contributing">Contributing</a>

## Terminology

### Module
Modules are the largest building blocks. They can contain multiple pages (routes), components, services, contexts, etc. They can also contain submodules that follow the same file structure.

Each module should be divided into logical units that make sense for your application. An example for a web store could be:

- Products
- Cart
- UserAccount
- LandingPages
- etc…

The RootModule is the only “required” module. This is where the homepage and the 404 page reside. Static pages that don’t require much logic, such as a privacy statement page, could be added here as well.

### Page
A page is where a route will land. It can contain multiple components and services, but should only have one context at most.

Pages also set their own page titles.

### Service
This is where application logic happens such as data processing, etc. Services for modules, pages and components should be built using a `useService` hook by default so that they have access to other hooks, i.e. useContext hooks.

### Context
This is where data is stored. Optionally, it can be fetched and sent from a context as well.

### Components
Components are the smallest unit and are at the bottom of the hierarchy. They should contain nothing but markup, styles and a little bit of logic specific for that individual component. They can use parent contexts, local states, etc, but should not have their own services or contexts.

### Layouts
Layouts are a sort of scaffolding for your application. They contain the page designs as well as components relevant to the design such as the header, main menu, footer, etc.

It is recommended to add them at module-level to maintain flexibility. If you need multiple layouts per module, you should probably rethink your code division.


## Project Structure

The following structure should reside in the `src` folder which was left out for brevity in the diagram below:

```
index.tsx
App.tsx
App.scss
App.context.tsx (The application context for global state)
App.test.tsx
assets
└─── Images, fonts, etc
i18n
└───  Translations, etc
modules
└─── [ModuleName]
│   │    index.tsx (Where the routes are defined)
│   │    [ModuleName].context.tsx
│   │    [ModuleName].test.tsx
└─── pages
│   │    [PageName]
│   │    index.tsx
│   │    [PageName].module.scss
│   │    [PageName].service.ts
│   │    [PageName].context.tsx
│   │    [PageName].test.tsx
│   │    [PageName].interfaces.ts
│   └─── [ComponentName]
│   │   │    index.tsx
│   │   │    [ComponentName].module.scss
│   │   │    [ComponentName].test.tsx
│   │   │    [ComponentName].interfaces.ts
│   └─── components (Modules can have components that are shared across multiple pages)
│   │   └─── [ComponentName]
│   │   │   │   index.tsx
│   │   │   │   [ComponentName].module.scss
│   │   │   │   [ComponentName].test.tsx
│   │   │   │   [ComponentName].interfaces.ts
│   └─── interfaces (Modules can have shared TypeScript interfaces)
│   └─── hooks
│   └─── etc...
layouts
└─── [LayoutName]
│   │    index.tsx
│   │    [LayoutName].module.scss
│   └─── [ComponentName]
│   │   │    index.tsx
│   │   │    [ComponentName].module.scss
│   │   │    [ComponentName].test.tsx
│   │   │    [ComponentName].interfaces.ts
shared (Anything that is shared between multiple modules, components, etc should go here)
└─── components
│   │    [ComponentName]
│   │    index.tsx
│   │    [ComponentName].module.scss
│   │    [ComponentName].test.tsx
│   │    [ComponentName].interfaces.ts
└─── services
└─── helpers
└─── etc...
```

### Folder Nesting
The official recommendation for folder nest from the React project is ["as flat as possible"](https://reactjs.org/docs/faq-structure.html#avoid-too-much-nesting).

While the structure above does make use of nested folders, it is designed to limit them as much as possible. The deepest folder should never be deeper than four or five levels deep from the `src` folder to avoid wonky imports. The most deeply-nested folder in this structure can be found at `modules/pages/components/[ComponentName]`.

### Naming Conventions
Consistent naming conventions are vital for larger projects. They make files and their functions predictable for both old and new developers alike.

The approach taken by this project is to consistently name files after the module, page or component they inherit from. This name combined with its function (i.e. `[PageName].service.ts` or `[ModuleName].context.ts`), combine to form an easily distguishable name that says exactly what the file does. The exceptions to this rule are the `index.tsx` files which serve as the base of each directory as well as where it doesn't make sense such as helpers, hooks, etc.

## File Division
File division should follow the priciple of "one file, one purpose". The purpose should be defined in the file name (see above, "Naming Conventions").

There are a few examples of code division below. Every project is slightly different in terms of its file requirements and so each module, page, component, etc should be made accordingly. The important thing is that there is a clear division that is easily definable by a single word to be put in the file name.

### Modules
- `index.tsx` - Routes within the module should be defined here as well as the layout the module uses. The layout should be defined in the `src/layouts` folder.
- `[ModuleName].context.tsx` - If the module needs a context, it should be defined here.
- `[ModuleName].test.tsx` - The test for the module routes.

### Pages
- `index.tsx` - This is where markup the code for the page resides. The only logic this file should contain is anything directly pertaining to the display or layout of the entire page.
- `[PageName].service.ts` - The service is where the business logic should happen. This includes any data handling, etc needed for the page.
- `[PageName].module.scss` - This is where any CSS belongs that is directly used by this page.
- `[PageName].context.tsx` - If the page needs a context, is should be defined here.
- `[PageName].test.tsx` - The test for the page.
- `[PageName].interfaces.ts` - This is where any necessary TypeScript interfaces should reside that affect the entire page.

### Components
- `index.tsx` - Like with the page, this is where markup the code resides. The only logic this file should contain is anything directly pertaining to the display or layout of the entire page.
- `[ComponentName].module.scss` - This is where any CSS belongs that is directly used by this page.
- `[ComponentName].test.tsx` - The test for the page.
- `[ComponentName].interfaces.ts` - This is where any necessary TypeScript interfaces should reside.

## State Management
The eagle-eyed amongst you may have noticed there there is no Redux or other state-mangement system in this project. That is because it uses contexts that React provides natively. Redux and other tools were born before React offered cross-component state management natively. By only using contexts, you significantly reduce your chunk sizes and your boilerplating.

The project is organized such that contexts are hierarchical:

- `App.context.tsx` is used for global application state. The provider is included in `App.tsx`.
- `[ModuleName].context.tsx` is used for module states that affect multiple pages within that module. The provider is included in the `index.tsx` of the module.
- `[PageName].context.tsx` is used for page states that affect multiple components within that page. The provider is included in the `index.tsx` of the module and wrapped around the page component in the `<Route>`. This is so that the page itself has access to it.

As a general rule, local state should be preferred. This means that state should be kept at the lowest possible level to avoid unnecessary rerendering. Contexts should only be used if the state truly affects multiple sub-components.

## Contributing
I would love to hear any feedback, suggestions, questions, etc you might have:

- Feedback, questions, discussions, etc: https://github.com/eiskalteschatten/scalable-react-project/discussions
- Suggestions, corrections, etc: https://github.com/eiskalteschatten/scalable-react-project/issues

Also, feel free to fork and create a pull request!

---

Alex Seifert - https://www.alexseifert.com
