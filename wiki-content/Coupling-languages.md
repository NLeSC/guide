In many projects code written in different languages needs to be combined. Luckily, there are a number of ways to do this.

##In a single process (call other language as a library)

###General
* Everything <-> C/C++: [Swig](http://www.swig.org)

###Python
* to Java: [JPype](http://jpype.sourceforge.net/)
* to C/C++: [Cython](http://cython.org/)
* within Java: [Jython] (http://www.jython.org)

###Java
* to C/C++: [Java Native Interface (JNI)](http://docs.oracle.com/javase/7/docs/technotes/guides/jni/)

##Over a network connection
* Do-it-yourself using sockets (time consuming to program)
* ICE (http://www.zeroc.com/ice.html)
* Via xml and http: [XML-RPC](http://en.wikipedia.org/wiki/XML-RPC)
* SOAP (http://en.wikipedia.org/wiki/SOAP)
* JSON-RPC (http://www.jsonrpc.org/)
* RESTful (http://en.wikipedia.org/wiki/Representational_state_transfer)
* Apache Thrift (http://thrift.apache.org/)
* Babel (http://computation.llnl.gov/casc/components/#page=home)
* zeromq (http://www.zeromq.org/)