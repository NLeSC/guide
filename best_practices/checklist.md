# Software checklist

Here we provide a short checklist for software projects, the rest of this chapter elaborates on the various point in this list.

The __bare minimum__ that every software project should do, from the start, is:

* Pick & include an [open source license](licensing.md)
* Use [version control](version_control.md)
* Use a [publicly accessible](version_control.md#repositories-should-be-public)
 version controlled repository
* Add a [readme describing the project](documentation.md#readme)

We recommend that you also do the following (from the start of the project):

* Use [code quality tools](code_quality.md)
* [Testing](testing.md)
* Use [standards](standards.md)

Additional steps depend on the goal of the software (zero or more can apply):

* [I'm publishing a paper](#im-publishing-a-paper)
* [I'm expecting users](#im-expecting-users)
* [I'm expecting contributors](#im-expecting-contributors)

A more thorough checklist is the [Core Infrastructures Initiative Badge Best Practices Badge Program](https://bestpractices.coreinfrastructure.org/en/criteria/0). This list is not aimed at research software, and the criteria (for example those focused on security) might go beyond what is necessary. However the aim is **not** to show perfect compliance, but rather to be transparent about the state of the code while providing the necessary guidance on which aspects could be improved.

## I'm publishing a paper

* Add a [CITATION.cff file](documentation.md#software-citation)
* [Make your software citable](#doi-or-pid)
* Cite DOI in paper

## I'm expecting users

* [Release](releases.md) your software
* Provide [user documentation](documentation.md)
* [Easy installation](releases.md#one-command-install)
* Provide issue tracker

## I'm expecting contributors

* Provide [development documentation](documentation.md#source-code-documentation)
* Provide a [means of communication](communication.md#discussion-list)
* Implement and add a [code of conduct](documentation.md#code-of-conduct)
* [Contribution guideline](documentation.md#contribution-guidelines)
