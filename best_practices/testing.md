# Testing

Writing tests takes time, so why should you do it? Tests save time later on, and increase the quality of the software. More specifically:

* Makes you more confident that your software is correct.
* It saves time in finding bugs, the tests give an indication where the bug is.
* Makes it easier to make changes to the code, the tests will catch changes to way the software functions.
* Tests communicate how software is intended to function.

These points do not apply to prototype / throwaway phase.

## unit tests

* [unit tests](https://en.wikipedia.org/wiki/Unit_testing)
* [Guide: Writing Testable Code](https://raw.githubusercontent.com/jptiancai/Guide-Writing-Testable-Code/master/Guide-Writing%20Testable%20Code.pdf)

## Continuous integration

To run testing, perform code quality analysis and build artifacts a Continuous Integration server can be used. The build will be performed every git push and pull request. Using a CI server will help with `it works for me` problems.
The Netherlands eScience Center uses continuous integration services as much as possible when creating code.

[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI)

CI meaning: compile, unit test, integration test, quality analysis etc.
Once there is some build process established and tests set up, CI should be configured too.
It will save you a lot of time on debugging and allow for much quicker problem diagnosis.

### Online services for continuous integration

- [AppVeyor](https://www.appveyor.com/)
- [CircleCI](https://circleci.com/)
- [GitHub Actions](https://github.com/features/actions)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)

The Netherlands eScience Center public repositories should be built with a
free public continous integration service.

### Nightly builds

Most CI builds are triggered by a git push, but sometimes the repository must be built every night.
Possible reasons for nightly builds:

* Make sure the repository stays working even if there are no changes pushed to the repository, but it's dependencies are changing possibly breaking the code in the repository.
* The build performs an action that needs to be performed daily like updating a cache.

For triggering nightly builds in GitHub Actions [Cron jobs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onschedule) can be used.

### Polling tools

All major CI services support some form of cctray.xml feed. This feed can be read by polling tools to automatically keep an eye on your project builds. For instance, [BuildNotify](https://anaynayak.github.io/buildnotify/), [CCMenu](http://ccmenu.org/) and [CCTray](http://cruisecontrolnet.org/projects/ccnet/wiki/CCTray_Download_Plugin) give you a tray icon that turns red when a build fails.

## Code coverage

Code coverage is a measure which describes how much of the source code is exercised by the test suite.
At the Netherlands eScience Center we require minimum of 70% coverage.

Setting up code coverage for a repository depends on the programming language, see the [language specific guides](language_guides/languages_overview.md) for setup instructions.

The code coverage should be performed when a test suite is run as part of Continuous Integration build job.
The code coverage results can be published on code coverage and/or [code quality services](https://the-turing-way.netlify.app/reproducible-research/code-quality/code-quality-style.html#online-services-providing-software-quality-checks).

### Code coverage services

The publishing of the code coverage can be performed during a Continuous Integration build job.
The code coverage service offers a visualization of the coverage and a metric which can be displayed as a badge/shield icon on the repository website.
See the [language specific guides](language_guides/languages_overview.md) which code coverage services are available and preferred for that language.

Code coverage services support many languages and a usually free for Open Source projects.
Below is a short list of services and their strengths.

#### [Codecov](https://codecov.io)

Shows unified coverage and separate coverage for [build matrix](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) e.g. different Python versions.
For example project see https://codecov.io/gh/xenon-middleware/xenon, with a Java 7/8 and Linux/Windows/OSX OS build matrix.

#### [Coveralls](https://coveralls.io)

More popular then Codecov.
For example project see https://coveralls.io/r/NLeSC/MAGMa

## End2end tests

For (web) user interfaces. [example with protractor and angular](https://angular.github.io/protractor/#/)

Once the web page has any interface, e2e tests should be implemented.

## Dependencies tracking

[Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates) or other service depending on codebase language.

Checking for dependency updates should be done regularly. It can save a lot of time,
avoiding code dependent on deprecated functionality.
