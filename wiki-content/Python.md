Python is the "dynamic language of choice" of the Netherlands eScience Center.

The style guide for Python is [PEP8](http://www.python.org/dev/peps/pep-0008/). The `pep8` package is a tool to check your Python code against some of the style conventions in PEP 8. The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The `pyflakes` program checks for semantic errors and some style issues that `pep8` doesn't pick up.

The `nose` (aka `nosetests`) package leads to more readable and easier to run unit tests than Python's built-in unit testing framework.

A good way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/

Introduction to python for data science: http://skillsmatter.com/podcast/java-jee/introducing-python-for-data-science

For numerical work in Python, use NumPy and SciPy and their "vectorized" (MATLAB-style) computations. Good vectorized NumPy code can be several orders of magnitude faster than naive Python loops, and more readable as well.

### Anaconda installer
The way to go if (your preferred version of) **Python is not available and you are not root** is to use the [Anaconda installer](http://continuum.io/downloads).

The standard .sh installs dozens of Python modules, likely everything you need.

Alternatively, if you just want Python, you can use the [Miniconda installer](http://conda.pydata.org/miniconda.html).

### Python Virtual Environment
Create isolated Python environments with [virtualenv](https://virtualenv.pypa.io/en/latest/).

Very much recommended for all Python projects, since it fixes all Python dependencies. These may otherwise break, e.g., after a Python upgrade. 

But virtualenv is most handy if you want to **install Python modules when you are not root**. It involves only two commands!

### IPython
[IPython](http://ipython.org) is a great alternative to default python shell.


### Plotting
* [Matplotlib](http://matplotlib.org) together with Numpy can be used when plotting your data.
* [Bokeh](https://github.com/bokeh/bokeh) is Interactive Web Plotting for Python.
* [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/index.html) is Python visualisation
library based on matplotlib. It supports numpy, pandas, scipy and statmodels.

### Database Interface
* [psycopg](http://initd.org/psycopg/) is an [PostgreSQL](http://www.postgresql.org) adapter
* [cx_Oracle](http://cx-oracle.sourceforge.net) enables access to [Oracle](https://www.oracle.com/database/index.html) databases
* [monetdb.sql](https://www.monetdb.org/Documentation/Manuals/SQLreference/Programming/Python)
is [monetdb](https://www.monetdb.org) Python client
* [pymongo](http://api.mongodb.org/python/current/#) allows for work with [MongoDB](http://www.mongodb.com) database
* [py-leveldb](https://code.google.com/p/py-leveldb/) are thread-safe Python bindings for [LevelDb](https://github.com/google/leveldb)

### Parallelisation
The multiprocessing module allows to do very easy and fast parallel executions in one or multiple machines.

### Web Frameworks
There are a set of web frameworks for Python that are very easy to run. We recommend cherrypy

### social media
* [Blog](http://ianozsvald.com/) by Ian Ozsvald, mostly on high performance python.
* [Planet Python](http://planetpython.org)
