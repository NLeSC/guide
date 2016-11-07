# Python

Python is the "dynamic language of choice" of the Netherlands eScience Center.

Currently, there are two Python versions: 2 and 3.
[Should I use Python 2 or Python 3 for my development activity?](https://wiki.python.org/moin/Python2orPython3)
Generally, Python 2.x is legacy, Python 3.x is the present and future of the language. However, not all Python libraries are compatible with Python 3.

* [Six](https://pythonhosted.org/six/): Python 2 and 3 Compatibility Library
* [2to3](https://docs.python.org/2/library/2to3.html): Automated Python 2 to 3 code translation
* [python-modernize](https://github.com/mitsuhiko/python-modernize): wrapper around 2to3

The philosophy of Python is summarized in the [Zen of Python](https://www.python.org/dev/peps/pep-0020/). In Python, this text can be retrieved with the `import this` command.

## Recommended sources of information

* A good way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/
* Introduction to python for data science: http://skillsmatter.com/podcast/java-jee/introducing-python-for-data-science
* [Blog](http://ianozsvald.com/) by Ian Ozsvald, mostly on high performance python.
* [Planet Python](http://planetpython.org)

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

## Editors and IDEs

* Every major text editor supports Python, either natively or through plugins. At NLeSC, often used editors are [atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) and [vim](https://realpython.com/blog/python/vim-and-python-a-match-made-in-heaven/).
* For those seeking an IDE, JetBrains [PyCharm](https://www.jetbrains.com/pycharm/) is the Python IDE of choice.

## Coding style conventions

The style guide for Python is [PEP8](http://www.python.org/dev/peps/pep-0008/). The `pep8` package is a tool to check your Python code against some of the style conventions in PEP 8. The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The `pyflakes` program checks for semantic errors and some style issues that `pep8` doesn't pick up.

## Building and packaging code

* [How to submit a package to PyPI](http://peterdowns.com/posts/first-time-with-pypi.html) (so it can be installed with pip)
* [Build using conda](http://conda.pydata.org/docs/build_tutorials.html)
* [Python wheels](http://pythonwheels.com/) are the new standard for [distributing](https://packaging.python.org/distributing/#wheels) Python packages. For pure python code, without C extensions, use [`bdist_wheel`](https://packaging.python.org/distributing/#pure-python-wheels) with a Python 2 and Python 3 setup, or use [`bdist_wheel --universal`](https://packaging.python.org/distributing/#universal-wheels) if the code is compatible with both Python 2 and 3. If C extensions are used, each OS needs to have its own wheel. The [manylinux](https://github.com/pypa/manylinux) docker images can be used for building wheels compatible with multiple Linux distributions. See [the manylinux demo](https://github.com/pypa/python-manylinux-demo) for an example. Wheel building can be automated using Travis (for pure python, Linux and OS X) and Appveyor.

TODO: choose recommended approach (issue #38)

## Testing

* [unittest](https://docs.python.org/3/library/unittest.html) is a framework available in Python Standard Library. [Dr.Dobb's on Unit Testing with Python](http://www.drdobbs.com/testing/unit-testing-with-python/240165163)
* [nose](https://nose.readthedocs.org/en/latest/) extends `unittest` to provide easier testing functionality. [Intro to nose by Titus Brown](http://ivory.idyll.org/articles/nose-intro.html)
* [pytest](http://pytest.org/latest/) is a full featured Python testing tool, that can be used with `nose`, `unittest` and other Python testing tools.
* [Using mocks in Python](http://www.drdobbs.com/testing/using-mocks-in-python/240168251)

Please use `nose` (aka `nosetests`), because nose tests are more readable and easier to run.

### Code coverage

When you have tests it is also a good to see which source code is exercised by the test suite.
[Code coverage](../software/testing.html#Code_Coverage) can be measured with the [coverage](https://coverage.readthedocs.io) Python package.
The coverage package can also generate html reports which show which line was covered.
Most test runners have have the coverage package integrated.

The code coverage reports can be published online in code quality service or code coverage services.
Preferred is to use one of the code quality service which also handles code coverage listed [below](#Code_quality_analysis_tools_and_services).
If this is not possible or does not fit then use one of the generic code coverage service list in the [software guide](../sofware/testing.md#Code_coverage_services).

## Code quality analysis tools and services

Code quality service is explained in the [Generic software guide](../software/code_quality.html#Software_quality_improvement_tools).
There are multiple code quality services available for Python.
There is not a best one, below is a short list of services with their different strenghts.

### [Codacy](https://www.codacy.com)

Code quality and coverage grouped by file.
Can setup goals to improve quality or coverage by file or category.
For example project see https://www.codacy.com/app/3D-e-Chem/kripodb/dashboard

### [Scrutinizer](https://scrutinizer-ci.com/)

Code quality and coverage grouped by class and function.
For example project see https://scrutinizer-ci.com/g/NLeSC/eEcology-Annotation-WS/

### [Landscape](https://landscape.io)

Dedicated for Python code quality.
Celery, Django and Flask specific behaviors.
The Landscape analysis tool called [prospector](https://github.com/landscapeio/prospector) can be run locally.
For example project see https://landscape.io/github/NLeSC/MAGMa

## Debugging and profiling

### Debugging
TODO

### Profiling
There are a number of available profiling tools that are suitable for different situations.

* [cProfile](https://docs.python.org/2/library/profile.html) measures number of function calls and how much CPU time they take. The output can be further analyzed using the `pstats` module.
* For more fine-grained, line-by-line CPU time profiling, two modules can be used:
    - [line_profiler](https://github.com/rkern/line_profiler) provides a function decorator that measures the time spent on each line inside the function.
    - [pprofile](https://github.com/vpelletier/pprofile) is less intrusive; it simply times entire Python scripts line-by-line. It can give output in callgrind format, which allows you to study the statistics and call tree in `kcachegrind` (often used for analyzing c(++) profiles from `valgrind`).


## Logging

TODO

## Writing Documentation

Python uses **Docstrings** for function level documentation. You can read a detailed description of docstring usage in [PEP 257](https://www.python.org/dev/peps/pep-0257/).
The default location to put HTML documentation is [Read the Docs](https://readthedocs.org). You can connect your account at Read the Docs to your GitHub account and let the HTML be generated automatically using Sphinx.

### Autogenerating the documentation
There are several tools that automatically generate documentation from docstrings. These are the most used:
* [pydoc](https://docs.python.org/2/library/pydoc.html)
* [Sphinx](http://sphinx-doc.org) (uses reStructuredText as its markup language)
  * [sphinx tutorial](http://www.sphinx-doc.org/en/stable/tutorial.html)
  * [Restructured Text (reST) and Sphinx CheatSheet](http://openalea.gforge.inria.fr/doc/openalea/doc/_build/html/source/sphinx/rest_syntax.html)
  * Instead of using reST, Sphinx can also generate documentation from the more readable [NumPy style](https://github.com/numpy/numpy/blob/master/doc/HOWTO_DOCUMENT.rst.txt) or [Google style](https://google.github.io/styleguide/pyguide.html) docstrings. The [Napoleon extension](http://sphinxcontrib-napoleon.readthedocs.io/) needs to be enabled.

We recommend using Sphinx and documentation style TODO: choose preferred documentation style.

## Recommended additional packages and libraries

### General scientific

* [NumPy](http://www.numpy.org/)
* [SciPy](https://www.scipy.org/)
* [Pandas](http://pandas.pydata.org/) data analysis toolkit
* [scikit-learn](http://scikit-learn.org/): machine learning in Python
* [Cython](http://cython.org/) speed up Python code by using C types and calling C functions

### IPython and Jupyter notebooks (aka IPython notebooks)

[IPython](https://ipython.org/) is an interactive Python interpreter -- very much the same as the standard Python interactive interpreter, but with some [extra features](http://ipython.readthedocs.io/en/stable/interactive/index.html) (tab completion, shell commands, in-line help, etc).

[Jupyter](http://jupyter.org/) notebooks (formerly know as IPython notebooks) are browser based interactive Python enviroments. It incorporates the same features as the IPython console, plus some extras like in-line plotting.  [Look at some examples](https://nbviewer.jupyter.org/github/ipython/ipython/blob/4.0.x/examples/IPython%20Kernel/Index.ipynb) to find out more. Within a notebook you can alternate code with Markdown comments (and even LaTeX), which is great for reproducible research.

### Visualization

* [Matplotlib](http://matplotlib.org) has been the standard in scientific visualization. It supports quick-and-dirty plotting through the `pyplot` submodule. Its object oriented interface can be somewhat arcane, but is highly customizable and runs natively on many platforms, making it compatible with all major OSes and environments. It supports most sources of data, including native Python objects, Numpy and Pandas.
    - [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/index.html) is a Python visualisation library based on Matplotlib and aimed towards statistical analysis. It supports numpy, pandas, scipy and statmodels.
* Web-based:
    - [Bokeh](https://github.com/bokeh/bokeh) is Interactive Web Plotting for Python.
    - [Plotly](https://plot.ly/) is another platform for interactive plotting through a web browser, including in Jupyter notebooks.
    - [altair](https://github.com/ellisonbg/altair) is a _grammar of graphics_ style declarative statistical visualization library. It does not render visualizations itself, but rather outputs Vega-Lite JSON data. This can lead to a simplified workflow.

### Database Interface

* [psycopg](http://initd.org/psycopg/) is an [PostgreSQL](http://www.postgresql.org) adapter
* [cx_Oracle](http://cx-oracle.sourceforge.net) enables access to [Oracle](https://www.oracle.com/database/index.html) databases
* [monetdb.sql](https://www.monetdb.org/Documentation/Manuals/SQLreference/Programming/Python)
is [monetdb](https://www.monetdb.org) Python client
* [pymongo](http://api.mongodb.org/python/current/#) allows for work with [MongoDB](http://www.mongodb.com) database
* [py-leveldb](https://code.google.com/p/py-leveldb/) are thread-safe Python bindings for [LevelDb](https://github.com/google/leveldb)

### Parallelisation

CPython (the official and mainstream Python implementation) is not built for parallel processing due to the [global interpreter lock](https://wiki.python.org/moin/GlobalInterpreterLock).

Having said that, there are many packages that circumvent this constraint.
* The [multiprocessing](https://docs.python.org/2/library/multiprocessing.html) module allows to do very easy and fast parallel executions in one or multiple machines.
* [IPython / Jupyter notebooks have built-in parallel and distributed computing capabilities](https://ipython.org/ipython-doc/3/parallel/)
* At NLeSC, we have developed the [Noodles package](http://nlesc.github.io/noodles/) for creating computational workflows and automatically parallelizing it by dispatching independent subtasks to parallel and/or distributed systems.

### Web Frameworks

There are a lot web frameworks for Python that are very easy to run.

* [flask](http://flask.pocoo.org/)
* [cherrypy](http://www.cherrypy.org/)
* [Django](https://www.djangoproject.com/)
* [bottle](http://bottlepy.org/) (similar to flask, but a bit more light-weight for a JSON-REST service)

We recommend `flask`.

### NLP/text mining

* [nltk](http://www.nltk.org/) Natural Language Toolkit
* [Pattern](http://www.clips.ua.ac.be/pattern): web/text mining module
* [gensim](https://radimrehurek.com/gensim/): Topic modeling

## Available templates

TODO: _What needs to be added here?_

### Standard project/module layout

The recommended layout for files/modules etc in Python is described by [Kenneth Reitz here]( http://www.kennethreitz.org/essays/repository-structure-and-python)

It is also available as a example repo [on GitHub here](https://github.com/kennethreitz/samplemod).

Ben made a [version of this repository](https://github.com/benvanwerkhoven/empty_python) that is more NLeSC-like, but not perfect (e.g., needs replacing of project name).

An alternative might be to create a project template using (for example) [cookiecutter](https://github.com/audreyr/cookiecutter). This solution needs more research.
