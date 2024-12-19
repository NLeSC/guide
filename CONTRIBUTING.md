# Contributing to this Guide

- [Who? You!](#who_you)
- [Audience](#audience)
- [Scope](#scope)
- [How?](#how)
- [Technical details (docsify)](#technical-details)
- [Zen of the Guide](#zen-of-the-guide)

# Who? You!

This guide is primarily written by the Research Software Engineers at the Netherlands eScience Center.
Contributions by anyone (also outside the Center) are most welcome!

## Page maintainers

While everybody is encouraged to contribute where they can, we appoint maintainers for specific pages to regularly keep things up to date and think along with contributors.
To see who is responsible for which part of the guide see the maintainer listed at the top of a page.
If you are interested in becoming a chapter owner for a page that is listed as _unmaintained_, please open a pull request to add your name instead of _unmaintained_.

## Editorial board

The editors make sure content is in line with [the scope](#scope), that it is maintainable and that it is maintained.
In practice they will:

- track, lead towards satisfactory conclusion of and when necessary (in case of disagreement) decide on issues, discussions and pull requests,
- flag content that needs to be updated or removed,
- ask for input from page maintainers or other contributors,
- periodically organize sprints to work on content together with everyone interested in contributing; usually in the form of a "Book Dash" together with The Turing Way contributors,

and do any other regular editing tasks.

Currently the team consists of:

- Bouwe Andela [@bouweandela](https://github.com/bouweandela) (research software engineer)
- Carlos Martínez Ortiz [@c-martinez](https://github.com/c-martinez) (community manager)
- Patrick Bos [@egpbos](https://github.com/egpbos) (technology lead)

# Audience

Our eScience Center _RSEs_ are the prototypical audience members, in particular those starting out in some unfamiliar area of technology.
Some characteristics include:

- They are interested in _intermediate to advanced level_ best practices. If there are already ten easily found blog posts about it, it doesn't have to be in the Guide.
- They are a _programmer or researcher_ that is already familiar with some other programming language or software-related technology.
- They may be generally interested (in particular topics of eScience practice and research software development in general or how this is done at the eScience Center specifically), but their main aim is towards _practical_ application, not to create a literature study of the current landscape of (research) software.

# Scope

To make sure the information in this guide stays relevant and up to date it is intentionally low on technical details.
The guide contains and links to best practices we use to code and develop research software in our projects.

The main goal: having information available about research software engineering best practices for our colleagues, collaborators and other interested people.
It can be information that you can give a colleague starting in some area, for instance, a new language or a new technology.

80% of this goal will be met by [the Turing Way](https://book.the-turing-way.org/).
For everything else: we have the Guide.

We focus on eScience Center-specific best practices.
These can be generic and complete or specific and highly curated.
It depends!
For instance, eScience specific content (e.g. we prefer `git` over `svn`) should be in the Guide, while content of interest to a general audience (e.g. it is good practice to use a version control system) should go in The Turing Way.
When in doubt, discuss your doubts in an issue.

A few things are excluded:

1. Project related practices (planning, communication, stake holders, management, etc.). These we gather on our intranet pages.
2. Project output is gathered on the [Research Software Directory](https://research-software-directory.org/organisations/netherlands-escience-center?tab=software&order=is_featured).
3. Generic research software engineering advice that can be added to [The Turing Way](https://github.com/the-turing-way/the-turing-way).

In practice, this means the Guide (for now) will mostly consist of language guides and technology guides.

It can also sometimes function as a staging/draft area for eventually moving content to the Turing Way.
However, we will urge you to contribute to the Turing Way directly.

## For significant changes / additions, especially new chapters

Please check if your contribution fits in [The Turing Way](https://github.com/the-turing-way/the-turing-way) before considering contributing to this guide.
Feel free to ask the [editors](#editorial-board) if you are unsure or open an [issue](https://github.com/NLeSC/guide/issues) to discuss it.
If it does not fit, please open an [issue](https://github.com/NLeSC/guide/issues) to discuss your planned contribution before starting to work on it, to avoid disappointment later.

# How?

## Style, form

A well written piece of advice should contain the following information:

1. What, e.g. _version control_
2. Why, e.g. _why version control is a good idea_
3. Short how / tl;dr: Recommend one solution for readers who don't want to spend time reading about all possible options, e.g. _at NLeSC we use git with GitHub because..._ This is where NLeSC specific info should go if it makes sense to do so.
4. Long how: also explain other options for implementing advice, e.g. _here's a list of some more version control programs and/or services which we can recommend_.

## Technical

Please use branches and pull requests to contribute content. If you are not part of the Netherlands eScience Center organization but would still like to contribute please do by submitting a pull request from a fork.

```shell
git clone https://github.com/NLeSC/guide.git
cd guide
git branch newbranch
git checkout newbranch
```

Please install [pre-commit](https://pre-commit.com/) and enable the pre-commit
hooks by running

```shell
pre-commit install
```

to automatically format your changes when committing.

Add your new awesome feature, fix bugs, make other changes.

To preview changes locally, host the repo with a static file web server:

```shell
python3 -m http.server 4000
```

to view the documentation in a web browser (default address: http://localhost:4000).

To check if there are any broken links use [lychee](https://github.com/lycheeverse/lychee) in a Docker container:

```shell
docker run --init -it -v `pwd`:/docs lycheeverse/lychee /docs --config=docs/lychee.toml
```

If everything works as it should, `git add`, `commit` and `push` like normal.

If you have made a significant contribution to the guide, please make sure to add yourself to the `CITATION.cff` file so your name can be included in the list of authors of the guide.

## Create a PDF file

We host a PDF version of the guide on [Zenodo](https://doi.org/10.5281/zenodo.4020564).
To update it a [new release](https://github.com/NLeSC/guide/releases) needs to be made of the guide. This will trigger a GitHub action to create a new Zenodo version with the PDF file.

# Technical details

The basics of how the Guide is implemented.

The Guide is rendered by [docsify](https://docsify.js.org) and hosted on GitHub Pages.
Deployment is "automatic" from the main branch, because docsify requires no build step into static HTML pages, but rather generates HTML dynamically from the MarkDown files in the Guide repository.
The only configuration that was necessary for this automatic deployment is:

1. The [index.html](https://github.com/NLeSC/guide/blob/main/index.html) file in the root directory that loads docsify.
2. The empty [.nojekyll](https://github.com/NLeSC/guide/blob/main/.nojekyll) file, which tells GitHub that we're not dealing with Jekyll here (the GitHub Pages default).
3. Telling GitHub in the Settings -> Pages menu to load the Pages content from the root directory.
4. The [\_sidebar.md](https://github.com/NLeSC/guide/blob/main/_sidebar.md) file for the table of contents.

Plugins that we use:

- The [docsify full text search plugin](https://docsify.js.org/#/plugins?id=full-text-search)
- The [docsify Google Analytics plugin](https://docsify.js.org/#/plugins?id=google-analytics)
- [Prism](https://docsify.js.org/#/language-highlight) is used for language highlighting.

If you want to change anything in this part, please discuss in an issue.

# Zen of the Guide

0. Help your colleagues.
1. Citing is better than copying.
2. Copying is better than rewriting from scratch.
3. ... but leaving out is often even better.
4. Don't state the obvious.
5. Don't assume that something is obvious.
6. Snippets are friends.
7. Remove outdated content.
8. Better yet, update outdated content.
9. Your practices are just _your_ practices. Best practices are shared practices. $N>1$.
10. Our best practices are just _our_ best practices. We don't have to agree with everyone.
11. Best practices are timeless (at least for a year or so).
12. Best practices are never set in stone. They are set in the Guide.
13. Best practices are not always practices.
14. ~~Best practices are not always best practices.~~
15. Kill your darlings.
16. Consider The Turing Way first.
17. Sharing is better than guiding.
18. Guiding is better than turning a blind eye.
19. This Guide shall be under your pillow.
