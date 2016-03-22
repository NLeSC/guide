# Getting started

To learn about JavaScript, view the presentations by [Douglas Crockford](http://en.wikipedia.org/wiki/Douglas_crockford):

* [Crockford on JavaScript](http://www.youtube.com/playlist?list=PL7664379246A246CB)
* [JavaScript: The Good Parts](http://www.youtube.com/watch?v=hQVTIJBZook) 
* JavaScript trilogy:
    * [The JavaScript Programming Language](http://www.youtube.com/watch?v=v2ifWcnQs6M) (1h50m)
    * [Theory of the DOM](http://www.youtube.com/watch?v=Y2Y0U-2qJMs) (1h18m)
    * [Advanced JavaScript](http://www.youtube.com/watch?v=DwYPG6vreJg) (1h07m)

In [this video](http://www.youtube.com/watch?v=c-kav7Tf834) (47m04s), Nicholas Zakas talks about sustainability aspects, such as how to write maintainable JavaScript, how to do JavaScript testing, and good programming style (much needed in JavaScript). Among others, he mentions the following style guides:
* [Google's style guide for JavaScript](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml);
* [Crockford's style guide](http://javascript.crockford.com/code.html) integrates with [JSLint](http://www.jslint.com/), which in turn is available as a plugin for Eclipse.

[These] (http://www.youtube.com/watch?v=yQaAGmHNn9s&list=PLA56F6A06883A2AD8) video tutorials (totaling a couple of hours) are useful if you're just starting with learning the JavaScript language.

To develop a website, usually, JavaScript frameworks are used. For direct manipulation of the HTML DOM tree and HTTP calls [jQuery](http://jquery.com) can be used. [AngularJS](https://angularjs.org) is a framework that separates the view from JavaScript and binds HTML elements to JavaScript code. It can be used for single and multi-page web applications. We advise to use [John Papas style guide](https://github.com/johnpapa/angularjs-styleguide) when making an Angular application.

## Web Standards Curriculum

Another source of information for javascript, is the "web standards curriculum" made by the Web Education Community Group as part of W3C:

http://www.w3.org/community/webed/wiki/Main_Page

In particular, see the page about [Javascript best practices](http://www.w3.org/community/webed/wiki/JavaScript_best_practices)

# Basic workflow

## Starting a project

[Yeoman](http://yeoman.io/) is a tool that generates an initial project setup while adhering to industry best practices. [Here](http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254) is a blog entry that lays out Yeoman's philosophy. In order to run Yeoman, you'll need to install [node.js](http://nodejs.org/) and [node.js package manager](https://www.npmjs.org/). To actually use Yeoman, it needs a generator. We recommend using the [generator-angular](https://github.com/yeoman/generator-angular). Generator-angular creates an Angular application using [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io) for unit testing and [SASS](http://sass-lang.com) (structural layer on top of CSS) for styling webpages. To run JavaScript commands from the command-line, you will need to install some global Javascript libraries. On Ubuntu (14.04) based systems, you can use the following commands to install these packages:
```
sudo apt-get install npm nodejs nodejs-legacy ruby ruby-dev
sudo gem install compass
npm install -g yo generator-angular grunt-cli bower
```

For example:

```bash
mkdir myproject
cd myproject
yo angular appName
....
bower install
grunt serve
```

## Editor

Our editor of choice is Eclipse (Kepler). You'll need to extend it by installing the Aptana Studio plugin. In Eclipse, go to 'Help', then select 'Install new software...', then click the 'Add...' button. Fill in ```http://download.aptana.com/studio3/plugin/install``` for Aptana Studio 3. 

Alternative editors:
* [Brackets](http://brackets.io/?lang=en), [screenshot](https://raw.githubusercontent.com/wiki/NLeSC/kb/attachments/screenshot-brackets.png)
* [Atom](http://atom.io)

## Debugging

* The best debugging tool suite is currently the debugger built into the Google Chrome webbrowser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button). Install the [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) Addon for some more advanced debugging functionality.
* Microsoft has a debugging toolset called 'F12' for their Internet Explorer browser. It offers similar capability as that of Google Chrome, Chromium, and Firefox. 
* In Safari on OS X, press ⌘⌥U.

## Hosting data files

To load data files with JavaScript you can't use any file system URLs due to safety restrictions. You should use a web server.
A simple webserver can be started from the directory you want to host files with `python -m SimpleHTTPServer 8000`, then open the webbrowser to http://localhost:8000

## Documentation

[JSDoc](http://usejsdoc.org/) works similarly to JavaDoc, in that it parses your JavaScript files and automatically generates HTML documentation. [Here](http://usejsdoc.org/#JSDoc3_Tag_Dictionary) is an overview of the tag names you can use to document your code.

## Testing

See [[Testing#javascript]] for unit testing and [[Testing#web-based-tests]] for integration tests.

## Syntax checking

Use JSHint (http://www.jshint.com/) to detect errors and potential problems.

## Showing code examples

Code examples can be stored in Gists in GitHub. [bl.ocks.org](http://bl.ocks.org) allows you to view the resulting page, and serve as a small demo.