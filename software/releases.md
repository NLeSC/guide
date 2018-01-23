## Release

Releases are a way to mark or point to a particular milestone in software development.
[Apache foundation](http://www.apache.org/) describes their [release policy](http://www.apache.org/dev/release.html).

### Semantic versioning

[Semantic Versioning (semver)](http://semver.org/) is the most accepted and used way to add numbers to software versions.
It is a way of communicating impact of changes in the software on users.

A version number consists of three numbers: major, minor, and patch, separated by a dot: _2.0.0_.
After some changes to the code, you would do a new release, and increment the version number.
Increment the:
 * MAJOR version when you make incompatible API changes,
 * MINOR version when you add functionality in a backwards-compatible manner, and
 * PATCH version when you make backwards-compatible bug fixes.

Very often package managers depend on `semver` and will not work as expected otherwise.

### Releasing code on github

Github makes it easy to do a release straight from your repositories website.
See [github releases](https://help.github.com/categories/releases/) for more information.

### CHANGELOG.md

[Keep a CHANGELOG](http://keepachangelog.com/)

Change log is a way to communicate notable changes in release to the users and contributors. Every release should have relevant entry in change log.

### One command install

Use [pip](https://pypi.python.org/pypi/pip), [npm](https://www.npmjs.com/package/npm) etc.

This applies to software which is distributed as package or library that will be used by other software
or from within other language. Should be
implemented when there are (going to be) first users of the software, so that they can use
default package managers.

### Package in package manager

Use [pypi](https://pypi.python.org/pypi), [npm](https://www.npmjs.com/) etc.

This is a way to publish the package.

### Discuss release cycle with coordinator

Release cycles will depend on the project specifics, but in general we encourage quick agile
development and therefore frequent releases.

### Release quick-scan by other engineer

A check by a fellow engineer to see if the documentation is understandable? can the software be installed? etc.

Think of it as a kind of code review but with focus on mechanics, not code. The reviewer should check if:
(i) there is easily visible or findable documentation,
(ii) download works, (iii) there are instructions on how to (iv) install and (v) start using software,
some of the things in this *scan* could be automated with continuous integration.

### Citeable

Create a DOI for each release see [Publishing results chapter](../publishing/publishing_results.md#citing-datasets,-software-and-results).

### Dissemination

news item on site / annual report, etc.

News item should be made for at least first stable and subsequent major releases.
