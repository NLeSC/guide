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

There are several web services that analyze code. The analyze code when triggered by a git push and can ingest code coverage generated on a Continuous-Integration server. They are free for open source projects. We also run our own SonarQube instance.

### SonarQube

SonarQube (http://www.sonarqube.org/) is an open platform to manage code quality.
On our Jenkins build server we do a SonarQube analysis for each Jenkins job. Out SonarQube instance is hosted at https://sonar.esciencecenter.nl and is behind a login.
Sonar Qube can analyze Java, Python and Javascript.

### [Code climate](https://codeclimate.com)
Can analyze Javascript (and Ruby, PHP).
For example project see https://codeclimate.com/github/NLeSC/PattyVis

### [Codacy](https://www.codacy.com)
Can analyze Java, Python and Javascript (and CSS, PHP, Scala).
The analysis for Java and Python is not as good as for Javascript.
The analysis is quite slow, as it analyzes each past commit.
For example project see https://www.codacy.com/public/sverhoeven/PattyVis/dashboard

### [Scrutinizer](https://scrutinizer-ci.com/)
Can analyze Python (and PHP, Ruby).
For example project see https://scrutinizer-ci.com/g/NLeSC/eEcology-Annotation-WS/

### [Landscape](https://landscape.io)
Can analyze Python. It is missing code coverage.
For example project see https://landscape.io/github/NLeSC/MAGMa

### [Coveralls](https://coveralls.io)
Can show code coverages over time for many languages including Java, Python and Javascript.
For example project see https://coveralls.io/r/NLeSC/MAGMa

### [Codecov](https://codecov.io)
Can show code coverages for many languages including Java, Python and Javascript.
Shows unified coverage and separate coverage for matrix builds.
For example project see https://codecov.io/github/NLeSC/Xenon

For other choices see http://shields.io/ or https://github.com/ripienaar/free-for-dev#code-quality
://codecov.io Develop academic models for sharing and disseminating research software.

## Name spaces
If your language supports namespaces, use **nl.esciencecenter**


## Code reviews

~~We will no no formal code reviews. However, for each project, there is a single person, called the integration manager, responsible for the repository. The integration manager is the only person who commits to the 'blessed' repository. A number of developers then clone from that repository, push to their own independent repositories, and ask the integrator to pull in their changes. If needed, the integration manager can perform a quality review of the code when he handles the pull request.~~

