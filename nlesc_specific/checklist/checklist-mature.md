# Checkmatrix for 'eStep friendly' projects.

Printable check-list -- complete this checklist to ensure your project is eStep-ready. If you can tick all boxes on this form, your project should be included as an eStep *Mature* project.


## Version Control

Item / Phase | Done      |
:------------|:---------:|
use git as version control system (vcs)|
use [GitHub flow branching model](https://guides.github.com/introduction/flow/) (use feature branches and pull requests)|
public vcs repository ([github](https://github.com/))|
meaningful commit messages|


## Releases

Item / Phase | Done      |
:------------|:---------:|
[semantic versioning](http://semver.org/)|
tagged releases ([github releases](https://help.github.com/categories/releases/))|
CHANGELOG.md ([Keep a CHANGELOG](http://keepachangelog.com/))|
one command install ([pip](https://pypi.python.org/pypi/pip), [npm](https://www.npmjs.com/package/npm) etc)|
package in package manager ([pypi](https://pypi.python.org/), [npm](https://www.npmjs.com/) etc)|
discuss release cycle with coordinator|
release quick-scan by other engineer (is documentation understandable, can it be installed, etc)|
notify Lode for dissemination (news item on site / annual report, etc)|

## Licensing

Item / Phase | Done      |
:------------|:---------:|
[Apache 2 license](http://www.apache.org/licenses/LICENSE-2.0)|
compatible license of all libraries|
`NOTICE(.txt or .md)` listing licenses, request citation of paper if applicable|

## Communication

Item / Phase | Done      |
:------------|:---------:|
home page with all the necessary introduction information, links to documenation, source code (github) and latest release download (eg. [github.io pages](https://pages.github.com/))|
project discussion list (github issues, mailing list, not private email) for all project related discussions from the beginning of the project|
for services: a demo docker image in dockerhub (with Dockerfile)|
for websites: an online demo|
Pitch presentation (1 to 3 slides)|
Few sentences about the project for [the technology pages on our website](https://www.esciencecenter.nl/technology)|

## Testing

Item / Phase | Done      |
:------------|:---------:|
[unit tests](https://en.wikipedia.org/wiki/Unit_testing)|
build tests|
[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), public on [Travis](https://travis-ci.org/)|
continuous code coverage and code quality metrics public, minimum 70% coverage required|
end2end test for (web) user interfaces|
track dependencies (with [David](https://david-dm.org/) or other service depending on codebase language)|

## Documentation

Item / Phase | Done      |
:------------|:---------:|
`README.md` - clear explanation of the goal of the project with pointers to other documentation resources. Use [GitHub flavored markdown](https://help.github.com/categories/writing-on-github) for, e.g., [syntax highlighting](https://help.github.com/articles/creating-and-highlighting-code-blocks).|
well defined functionality|
source code documentation|
usage documentation|
documented development setup (good example is [Getting started with khmer development](http://khmer.readthedocs.org/en/latest/dev/getting-started.html))|
contribution guidelines [egzample](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)|
code of conduct ([contributor covenant](http://contributor-covenant.org/))|
documented code style|
meaning of issue labels used|
DOI or PID ([making your code citable](https://guides.github.com/activities/citable-code/))|


## Development setup

Item / Phase | Done      |
:------------|:---------:|
using the eScienc Center coding style is required|
[editorconfig](http://editorconfig.org/)|
applied code style in automated way if possible (i.e using linters and code formaters)|
dev environment docker images in Dockerhub (with Dockerfile)|

## Use standards

Item / Phase | Done      |
:------------|:---------:|
exchange format (Unicode, W3C, OGN, NetCDF, etc)|
protocols (HTTP, TCP, TLS, etc)|
