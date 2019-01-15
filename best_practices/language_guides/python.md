# Python

Python is the "dynamic language of choice" of the Netherlands eScience Center.

## Project setup

When starting a new Python project, consider using our [Python template](https://github.com/NLeSC/python-template). This template provides a basic project structure, so you can spend less time setting up and configuring your new Python packages, and comply with the software guide right from the start.  

## Python versions

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
* Using [`pylint`](https://www.pylint.org) and [`yapf`](https://github.com/google/yapf) while learning Python is an easy way to get familiar with best practices and commonly used coding styles

## Dependencies and package management

Use `pip` or `conda` (note that pip and conda can be used side by side, see also [what is the difference between pip and conda?](http://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda)).

If you are planning on distributing your code at a later stage, be aware that your choice of package management may affect your packaging process. See [Building and packaging](#building-and-packaging-code) for more info.

### Pip + virtualenv

Create isolated Python environments with [virtualenv](https://virtualenv.pypa.io/en/latest/). Very much recommended for all Python projects since it:

* installs Python modules when you are not root,
* contains all Python dependencies so the environment keeps working after an upgrade, and
* lets you select the Python version per environment, so you can test code compatibility between Python 2.x and 3.x.

To manage multiple virtualenv environments and reference them only by name, use [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org). To create a new environment, run `mkvirtualenv environment_name`, to start using it, run `workon environment_name` and to stop working with it, run `deactivate`.

If you are using Python 3 only, you can also make use of the standard library [venv](https://docs.python.org/3/library/venv.html) module. Creating a virtual environment with it is as easy as running `python3 -m venv /path/to/environment`. Run `. /path/to/environment/bin/activate` to start using it and `deactivate` to deactivate.

With virtualenv and venv, pip is used to install all dependencies. An increasing number of packages are using [`wheel`](http://pythonwheels.com), so pip downloads and installs them as binaries. This means they have no build dependencies and are much faster to install. If the installation of a package fails because of its native extensions or system library dependencies and you are not root, you have to revert to Conda (see below).

To keep a log of the packages used by your package, run `pip freeze > requirements.txt` in the root of your package. If some of the packages listed in `requirements.txt` are needed during testing only, use an editor to move those lines to `test_requirements.txt`. Now your package can be installed with
```
pip install -r requirements.txt
pip install -e .
```
The `-e` flag will install your package in editable mode, i.e. it will create a symlink to your package in the installation location  instead of copying the package. This is convenient when developing, because any changes you make to the source code will immediately be available for use in the installed version.

### Conda

[Conda](http://conda.pydata.org/docs/) can be used instead of virtualenv and pip. It easily installs binary dependencies, like Python itself or system libraries. Installation of packages that are not using `wheel` but have a lot of native code is much faster than `pip` because Conda does not compile the package, it only downloads compiled packages. The disadvantage of Conda is that the package needs to have a Conda build recipe. Many Conda build recipes already exist, but they are less common than the `setup.py` that generally all Python packages have.

There are two main distributions of Conda: [Anaconda](http://continuum.io/downloads) and [Miniconda](http://conda.pydata.org/miniconda.html). Anaconda is large and contains a lot of common packages, like numpy and matplotlib, whereas Miniconda is very lightweight and only contains Python. If you need more, the `conda` command acts as a package manager for Python packages.

Use `conda install` to install new packages and `conda update` to keep your system up to date. The `conda` command can also be used to create virtual environments.

For environments where you do not have admin rights (e.g. DAS-5) either Anaconda or Miniconda is highly recommended, since the install is very straightforward. The installation of packages through Conda seems very robust. If you want to add packages to the (Ana)conda repositories, please check [Build using conda](http://conda.pydata.org/docs/build_tutorials.html).
A possible downside of Anaconda is the fact that this is offered by a commercial supplier, but we don't foresee any vendor lock-in issues.

## Editors and IDEs

* Every major text editor supports Python, either natively or through plugins. At the Netherlands eScience Center, often used editors are [atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) and [vim](https://realpython.com/blog/python/vim-and-python-a-match-made-in-heaven/).
* [PyDev](http://www.pydev.org/) is an open source IDE. The source code is available in the [PyDev GitHub repository](https://github.com/fabioz/Pydev). It has debugging, unit testing, and reporting(code analysis, code coverage) support.
* For those seeking an IDE, JetBrains [PyCharm](https://www.jetbrains.com/pycharm/) is the Python IDE of choice. [PyCharm Community Edition](https://www.jetbrains.com/pycharm)  is open source. The source code is available in the [python folder of the IntelliJ repository](https://github.com/JetBrains/intellij-community/tree/master/python). It has visual debugger, unit testing and code coverage support, profiler. JetBrains provides a [list of all tools in PyCharm](https://www.jetbrains.com/pycharm/features/tools.html).

## Coding style conventions

The style guide for Python code is [PEP8](http://www.python.org/dev/peps/pep-0008/) and for docstrings it is [PEP257](https://www.python.org/dev/peps/pep-0257/). The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The more comprehensive [`yapf`](https://github.com/google/yapf) tool can automatically format code for optimal readability according to a chosen style (PEP 8 is the default). The [`isort`](http://timothycrosley.github.io/isort/) package automatically formats and groups all imports in a standard, readable way.

Many linters exists for Python, [`prospector`](https://github.com/landscapeio/prospector) is a tool for running a suite of linters, it supports, among others:
* [pycodestyle](https://github.com/PyCQA/pycodestyle)
* [pydocstyle](https://github.com/PyCQA/pydocstyle)
* [pyflakes](https://pypi.python.org/pypi/pyflakes)
* [pylint](https://www.pylint.org/)
* [mccabe](https://github.com/PyCQA/mccabe)
* [pyroma](https://github.com/regebro/pyroma)

Make sure to set strictness to `veryhigh` for best results. `prospector` has its own configuration file, like the [.prospector.yml default in the Python template](https://github.com/NLeSC/python-template/blob/master/%7B%7Bcookiecutter.project_slug%7D%7D/.prospector.yml), but also supports configuration files for any of the linters that it runs. Most of the above tools can be integrated in text editors and IDEs for convenience.

## Building and packaging code

To create an installable Python package, create a file `setup.py` and use the [`setuptools`](https://setuptools.readthedocs.io) module. Make sure you only import standard library packages in `setup.py`, directly or through importing other modules of your package, or your package will fail to install on systems that do not have the required dependencies pre-installed. Set up continuous integration to test your installation script. Use `pyroma` (can be run as part of `prospector`) as a linter for your installation script.

For packaging your code, you can either use `pip` or `conda`. Neither of them is [better than the other](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/) -- they are different; use the one which is more suitable for your project. `pip` may be more suitable for distributing pure python packages, and it provides some support for binary dependencies using [`wheels`](http://pythonwheels.com). `conda` may be more suitable when you have external dependencies which cannot be packaged in a wheel.

* Use [twine](https://github.com/pypa/twine) to upload your package to the [Python Package Index (PyPI)](https://pypi.org) (so it can be installed with pip) ([tutorial](http://blog.securem.eu/tips%20and%20tricks/2016/02/29/creating-and-publishing-a-python-module/))
  * Packages should be uploaded to PyPI using [your own account](https://pypi.org/account/register)
  * For packages co-owned by the Netherlands eScience Center it is advised to make the PyPI `nlesc` account an collaborator with the owner role. This will give the center a way to perform emergency maintenance of the package if the original uploader is unable to.
  * When distributing code through PyPI, non-python files (such as `requirements.txt`) will not be packaged automatically, you need to [add them to](https://stackoverflow.com/questions/1612733/including-non-python-files-with-setup-py) a `MANIFEST.in` file.
  * To test whether your distribution will work correctly before uploading to PyPI, you can run `python setup.py sdist` in the root of your repository. Then try installing your package with `pip install dist/<your_package>tar.gz.`
* [Build using conda](http://conda.pydata.org/docs/build_tutorials.html)
  * If possible, add packages to [conda-forge](https://conda-forge.github.io/). Use BioConda or custom channels (hosted on GitHub) as alternatives if need be.
* [Python wheels](http://pythonwheels.com/) are the new standard for [distributing](https://packaging.python.org/distributing/#wheels) Python packages. For pure python code, without C extensions, use [`bdist_wheel`](https://packaging.python.org/distributing/#pure-python-wheels) with a Python 2 and Python 3 setup, or use [`bdist_wheel --universal`](https://packaging.python.org/distributing/#universal-wheels) if the code is compatible with both Python 2 and 3. If C extensions are used, each OS needs to have its own wheel. The [manylinux](https://github.com/pypa/manylinux) docker images can be used for building wheels compatible with multiple Linux distributions. See [the manylinux demo](https://github.com/pypa/python-manylinux-demo) for an example. Wheel building can be automated using Travis (for pure python, Linux and OS X) and Appveyor (for Windows).

## Testing

* [pytest](http://pytest.org/latest/) is a full featured Python
testing tool. You can use it with `unittest`.
[Pytest intro](http://pythontesting.net/framework/pytest/pytest-introduction/)
* [Using mocks in Python](http://www.drdobbs.com/testing/using-mocks-in-python/240168251)
* [unittest](https://docs.python.org/3/library/unittest.html) is a
framework available in Python Standard Library.
[Dr.Dobb's on Unit Testing with Python](http://www.drdobbs.com/testing/unit-testing-with-python/240165163)
* [doctest](https://docs.python.org/3/library/doctest.html) searches for pieces of text that look like interactive Python sessions, and then executes those sessions to verify that they work exactly as shown. Always use this if you have example code in your documentation to make sure your examples actually work.

Using `pytest` is preferred over `unittest`, `pytest` has a much more concise syntax and supports many useful features.

Please make sure the command `python setup.py test` can be used to run your tests. When using `pytest`, this can be easily configured as described in the [`pytest` documentation](https://docs.pytest.org/en/latest/goodpractices.html#integrating-with-setuptools-python-setup-py-test-pytest-runner).

### Code coverage

When you have tests it is also a good to see which source code is exercised by the test suite.
[Code coverage](../testing.md#Code_Coverage) can be measured with the [coverage](https://coverage.readthedocs.io) Python package.
The coverage package can also generate html reports which show which line was covered.
Most test runners have have the coverage package integrated.

The code coverage reports can be published online in code quality service or code coverage services.
Preferred is to use one of the code quality service which also handles code coverage listed [below](#Code_quality_analysis_tools_and_services).
If this is not possible or does not fit then use one of the generic code coverage service list in the [software guide](../testing.md#Code_coverage_services).

## Code quality analysis tools and services

Code quality service is explained in the [Generic software guide](../code_quality.html#Software_quality_improvement_tools).
There are multiple code quality services available for Python.
There is not a best one, below is a short list of services with their different strenghts.

### [Codacy](https://www.codacy.com)

Code quality and coverage grouped by file.
Can setup goals to improve quality or coverage by file or category.
For example project see https://www.codacy.com/app/3D-e-Chem/kripodb/dashboard.
Note that Codacy does not install your depencencies, which prevents it from correctly identifying import errors.

### [Scrutinizer](https://scrutinizer-ci.com/)

Code quality and coverage grouped by class and function.
For example project see https://scrutinizer-ci.com/g/NLeSC/eEcology-Annotation-WS/

### [Landscape](https://landscape.io)

Dedicated for Python code quality.
Celery, Django and Flask specific behaviors.
The Landscape analysis tool called [`prospector`](https://github.com/landscapeio/prospector) can be run locally.
For example project see https://landscape.io/github/NLeSC/MAGMa

## Debugging and profiling

### Debugging
* Python has its own debugger called [pdb](https://docs.python.org/3/library/pdb.html). It is a part of the Python distribution.
* [pudb](https://github.com/inducer/pudb) is a console-based Python debugger which can easily be installed using pip.

* If you are looking for IDE's with debugging capabilities, please check **Editors and IDEs** section.

* If you are using Windows, [Python Tools for Visual Studio](https://github.com/Microsoft/PTVS) adds Python support for Visual Studio.
* If you would like to integrate [pdb](https://docs.python.org/3/library/pdb.html) with **vim** editor, you can use [Pyclewn](https://sourceforge.net/projects/pyclewn).

* List of other available software can be found on the [Python wiki page on debugging tools](https://wiki.python.org/moin/PythonDebuggingTools).

* If you are looking for some tutorials to get started:
    - https://pymotw.com/2/pdb
    - https://github.com/spiside/pdb-tutorial
    - https://www.jetbrains.com/help/pycharm/2016.3/debugging.html
    - https://waterprogramming.wordpress.com/2015/09/10/debugging-in-python-using-pycharm/
    - http://www.pydev.org/manual_101_run.html

### Profiling
There are a number of available profiling tools that are suitable for different situations.

* [cProfile](https://docs.python.org/2/library/profile.html) measures number of function calls and how much CPU time they take. The output can be further analyzed using the `pstats` module.
* For more fine-grained, line-by-line CPU time profiling, two modules can be used:
    - [line_profiler](https://github.com/rkern/line_profiler) provides a function decorator that measures the time spent on each line inside the function.
    - [pprofile](https://github.com/vpelletier/pprofile) is less intrusive; it simply times entire Python scripts line-by-line. It can give output in callgrind format, which allows you to study the statistics and call tree in `kcachegrind` (often used for analyzing c(++) profiles from `valgrind`).

More realistic profiling information can usually be obtained by using statistical or sampling profilers. The profilers listed below all create nice flame graphs.
* [vprof](https://github.com/nvdv/vprof)
* [Pyflame](https://github.com/uber/pyflame)
* [nylas-perftools](https://github.com/nylas/nylas-perftools)

## Logging
* [logging](https://docs.python.org/3/library/logging.html) module is the most commonly used tool to track events in Python code.
* Tutorials:
    - [Official Python Logging Tutorial](https://docs.python.org/3/howto/logging.html#logging-basic-tutorial)
    - http://docs.python-guide.org/en/latest/writing/logging
    - [Python logging best practices with JSON steroids](https://logmatic.io/blog/python-logging-with-json-steroids)

## Writing Documentation

Python uses **Docstrings** for function level documentation. You can read a detailed description of docstring usage in [PEP 257](https://www.python.org/dev/peps/pep-0257/).
The default location to put HTML documentation is [Read the Docs](https://readthedocs.org). You can connect your account at Read the Docs to your GitHub account and let the HTML be generated automatically using Sphinx.

### Autogenerating the documentation
There are several tools that automatically generate documentation from docstrings. These are the most used:
* [pydoc](https://docs.python.org/2/library/pydoc.html)
* [Sphinx](http://sphinx-doc.org) (uses reStructuredText as its markup language)
  * [Sphinx quickstart](http://www.sphinx-doc.org/en/master/usage/quickstart.html)
  * [Restructured Text (reST) and Sphinx CheatSheet](http://openalea.gforge.inria.fr/doc/openalea/doc/_build/html/source/sphinx/rest_syntax.html)
  * Instead of using reST, Sphinx can also generate documentation from the more readable [NumPy style](https://github.com/numpy/numpy/blob/master/doc/HOWTO_DOCUMENT.rst.txt) or [Google style](https://google.github.io/styleguide/pyguide.html) docstrings. The [Napoleon extension](http://sphinxcontrib-napoleon.readthedocs.io/) needs to be enabled.

We recommend using Sphinx and Google documentation style. Sphinx can easily be [integrated with setuptools](http://www.sphinx-doc.org/en/stable/setuptools.html), so documentation can be built with in the command `python setup.py build_sphinx`.

## Recommended additional packages and libraries

### General scientific

* [NumPy](http://www.numpy.org/)
* [SciPy](https://www.scipy.org/)
* [Pandas](http://pandas.pydata.org/) data analysis toolkit
* [scikit-learn](http://scikit-learn.org/): machine learning in Python
* [Cython](http://cython.org/) speed up Python code by using C types and calling C functions
* [dask](http://dask.pydata.org) larger than memory arrays and parallel execution

### IPython and Jupyter notebooks (aka IPython notebooks)

[IPython](https://ipython.org/) is an interactive Python interpreter -- very much the same as the standard Python interactive interpreter, but with some [extra features](http://ipython.readthedocs.io/en/stable/interactive/index.html) (tab completion, shell commands, in-line help, etc).

[Jupyter](http://jupyter.org/) notebooks (formerly know as IPython notebooks) are browser based interactive Python enviroments. It incorporates the same features as the IPython console, plus some extras like in-line plotting.  [Look at some examples](https://nbviewer.jupyter.org/github/ipython/ipython/blob/4.0.x/examples/IPython%20Kernel/Index.ipynb) to find out more. Within a notebook you can alternate code with Markdown comments (and even LaTeX), which is great for reproducible research.
[Notebook extensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions) adds extra functionalities to notebooks.
[JupyterLab](https://github.com/jupyterlab/jupyterlab) is a web-based environment with a lot of improvements and integrated tools. JupyterLab is still under **development** and may not be suitable if you need a stable tool.

### Visualization

* [Matplotlib](http://matplotlib.org) has been the standard in scientific visualization. It supports quick-and-dirty plotting through the `pyplot` submodule. Its object oriented interface can be somewhat arcane, but is highly customizable and runs natively on many platforms, making it compatible with all major OSes and environments. It supports most sources of data, including native Python objects, Numpy and Pandas.
    - [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/index.html) is a Python visualisation library based on Matplotlib and aimed towards statistical analysis. It supports numpy, pandas, scipy and statmodels.
* Web-based:
    - [Bokeh](https://github.com/bokeh/bokeh) is Interactive Web Plotting for Python.
    - [Plotly](https://plot.ly/) is another platform for interactive plotting through a web browser, including in Jupyter notebooks.
    - [altair](https://github.com/ellisonbg/altair) is a _grammar of graphics_ style declarative statistical visualization library. It does not render visualizations itself, but rather outputs Vega-Lite JSON data. This can lead to a simplified workflow.
    - [ggplot](https://github.com/yhat/ggpy) is a plotting library imported from R.

### Database Interface

* [psycopg](http://initd.org/psycopg/) is an [PostgreSQL](http://www.postgresql.org) adapter
* [cx_Oracle](http://cx-oracle.sourceforge.net) enables access to [Oracle](https://www.oracle.com/database/index.html) databases
* [monetdb.sql](https://www.monetdb.org/Documentation/Manuals/SQLreference/Programming/Python)
is [monetdb](https://www.monetdb.org) Python client
* [pymongo](http://api.mongodb.org/python/current/#) allows for work with [MongoDB](http://www.mongodb.com) database
* [py-leveldb](https://code.google.com/p/py-leveldb/) are thread-safe Python bindings for [LevelDb](https://github.com/google/leveldb)

### Parallelisation

CPython (the official and mainstream Python implementation) is not built for parallel processing due to the [global interpreter lock](https://wiki.python.org/moin/GlobalInterpreterLock). Note that the GIL only applies to actual Python code, so compiled modules like e.g. `numpy` do not suffer from it.

Having said that, there are many ways to run Python code in parallel:
* The [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) module is the standard way to do parallel executions in one or multiple machines, it circumvents the GIL by creating multiple Python processess.
* A much simpler alternative in Python 3 is the [`concurrent.futures`](https://docs.python.org/3/library/concurrent.futures.html) module.
* [IPython / Jupyter notebooks have built-in parallel and distributed computing capabilities](https://ipython.org/ipython-doc/3/parallel/)
* Many modules have parallel capabilities or can be compiled to have them.
* At the eScience Center, we have developed the [Noodles package](http://nlesc.github.io/noodles/) for creating computational workflows and automatically parallelizing it by dispatching independent subtasks to parallel and/or distributed systems.

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
