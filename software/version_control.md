# Version control

To keep our code transparent and findable the preferred code hosting platform is GitHub and version management or scm is git. The repo preferable should be public from the start.

## GitHub

Projects host their repositories in a GitHub organization named after the project.
These GitHub organizations MUST have at least two owners that are employees of the Netherlands eScience Center. Private repositories can be created as part of GitHub's education policy if you ask nicely. The number of private repositories is always limited (we advise to request 5). Note that the [Netherlands eScience Center IP policy](https://www.esciencecenter.nl/NLeSC_IP_policy_vJan2015.pdf) is that any software we contribute to SHOULD become open source.
Please add any newly created project GitHub organization to the https://nlesc.github.io/ site by creating a Markdown file in the https://github.com/NLeSC/nlesc.github.io repository using a Pull Request.

On GitHub there is an eScience Center organization at https://github.com/NLeSC which contains cross-project repositories.
Creation of repository must be requested, afterwards the eScience Center employee will have admin rights on the repository. There is a limited number of private repo's for software which for some pressing reason cannot be open source. In principle, we do not add non-employees to teams in the NLeSC GitHub organization, but they can be added as per-project collaborator or added to an associate organization such as described in the paragraph above.

You can get a free GitHub Micro Plan (5 private repo's) on your own account if you ask nicely. Very useful when writing papers and such.

## Version control from the beginning of the project

It is highly recommended to start using version control on day one of the project.

## Use git as version control system (VCS)

Other VCSes can be used if the project does not start in the eScience Center and does not use git, or when the prevailing VCS in the particular community is not git. Even then, changing VCS should be considered (especially if Subversion or another centralised system is used).

### Git documentation:

* GitHub help: http://help.github.com
* Git homepage: http://git-scm.com/
* Pro Git Online Book: http://git-scm.com/book
* Reference: http://gitref.org/index.html
* In depth book: [Version Control with Git](http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387/ref=sr_1_1?ie=UTF8&qid=1347950111&sr=8-1&keywords=git)
* for those who know subversion and want to learn git: [Git - SVN Crash Course](http://git-scm.com/course/svn.html)

## Choose one branching model

Make the choice explicit in the contribution guidelines, and link to documentation on how to get started with it.
Our default choice is [GitHub flow branching model](https://guides.github.com/introduction/flow/)

GitHub flow is a very simple and sane branching model. It supports collaboration and is based on pull requests, therefore relies
heavily on GitHub. The [Pro Git](https://git-scm.com/doc) book describes in detail the workflow of collaboration on the project
with use of git branches,
forks and GitHub in [Contributing to a Project chapter](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).
Other more complicated models could be used if necessary, but we should strive for simplicity and uniformity
within the eScience Center since that will enhance collaboration between the engineers. Learning new branching model should not stand in the way
of contributions.
You can learn more about those other models from [atlasian page](https://www.atlassian.com/git/tutorials/comparing-workflows).

## Public vcs repository

If at all possible, use ([GitHub](https://github.com/)).

Unless code cannot be open (usually commercial partners, or some competitiveness issues ) it should be in public online repository.
In case the code uses data, that cannot be open, an engineer should try to keep sensitive parts outside of the main codebase.

## Meaningful commit messages

Commit messages are the way for other developers to understand changes in the codebase. In case of using GitHub flow model commit
messages can be very short but pull request comment should explain all the changes. It is very important is to explain the why
behind implementation choices. To learn more about writing good commit messages read
[tpope’s guide](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
and [this post](http://who-t.blogspot.nl/2009/12/on-commit-messages.html)

GitHub has some interesting features that allow you to [close issues directly from commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).

## Code snippets library
Sometimes, we develop small snippets of code that can be directly reused in other projects, but that are too small to put in a library. We store these code snippets in git, in [GitHub Gists](https://gist.github.com/).
