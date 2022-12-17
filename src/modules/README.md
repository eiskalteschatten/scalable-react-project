# Modules

Modules are the largest building blocks. They can contain multiple pages (routes), components, services, contexts, etc. They can also contain submodules that follow the same file structure.

Each module should be divided into logical units that make sense for your application. An example for a web store could be:

- Products
- Cart
- UserAccount
- LandingPages
- etc…

The RootModule is the only “required” module. This is where the homepage and the 404 page reside.
