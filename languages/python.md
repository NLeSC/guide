Python is the "dynamic language of choice" of the Netherlands eScience Center.

The style guide for Python is [PEP8](http://www.python.org/dev/peps/pep-0008/). The `pep8` package is a tool to check your Python code against some of the style conventions in PEP 8. The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The `pyflakes` program checks for semantic errors and some style issues that `pep8` doesn't pick up.

The `nose` (aka `nosetests`) package leads to more readable and easier to run unit tests than Python's built-in unit testing framework.

A good way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/

Introduction to python for data science: http://skillsmatter.com/podcast/java-jee/introducing-python-for-data-science

For numerical work in Python, use NumPy and SciPy and their "vectorized" (MATLAB-style) computations. Good vectorized NumPy code can be several orders of magnitude faster than naive Python loops, and more readable as well.

## Standard project/module layout

The recommended layout for files/modules etc in Python is described by [Kenneth Reitz here]( http://www.kennethreitz.org/essays/repository-structure-and-python)

Tt is also available as a example repo [on GitHub here](https://github.com/kennethreitz/samplemod).

### Anaconda package and environment manager
The way to go if (your preferred version of) **Python is not available and you are not root** is to use the [Anaconda installer](http://continuum.io/downloads).

The standard .sh installs dozens of Python modules, likely everything you need.
If you need more, the `conda` command acts like a package manager for Python packages.
Use `conda install` to install new packages and `conda update` to keep your system up to date.

Alternatively, if you just want Python, you can use the [Miniconda installer](http://conda.pydata.org/miniconda.html).

The `conda` command can also be used to create virtual environments.
The advantage of using `conda` over `virtualenv`/`pip` (see below) is that `conda` downloads compiled packages, whereas `pip` may need to compile things after downloading, which can take quite long.

### Python Virtual Environment
Create isolated Python environments with [virtualenv](https://virtualenv.pypa.io/en/latest/).

Very much recommended for all Python projects, since it fixes all Python dependencies. These may otherwise break, e.g., after a Python upgrade. 

But virtualenv is most handy if you want to **install Python modules when you are not root**. It involves only two commands!

### IPython


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

## Editor

The standard IDE for Python is JetBrains [PyCharm](https://www.jetbrains.com/pycharm/).

[Pydev](http://pydev.org/) is the Python development environment for Eclipse. Add the update site http://pydev.org/updates to Eclipse.

## Testing

* [unittest](https://docs.python.org/3/library/unittest.html) is a framework awailable in Python Standard Library
* [nose](https://nose.readthedocs.org/en/latest/) extends `unittest` to priovide easier testing functionality. [Intro to nose by Titus Brown](http://ivory.idyll.org/articles/nose-intro.html)
* [pytest](http://pytest.org/latest/) is a full featured Python testing tool, that can be used with `nose`, `unittest` and other Python testing tools.

## Writing Documentation

Python uses **Docstrings** for function level documentation. You can read detail description of docstring usage in [PEP 257](https://www.python.org/dev/peps/pep-0257/).

#### autogenerating the documentation
It is possible to automatically generate documentation from docstrings with [pydoc](https://docs.python.org/2/library/pydoc.html) or [sphinx](http://sphinx-doc.org).

