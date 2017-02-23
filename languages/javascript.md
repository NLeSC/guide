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

To develop a website, usually, JavaScript frameworks are used. 
For direct manipulation of the HTML DOM tree and HTTP calls [jQuery](http://jquery.com) can be used. 
[AngularJS](https://angularjs.org) is a framework that separates the view from JavaScript and binds HTML elements to JavaScript code. 
It can be used for single and multi-page web applications. 
We advise to use [John Papas style guide](https://github.com/johnpapa/angularjs-styleguide) when making an Angular application.

## Web Standards Curriculum

Another source of information for javascript, is the "web standards curriculum" made by the Web Education Community Group as part of W3C:

http://www.w3.org/community/webed/wiki/Main_Page

In particular, see the page about [Javascript best practices](http://www.w3.org/community/webed/wiki/JavaScript_best_practices)

# Basic workflow

## Starting a project

[Yeoman](http://yeoman.io/) is a tool that generates an initial project setup while adhering to industry best practices. 
[Here](http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254) is a blog entry that lays out Yeoman's philosophy. 
In order to run Yeoman, you'll need to install [node.js](http://nodejs.org/) and [node.js package manager](https://www.npmjs.org/). 
To actually use Yeoman, it needs a generator. We recommend using the [generator-angular](https://github.com/yeoman/generator-angular). 
``generator-angular`` creates an Angular application using [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io) for unit testing and [SASS](http://sass-lang.com) (structural layer on top of CSS) for styling webpages. 
To run JavaScript commands from the command-line, you will need to install some global Javascript libraries. 
On Ubuntu (14.04) based systems, you can use the following commands to install these packages:

```
# system packages (Ubuntu/Debian)
sudo apt-get install npm
#
sudo apt-get install nodejs
#
sudo apt-get install nodejs-legacy
#
sudo apt-get install ruby
#
sudo apt-get install ruby-dev

# Ruby package
sudo gem install compass

# Node packages
npm install -g yo
#
npm install -g generator-angular
#
npm install -g grunt-cli
#
npm install -g bower
```

For example:

```bash
# make a new directory 'myproject'
mkdir myproject
# change directory into it
cd myproject
# call yeoman (yo) and create the scaffolding for an
# angular application called appName
yo angular appName
....
# download and install the packages listed in bower.json
bower install
# serve the web application (look in the Gruntfile.js for 
# details on where it's served)
grunt serve
```

## Editor

These are some good JavaScript editors:

* JetBeans [WebStorm](https://www.jetbrains.com/webstorm/)
* Github [Atom](http://atom.io)
* Microsoft [Visual Studio Code](https://code.visualstudio.com)
* Adobe [Brackets](http://brackets.io/?lang=en)

The best JavaScript editors are currently WebStorm and Visual Studio Code. Atom can have some performance problems, especially with larger files.


## Debugging

In web development, debugging is typically done in the browser. 

* The best debugging tool suite is currently the debugger built into the Google Chrome webbrowser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button) or install the [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) Addon for some more advanced debugging functionality.
* Microsoft has a debugging toolset called 'F12' for their Internet Explorer and Edge browsers. It offers similar capability as that of Google Chrome, Chromium, and Firefox. 
* In Safari on OS X, press ⌘⌥U.

Sometimes the JavaScript code in the browser is not an exact copy of the code you see in your development environment, for example because the original source code is minified/uglified or transpiled before it's loaded in the browser. 
All major browsers can now deal with this through so-called _source maps_, which instruct the browser which symbol/line in a javascript file corresponds to which line in the human-readable source code. 
Look for the 'create sourcemaps' option when using minification/uglification/transpiling tools.

## Hosting data files

To load data files with JavaScript you can't use any file system URLs due to safety restrictions.
You should use a web server (which may still serve files that are local). 
A simple webserver can be started from the directory you want to host files with:

```bash
# Python 2
python -m SimpleHTTPServer 8000
# Python 3
python -m http.server 8000
```
Then open the webbrowser to http://localhost:8000.

## Documentation

[JSDoc](http://usejsdoc.org/) works similarly to JavaDoc, in that it parses your JavaScript files and automatically generates HTML documentation. [Here](http://usejsdoc.org/#JSDoc3_Tag_Dictionary) is an overview of the tag names you can use to document your code.

## Testing

* [Jasmine](http://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code.
* [Karma](http://karma-runner.github.io/), Test runner, runs tests in web browser with code coverage. Use [PhantomJS](http://phantomjs.org/) as headless webbrowser on CI-servers.
* [Tape](https://github.com/substack/tape), a minimal testing framework that helps remove some of the black-box approach of some of the other frameworks.

## Web based tests
To interact with web-browsers use [Selenium](http://docs.seleniumhq.org/).

Test with
* Local web browser
* Web browsers hosted by [Sauce Labs](https://saucelabs.com/), it has a matrix of web-browsers and Operating Systems. Free for open source projects.

## AngularJS applications

[AngularJS](http://angularjs.org/) applications can be tested with [Protractor](http://angular.github.io/protractor). Protractor uses Selenium.

## Syntax checking

Use JSHint (http://www.jshint.com/) to detect errors and potential problems.

## Showing code examples

Code examples can be stored in Gists in GitHub. [bl.ocks.org](http://bl.ocks.org) allows you to view the resulting page, and serve as a small demo.
There's also [jsfiddle](https://jsfiddle.net/), which shows you a live preview of your web page while you fiddle with the underlying HTML, JavaScript and CSS code.
The JSFiddle result is not stored, however.

## Style Guides

* [general front dev guidelines](https://github.com/bendc/frontend-guidelines)
* [AngularJS styleguide](https://github.com/johnpapa/angular-styleguide)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Code quality analysis tools and services

* [Code climate](https://codeclimate.com) can analyze Javascript (and Ruby, PHP). For example project see https://codeclimate.com/github/NLeSC/PattyVis
* [Codacy](https://www.codacy.com) can analyze Java, Python and Javascript (and CSS, PHP, Scala). The analysis for Java and Python is not as good as for Javascript. The analysis is quite slow, as it analyzes each past commit. For example project see https://www.codacy.com/public/sverhoeven/PattyVis/dashboard
* [Coveralls](https://coveralls.io) can show code coverages over time for many languages including Java, Python and Javascript. For example project see https://coveralls.io/r/NLeSC/MAGMa
* [Codecov](https://codecov.io) can show code coverages for many languages including Java, Python and Javascript. Shows unified coverage and separate coverage for matrix builds. For example project see https://codecov.io/github/NLeSC/Xenon


# TypeScript

http://www.typescriptlang.org

Typescript is a typed superset of JavaScript which compiles to plain JavaScript.

## Getting Started

To learn about TypeScript the following resources are available:

* [youtube](http://www.youtube.com/playlist?list=PLyJiOytEPs4d9QUQHHSuY3n3nBmkBuqro): tutorials playlist about TypeScript
* [tutorial](http://www.typescriptlang.org/Tutorial) from Microsoft's TypeScript website  
* [blog post](http://www.aaron-powell.com/posts/2012-10-03-typescript-source-maps.html) about how TypeScript can be used with the Google Chrome/Chromium debuggers (and [presumably](http://blog.oio.de/2014/04/04/internet-explorer-11-source-map-based-debugging/) Firefox, and Internet Explorer) through the use of so-called 'source maps'. (Follow [this](http://www.codeproject.com/Articles/649271/How-to-Enable-Source-Maps-in-Firefox) link to set up source mapping for Firefox, also useful for debugging minified JavaScript code).
* [blog post](http://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) that supposedly is the definitive guide to TypeScript
* [TypeScript Language Specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

## Basic Workflow

### Quickstart

To install most common TypeScript dependencies run:

```shell
# system packages (Ubuntu/Debian)
sudo apt-get install npm
#
sudo apt-get install nodejs
#
sudo apt-get install nodejs-legacy
#
sudo apt-get install ruby
#
sudo apt-get install ruby-dev

# Ruby package
sudo gem install compass

# Node packages
npm install -g typescript
#
npm install -g typings
#
npm install -g bower
#
npm install -g nodemon
#
npm install -g http-server
```

### Starting a project

Similar to JavaScript a new project could be created using [Yeoman](http://yeoman.io/). 
For instance [Fountainjs](http://fountainjs.io/) is a generator that can create a project that uses TypeScript.

```shell
#
npm install -g yo
#
npm install -g generator-fountain-webapp
#
npm install -g bower
```

```shell
#
yo fountain-webapp
```

However, most of these generators use either ``gulp`` or ``grunt`` as a build system, while for most cases ``npm`` works just fine by defining a number of npm scripts in the package.json.
See [this blog post](http://substack.net/task_automation_with_npm_run) for more information.

### Dealing with Types

In TypeScript, variables are typed and these types are checked.
This implies that when using frameworks, the types of these frameworks need to be installed.
The easiest way to make sure you have the correct types for your framework is by using the [typings tool](https://github.com/typings/typings), which can be installed using ``npm``.

```shell
npm install -g typings
```

This tool works similar to bower and npm in that you can search for typings and install them.
For example say we want to use the ``angular-ui-bootstrap`` package which we installed using ``bower``:
```shell
bower install angular-bootstrap --save
```

To be able to use its functionality in TypeScript we need to install the typings. 
We can search for the correct package:

```shell
> typings search angular-ui-bootstrap
Viewing 1 of 1

NAME                 SOURCE HOMEPAGE                                DESCRIPTION VERSIONS UPDATED                 
angular-ui-bootstrap dt     https://github.com/angular-ui/bootstrap             1        2016-07-05T22:14:53.000Z
```

And install it with:

```shell
typings install angular-ui-bootstrap --global --save
```

The ``--global`` flag is needed as it is a framework package.
The ``--save`` flag saves this installation to the typings.json file.
The typings.json file can be used to quickly install all typings when cloning the repository. 


### Development Environment

These are some good TypeScript editors:

* JetBeans [WebStorm](https://www.jetbrains.com/webstorm/)
* Github [Atom](http://atom.io) with the ``atom-typescript`` Atom package.
* Microsoft [Visual Studio Code](https://code.visualstudio.com)
* Adobe [Brackets](http://brackets.io/?lang=en)

The best JavaScript editors are currently WebStorm and Visual Studio Code. Atom can have some performance problems.



* JetBeans [WebStorm](https://www.jetbrains.com/webstorm/)
* Github [Atom](http://atom.io) with the ``atom-typescript`` Atom package when using TypeScript
* Microsoft [Visual Studio Code](https://code.visualstudio.com)
* Adobe [Brackets](http://brackets.io/?lang=en), [screenshot](https://raw.githubusercontent.com/wiki/NLeSC/kb/attachments/screenshot-brackets.png)


### Debugging


In web development, debugging is typically done in the browser. 

* The best debugging tool suite is currently the debugger built into the Google Chrome webbrowser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button) or install the [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) Addon for some more advanced debugging functionality.
* Microsoft has a debugging toolset called 'F12' for their Internet Explorer and Edge browsers. It offers similar capability as that of Google Chrome, Chromium, and Firefox. 
* In Safari on OS X, press ⌘⌥U.

Sometimes the JavaScript code in the browser is not an exact copy of the code you see in your development environment, for example because the original source code is minified/uglified or transpiled before it's loaded in the browser. 
All major browsers can now deal with this through so-called _source maps_, which instruct the browser which symbol/line in a javascript file corresponds to which line in the human-readable source code. 
Look for the 'create sourcemaps' option when using minification/uglification/transpiling tools.

See [this blog post](http://www.aaron-powell.com/posts/2012-10-03-typescript-source-maps.html) for more information.

### Documentation

It seems that [TypeDoc](http://typedoc.io/) is a good tool to use.
Alternative could be [TSdoc](https://www.npmjs.com/package/tsdoc)

### Style Guides

[TSLint](https://github.com/palantir/tslint) is a good tool to check your codestyle.

For the [sim-city-cs project](https://github.com/indodutch/sim-city-cs/) we use the following tslint.json file:

```code
{
  "rules": {
    "class-name": true,
    "curly": true,
    "eofline": true,
    "forin": false,
    "indent": [true, "spaces"],
    "interface-name": "never-prefix",
    "jsdoc-format": true,
    "label-position": true,
    "label-undefined": true,
    "max-line-length": [true, 200],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-key": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-string-literal": false,
    "trailing-comma": true,
    "no-trailing-whitespace": true,
    "no-unused-variable": [true, {"ignore-pattern": "^_"}],
    "no-unreachable": true,
    "no-use-before-declare": true,
    "one-line": [true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "quotemark": [true, "single"],
    "radix": true,
    "semicolon": true,
    "triple-equals": [true, "allow-null-check"],
    "variable-name": [true, "allow-leading-underscore"],
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator"
    ]
  }
}
```
