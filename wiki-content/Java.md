Java code has the big advantage of being very portable. Its recommended to use the latest official Oracle version (Java 7) if at all possible. OpenJDK is usually ok as well, but definitely avoid gcj.

* [Download Oracle Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Javadoc API Documentation](http://docs.oracle.com/javase/7/docs/api/)

###Installing Oracle Java 7 in Ubuntu

To install Ocracle Java 7 (or 6) in Ubuntu, use the webupd8 ppa:

http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html

After updating, don't forget to switch to it using:

    update-java-alternatives -s java-7-oracle

Do not use "update-alternatives --display java", as this only sets the java vm, not javac, jar, jconsole, etc.

###Logging

For logging, we use [the slf4j api](http://www.slf4j.org). The advantage of slf4j is that it is trivial to change logging implementations. The API distribution also contains a few simple implementations.

To get logging info into Eclipse, one option is to use [logback beagle](http://logback.qos.ch/beagle).

###Project directory tree conventions

* src - root of Java source
* lib - external dependencies
* build - temporary build files
* dist - self-contained directory distribution (compiled jar files, copy of lib)
* scripts - utility scripts (e.g. to start a main and set the classpath, etc)

* Be careful when using 'bin' to store executables, as it is used by eclipse to generate class files to. 
  It is recommend to change the default eclipse class output directory to for example 'build' or 'build/eclipse'. 


### Graphs

JFreeChart is a Java library that allows to do nice looking charts.