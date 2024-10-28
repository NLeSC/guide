# Getting started

*Page maintainer: Ewan Cahen* [@ewan-escience](https://github.com/ewan-escience)


To learn about JavaScript, view the presentations by [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford):

* [Crockford on JavaScript](https://www.youtube.com/playlist?list=PL7664379246A246CB)
* [JavaScript: The Good Parts](https://www.youtube.com/watch?v=hQVTIJBZook)
* JavaScript trilogy:
    * [The JavaScript Programming Language](https://www.youtube.com/watch?v=v2ifWcnQs6M) (1h50m)
    * [Theory of the DOM](https://www.youtube.com/watch?v=Y2Y0U-2qJMs) (1h18m)
    * [Advanced JavaScript](https://www.youtube.com/watch?v=DwYPG6vreJg) (1h07m)

In [this video](https://www.youtube.com/watch?v=c-kav7Tf834) (47m04s), Nicholas Zakas talks about sustainability aspects, such as how to write maintainable JavaScript, how to do JavaScript testing, and good programming style (much needed in JavaScript).
Among others, he mentions the following style guides:

* [Google's style guide for JavaScript](https://google.github.io/styleguide/jsguide.html);
* [Crockford's style guide](https://www.crockford.com/code.html) integrates with [JSLint](https://www.jslint.com/), which in turn is available as a plugin for Eclipse.
* Zakas has also written [an excellent book](https://www.oreilly.com/library/view/maintainable-javascript/9781449328092/) on writing maintainable JavaScript, also within the context of working in teams. The appendix contains a style guide with explanation.

[These](https://www.youtube.com/playlist?list=PLA56F6A06883A2AD8) video tutorials (totaling a couple of hours) are useful if you're just starting with learning the JavaScript language.

Another source of information for JavaScript is the  MDN Web Docs

https://developer.mozilla.org/en-US/docs/Learn

Additionally, see the W3Schools page about [JavaScript best practices](https://www.w3schools.com/js/js_best_practices.asp)

# Frameworks

Before you pick a framework, you should first consider what you are trying to build.

- If you're building a (more traditional) website with mostly static content, like an info page for an event or a blog, whose content doesn't adapt to the visitor, consider using a [static site generator](https://jamstack.org/generators/) like [Jekyll](https://jekyllrb.com/) or [Hugo](https://gohugo.io/) or [Docusaurus](https://docusaurus.io/) for writing documentation. An advantage of this is that static sites can be hosted on [GitHub for free](https://pages.github.com/), which uses Jekyll by default (but you can use other static site generators as well).
- If you're building a website that is not very interactive, but that many people have to edit, and when a static site generator is too technical, consider using [WordPress](https://wordpress.org/). Many hosting providers support WordPress out of the box.
- When you need light interactivity, the options above can be combined with libraries like [jQuery](https://jquery.com/), [Alpine.js](https://alpinejs.dev/), [htmx](https://htmx.org/) or you can write the JavaScript yourself.
- When you want to build a website that has high interactivity with its users, something you would call an "application" rather than a "website", consider using [htmx](https://htmx.org/) or one of the JavaScript frameworks below.

Currently, the most popular frameworks are (ordered by popularity according to the [StackOverflow 2024 Developer Survey](https://survey.stackoverflow.co/2024/technology#1-web-frameworks-and-technologies))

* [React](https://react.dev/)
* [Angular](https://angular.dev/)
* [Vue.js](https://vuejs.org/)
* [Svelte](https://svelte.dev/)
* [SolidJS](https://www.solidjs.com/)

A good video summary on the history of these frameworks and the problems they try to solve can be found [here](https://www.youtube.com/watch?v=EPir6uxr1o8).

## React

[React](https://react.dev/) is a framework which can used to create interactive User Interfaces by combining components. It is developed by Facebook. It is by far the most popular framework, resulting in a huge choice of libraries and a lot of available documentation. Contrary to most other frameworks, React apps are typically written in [JSX](https://react.dev/learn/writing-markup-with-jsx) instead of plain HTML, CSS and JS.

Where other frameworks like Angular and Vue.js include rendering, routing and, state management functionality, React only does rendering, so other libraries must be used for routing and state management.
[Redux](https://redux.js.org/) can be used to let state changes flow through React components. [React Router](https://reactrouter.com/) can be used to navigate the application using URLs. Or you can use a so-called "[meta-framework](https://prismic.io/blog/javascript-meta-frameworks-ecosystem)" like [Next.js](https://nextjs.org/).

To create a React application, the official documentation recommends to [start with a meta-framework](https://react.dev/learn/start-a-new-react-project). Alternatively, you can use the tool [Create React App](https://create-react-app.dev/), optionally [with TypeScript](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app).

## Angular

[Angular](https://angular.dev/) is a application framework by Google written in [TypeScript](https://www.typescriptlang.org/). It is a full-blown framework, with many features included. It is therefore more used in enterprises and probably overkill for your average scientific project. Read more about what Angular is [in the documentation](https://angular.dev/overview).

To create a Angular application see the [installation docs](https://angular.dev/installation).

Angular also has a meta-framework called [Analog](https://analogjs.org/).

## Vue.js

[Vue.js](https://vuejs.org/) is an open-source JavaScript framework for building user interfaces. Read about the use cases for Vue and reasons to use it [in their introduction](https://vuejs.org/guide/introduction.html).

To create a Vue application, read the [quick start](https://vuejs.org/guide/quick-start). It also has info on using [TypeScript with Vue](https://vuejs.org/guide/typescript/overview).

A meta-framework for Vue is [Nuxt](https://nuxt.com/).

## Svelte

Svelte is a UI framework, that differs with most other frameworks in that is uses a compiler before shipping JavaScript to the client. Svelte applications are written in HTML, CSS and JS. Read more about Svelte in their [overview](https://svelte.dev/docs/svelte/overview).

In their [documentation](https://svelte.dev/docs/svelte/getting-started), they recommend to use their meta-framework [SvelteKit](https://svelte.dev/docs/kit/introduction) to create a Svelte application. It also [supports TypeScript](https://svelte.dev/docs/svelte/typescript).

## Solid.js

A UI framework that focuses on performance and being developer friendly. Like React, it uses [JSX](https://docs.solidjs.com/concepts/understanding-jsx). Read more about Solid [here](https://docs.solidjs.com/).

To create a Solid application, check out the [quick start](https://docs.solidjs.com/quick-start). They also [support TypeScript](https://docs.solidjs.com/configuration/typescript).

Solid has a meta-framework called [SolidStart](https://start.solidjs.com/).

# JavaScript outside of the browser

Most JavaScript is run in web browsers, but if you want to run it outside of a browser (e.g. as a server or to run a script locally), you'll need a JavaScript **runtime**. These are the main runtimes available:

* [Node.js](https://nodejs.org) is the most used runtime, mainly for being the only available runtime for a long time. This gives the advantage that there is a lot of documentation available (official and unofficial, e.g. forums) and that many tools are available for Node.js. It comes with a [package manager (npm)](https://www.npmjs.com/) that allows you to install packages from a huge library. Its installation instructions can be found [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
* [Deno](https://deno.com/) can be seen as a successor to Node.js and tries to improve on it in a few ways, most notably:
  * [built-in support](https://docs.deno.com/runtime/fundamentals/typescript/) for TypeScript
  * a better [security model](https://docs.deno.com/runtime/fundamentals/typescript/)
  * built-in tooling, like a [linter and formatter](https://docs.deno.com/runtime/fundamentals/linting_and_formatting/)
  * [compiling](https://docs.deno.com/runtime/reference/cli/compiler/) to standalone executables
  
Its installation instructions can be found [here](https://docs.deno.com/runtime/getting_started/installation/)
* [Bun](https://bun.sh/), the youngest runtime of the three. Its focus is on speed, reduced complexity and enhanced developer productivity (read more [here](https://bun.sh/docs)). Just like Deno, it comes with [built-in TypeScript support](https://bun.sh/docs/runtime/typescript), can [compile to standalone executables](https://bun.sh/docs/bundler/executables) and it aims to be fully [compatible with Node.js](https://bun.sh/docs/runtime/nodejs-apis). Its installation instructions can be found [here](https://bun.sh/docs/installation).

A more comprehensive comparison can be found [in this guide](https://zerotomastery.io/blog/deno-vs-node-vs-bun-comparison-guide/).

## Which runtime to choose?

To answer this question, you should consider what is important for you and your project.

Choose Node.js if:

* you need a stable, mature and a well established runtime with a large community around it;
* you need to use dependencies that should most likely "just work";
* you cannot convince the people you work with to install something else;
* you don't need any particular feature of any of its competitors.

Choose Deno if:

* you want a relatively mature runtime with a lot of features built in;
* you want out-of-the-box TypeScript support;
* you like its security model;
* you want a complete package with a linter and formatter included;
* you don't mind spending some time if something does not work directly.

Choose Bun if:

* you are willing to take a risk using a relatively new runtime;
* you want out-of-the-box TypeScript support;
* you want to use one of Bun's particular features;
* you need maximum performance (though you should benchmark for your use case first and consider using a different programming language).

# Editors and IDEs

These are some good JavaScript editors:

* [WebStorm](https://www.jetbrains.com/webstorm/) by JetBrains. It is free (as in monetary cost) for [non-commercial use](https://www.jetbrains.com/legal/docs/toolbox/license_non-commercial/); otherwise you have to buy a licence. Most of its features are also available in other IDEs of JetBrains, like [IntelliJ IDEA](https://www.jetbrains.com/idea/) ultimate, [PyCharm](https://www.jetbrains.com/pycharm/) professional and [Rider](https://www.jetbrains.com/rider/). You can compare the products of JetBrains [here](https://www.jetbrains.com/products/compare/?product=webstorm&product=idea). Note that the free version of WebStorm will [collect data](https://blog.jetbrains.com/blog/2024/10/24/webstorm-and-rider-are-now-free-for-non-commercial-use/#anonymous-data-collection) anonymously, without the option to disable it. WebStorm comes with a lot of [functionality included](https://www.jetbrains.com/webstorm/features/), but also gives access to a [Marketplace of plugins](https://plugins.jetbrains.com/).
* [Visual Studio Code](https://code.visualstudio.com), an open source and free (as in monetary cost) editor by Microsoft. By default, it collects [telemetry data](https://code.visualstudio.com/docs/getstarted/telemetry), but that can be [disabled](https://code.visualstudio.com/docs/getstarted/telemetry#_disable-telemetry-reporting). VSCode has a [limited feature set](https://code.visualstudio.com/docs/editor/whyvscode) out of the box, which can be enhanced with [extensions](https://marketplace.visualstudio.com/vscode).

# Debugging

In web development, debugging is typically done in the browser.

* The best debugging tool suite is currently the debugger built into the Google Chrome web browser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button) or install the [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools).
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
Then open the web browser to &#104;ttp://localhost:8000.

# Documentation

[JSDoc](https://jsdoc.app/) works similarly to JavaDoc, in that it parses your JavaScript files and automatically generates HTML documentation.

# Testing

* [Jasmine](https://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code.
* [Karma](https://karma-runner.github.io/latest/index.html), Test runner, runs tests in web browser with code coverage. Use [PhantomJS](https://phantomjs.org/) as headless web browser on CI-servers.
* [Tape](https://github.com/substack/tape), a minimal testing framework that helps remove some of the black-box approach of some of the other frameworks.
* [Jest](https://github.com/facebook/jest), a test framework from Facebook which is integrated into the [Create React App](https://github.com/NLeSC/create-react-app)

## Web based tests

To interact with web-browsers use [Selenium](https://www.selenium.dev/).

Test with
* Local web browser
* Web browsers hosted by [Sauce Labs](https://saucelabs.com/), it has a matrix of web-browsers and Operating Systems. Free for open source projects.

# Coding style

See [general front dev guidelines](https://github.com/bendc/frontend-guidelines) and [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Use a linter like [eslint](https://eslint.org/) to detect errors and potential problems.

# Showing code examples

You can use [jsfiddle](https://jsfiddle.net/), which shows you a live preview of your web page while you fiddle with the underlying HTML, JavaScript and CSS code.

# Code quality analysis tools and services

* [Code climate](https://codeclimate.com) can analyze JavaScript (and Ruby, PHP). For example project see https://codeclimate.com/github/NLeSC/PattyVis
* [Codacy](https://www.codacy.com) can analyze [many different languages](https://docs.codacy.com/getting-started/supported-languages-and-tools/) using open source tools.
* [SonarCloud](https://sonarcloud.io) is an open platform to manage code quality which can also show code coverage and count test results over time.
Can analyze Java (best supported), C, C++, Python, JavaScript and TypeScript. For example project see https://sonarcloud.io/dashboard?id=e3dchem%3Amolviewer

# TypeScript

https://www.typescriptlang.org/

TypeScript is a typed superset of JavaScript which compiles to plain JavaScript. TypeScript adds static typing to JavaScript, which makes it easier to scale up in people and lines of code.

At the Netherlands eScience Center we prefer TypeScript to JavaScript as it will lead to more sustainable software.

This section highlights the differences with JavaScript. For topics that seem to be missing, like IDEs, code style etc., see the respective JavaScript section.

## Getting Started

To learn about TypeScript, the following resources are available:

* Official [TypeScript documentation](https://www.typescriptlang.org/docs/) and [tutorial](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Single video tutorial](https://www.youtube.com/watch?v=d56mG7DezGs) and [playlist tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
* Tutorials on debugging TypeScript in [Chrome](https://blog.logrocket.com/how-to-debug-typescript-chrome/) and [Firefox](https://hacks.mozilla.org/2019/09/debugging-typescript-in-firefox-devtools/). If you are using a framework, consult the documentation of that framework for additional ways of debugging
* [The Definitive TypeScript 5.0 Guide](https://www.sitepen.com/blog/update-the-definitive-typescript-guide)
* The [W3Schools TypeScript tutorial](https://www.w3schools.com/typescript/index.php)

## Quickstart

To install TypeScript compiler run:

```shell
npm install -g typescript
```

## Dealing with Types

In TypeScript, variables are typed and these types are checked.
This implies that when using libraries, the types of these libraries need to be installed.
More and more libraries ship with type declarations in them so they can be used directly. These libraries will have a "typings" key in their package.json.
When a library does not ship with type declarations then the libraries `@types/<library-name>` package must be installed using npm:

```shell
npm install --save-dev @types/<library-name>
```

For example say we want to use the ``react`` package which we installed using ``npm``:
```shell
npm install react --save
```

To be able to use its functionality in TypeScript we need to install the typings.

Install it with:

```shell
npm install --save-dev @types/react
```

The ``--save-dev`` flag saves this installation to the package.json file as a development dependency.
Do not use ``--save`` for types because a production build will have been transpiled to JavaScript and has no use for TypeScript types.

## Debugging

In web development, debugging is typically done in the browser.
TypeScript cannot be run directly in the web browser, so it must be transpiled to JavaScript. To map a breakpoint in the browser to a line in the original TypeScript file [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) are required. Most frameworks have a project build system which generate source maps.

## Documentation

It seems that [TypeDoc](https://typedoc.org/) is a good tool to use.
