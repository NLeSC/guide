### Version control

For version control, we prefer the **git** version management system.

#### git
[Git](http://git-scm.com) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. See some more [[git learning resources|Git]].

The eScience center has a [github organizational account](https://github.com/nlesc), where we store all code developed here.
You also need a personal account, which can then be coupled with eScience.
Thanks to our organizational account, we can also support code that does not use an open source licence, see this page for more information: [[Non public code]].

##### branching model

For a branching model, we will use [this](http://nvie.com/posts/a-successful-git-branching-model/) model. Graphical cheat-sheet for it be found [here](http://danielkummer.github.io/git-flow-cheatsheet/).

A tool called [git-flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) can help with this branching structure.  
To install it:
* on Ubuntu (and other distributions using apt), this can simply be installed with `sudo apt-get install git-flow`
* on Mac it's best to use [Homebrew](http://brew.sh), then `brew install git-flow`
* for other platforms check [installation instructions](https://github.com/nvie/gitflow/wiki/Installation)

For advanced users, there is a nice interactive site that helps you understand branching in git. It can be found [here](http://pcottle.github.com/learnGitBranching/).

##### git commit messages
Commit messages make a history of the repository. It is important that they are formatted and formulated in a readable way. Read about how to improve your commit messages [here](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and [here](http://who-t.blogspot.nl/2009/12/on-commit-messages.html).

Github has some interesting features that allow you to [close issues directly from commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).


#### svn (Subversion)
#### CVS (Concurrent Versioning System)

Sometimes, projects use software that is part of a larger code base that already is under version control. How do we handle multiple repositories in a single project?
