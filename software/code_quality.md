# Code Quality

There are several ways to improve software quality.

## Coding style
Here a very nice article about why coding styles matter, and increase software quality:
[Improving software quality, why Coding Style Matters](http://coding.smashingmagazine.com/2012/10/25/why-coding-style-matters/)

See the collection of config files for automated coding style [here](https://github.com/NLeSC/knowledge/tree/master/software/config)

Q: Do we want to enforce layout on commits to the repository?

### editor configuration
Use [.editorconfig](http://editorconfig.org/) to adhere to the basic code style
rules.

[download](https://github.com/NLeSC/knowledge/tree/master/software/config) nlesc editor config file.

**editorconfig**  supports most of the editors. [Here](http://editorconfig.org/)
you can download plugins for your editor of choice.

If you use eclipse, use [this plugin](https://github.com/ncjones/editorconfig-eclipse).

### Style guides for different languages and frameworks

If you cannot find here the style guide for particular language, check [google style guide page](https://code.google.com/p/google-styleguide/).

#### Web development
* [general front dev guidelines](https://github.com/bendc/frontend-guidelines)
* [AngularJS styleguide](https://github.com/johnpapa/angular-styleguide)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

#### Python
* [PEP8](https://www.python.org/dev/peps/pep-0008/)

#### MATLAB

Good Coding Practice By Example

##### One assignment per line
###### Good
    a=1;
    b=3;
###### Bad
    a=1;b=3;

##### Use sensible variable names to iterate over for loops
###### Good
    nameStrings = {'John','Matthew','Veronica','Michael','Nico'};
    nNames = numel(nameStrings);
    for iName = 1:nNames
        disp(nameStrings{iName})
    end
###### Bad
    nameStrings = {'John','Matthew','Veronica','Michael','Nico'};
    nNames = numel(nameStrings);
    for x = 1:nNames
        disp(nameStrings{x})
    end

### Name spaces
If your language supports namespaces, use **nl.esciencecenter**

# Static analysis
* Findbugs (Java)
* Clang (C)
* Valgrind (C)

## Code reviews

We will no no formal code reviews. However, for each project, there is a single person, called the integration manager, responsible for the repository. The integration manager is the only person who commits to the 'blessed' repository. A number of developers then clone from that repository, push to their own independent repositories, and ask the integrator to pull in their changes. If needed, the integration manager can perform a quality review of the code when he handles the pull request.

## Software quality improvement tools

There are several web services that analyze code. The analyze code when triggered by a git push and can ingest code coverage generated on a Continuous-Integration server. They are free for open source projects. We also run our own SonarQube instance.

### SonarQube

SonarQube (http://www.sonarqube.org/) is an open platform to manage code quality.
On our Jenkins build server we do a SonarQube analysis for each Jenkins job. Out SonarQube instance is hosted at https://sonar.esciencecenter.nl and is behind a login.
Sonar Qube can analyze Java, Python and Javascript.

### [Code climate](https://codeclimate.com)
Can analyze Javascript (and Ruby, PHP).
For example project see https://codeclimate.com/github/NLeSC/PattyVis

**2015-08 Chris:** Cannot recommend Code Climate. I just tried both Code Climate and Scrutinizer for PHP. Both seem fine for code analysis although Scrutinizer seems to find more issues. Both also can show test coverage. However, Code Climate does little more than showing you a percentage and a list of all your source files with their coverage in a completely unclear way. I found their code coverage tools completely useless actually. I therefore switched to Scrutinizer which does satisfy my test report needs. 

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
