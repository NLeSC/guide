Python is the "dynamic language of choice" of the Netherlands eScience Center.

## Recommended sources of information

* A good way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/
* Introduction to python for data science: http://skillsmatter.com/podcast/java-jee/introducing-python-for-data-science
* [Blog](http://ianozsvald.com/) by Ian Ozsvald, mostly on high performance python.
* [Planet Python](http://planetpython.org)

## Coding style conventions

The style guide for Python is [PEP8](http://www.python.org/dev/peps/pep-0008/). The `pep8` package is a tool to check your Python code against some of the style conventions in PEP 8. The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The `pyflakes` program checks for semantic errors and some style issues that `pep8` doesn't pick up.

## Standard project/module layout

The recommended layout for files/modules etc in Python is described by [Kenneth Reitz here]( http://www.kennethreitz.org/essays/repository-structure-and-python)

It is also available as a example repo [on GitHub here](https://github.com/kennethreitz/samplemod).

Ben made a [version of this repository](https://github.com/benvanwerkhoven/empty_python) that is more NLeSC-like, but not perfect (e.g., needs replacing of project name).

An alternative might be to create a project template using (for example) [cookiecutter](https://github.com/audreyr/cookiecutter). This solution needs more research.

## Dependencies and package management

Use `pip` or `conda` (note that pip and conda can be used side by side, see also [what is the difference between pip and conda?](http://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda)).

### Pip + virtualenv

Create isolated Python environments with [virtualenv](https://virtualenv.pypa.io/en/latest/). Very much recommended for all Python projects since it:

* installs Python modules when you are not root,
* contains all Python dependencies so the environment keeps working after an upgrade, and
* lets you select the Python version per environment, so you can test code compatibility between Python 2.x and 3.x.

To manage multiple virtualenv environments and reference them only by name, use [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org). To create a new environment, run `mkvirtualenv environment_name`, to start using it, run `workon environment_name` and to stop working with it, run `deactivate`.

With virtualenv, pip is used to install all dependencies. An increasing number of packages are using [`wheel`](http://pythonwheels.com), so pip downloads and installs them as binaries. This means they have no build dependencies and are much faster to install. If the installation of a package fails because of its native extensions or system library dependencies and you are not root, you have to revert to Conda (see below).

To keep a log of the packages used in your package, run `pip freeze > requirements.txt` in the root of your package. If some of the packages listed in `requirements.txt` are needed during testing only, use an editor to move those lines to `test_requirements.txt`. Now your package can be installed with
```
pip install -r requirements.txt
pip install -e .
```

### Conda

Conda can be used instead of virtualenv and pip. It easily installs binary dependencies, like Python itself or system libraries. Installation of packages that are not using `wheel` but have a lot of native code is much faster than `pip` because Conda does not compile the package, it only downloads compiled packages. The disadvantage of Conda is that the package needs to have a Conda build recipe. Many Conda build recipes already exist, but they are less common than the `setup.py` that generally all Python packages have.

There are two main distributions of Conda: [Anaconda](http://continuum.io/downloads) and [Miniconda](http://conda.pydata.org/miniconda.html). Anaconda is large and contains a lot of common packages, like numpy and matplotlib, whereas Miniconda is very lightweight and only contains Python. If you need more, the `conda` command acts as a package manager for Python packages.

Use `conda install` to install new packages and `conda update` to keep your system up to date. The `conda` command can also be used to create virtual environments.

## Building and packaging code

* [How to submit a package to PyPI](http://peterdowns.com/posts/first-time-with-pypi.html) (so it can be installed with pip)
* [Build using conda](http://conda.pydata.org/docs/build_tutorials.html)

## Editors and IDEs

* [atom](https://atom.io/)
* JetBrains [PyCharm](https://www.jetbrains.com/pycharm/)
* [Pydev](http://pydev.org/) (Python development environment for Eclipse)
  * To install add the update site http://pydev.org/updates to Eclipse.

## Testing

* [unittest](https://docs.python.org/3/library/unittest.html) is a framework awailable in Python Standard Library. [Dr.Dobb's on Unit Testing with Python](http://www.drdobbs.com/testing/unit-testing-with-python/240165163)
* [nose](https://nose.readthedocs.org/en/latest/) extends `unittest` to provide easier testing functionality. [Intro to nose by Titus Brown](http://ivory.idyll.org/articles/nose-intro.html)
* [pytest](http://pytest.org/latest/) is a full featured Python testing tool, that can be used with `nose`, `unittest` and other Python testing tools.
* [Using mocks in Python](http://www.drdobbs.com/testing/using-mocks-in-python/240168251)

Please use `nose` (aka `nosetests`), because nose tests are more readable and easier to run.

## Writing Documentation

Python uses **Docstrings** for function level documentation. You can read a detailed description of docstring usage in [PEP 257](https://www.python.org/dev/peps/pep-0257/).

### Autogenerating the documentation

* [pydoc](https://docs.python.org/2/library/pydoc.html)
* [Sphinx](http://sphinx-doc.org) (uses reStructuredText as its markup language)
  * [sphinx tutorial](http://www.sphinx-doc.org/en/stable/tutorial.html)
  * [Restructured Text (reST) and Sphinx CheatSheet](http://openalea.gforge.inria.fr/doc/openalea/doc/_build/html/source/sphinx/rest_syntax.html))

## Debugging

TODO

## Profiling

TODO

## Python versions and libraries

Currently, there are two Python versions: 2 and 3.
[Should I use Python 2 or Python 3 for my development activity?](https://wiki.python.org/moin/Python2orPython3)
Generally, Python 2.x is legacy, Python 3.x is the present and future of the language. However, not all Python libraries are compatible with Python 3.

* [Six](https://pythonhosted.org/six/): Python 2 and 3 Compatibility Library
* [2to3](https://docs.python.org/2/library/2to3.html): Automated Python 2 to 3 code translation
* [python-modernize](https://github.com/mitsuhiko/python-modernize): wrapper around 2to3

### General scientific

* [NumPy](http://www.numpy.org/)
* [SciPy](https://www.scipy.org/)
* [Pandas](http://pandas.pydata.org/) data analysis toolkit
* [scikit-learn](http://scikit-learn.org/): machine learning in Python
* [Cython](http://cython.org/) speed up Python code by using C types and calling C functions

### IPython and IPython notebooks

TODO

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

The [multiprocessing](https://docs.python.org/2/library/multiprocessing.html) module allows to do very easy and fast parallel executions in one or multiple machines.

### Web Frameworks

There are a lot web frameworks for Python that are very easy to run.

* [flask](http://flask.pocoo.org/)
* [cherrypy](http://www.cherrypy.org/)
* [Django](https://www.djangoproject.com/)

We recommend `flask`.

### NLP/text mining

* [nltk](http://www.nltk.org/) Natural Language Toolkit
* [Pattern](http://www.clips.ua.ac.be/pattern): web/text mining module
* [gensim](https://radimrehurek.com/gensim/): Topic modeling

## Software quality improvement tools

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
