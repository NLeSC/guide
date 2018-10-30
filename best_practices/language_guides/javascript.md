# Getting started

To learn about JavaScript, view the presentations by [Douglas Crockford](http://en.wikipedia.org/wiki/Douglas_crockford):

* [Crockford on JavaScript](http://www.youtube.com/playlist?list=PL7664379246A246CB)
* [JavaScript: The Good Parts](http://www.youtube.com/watch?v=hQVTIJBZook)
* JavaScript trilogy:
    * [The JavaScript Programming Language](http://www.youtube.com/watch?v=v2ifWcnQs6M) (1h50m)
    * [Theory of the DOM](http://www.youtube.com/watch?v=Y2Y0U-2qJMs) (1h18m)
    * [Advanced JavaScript](http://www.youtube.com/watch?v=DwYPG6vreJg) (1h07m)

In [this video](http://www.youtube.com/watch?v=c-kav7Tf834) (47m04s), Nicholas Zakas talks about sustainability aspects, such as how to write maintainable JavaScript, how to do JavaScript testing, and good programming style (much needed in JavaScript).
Among others, he mentions the following style guides:

* [Google's style guide for JavaScript](https://google.github.io/styleguide/javascriptguide.xml);
* [Crockford's style guide](http://javascript.crockford.com/code.html) integrates with [JSLint](http://www.jslint.com/), which in turn is available as a plugin for Eclipse.
* Zakas has also written [an excellent book](http://shop.oreilly.com/product/0636920025245.do) on writing maintainable JavaScript, also within the context of working in teams. The appendix contains a style guide with explanation.

[These](http://www.youtube.com/watch?v=yQaAGmHNn9s&list=PLA56F6A06883A2AD8) video tutorials (totaling a couple of hours) are useful if you're just starting with learning the JavaScript language.

Another source of information for javascript, is the "web standards curriculum" made by the Web Education Community Group as part of W3C:

http://www.w3.org/community/webed/wiki/Main_Page

In particular, see the page about [Javascript best practices](http://www.w3.org/community/webed/wiki/JavaScript_best_practices)

# Frameworks

To develop a web application it is no longer enough to sprinkle some [JQuery](https://jquery.com/) calls on a html page, a JavaScript based front end web application framework must be used. The are very many frameworks, popularity is a good way to pick one.
Currently the most popular frameworks are

* [Angular](https://angular.io/)
* [React](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)

All these frameworks have a command line utility to generate an application skeleton which includes the serve, build and test functionality.

## Angular

[Angular](https://angular.io/) is a application framework by Google written in [TypeScript](https://www.typescriptlang.org/).

To create a Angular application use [Angular CLI](https://cli.angular.io/).

## React

[React](https://facebook.github.io/react/) is a library which can used to create interactive User Interfaces by combining components. It is developed by Facebook.
Where Angular and Vue.js are frameworks, including all the rendering, routing, state management functonality inside them. React only does rendering so other libraries must be used for routing and state management.
[Redux](http://redux.js.org/) can be used to let state changes flow through React components. [React Router](https://reacttraining.com/react-router/) can be used to navigate the application using URLs. 

To create a React application use the [Create React App](https://github.com/facebookincubator/create-react-app)
How to develop the bootstrapped app further is described in the README.md.

[TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter) is a Typescript version of create react app.

## Vue.js

[Vue.js](https://vuejs.org/) is an open-source JavaScript framework for building user interfaces. 

To create a Vue.js application use [Vue CLI](https://cli.vuejs.org/).

[TypeScript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter) is a guide to write Vue applications in TypeScript.

# JavaScript outside browser

Most JavaScript is run in web browsers, but
JavaScript can also be run on outside browsers with [NodeJS](https://nodejs.org).

On Ubuntu (18.04) based systems, you can use the following commands to install NodeJS:

```shell
# system packages (Ubuntu/Debian)
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

NodeJS comes with a package manager called [npm](https://www.npmjs.com/).
The package manager uses https://www.npmjs.com/ as the package repository.

# Editors and IDEs

These are some good JavaScript editors:

* [Atom](http://atom.io) by GitHub
* [Brackets](http://brackets.io/) by Adobe
* [WebStorm](https://www.jetbrains.com/webstorm/) by JetBeans
* [Visual Studio Code](https://code.visualstudio.com) by Microsoft

The best JavaScript editors are currently WebStorm and Visual Studio Code. Atom can have some performance problems, especially with larger files.

# Debugging

In web development, debugging is typically done in the browser.

* The best debugging tool suite is currently the debugger built into the Google Chrome webbrowser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button) or install the [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) Addon for some more advanced debugging functionality.
* Microsoft has a debugging toolset called 'F12' for their Internet Explorer and Edge browsers. It offers similar capability as that of Google Chrome, Chromium, and Firefox.
* In Safari on OS X, press ⌘⌥U.

Sometimes the JavaScript code in the browser is not an exact copy of the code you see in your development environment, for example because the original source code is minified/uglified or transpiled before it's loaded in the browser.
All major browsers can now deal with this through so-called _source maps_, which instruct the browser which symbol/line in a javascript file corresponds to which line in the human-readable source code.
Look for the 'create sourcemaps' option when using minification/uglification/transpiling tools.

# Hosting data files

To load data files with JavaScript you can't use any file system URLs due to safety restrictions.
You should use a web server (which may still serve files that are local).
A simple webserver can be started from the directory you want to host files with:

```bash
python3 -m http.server 8000
```

<!-- the &#104; notation below is to avoid problems with the link checker (broken-link-checker) -->
Then open the webbrowser to &#104;ttp://localhost:8000.

# Documentation

[JSDoc](http://usejsdoc.org/) works similarly to JavaDoc, in that it parses your JavaScript files and automatically generates HTML documentation. The [Tag Dictionary](http://usejsdoc.org/#JSDoc3_Tag_Dictionary) is an overview of the tag names you can use to document your code.

# Testing

* [Jasmine](http://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code.
* [Karma](http://karma-runner.github.io/), Test runner, runs tests in web browser with code coverage. Use [PhantomJS](http://phantomjs.org/) as headless webbrowser on CI-servers.
* [Tape](https://github.com/substack/tape), a minimal testing framework that helps remove some of the black-box approach of some of the other frameworks.
* [Jest](https://github.com/facebook/jest), a test framework from Facebook which is integrated into the [Create React App](https://github.com/NLeSC/create-react-app)

## Web based tests

To interact with web-browsers use [Selenium](http://docs.seleniumhq.org/).

Test with
* Local web browser
* Web browsers hosted by [Sauce Labs](https://saucelabs.com/), it has a matrix of web-browsers and Operating Systems. Free for open source projects.

# Coding style

See [general front dev guidelines](https://github.com/bendc/frontend-guidelines) and [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Use a linter like [eslint](https://eslint.org/) to detect errors and potential problems.

# Showing code examples

Code examples can be stored in Gists in GitHub. [bl.ocks.org](http://bl.ocks.org) allows you to view the resulting page, and serve as a small demo.
There's also [jsfiddle](https://jsfiddle.net/), which shows you a live preview of your web page while you fiddle with the underlying HTML, JavaScript and CSS code.

# Code quality analysis tools and services

* [Code climate](https://codeclimate.com) can analyze Javascript (and Ruby, PHP). For example project see https://codeclimate.com/github/NLeSC/PattyVis
* [Codacy](https://www.codacy.com) can analyze Java, Python, Javascript and Typescript (and CSS, PHP, Scala). The analysis for Java and Python is not as good as for Javascript. The analysis is quite slow, as it analyzes each past commit. For example project see https://www.codacy.com/app/3D-e-Chem/molviewer-tsx/dashboard
* [SonarCloud](https://sonarcloud.io) is an open platform to manage code quality which can also show code coverage and count test results over time.
Can analyze Java (best supported), C, C++, Python, Javascript and Typescript. For example project see https://sonarcloud.io/dashboard?id=e3dchem%3Amolviewer

# TypeScript

http://www.typescriptlang.org

Typescript is a typed superset of JavaScript which compiles to plain JavaScript. Typescript adds static typing to JavaScript, which makes it easier to scale up in people and lines of code.

At the Netherlands eScience Center we prefer TypeScript over JavaScript as it will lead to more sustainable software.

## Getting Started

To learn about TypeScript the following resources are available:

* [youtube](http://www.youtube.com/playlist?list=PLyJiOytEPs4d9QUQHHSuY3n3nBmkBuqro): tutorials playlist about TypeScript
* [tutorial](http://www.typescriptlang.org/Tutorial) from Microsoft's TypeScript website  
* [blog post](http://www.aaron-powell.com/posts/2012-10-03-typescript-source-maps) about how TypeScript can be used with the Google Chrome/Chromium debuggers (and [presumably](http://blog.oio.de/2014/04/04/internet-explorer-11-source-map-based-debugging/) Firefox, and Internet Explorer) through the use of so-called 'source maps'. (Follow [this](http://www.codeproject.com/Articles/649271/How-to-Enable-Source-Maps-in-Firefox) link to set up source mapping for Firefox, also useful for debugging minified JavaScript code).
* [blog post](http://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) that supposedly is the definitive guide to TypeScript
* [TypeScript Language Specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

## Quickstart

To install TypeScript compiler run:

```shell
npm install -g typescript
```

## Dealing with Types

In TypeScript, variables are typed and these types are checked.
This implies that when using libraries, the types of these libraries need to be installed.
More and more libraries ship with type declarations in them so they can be used directly. These libraries will have a "typings" key in their package.json.
When a library does not ship with type declarations then the libriaries `@types/<library-name>` package must be installed using npm:

```shell
npm install --save-dev @types/<library-name>
```

For example say we want to use the ``react`` package which we installed using ``npm``:
```shell
npm install react --save
```

To be able to use its functionality in TypeScript we need to install the typings. 
We can search for the correct package at http://microsoft.github.io/TypeSearch/ .

And install it with:

```shell
npm install --save-dev @types/react
```

The ``--save-dev`` flag saves this installation to the package.json file as a development dependency.
Do not use ``--save`` for types because a production build will have been transpiled to Javascript and has no use for Typescript types.

## Editors and IDEs

These are some good TypeScript editors:

* [Atom](http://atom.io) by GitHub, with the ``atom-typescript`` Atom package.
* [Brackets](http://brackets.io/?lang=en) by Adobe
* [Visual Studio Code](https://code.visualstudio.com) by Microsoft
* [WebStorm](https://www.jetbrains.com/webstorm/) by JetBeans

The best TypeScript editors is currently Visual Studio Code as Microsoft develops both the editor and Typescript. 

## Debugging

In web development, debugging is typically done in the browser. 
Typescript can not be run directly in web browser so it must be transpiled to Javascript. To map a breakpoint in the browser to a line in the original Typescript file [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) are required. Most frameworks have a project build system which generate source maps.

## Documentation

It seems that [TypeDoc](http://typedoc.io/) is a good tool to use.
Alternative could be [TSdoc](https://www.npmjs.com/package/tsdoc)

## Style Guides

[TSLint](https://github.com/palantir/tslint) is a good tool to check your codestyle.

For the [sim-city-cs project](https://github.com/indodutch/sim-city-cs/) we use [this](https://github.com/ReGIS-org/regis/blob/develop/tslint.json) tslint.json file.
