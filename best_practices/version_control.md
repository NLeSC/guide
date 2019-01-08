# Version control

Why would you use version control software and hosting (such as GitHub)?
* **Easier to collaborate** Version control makes it easier to work on the same code simultaneously, while everyone still has a well defined version of the software (in contrast to a google-docs or shared file system type of system). Moreover, version control hosting websites such as Github provide way to communicate in a more structed way, such as in code reviews, about commits and about issues.
* **Reproducibility** By using version control, you never lose previous versions of the software. This also gives you a log of changes and allows you to understand what happened. 
* **Backup** Version control is usually pushed to an external a shared server, which immediately provides a backup.
* **Integration** Version control software and host makes it more easy to integrate with other software that support modern software development, such as testing (continuous integration ,automatically run tests, build documentation, check code style, integration with bug-tracker, code review infrastructure, comment on code).


## GitHub

Netherlands eScience center uses GitHub [GitHub](https://www.github.com) for version control.
To keep our code transparent and findable the preferred code hosting platform is
GitHub and version management is git. The repository should preferably be public
from the start.

By default an eScience Research Engineer is expected to create a new [GitHub
organization](https://help.github.com/articles/creating-a-new-organization-account/)
for each project and create repositories in there.
However a new repository should be made in the [Netherlands eScience Center
GitHub organization (https://github.com/NLeSC)](https://github.com/NLeSC) when
the repository is used in multiple projects.

### Policy

* No repositories which the Netherlands eScience Center is paying for should be in
personal accounts, they SHOULD always be in either the [Netherlands eScience
Center GitHub organization](https://github.com/NLeSC) or in a project based
GitHub organization
* GitHub supports [two-factor
authentication](https://help.github.com/articles/about-two-factor-authentication/).
This SHOULD be enabled for your account
* Project based GitHub organizations
  * MUST have at least two owners that are Netherlands eScience center employees
  * MUST be [registered](https://github.com/NLeSC/nlesc.github.io#adding-an-github-organization) at [https://nlesc.github.io/](https://nlesc.github.io/), to keep track of all the project organizations
  * Private repositories can be created. Free when [GitHub's education discount](https://education.github.com/) is requested. **NOTE**: The [Netherlands eScience Center IP policy](https://www.esciencecenter.nl/nlesc_ip_policy_2017.pdf) applies to any software we contribute to, so the repository SHOULD become open source at some point. To prevent private repositories from remaining unnecessarily private forever please add a brief statement in the README of your repository, clarifying:
    * Why is this repository private?
    * On which date can this repository be made public?
    * Who should be consulted if we would like to make the repository public in the future?
* [Netherlands eScience center Github organization (https://github.com/NLeSC)](https://github.com/NLeSC)
  * Only Netherlands eScience center employees are members
  * All members have permission to create new repositories
  * [Collaborators](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/) SHOULD be used to grant access to non-members
  * A limited number of slots for private repositories is available, but using them is discouraged
  * To prevent private repositories from remaining unnecessarily private forever please add a brief statement in the README of your repository, clarifying:
    * Why is this repository private?
    * On which date can this repository be made public?
    * Who should be consulted if we would like to make the repository public in the future?

## Version control from the beginning of the project

It is highly recommended to start using version control on day one of the project.

## Use git as version control system

Other version control systems can be used if the project does not start in the
eScience Center and does not use git, or when the prevailing version control
system in the particular community is not git. Even then, changing version
control systems should be considered (especially if Subversion or another
centralised system is used).

### Git documentation:

* GitHub help: http://help.github.com
* Git homepage: http://git-scm.com/
* Pro Git Online Book: http://git-scm.com/book
* Reference: http://gitref.org/index.html
* In depth book: [Version Control with Git](http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387/ref=sr_1_1?ie=UTF8&qid=1347950111&sr=8-1&keywords=git)
* for those who know subversion and want to learn git: [Git - SVN Crash
Course](http://git-scm.com/course/svn.html)

## Choose one branching model

A branching model describes how the project deals with different versions of the codebase, like releases and various development versions, and how to accept code contributions.
Make the choice explicit in the contribution guidelines, and link to documentation on how to get started with it.
Our default choice is [GitHub flow branching model](https://guides.github.com/introduction/flow/)

GitHub flow is a very simple and sane branching model. It supports collaboration and is based on pull requests, therefore relies
heavily on GitHub. The [Pro Git](https://git-scm.com/doc) book describes in detail the workflow of collaboration on the project
with use of git branches,
forks and GitHub in [Contributing to a Project chapter](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).
Other more complicated models could be used if necessary, but we should strive for simplicity and uniformity
within the eScience Center since that will enhance collaboration between the engineers. Learning a new branching model should not stand in the way
of contributions.
You can learn more about those other models from [atlasian page](https://www.atlassian.com/git/tutorials/comparing-workflows).

## Repositories should be public

A public code repository has several benefits:
* It makes your code findable.
* It is a central point for users and collaborators.
* It shows your code to world, allowing (re)use and enables you to get credit for your work.
* It is usually not hosted on your laptop, and hence provides an external backup.

Unless code cannot be open (e.g. when working with commercial partners, or when
there are competitiveness issues) it should be in a public online repository. In
case the code uses data that cannot be open, an engineer should try to keep
sensitive parts outside of the main codebase. If you accidentally included
copyrighted files in your repository, you need to remove them from the HEAD as
well as from history. There is a [gist that explains how](https://gist.github.com/jspaaks/df292d42ecbd5e28d4620f011c602b90).

## Meaningful commit messages

Commit messages are the way for other developers to understand changes in the
codebase. In case of using GitHub flow model, commit messages can be very short
but pull request comments should explain all the changes. It is very important
to explain the why behind implementation choices. To learn more about writing
good commit messages, read [tpope’s
guide](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and
[this post](http://who-t.blogspot.nl/2009/12/on-commit-messages.html)

GitHub has some interesting features that allow you to [close issues directly
from commit
messages](https://help.github.com/articles/closing-issues-via-commit-messages/).

## Code snippets library

Sometimes, we develop small snippets of code that can be directly reused in other projects, but that are too small to put in a library. We store these code snippets in git, in [GitHub Gists](https://gist.github.com/).
