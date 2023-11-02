# Contributing

This guide is primarily written by the eScience Research Engineers at the Netherlands eScience Center. The intended audience is anyone interested in eScience and research software development in general or how this is done at the eScience Center specifically.

## Scope

Please check if your contribution fits in
[The Turing Way](https://github.com/the-turing-way/the-turing-way)
before considering contributing to this guide.
If it does not fit, please open an [issue](https://github.com/NLeSC/guide/issues)
to discuss your planned contribution before starting to work on it, to avoid
disappointment later.

To make sure the information in this guide stays relevant and  up to date it is intentionally low on technical details. The guide contains information on the process we use to do projects and develop software.

## Workflow for making contributions

Contributions by anyone are most welcome.

Please use branches and pull requests to contribute content. If you are not part of the Netherlands eScience Center organization but would still like to contribute please do by submitting a pull request from a fork.

```shell
git clone https://github.com/NLeSC/guide.git
git branch newbranch
git checkout newbranch
```

Add your new awesome feature, fix bugs, make other changes.

To view changes locally, host the repo with a static file web server.

```shell
python3 -m http.server 4000
```

To view the documentation in a web browser (default address: http://localhost:4000):

To check if there are any broken links using [lychee](https://github.com/lycheeverse/lychee) in a Docker container:

```shell
docker run --init -it -v `pwd`:/docs lycheeverse/lychee /docs --config=docs/lychee.toml
```

If everything works as it should, ``git add``, ``commit`` and ``push`` like normal.

If you have made a significant contribution to the guide, please make sure to add yourself to the `CITATION.cff` file so your name can be included in the list of authors of the guide.

## Page maintainers

To see who is responsible for which part of the guide see the maintainer listed at the top of a page.
If you are interested in becoming a chapter owner for a page that is listed as *unmaintained*, please open a pull request to add your name instead of *unmaintained*.

## Create a PDF file

We host a PDF version of the guide on [Zenodo](https://doi.org/10.5281/zenodo.4020565).
To update it a [new release](https://github.com/NLeSC/guide/releases) needs to be made of the guide. This will trigger a GitHub action to create a new Zenodo version with the PDF file.

# Technical details

The basics of how the Guide is implemented.

The Guide is rendered by [docsify](https://docsify.js.org) and hosted on GitHub Pages.
Deployment is "automatic" from the main branch, because docsify requires no build step into static HTML pages, but rather generates HTML dynamically from the MarkDown files in the Guide repository.
The only configuration that was necessary for this automatic deployment is:
1. The [index.html](https://github.com/NLeSC/guide/blob/main/index.html) file in the root directory that loads docsify.
2. The empty [.nojekyll](https://github.com/NLeSC/guide/blob/main/.nojekyll) file, which tells GitHub that we're not dealing with Jekyll here (the GitHub Pages default).
3. Telling GitHub in the Settings -> Pages menu to load the Pages content from the root directory.
4. The [_sidebar.md](https://github.com/NLeSC/guide/blob/main/_sidebar.md) file for the table of contents.

Plugins that we use:
- The [docsify full text search plugin](https://docsify.js.org/#/plugins?id=full-text-search)
- The [docsify Google Analytics plugin](https://docsify.js.org/#/plugins?id=google-analytics)
- [Prism](https://docsify.js.org/#/language-highlight) is used for language highlighting.

If you want to change anything in this part, please discuss in an issue.
