# Python

*Page maintainer: Bouwe Andela* [@bouweandela](https://github.com/bouweandela)


Python is the "dynamic language of choice" of the Netherlands eScience Center.
We use it for data analysis and data science projects using the SciPy stack and Jupyter notebooks, and for [many other types of projects](https://github.com/NLeSC?language=python): workflow management, visualization, NLP, web-based tools and much more.
It is a good default choice for many kinds of projects due to its generic nature, its large and broad ecosystem of third-party modules and its compact syntax which allows for rapid prototyping.
It is not the language of maximum performance, although in many cases performance critical components can be easily replaced by modules written in faster, compiled languages like C(++) or Cython.

The philosophy of Python is summarized in the [Zen of Python](https://www.python.org/dev/peps/pep-0020/).
In Python, this text can be retrieved with the `import this` command.

## Project setup

When starting a new Python project, consider using our [Python template](https://github.com/NLeSC/python-template). This template provides a basic project structure, so you can spend less time setting up and configuring your new Python packages, and comply with the software guide right from the start.

## Use Python 3, avoid 2

Python 2 and Python 3 have co-existed for a long time, but [starting from 2020, development of Python 2 is officially abandoned](https://www.python.org/doc/sunset-python-2/), meaning Python 2 will no longer be improved, even in case of security issues.
If you are creating a new package, use Python 3.
It is possible to write Python that is both Python 2 and Python 3 compatible (e.g. using [Six](https://pypi.org/project/six/)), but only do this when you are 100% sure that your package won't be used otherwise.
If you need Python 2 because of old, incompatible Python 2 libraries, strongly consider upgrading those libraries to Python 3 or replacing them altogether.
Building and/or using Python 2 is probably discouraged even more than, say, using Fortran 77, since at least Fortran 77 compilers are still being maintained.

* [Things you’re probably not using in Python 3 – but should](https://datawhatnow.com/things-you-are-probably-not-using-in-python-3-but-should/)
* [Six](https://pypi.org/project/six/): Python 2 and 3 Compatibility Library
* [2to3](https://docs.python.org/2/library/2to3.html): Automated Python 2 to 3 code translation
* [python-modernize](https://github.com/mitsuhiko/python-modernize): wrapper around 2to3

## Learning Python

* A popular way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/
* Using [`pylint`](https://www.pylint.org) and [`yapf`](https://github.com/google/yapf) while learning Python is an easy way to get familiar with best practices and commonly used coding styles

## Dependencies and package management

To install Python packages use `pip` or `conda` (or both, see also [what is the difference between pip and conda?](http://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda)).

If you are planning on distributing your code at a later stage, be aware that your choice of package management may affect your packaging process. See [Building and packaging](#building-and-packaging-code) for more info.

### Use virtual environments

We strongly recommend creating isolated "virtual environments" for each Python project.
These can be created with `venv` or with `conda`.
Advantages over installing packages system-wide or in a single user folder:

* Installs Python modules when you are not root.
* Contains all Python dependencies so the environment keeps working after an upgrade.
* Keeps environments clean for each project, so you don't get more than you need (and can easily reproduce that minimal working situation).
* Lets you select the Python version per environment, so you can test code compatibility between Python versions

### Pip + a virtual environment

If you don't want to use `conda`, create isolated Python environments with the standard library [`venv`](https://docs.python.org/3/library/venv.html) module.
If you are still using Python 2, [`virtualenv`](https://virtualenv.pypa.io/en/latest/) and [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.org) can be used instead.

With `venv` and `virtualenv`, `pip` is used to install all dependencies. An increasing number of packages are using [`wheel`](http://pythonwheels.com), so `pip` downloads and installs them as binaries. This means they have no build dependencies and are much faster to install.

If the installation of a package fails because of its non-Python extensions or system library dependencies and you are not root, you could switch to `conda` (see below).

### Conda

[Conda](http://conda.pydata.org/docs/) can be used instead of venv and pip, since it is both an environment manager and a package manager. It easily installs binary dependencies, like Python itself or system libraries.
Installation of packages that are not using `wheel`, but have a lot of non-Python code, is much faster with Conda than with `pip` because Conda does not compile the package, it only downloads compiled packages.
The disadvantage of Conda is that the package needs to have a Conda build recipe.
Many Conda build recipes already exist, but they are less common than the `setuptools` configuration that generally all Python packages have.

There are two main "official" distributions of Conda: [Anaconda](https://docs.anaconda.com/anaconda/install/) and [Miniconda](https://docs.conda.io/projects/miniconda/en/latest/) (and variants of the latter like miniforge, explained below).
Anaconda is large and contains a lot of common packages, like numpy and matplotlib, whereas Miniconda is very lightweight and only contains Python. If you need more, the `conda` command acts as a package manager for Python packages.
If installation with the `conda` command is too slow for your purposes, it is recommended that you use [`mamba`](https://github.com/mamba-org/mamba) instead.

For environments where you do not have admin rights (e.g. DAS-6) either Anaconda or Miniconda is highly recommended since the installation is very straightforward.
The installation of packages through Conda is very robust.

A possible downside of Anaconda is the fact that this is offered by a commercial supplier, but we don't foresee any vendor lock-in issues, because all packages are open source and can still be obtained elsewhere.
Do note that since 2020, [Anaconda has started to ask money from large institutes](https://www.anaconda.com/blog/anaconda-commercial-edition-faq) for downloading packages from their [main channel (called the `default` channel)](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/channels.html#what-is-a-conda-channel) through `conda`.
This does not apply to universities and most research institutes, but could apply to some government institutes that also perform research and definitely applies to large for-profit companies.
Be aware of this when choosing the distribution channel for your package.
An alternative, community-driven Conda distribution that avoids this problem altogether because it only installs packages from `conda-forge` by default is [miniforge](https://github.com/conda-forge/miniforge).
Miniforge includes both the faster `mamba` as well as the traditional `conda`.

## Building and packaging code

### Making an installable package
To create an installable Python package you will have to create a `pyproject.toml` file.
This will contain three kinds of information: metadata about your project, information on how to build and install your package, and configuration settings for any tools your project may use. Our [Python template](https://github.com/NLeSC/python-template) already does this for you.

#### Project metadata
Your project metadata will be under the `[project]` header, and includes such information as the name, version number, description and dependencies.
The [Python Packaging User Guide](https://packaging.python.org/en/latest/specifications/pyproject-toml/#declaring-project-metadata-the-project-table) has more information on what else can or should be added here.
For your dependencies, you should keep version constraints to a minimum; use, in order of descending preference: no constraints, lower bounds, lower + upper bounds, exact versions.
Use of `requirements.txt` is discouraged, unless necessary for something specific, see the [discussion here](https://github.com/NLeSC/guide/issues/156).

It is best to keep track of direct dependencies for your project from the start and list these in your `pyproject.toml`
If instead you are writing a new `pyproject.toml` for an existing project, a recommended way to find all direct dependencies is by running your code in a clean environment (probably by running your test suite) and installing one by one the dependencies that are missing, as reported by the ensuing errors.
It is possible to find the full list of currently installed packages with `pip freeze` or `conda list`, but note that this is not ideal for listing dependencies in `pyproject.toml`, because it also lists all dependencies of the dependencies that you use.

#### Build system
Besides specifying your project's own metadata, you also have to specify a build-system under the `[build-system]` header.
We currently recommend using [`hatchling`](https://pypi.org/project/hatchling/) or [`setuptools`](https://setuptools.pypa.io/en/latest/build_meta.html).
Note that Python's build system landscape is still in flux, so be sure to look upthe some current practices in the [packaging guide's section on build backends](https://packaging.python.org/en/latest/tutorials/packaging-projects/#choosing-a-build-backend) and [authoritative blogs like this one](https://blog.ganssle.io/articles/2021/10/setup-py-deprecated.html).
One important thing to note is that use of `setup.py` and `setup.cfg` has been officially deprecated and we should migrate away from that.

#### Tool configuration
Finally, `pyproject.toml` can be used to specify the configuration for any other tools like `pytest`, `ruff` and `mypy` your project may use.
Each of these gets their own section in your `pyproject.toml` instead of using their own file, saving you from having dozens of such files in your project.

#### Installation
When the `pyproject.toml` is written, your package can be installed with
```
pip install -e .
```
The `-e` flag will install your package in editable mode, i.e. it will create a symlink to your package in the installation location  instead of copying the package. This is convenient when developing, because any changes you make to the source code will immediately be available for use in the installed version.

Set up continuous integration to test your installation setup.
You can use `pyroma` as a linter for your installation configuration.

### Packaging and distributing your package
For packaging your code, you can either use `pip` or `conda`. Neither of them is [better than the other](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/) -- they are different; use the one which is more suitable for your project. `pip` may be more suitable for distributing pure python packages, and it provides some support for binary dependencies using [`wheels`](http://pythonwheels.com). `conda` may be more suitable when you have external dependencies which cannot be packaged in a wheel.

#### Build via the [Python Package Index (PyPI)](https://pypi.org) so that the package can be installed with pip

* [General instructions](https://packaging.python.org/en/latest/tutorials/packaging-projects/) 
* We recommend to configure GitHub Actions to upload the package to PyPI automatically for each release. 
    * For new repositories, it is recommended to use [trusted publishing](https://docs.pypi.org/trusted-publishers/) because it is more secure than using secret tokens from GitHub.
        * For a workflow using secret tokens instead, see this [example workflow in DIANNA](https://github.com/dianna-ai/dianna/blob/main/.github/workflows/release.yml).
    * You can follow [these instructions](https://packaging.python.org/en/latest/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows/) to set up GitHub Actions workflows with trusted publishing. 
        * The [`verbose`](https://github.com/marketplace/actions/pypi-publish#for-debugging) option for pypi workflows is useful to see why a workflow failed.
        * To avoid unnecessary workflow runs, you can follow the example in the [sirup package](https://github.com/ivory-tower-private-power/sirup/blob/main/.github/workflows/release.yml): manually trigger pushes to pypi and investigate potential bugs during this process with a manual upload.
* Manual uploads with twine 
    * Because PyPI and Test PyPI require Two-Factor Authentication per January 2024, you need to mimick GitHub's trusted publishing to publish manually with `twine`.
    * You can follow the section on "The manual way" as described [here](https://docs.pypi.org/trusted-publishers/using-a-publisher/).
* Additional guidelines:
    * Packages should be uploaded to PyPI using [your own account](https://pypi.org/account/register)
    * For packages developed in a team or organization, it is recommended that you create a team or organizational account on PyPI and add that as a collaborator with the owner rule. This will allow your team or organization to maintain the package even if individual contributors at some point move on to do other things. At the Netherlands eScience Center, we are a fairly small organization, so we use a single backup account (`nlesc`).
    * When distributing code through PyPI, non-python files (such as `requirements.txt`) will not be packaged automatically, you need to [add them to](https://stackoverflow.com/questions/1612733/including-non-python-files-with-setup-py) a `MANIFEST.in` file.
    * To test whether your distribution will work correctly before uploading to PyPI, you can run `python -m build` in the root of your repository. Then try installing your package with `pip install dist/<your_package>tar.gz.`
    * `python -m build` will also build [Python wheels](http://pythonwheels.com/), the current standard for [distributing](https://packaging.python.org/distributing/#wheels) Python packages. This will work out of the box for pure Python code, without C extensions. If C extensions are used, each OS needs to have its own wheel. The [manylinux](https://github.com/pypa/manylinux) Docker images can be used for building wheels compatible with multiple Linux distributions. Wheel building can be automated using GitHub Actions or another CI solution, where you can build on all three major platforms using a build matrix.


#### [Build using conda](https://conda-forge.org/docs/maintainer/adding_pkgs.html)
* **Make use of [conda-forge](https://conda-forge.org/) whenever possible**, since it provides many automated build services that save you tons of work, compared to using your own conda repository. It also has a very active community for when you need help.
* Use BioConda or custom channels (hosted on GitHub) as alternatives if need be.


## Editors and IDEs

Every major text editor supports Python, either natively or through plugins.
At the Netherlands eScience Center, some popular editors or IDEs are:

- [vscode](https://code.visualstudio.com/) holds the middle ground between a lightweight text editor and a full-fledged language-dedicated IDE.
- [vim](https://realpython.com/blog/python/vim-and-python-a-match-made-in-heaven/) or `emacs` (don't forget to install plugins to get the most out of these two), two versatile classic powertools that can also be used through remote SSH connection when needed.
- JetBrains [PyCharm](https://www.jetbrains.com/pycharm/) is the Python-specific IDE of choice. [PyCharm Community Edition](https://www.jetbrains.com/pycharm) is free and open source; the source code is available in the [python folder of the IntelliJ repository](https://github.com/JetBrains/intellij-community/tree/master/python).

## Coding style conventions

The style guide for Python code is [PEP8](http://www.python.org/dev/peps/pep-0008/) and for docstrings it is [PEP257](https://www.python.org/dev/peps/pep-0257/). We highly recommend following these conventions, as they are widely agreed upon to improve readability. To make following them significantly easier, we recommend using a linter.

Many linters exists for Python.
The most popular one is currently [Ruff](https://github.com/astral-sh/ruff).
Although it is new (see the website for the complete function parity comparison with alternatives), it works well and has an active community.
An alternative is [`prospector`](https://github.com/landscapeio/prospector), a tool for running a suite of linters, including, among others [pycodestyle](https://github.com/PyCQA/pycodestyle), [pydocstyle](https://github.com/PyCQA/pydocstyle), [pyflakes](https://pypi.python.org/pypi/pyflakes), [pylint](https://www.pylint.org/), [mccabe](https://github.com/PyCQA/mccabe) and [pyroma](https://github.com/regebro/pyroma).
Some of these tools have seen decreasing community support recently, but it is still a good alternative, having been a defining community default for years.

Most of the above tools can be integrated in text editors and IDEs for convenience.

Autoformatting tools like [`yapf`](https://github.com/google/yapf) and [`black`](https://black.readthedocs.io/en/stable/index.html) can automatically format code for optimal readability. `yapf` is configurable to suit your (team's) preferences, whereas `black` enforces the style chosen by the `black` authors. The [`isort`](http://timothycrosley.github.io/isort/) package automatically formats and groups all imports in a standard, readable way.

Ruff can do autoformatting as well and can function as a drop-in replacement of `black` and `isort`.


## Testing

Use [pytest](https://docs.pytest.org/) as the basis for your testing setup.
This is preferred over the `unittest` standard library, because it has a much more concise syntax and supports many useful features.

It [has many plugins](https://docs.pytest.org/en/stable/plugins.html).
For linting, we have found `pytest-pycodestyle`, `pytest-pydocstyle`, `pytest-mypy` and `pytest-flake8` to be useful.
Other plugins we had good experience with are `pytest-cov`, `pytest-html`, `pytest-xdist` and `pytest-nbmake`.

Creating mocks can also be done within the pytest framework by using the `mocker` fixture provided by the `pytest-mock` plugin or by using `MagicMock` and `patch` from `unittest`.
For a general explanation about mocking, see the [standard library docs on mocking](https://docs.python.org/3/library/unittest.mock.html).

To run your test suite, it can be convenient to use `tox`.
Testing with `tox` allows for keeping the testing environment separate from your development environment.
The development environment will typically accumulate (old) packages during development that interfere with testing; this problem is avoided by testing with `tox`.

### Code coverage

When you have tests it is also a good to see which source code is exercised by the test suite.
[Code coverage](https://book.the-turing-way.org/reproducible-research/testing/testing-guidance#aim-to-have-a-good-code-coverage) can be measured with the [coverage](https://coverage.readthedocs.io) Python package.
The coverage package can also generate html reports which show which line was covered.
Most test runners have have the coverage package integrated.

The code coverage reports can be published online using a code quality service or code coverage services.
Preferred is to use one of the code quality service which also handles code coverage listed [below](#Code_quality_analysis_tools_and_services).
If this is not possible or does not fit then use a generic code coverage service such as [Codecov](https://about.codecov.io/) or [Coveralls](https://coveralls.io/).

## Code quality analysis tools and services

Code quality service is explained in the [The Turing Way](https://book.the-turing-way.org/reproducible-research/code-quality/code-quality-style.html#online-services-providing-software-quality-checks).
There are multiple code quality services available for Python, all of which have their pros and cons.
See [The Turing Way](https://book.the-turing-way.org/reproducible-research/code-quality/code-quality-resources.html) for links to lists of possible services.
We currently setup [Sonarcloud](https://sonarcloud.io/) by default in our [Python template](https://github.com/NLeSC/python-template).
To reproduce the Sonarcloud pipeline locally, you can use [SonarLint](https://www.sonarlint.org/) in your IDE.
If you use another editor, perhaps it is more convenient to pick another service like Codacy or Codecov.


## Debugging and profiling

### Debugging

* Python has its own debugger called [pdb](https://docs.python.org/3/library/pdb.html). It is a part of the Python distribution.
* [pudb](https://github.com/inducer/pudb) is a console-based Python debugger which can easily be installed using pip.
* If you are looking for IDEs with debugging capabilities, see the [Editors and IDEs section](#editors-and-ides).
* If you are using Windows, [Python Tools for Visual Studio](https://github.com/Microsoft/PTVS) adds Python support for Visual Studio.
* If you would like to integrate [pdb](https://docs.python.org/3/library/pdb.html) with `vim`, you can use [Pyclewn](https://sourceforge.net/projects/pyclewn).

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
    - [Python logging best practices](https://www.datadoghq.com/blog/python-logging-best-practices/)

## Writing Documentation

Python uses **Docstrings** for function level documentation. You can read a detailed description of docstring usage in [PEP 257](https://www.python.org/dev/peps/pep-0257/).
The default location to put HTML documentation is [Read the Docs](https://readthedocs.org). You can connect your account at Read the Docs to your GitHub account and let the HTML be generated automatically using Sphinx.

### Autogenerating the documentation

There are several tools that automatically generate documentation from docstrings.
At the eScience Center, we mostly use [Sphinx](http://sphinx-doc.org), which uses reStructuredText as its markup language, but can be extended to use Markdown as well.

* [Sphinx quickstart](http://www.sphinx-doc.org/en/master/usage/quickstart.html)
* [reStructuredText Primer](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html)
* Instead of using reST, Sphinx can also generate documentation from the more readable [NumPy style](https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard) or [Google style](https://google.github.io/styleguide/pyguide.html) docstrings. The [Napoleon extension](http://sphinxcontrib-napoleon.readthedocs.io/) needs to be enabled.

We recommend using the Google documentation style.
Use `sphinx-build` to build your documentation.

You can also integrate entire Jupyter notebooks into your HTML Sphinx output with [nbsphinx](https://nbsphinx.readthedocs.io).
This way, your demo notebooks, for instance, can double as documentation.
Of course, the notebooks will not be interactive in the compiled HTMl, but they will include all code and output cells.

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
[JupyterLab](https://github.com/jupyterlab/jupyterlab) is a web-based environment with a lot of improvements and integrated tools.

Jupyter notebooks contain data that makes it hard to nicely keep track of code changes using version control. If you are using git,
you can [add filters that automatically remove output cells and unneeded metadata from your notebooks](http://timstaley.co.uk/posts/making-git-and-jupyter-notebooks-play-nice/).
If you do choose to keep output cells in the notebooks (which can be useful to showcase your code's capabilities statically from GitHub) use [ReviewNB](https://www.reviewnb.com/) to automatically create nice visual diffs in your GitHub pull request threads.
It is good practice to restart the kernel and run the notebook from start to finish in one go before saving and committing, so you are sure that everything works as expected.

### Visualization

* [Matplotlib](http://matplotlib.org) has been the standard in scientific visualization. It supports quick-and-dirty plotting through the `pyplot` submodule. Its object oriented interface can be somewhat arcane, but is highly customizable and runs natively on many platforms, making it compatible with all major OSes and environments. It supports most sources of data, including native Python objects, Numpy and Pandas.
    - [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/index.html) is a Python visualisation library based on Matplotlib and aimed towards statistical analysis. It supports numpy, pandas, scipy and statmodels.
* Web-based:
    - [Bokeh](https://github.com/bokeh/bokeh) is Interactive Web Plotting for Python.
    - [Plotly](https://plot.ly/) is another platform for interactive plotting through a web browser, including in Jupyter notebooks.
    - [altair](https://github.com/ellisonbg/altair) is a _grammar of graphics_ style declarative statistical visualization library. It does not render visualizations itself, but rather outputs Vega-Lite JSON data. This can lead to a simplified workflow.
    - [ggplot](https://github.com/yhat/ggpy) is a plotting library imported from R.

### Parallelisation

CPython (the official and mainstream Python implementation) is not built for parallel processing due to the [global interpreter lock](https://wiki.python.org/moin/GlobalInterpreterLock). Note that the GIL only applies to actual Python code, so compiled modules like e.g. `numpy` do not suffer from it.

Having said that, there are many ways to run Python code in parallel:
* The [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) module is the standard way to do parallel executions in one or multiple machines, it circumvents the GIL by creating multiple Python processess.
* A much simpler alternative in Python 3 is the [`concurrent.futures`](https://docs.python.org/3/library/concurrent.futures.html) module.
* [IPython / Jupyter notebooks have built-in parallel and distributed computing capabilities](https://ipython.org/ipython-doc/3/parallel/)
* Many modules have parallel capabilities or can be compiled to have them.
* At the eScience Center, we have developed the [Noodles package](https://research-software-directory.org/software/noodles) for creating computational workflows and automatically parallelizing it by dispatching independent subtasks to parallel and/or distributed systems.

### Web Frameworks

There are convenient Python web frameworks available:

* [flask](http://flask.pocoo.org/)
* [CherryPy](https://cherrypy.dev/)
* [Django](https://www.djangoproject.com/)
* [bottle](http://bottlepy.org/) (similar to flask, but a bit more light-weight for a JSON-REST service)

We recommend `flask`.

### NLP/text mining

* [nltk](http://www.nltk.org/) Natural Language Toolkit
* [Pattern](https://github.com/clips/pattern): web/text mining module
* [gensim](https://radimrehurek.com/gensim/): Topic modeling

### Creating programs with command line arguments

* For run-time configuration via command-line options, the built-in [`argparse`](https://docs.python.org/library/argparse.html) module usually suffices.
* A more complete solution is [`ConfigArgParse`](https://github.com/bw2/ConfigArgParse). This (almost) drop-in replacement for `argparse` allows you to not only specify configuration options via command-line options, but also via (ini or yaml) configuration files and via environment variables.
* Other popular libraries are [`click`](https://click.palletsprojects.com) and [`fire`](https://google.github.io/python-fire/).
