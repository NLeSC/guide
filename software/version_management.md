# Code Hosting and Version Management

To keep our code transparent and findable the preferred code hosting platform is Github and version management or scm is git. The repo preferable should be public from the start.

On Github there is a NLeSC organization at https://github.com/NLeSC which contains cross-project repositories.
Projects host their repo inside the NLeSC organization or in it's own project organization.

To allow non-NLeSC employees to push changes to NLeSC repositories they can be added as outside collaborators.

You can get a free GitHub Micro Plan (5 private repo's) on your own account if you ask nicely. Very useful when writing papers and such.

## branching model

For a branching model, we will use [this](http://nvie.com/posts/a-successful-git-branching-model/) model. Graphical cheat-sheet for it be found [here](http://danielkummer.github.io/git-flow-cheatsheet/).

A tool called [git-flow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) can help with this branching structure.  
To install it:
* on Ubuntu (and other distributions using apt), this can simply be installed with `sudo apt-get install git-flow`
* on Mac it's best to use [Homebrew](http://brew.sh), then `brew install git-flow`
* for other platforms check [installation instructions](https://github.com/nvie/gitflow/wiki/Installation)

For advanced users, there is a nice interactive site that helps you understand branching in git. It can be found [here](http://pcottle.github.com/learnGitBranching/).

## git commit messages

Commit messages make a history of the repository. It is important that they are formatted and formulated in a readable way. Read about how to improve your commit messages [here](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and [here](http://who-t.blogspot.nl/2009/12/on-commit-messages.html).

Github has some interesting features that allow you to [close issues directly from commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).

