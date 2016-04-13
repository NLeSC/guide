Java code has the big advantage of being very portable.

# Recommended sources of information

* [Javadoc API Documentation](http://docs.oracle.com/javase/8/docs/api/)

# Installing Compilers and Runtimes

Its recommended to use the latest official Oracle version (Java 8) if at all possible. OpenJDK is usually ok as well, but definitely avoid gcj.

* [Download Oracle Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Installing Oracle Java in Ubuntu (via Webupd8)](http://www.webupd8.org/2014/03/oracle-java-8-stable-released-install.html)

# Editors and IDEs

For Java we normally use the [Eclipse](https://www.eclipse.org/) IDE.

# Coding style conventions

We follow the standard coding style defined by SUN.

Latest version seems to be available [here](https://www.scribd.com/doc/15884743/Java-Coding-Style-by-Achut-Reddy).

We have standard code formatting settings for eclipse.

TODO: describe tabs-vs-spaces and indentation size.

[code-format-nlesc-v2.xml](java-eclipse-config/code-format-nlesc-v2.xml)
[code-cleanup-nlesc.xml](java-eclipse-config/code-cleanup-nlesc.xml)

Automated checking of the code style can be done with PMD and FindBugs.

TODO: add (a link to) our standard ruleset.

# Building and packaging code

As a build system we normally use [Gradle](http://gradle.org/). This also determines the project layout, and has standard features for packaging code.

# Testing

The standard unit testing framework in Java is [JUnit](http://junit.org/junit4/). Try to use Junit 4 if at all possible.

Test coverage can be measured with [Jacoco](http://eclemma.org/jacoco/). For running and viewing Jacoco code coverage, use [eclemma](http://www.eclemma.org/)

# Debugging and Profiling

Use jConsole or jVisualVM.

#Logging

For logging, we use [the slf4j api](http://www.slf4j.org). The advantage of slf4j is that it is trivial to change logging implementations. The API distribution also contains a few simple implementations.

To get logging info into Eclipse, one option is to use [logback beagle](http://logback.qos.ch/beagle).

#Writing documentation

Java has the inbuild [JavaDoc](http://www.oracle.com/technetwork/java/javase/documentation/index-jsp-135444.html) system for generating API documentation, usually in the form of HTML. Highly recommended.

#Recommended additional packages and libraries

[JFreeChart](http://www.jfree.org/jfreechart/) is a Java library that allows to do nice looking charts.

#Available Templates

There are currently no Java templates available. See [The Xenon repo on GitHub](https://github.com/nlesc/xenon) as an (rather complex) example.

