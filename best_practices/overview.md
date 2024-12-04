# Best Practices for Software Development

In this chapter we give an overview of the best practices for software development at the Netherlands eScience Center, including a rationale.

## Checklists

An easy way to make sure you did not forget anything important is to use a well curated checklist.
Great examples can be found via [FAIR Software NL](https://fair-software.nl/recommendations/checklist).
[The Turing Way](https://book.the-turing-way.org) has specific topical checklists at the end of each of their chapters.

## Version control

Use a version control tool like `git` to track changes in your codebase.
This allows you to retrace your steps when debugging, keep your repository clean, easily collaborate with others asynchronously and more.
More info: [The Turing Way chapter on Version Control](https://book.the-turing-way.org/reproducible-research/vcs), [RSQkit chapter on Version Control](http://everse.software/RSQKit/version_control).

**@ NLeSC:** we always use version control and we preferably use GitHub as our online repository and collaboration platform (see the [Project Management Protocol on our intranet](https://nlesc.sharepoint.com/sites/home/SitePages/Project-procedures.aspx)).

## Testing

Tests are important for two reasons: 1. confirming the expected workings of your code while developing for the first time and 2. making sure your features keep working when later on you or others modify the implementation.
[The Turing Way gives an overview of the many ways to test code](https://book.the-turing-way.org/reproducible-research/testing).

## Know your tools

In addition to the advice on the best practices above, knowing the
tools that are available for software development can really help you getting
things done faster.

### Learn how to use the command line efficiently

Read the chapter on using [Bash](/language_guides/bash.md).

### Use an editor that helps you develop

Commonly used editors and their ecosystem of plugins can really help you write
better code faster.
Note that for each of the editors and environments listed below, it is important
to configure them such that they support the programming languages that you are
developing in.

Below is a list of editors that support many programming languages.

Integrated Development Environments (IDEs):
- [Visual Studio Code](https://code.visualstudio.com/) - modern editor with extensive plugin ecosystem that can make it as powerful as most IDEs
- [JetBrains IDEs](https://www.jetbrains.com/ides/) - specialized IDEs for Python, C++, Java and web, all using the IntelliJ framework
- [Eclipse](https://www.eclipse.org/ide/) - a bit older but still nice

Text editors:
- [vim](https://www.vim.org/) - classic text editor
- [emacs](https://www.gnu.org/software/emacs/) - classic text editor
