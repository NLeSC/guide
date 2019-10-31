# Checkmatrix for 'eStep friendly' projects.

Printable check-list -- complete this checklist to ensure your project is eStep-ready. If you can tick all boxes on this form, your project should be included as an eStep *Pre-release* project.


##Version Control

Item / Phase | Done      |
:------------|:---------:|
use git as version control system (vcs)|
use [GitHub flow branching model](https://guides.github.com/introduction/flow/) (use feature branches and pull requests)|
public vcs repository ([github](https://github.com/))|
meaningful commit messages|


##Releases

Item / Phase | Done      |
:------------|:---------:|
discuss release cycle with coordinator|

##Licensing

Item / Phase | Done      |
:------------|:---------:|
[Apache 2 license](http://www.apache.org/licenses/LICENSE-2.0)|
compatible license of all libraries|
`NOTICE(.txt or .md)` listing licenses, request citation of paper if applicable|

##Communication

Item / Phase | Done      |
:------------|:---------:|
project discussion list (github issues, mailing list, not private email) for all project related discussions from the beginning of the project|
Pitch presentation (1 to 3 slides)|

##Testing

Item / Phase | Done      |
:------------|:---------:|
[unit tests](https://en.wikipedia.org/wiki/Unit_testing)|
build tests|
[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), public on [Travis](https://travis-ci.org/)|

##Documentation

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

## Development setup

Item / Phase | Done      |
:------------|:---------:|
using the eScience Center coding style is required|
[editorconfig](http://editorconfig.org/)|
applied code style in automated way if possible (i.e using linters and code formaters)|
dev environment docker images in Dockerhub (with Dockerfile)|

## Use standards

Item / Phase | Done      |
:------------|:---------:|
exchange format (Unicode, W3C, OGN, NetCDF, etc)|
protocols (HTTP, TCP, TLS, etc)|
