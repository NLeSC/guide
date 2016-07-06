# Testing

These points do not apply to prototype / throwaway phase.

## unit tests

* [unit tests](https://en.wikipedia.org/wiki/Unit_testing)
* [Guide: Writing Testable Code](http://misko.hevery.com/code-reviewers-guide/)

## Continuous integration

To run testing, perform code quality analysis and build artifacts a Continuous Integration server can be used. The build will be performed every git push and pull request. Using a CI server will help with `it works for me` problems.
NLeSC uses continuous integration services as much as possible when creating code.

[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI), public on [Travis](https://travis-ci.org/)

CI meaning: compile, unit test, integration test, quality analysis etc.
Once there is some build process established and tests set up, CI should be configured too.
It will save you a lot of time on debugging and allow for much quicker problem diagnosis.

### Travis-CI

The NLeSC public repositories should be build with [Travis-CI](https://travis-ci.org).
Travis-CI is free for Open Source projects.
A Github repository can be added to Travis-CI by a Github user with admin right on the repository.
At the moment Travis-CI performs builds in Ubuntu and OS X operating systems.

[Getting started with Travis CI](http://docs.travis-ci.com/user/getting-started/)

PS. If you want to get mails from Travis-CI then you have to login at https://travis-ci.org

### AppVeyor

To build repositories inside the Microsoft Windows operation system use [AppVeyor](https://www.appveyor.com/).
AppVeyor is free for Open Source projects.

### Jenkins-CI

At the NLeSC we run a [Jenkins-CI](http://jenkins-ci.org/) instance which is behind a login at https://ci.esciencecenter.nl .
It is used mostly for private repositories.

### Nightly builds

Most CI builds are triggered by a git push, but sometimes the repository must be build every night.
Possible reasons for nightly builds:

* Make sure the repository stays working even if there are no changes pushed to the repository, but it's dependencies are changing possibly breaking the code in the repository.
* The build performs an action that needs to be performed daily like updating a cache.

For triggering nightly builds in Travis-CI the https://nightli.es/ tool can be used.

## Code coverage

Code coverage is a measure which describes how much of the source code is exercised by the test suite.
At the NLeSC we require minimum of 70% coverage.

Setting up code coverage for a repository depends on the programming language, see the [language specific guides](../languages/languages_overview.html) for setup instructions.

The code coverage should be performed when a test suite is run as part of Continuous Integration build job.
The code coverage results can be published on code coverage and/or [code quality services](code_quality.html#Software quality improvement tools).

### Code coverage services

The publishing of the code coverage can be performed during a Continuous Integration build job.
The code coverage service offers a visualization of the coverage and a metric which can be displayed as a badge/shield icon on the repository website.
See the [language specific guides](../languages/languages_overview.html) which code coverage services are available and preferred for that language.

Code coverage services support many languages and a usually free for Open Source projects.
Below is a short list of services and their strengths.

#### [Codecov](https://codecov.io)

Shows unified coverage and separate coverage for [build matrix](https://docs.travis-ci.com/user/customizing-the-build/#Build-Matrix) e.g. different Python versions.
For example project see https://codecov.io/gh/NLeSC/Xenon, with a Java 7/8 and Linux/Windows/OSX OS build matrix.

#### [Coveralls](https://coveralls.io)

More popular then Codedov.
For example project see https://coveralls.io/r/NLeSC/MAGMa

## End2end tests

For (web) user interfaces. [example with protractor and angular](https://angular.github.io/protractor/#/)

Once the web page has any interface, e2e tests should be implemented.

## Dependencies tracking

[VersionEye](https://www.versioneye.com/),
[David](https://david-dm.org/) or other service depending on codebase language.

Checking for dependency updates should be done regularly. It can save a lot of time,
avoiding code dependent on deprecated functionality.
