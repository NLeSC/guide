Tests can be run on a [[Continuous-Integration]] server.

# Unit testing
Tests where you test a small unit of work. 
Unit tests should be fast. To make unit tests fast try run only in memory, not using any network connections or external files.

## Unit testing frameworks

### Java
* [junit](http://junit.org)

### Javascript
* [Jasmine](http://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code.
* [Karma](http://karma-runner.github.io/), Test runner, runs tests in web browser with code coverage. Use [PhantomJS](http://phantomjs.org/) as headless webbrowser on CI-servers.

### Python
* [unittest](https://docs.python.org/3/library/unittest.html) is a framework awailable in Python Standard Library
* [nose](https://nose.readthedocs.org/en/latest/) extends `unittest` to priovide easier testing functionality. [Intro to nose by Titus Brown](http://ivory.idyll.org/articles/nose-intro.html)
* [pytest](http://pytest.org/latest/) is a full featured Python testing tool, that can be used with `nose`, `unittest` and other Python testing tools.

### R
* [testthat](https://github.com/hadley/testthat) is a testing package by Hadley Wickham. [Testing chapter](http://r-pkgs.had.co.nz/tests.html) of a book [R packages](http://r-pkgs.had.co.nz) describes in detail testing process in R with use of `testthat`.

# Integration testing
Also known as functional testing, end-to-end testing.

## Java integration tests

Use following naming scheme to distinguish unit and integration tests:
* Unit tests: **/Test*.java, **/*Test.java, and **/*TestCase.java
* Integration tests: **/IT*.java, **/*IT.java, and **/*ITCase.java

## Web based tests
To interact with web-browsers use [Selenium](http://docs.seleniumhq.org/).

Test with 
* Local web browser
* Web browsers hosted by [Sauce Labs](https://saucelabs.com/), it has a matrix of web-browsers and Operating Systems. Free for open source projects.

### AngularJS applications

[AngularJS](http://angularjs.org/) applications can be tested with [Protractor](http://angular.github.io/protractor). Protractor uses Selenium.

# More information

* On http://artofunittesting.com/ is the 'Unit Testing Best Practices' and other presentations.
* [Guide: Writing Testable Code](http://misko.hevery.com/code-reviewers-guide/)