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

**At the Netherlands eScience Center:** we always use version control and we preferably use GitHub as our online repository and collaboration platform (see the [Project Management Protocol on our intranet](https://nlesc.sharepoint.com/sites/home/SitePages/Project-procedures.aspx) (only accessible to Netherlands eScience Center employees)).

## Testing

Tests are important for two reasons: 1. confirming the expected workings of your code while developing for the first time and 2. making sure your features keep working when later on you or others modify the implementation.
[The Turing Way gives an overview of the many ways to test code](https://book.the-turing-way.org/reproducible-research/testing).

## Code Reviews

The most effective tool for improving software quality (and sharing knowledge at the same time) is doing code reviews.
Have a look at the [The Turing Way chapter on Code Reviewing](https://book.the-turing-way.org/reproducible-research/reviewing) to learn more about ways to do this.

## Documentation

Developed programs should be documented at multiple levels, from code comments, through API documentation, to installation and usage documentation.
Comments at each level should take into account different target audiences, from experienced developers, to end users with no programming skills.
In the [Turing Way chapter on Code Documentation](https://book.the-turing-way.org/reproducible-research/code-documentation) you will find a great overview of the how and why of documentation.

## Code Quality

Ways to improve code quality are described in the [Code quality](https://book.the-turing-way.org/reproducible-research/code-quality.html) chapter on the Turing Way.

Explore [online tools for software quality improvement](https://book.the-turing-way.org/reproducible-research/code-quality/code-quality-style.html#online-services-providing-software-quality-checks). Additionally, check our [language guides](/language_guides/languages_overview.md) for language-specific recommendations.
[RSQKit: Research Software Quality Kit](https://everse.software/RSQKit/) also has many useful guides including software quality. These guides are result of an international collaboration primarily focusing on research software quality.

### EditorConfig

The eScience Center provides a [shared config file](https://raw.githubusercontent.com/NLeSC/exemplum/master/.editorconfig) for IDEs and text editors. This file helps standardize coding styles across projects.

### Namespaces

If your programming language supports namespaces, use your organization or project-specific namespace.

**At the Netherlands eScience Center:**, the recommended namespace is **nl.esciencecenter**, or adapt it to a namespace that aligns with your project's context.

## Use standards

Standard files and protocols should always be a primary choice.
Using standards improves the interoperability of your software, thereby improving its usefulness.
Examples include exchange formats like Unicode, NetCDF, and W3C web standards, and protocols like HTTP, TCP, TLS.

## Licensing

Since source code is protected by copyright, to allow people to use your code it needs a license.
For more information, see [The Turing Way chapter on licensing](https://the-turing-way.netlify.app/reproducible-research/licensing) or the [RSQkit Licensing software task](http://everse.software/RSQKit/licensing_software).

**At the Netherlands eScience Center:** our first choice is the Apache v2 license.
See the [Project Management Protocol on our intranet](https://nlesc.sharepoint.com/sites/home/SitePages/Project-procedures.aspx) (only accessible to Netherlands eScience Center employees) for more details on licensing and our intellectual property policies.

## Software management plans

The Netherlands eScience Center and [NWO](https://www.nwo.nl/en) have authored the [practical guide to software management plans](https://doi.org/10.5281/zenodo.7248877) ([see also](https://www.esciencecenter.nl/national-guidelines-for-software-management-plans/)).
For our projects we recommend using [our Software Sustainability Protocol](https://doi.org/10.5281/zenodo.1451750), which is based on these guidelines.
For more information you can also [read here](https://github.com/the-turing-way/the-turing-way/issues/2419). <!-- we should point to the actual Turing Way chapter once it has been created -->

## Releases

Releases are a way to mark or point to a particular milestone in software development.
This is useful for users and collaborators, e.g. I found a bug running version x.
For publications that refer to software, refering to a specific release enhances the reproducability.
See [the RSQkit task on Creating code releases](http://everse.software/RSQKit/releasing_code) for the most essential guidelines.
The Turing Way offers many related tips in their [chapter on Making Research Objects Citable](https://book.the-turing-way.org/communication/citable), like how to make code citable with CITATION.CFF files.

## Packaging

A related, but separate topic is packaging, which allows users to conveniently install your released software.
Most [languages](/language_guides/languages_overview) and OS'es have their particular ways of doing this.
The Turing Way offers advice on [making reproducible environments](https://book.the-turing-way.org/reproducible-research/renv), in which packaging is an essential component.

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
