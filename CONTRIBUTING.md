# Contributing

This Knowledge Base is primarily written by the eScience Research Engineers at the Netherlands eScience Center. The intended audience is anyone interested in eScience and research software development in general or how this is done at the eScience Center specifically.

## Scope

To make sure the information in this knowledge base stays relevant and  up to date it is intentionally low on technical details. The Knowledge base contains information on the process we use to do projects and develop software.

## Workflow for making contributions

Contributions by anyone are most welcome.

Please use branches and pull requests to contribute content. If you are not part of the Netherlands eScience Center organization but would still like to contribute please do by submitting a pull request from a fork.

```
git clone https://github.com/NLeSC/guide.git
git branch newbranch
git checkout newbranch
```
Add your new awesome feature, fix bugs, make other changes.

To view changes locally, first install ``gitbook-cli`` (Gitbook command line interface) and ``broken-link-checker`` (may require root permissions, depending on your setup).

```
npm install -g gitbook-cli
npm install -g broken-link-checker
```

To install ``gitbook``'s dependencies:

```
gitbook install
```

To build the documentation:

```
gitbook build
```

To view the documentation in a web browser (default address: http://localhost:4000):
```
gitbook serve
```

To check if there are any broken links:
```
blc --recursive http://localhost:4000
```

If everything works as it should, ``git add``, ``commit`` and ``push`` like normal.

## Chapter Owners

To see who is responsible for which part of the guide see [chapter_owners.md](chapter_owners.md).

