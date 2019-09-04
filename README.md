# Gulp Starter

A simple starter for using gulp to help automate development tasks.

## Features

- Browsersync, live-reload
- Code minification
- Webpack to allow using JS import statements
- eslint
- pug for html templating
- CSS autoprefixing

## Gulp Tasks

```
gulp // will launch browersync and watch for file changes
gulp scripts // will compile and minify js files
gulp styles // will minify and autoprefix css
gulp pug // will comile pug templates into html
gulp webpack // will create a bundle.js however you will need to update index.html to link to this.
```