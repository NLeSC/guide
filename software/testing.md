# [Testing](#testing)

These points do not apply to prototype / throwaway phase.

## unit tests

* [unit tests](https://en.wikipedia.org/wiki/Unit_testing)
* [Guide: Writing Testable Code](http://misko.hevery.com/code-reviewers-guide/)

## [continuous integration](#continuous-integration)

To run testing, perform code quality analysis and build artifacts a Continuous Integration server can be used. The build will be performed every git push and pull request. Using a CI server will help with `it works for me` problems.
NLeSC uses continuous integration services as much as possible when creating code.

[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI), public on [Travis](https://travis-ci.org/)

CI meaning: compile, unit test, integration test, quality analysis etc.
Once there is some build process established and tests set up, CI should be configured too.
It will save you a lot of time on debugging and allow for much quicker problem diagnosis.

### Travis-CI

The NLeSC public repositories should be build with [Travis-CI](https://travis-ci.org). Travis-CI is free for Open Source projects. A repo can be added from Github to Travis-CI by a Github administrator.

[Getting started with Travis CI](http://docs.travis-ci.com/user/getting-started/)

PS. If you want to get mails from Travis-CI then you have to login at https://travis-ci.org

### Jenkins-CI

At the NLeSC we run a [Jenkins-CI](http://jenkins-ci.org/) instance which is behind a login at https://ci.esciencecenter.nl .
It is used mostly for private repositories.

Features of jobs:
- compile project.
- runs tests.
- generates documentation.
- triggers by GitHub commit.
- notifications to commit author when unstable.
- when applicable launches a SonarQube analysis, which can be viewed at https://sonar.esciencecenter.nl .

## [continuous code coverage](#continuous-code-coverage)

and code quality metrics public, minimum 70% coverage required

It is easy to generate those automatically, once the test are setup, with use of external services.

## [end2end tests](#e2e-tests)

For (web) user interfaces. [example with protractor and angular](https://angular.github.io/protractor/#/)

Once the web page has any interface, e2e tests should be implemented.

## [dependencies tracking](#dependencies-tracking)

[VersionEye](https://www.versioneye.com/),
[David](https://david-dm.org/) or other service depending on codebase language.

Checking for dependency updates should be done regularly. It can save a lot of time,
avoiding code dependent on deprecated functionality.


