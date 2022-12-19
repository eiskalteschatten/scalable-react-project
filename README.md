# Scalable React Project

An experimental example of how to structure a React project to make it scalable.

**This project is just beginning.** More information about the structure, etc will become available here once it is finalized.


## Table of Contents

- <a href="#terminology">Terminology</a>

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
This is where application logic happens such as data processing, etc. Services should be built using a useService hook by default so that they have access to other hooks, i.e. useContext hooks.

### Context
This is where data is stored. Optionally, it can be fetched and sent from a context as well.

### Components
Components are the smallest unit and are at the bottom of the hierarchy. They should contain nothing but markup, styles and a little bit of logic specific for that individual component. They can use parent contexts, local states, etc, but should not have their own services or contexts.

### Layouts
Layouts are a sort of scaffolding for your application. They contain the page designs as well as components relevant to the design such as the header, main menu, footer, etc.

It is recommended to add them at module-level to maintain flexibility. If you need multiple layouts per module, you should probably rethink your code division.


---

Alex Seifert - https://www.alexseifert.com
