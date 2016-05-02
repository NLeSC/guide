# Version control

To keep our code transparent and findable the preferred code hosting platform is Github and version management or scm is git. The repo preferable should be public from the start.

On Github there is a NLeSC organization at https://github.com/NLeSC which contains cross-project repositories. The NLeSC organisation can also host non-public code for projects if there is a good reason to do so. Projects host their repo inside the NLeSC organization or in it's own project organization.

To allow non-NLeSC employees to push changes to NLeSC repositories they can be added as outside collaborators.

You can get a free GitHub Micro Plan (5 private repo's) on your own account if you ask nicely. Very useful when writing papers and such.

## Version Control From The Beginning Of The Project

## Use git as version control system (vcs)

Other VCS can be used if the project does not start in NLeSC and does not use git or when the prevailing VCS in particular community
is not git. Even then changing VCS should be considered (especially if svn or other centralised system is used).

### Git documentation:

* Github help: http://help.github.com
* Git homepage: http://git-scm.com/
* Pro Git Online Book: http://git-scm.com/book
* Reference: http://gitref.org/index.html
* In depth book: [Version Control with Git](http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387/ref=sr_1_1?ie=UTF8&qid=1347950111&sr=8-1&keywords=git)
* for those who know subversion and want to learn git: [Git - SVN Crash Course](http://git-scm.com/course/svn.html)

## Choose one branching model

Make the choice explicit in contribution guidelines, link to documentation on how to get started with it.
NLeSC default choice is [GitHub flow branching model](https://guides.github.com/introduction/flow/)
(TL;DR: use feature branches and pull requests).
GitHub flow is very simple and sane branching model. It supports collaboration and is based on pull requests, therefore relies
heavily on GitHub. [Pro Git](https://git-scm.com/doc) book describes in detail the workflow of collaboration on the project
with use of git branches,
forks and github in [Contributing to a Project chapter](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).
Other more complicated models could be used if necessary, but we should strive for simplicity and uniformity
in NLeSc since that will enhance collaboration between the engineers. Learning new branching model should not stand in the way
of contributions.
You can learn more about those other models from [atlasian page](https://www.atlassian.com/git/tutorials/comparing-workflows).

## [public vcs repository](#public-vcs)

Use ([github](https://github.com/)).

Unless code cannot be open (usually commercial partners, or some competitiveness issues ) it should be in public online repository.
In case the code uses data, that cannot be open, an engineer should try to keep sensitive parts outside of the main codebase.

## [meaningful commit messages](#meaningful-commit-messages)

Commit messages are the way for other developers to understand changes in the codebase. In case of using GitHub flow model commit
messages can be very short but pull request comment should explain all the changes. It is very important is to explain the why
behind implementation choices. To learn more about writing good commit messages read
[tpope’s guide](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
and [this post](http://who-t.blogspot.nl/2009/12/on-commit-messages.html)


Github has some interesting features that allow you to [close issues directly from commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).

## Code snippets library
Sometimes, we develop small snippets of code that can be directly reused in other projects, but that are too small to put in a library. We store these code snippets in git, in [GitHub Gists](https://gist.github.com/).
