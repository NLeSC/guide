# Code Quality

There are several ways to improve software quality.

## Editorconfig

Use [editorconfig](http://editorconfig.org/) to adhere to the basic code style rules.

Using editor config is not necessary, but saves a lot of time and keeps developers from straying
from the style of choice and helps to avoid some problems caused by formatting differences
(line ending, tabs vs spaces)

[download](https://github.com/NLeSC/knowledge/tree/master/software/config) nlesc editor config file.

Support most editors. [Here](http://editorconfig.org/) you can download plugins for your editor of choice.

If you use eclipse, use [this plugin](https://github.com/ncjones/editorconfig-eclipse).


if possible (i.e using linters and code formatters)

Use of linters will not only help to keep code cleaner but will also help finding bugs

## Coding style

Here a very nice article about why coding styles matter, and increase software quality:
[Improving software quality, why Coding Style Matters](http://coding.smashingmagazine.com/2012/10/25/why-coding-style-matters/)

See the collection of config files for automated coding style [here](https://github.com/NLeSC/knowledge/tree/master/software/config)

For style guides see the different languages in [the Language Guides](languages/languages_overview.html).

Google has a style guide for most languages [google style guide page](https://code.google.com/p/google-styleguide/).

## Software quality improvement tools

There are several web services that analyze code. The analyze code when triggered by a git push and can ingest code coverage generated on a Continuous-Integration server. They are usually free for open source projects.

See the language guides for good options per language.

For a list of choices see http://shields.io/ or https://github.com/ripienaar/free-for-dev#code-quality

## Name spaces
If your language supports namespaces, use **nl.esciencecenter**


## Code reviews

See the [Code Reviews](software_development/code_reviews.html) section.
