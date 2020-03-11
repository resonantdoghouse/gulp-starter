# Gulp Starter

A simple starter for using gulp to help automate development tasks.

## Features

- Browsersync, live-reload
- Code minification
- Webpack to allow using JS import statements
- eslint
- pug for html templating
- CSS autoprefixing

## Setup

Download or clone this repo, run `npm install` in the downloaded folder.
If all goes swimmingly then try running the gulp tasks below.

## Gulp Tasks

Note that if you haven't installed gulp-cli you will need to add this first e.g. `npm i -g gulp-cli`

```sh
gulp # will launch browersync and watch for file changes
gulp scripts # will compile and minify js files
gulp styles # will minify and autoprefix css
gulp scss # will process scss files
gulp pug # will comile pug templates into html
gulp webpack # will create a bundle.js however you will need to update index.html to link to this.
```
