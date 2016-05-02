## [Release](#release)

Those points by definition apply to software that is **released** to the users. Where users can be researchers or other engineers.

### [Semantic versioning](#semantic-versioning)

[semantic versioning](http://semver.org/)

Semantic Versioning (semver) is the most accepted and used way to add numbers to software versions.
It is a way of communicating impact of changes in the software on users.
Very often package managers depend on `semver` and will not work as expected otherwise.

### [tagged releases](#tagged-releases)

[github releases](https://help.github.com/categories/releases/)

Releases are a way to signify and point to particular milestone in software development.
[Apache foundation](http://www.apache.org/) describes their [release policy](http://www.apache.org/dev/release.html).

### [CHANGELOG.md](#changelog)

[Keep a CHANGELOG](http://keepachangelog.com/)

Change log is a way to communicate notable changes in release to the users and contributors. Every release should have relevant entry in change log.

### [one command install](#one-command-install)

[pip](https://pypi.python.org/pypi/pip), [npm](https://www.npmjs.com/package/npm) etc.

This applies to software which is distributed as package or library that will be used by other software
or from within other language. Should be
implemented when there are (going to be) first users of the software, so that they can use
default package managers.

### [package in package manager](#package-in-package-manager)

[pypi](https://pypi.python.org/pypi), [npm](https://www.npmjs.com/) etc.

This is a way to publish the package.

### [discuss release cycle with coordinator](#discuss-release-cycle)

Release cycles will depend on the project specifics, but in general we encourage quick agile
development and therefore frequent releases.

### [release quick-scan by other engineer](#release-quick-scan)

is documentation understandable? can it be installed? etc.

Think of it as a kind of code review but with focus on mechanics, not code. The reviewer should check if:
(i) there is easily visible or findable documentation,
(ii) download works, (iii) there are instructions on how to (iv) install and (v) start using software,
some of the things in this *scan* could be automated with continuous integration.

### [Dissemination](#dissemination)

news item on site / annual report, etc.

News item should be made for at least first stable and subsequent major releases (the ones with major change in semantic versioning)

Read more about releases [here](http://www.apache.org/dev/release.html)
