Java code has the big advantage of being very portable.

## Recommended sources of information

* [Javadoc API Documentation](http://docs.oracle.com/javase/8/docs/api/)

## Installing Compilers and Runtimes

Its recommended to use the latest official Oracle version (Java 8) if at all possible. OpenJDK is usually ok as well, but definitely avoid gcj.

* [Download Oracle Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Installing Oracle Java in Ubuntu (via Webupd8)](http://www.webupd8.org/2014/03/oracle-java-8-stable-released-install.html)

## Editors and IDEs

For Java we normally use the [Eclipse](https://www.eclipse.org/) IDE.

## Coding style conventions

We follow the standard coding style defined by SUN.

Latest version seems to be the [Java Coding Style on Scribd](https://www.scribd.com/doc/15884743/Java-Coding-Style-by-Achut-Reddy).

We have standard code formatting settings for eclipse.

TODO: describe tabs-vs-spaces and indentation size.

[code_format_nlesc_v2.xml](java_eclipse_config/code_format_nlesc_v2.xml)
[code_cleanup_nlesc.xml](java_eclipse_config/code_cleanup_nlesc.xml)

Automated checking of the code style can be done with PMD and FindBugs.`

TODO: add (a link to) our standard ruleset.

## Building and packaging code

As a build system we normally use [Gradle](http://gradle.org/). This also determines the project layout, and has standard features for packaging code.

## Testing

The standard unit testing framework in Java is [JUnit](http://junit.org/junit4/). Try to use Junit 4 if at all possible.

Use following naming scheme to distinguish unit and integration tests:
* Unit tests: **/Test*.java, **/*Test.java, and **/*TestCase.java
* Integration tests: **/IT*.java, **/*IT.java, and **/*ITCase.java

Test coverage can be measured with [Jacoco](http://eclemma.org/jacoco/). For running and viewing Jacoco code coverage, use [eclemma](http://www.eclemma.org/)

## Code quality analysis tools and services

### [SonarQube](https://about.sonarqube.com/)

SonarQube is an open platform to manage code quality which can also show code coverage and count test results over time.
SonarQube can analyze Java, C, C++, Python and Javascript.
The analysis can be done in IDE or command line using http://www.sonarlint.org/
For example project see https://sonarqube.com/dashboard?id=nlesc%3Axenon-cli
Notifications of each project must be configured in your own account settings.

### [Codacy](https://www.codacy.com)

Code quality and coverage grouped by file.
Can setup goals to improve quality or coverage by file or category.
For example project see https://www.codacy.com/app/NLeSC/Xenon/dashboard

### [Codecov](https://codecov.io)
Can show code coverages for many languages including Java, Python and Javascript.
Shows unified coverage and separate coverage for matrix builds.
For example project see https://codecov.io/github/NLeSC/Xenon

## Debugging and Profiling

Use jConsole or jVisualVM.

## Logging

For logging, we use [the slf4j api](http://www.slf4j.org). The advantage of slf4j is that it is trivial to change logging implementations. The API distribution also contains a few simple implementations.

To get logging info into Eclipse, one option is to use [logback beagle](http://logback.qos.ch/beagle).

##Writing documentation

Java has the inbuild [JavaDoc](http://www.oracle.com/technetwork/java/javase/documentation/index-jsp-135444.html) system for generating API documentation, usually in the form of HTML. Highly recommended.

##Recommended additional packages and libraries

[JFreeChart](http://www.jfree.org/jfreechart/) is a Java library that allows to do nice looking charts.

## Available Templates

There are currently no Java templates available. See [The Xenon repo on GitHub](https://github.com/nlesc/xenon) as an (rather complex) example.

## Distribution

We use [Bintray](https://bintray.com/howbintrayworks) to publish packages.

To make the package easy for users to install, the packages can be added to [JCenter](http://jcenter.bintray.com/).
JCenter is the largest repository in the world for Java and Android OSS libraries, packages and components.
In a Gradle build file the JCenter repository can be used by adding:
```
repositories {
    jcenter()
}
```

Packages developed at the Netherlands eScience Center can be found in the [Bintray NLeSC repository](https://bintray.com/nlesc).
