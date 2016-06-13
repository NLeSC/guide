## What is R?
R is a programming language and software environment for statistical computing and graphics, for more information see: https://www.r-project.org/.

### Phylosophy and typical usecases
R is particularly popular in the social, health, and biological sciences where it is used for statistical modeling. R can also be used for signal processing (e.g. FFT), image analyses, and neuro-linguistic programming. The R syntax is similar in compactness and readability as python and matlab by which it serves as a good prototyping environment.

One of the strengths of R is the large number of available open source statistical packages of developed by domain experts. For example, R-package [Seewave](http://rug.mnhn.fr/seewave/) is specialised in sound analyses. Packages are typically released on CRAN [The Comprehensive R Archive Network](http://cran.r-project.org).

Some remarks for readers familiar with Python:
* Just like in Python the speed of R code is dependent on how well you are able to avoid using loops. R is based on C and it is possible to speed up your R-code by writing aspects in C. However, there are also a large variety of existing R functions and packages that have already done this for you, see also the [paragraph on R data handling](./r-subsections/rdata_handling.md).  R can work with Spark and MapReduce, and also comes with parallel processing packages like parallel and foreach.
* Compared with Python, R does not really need a notebook to program interactivley. In RStudio the user can run sections of the code and then pressing Ctrl+Enter to run those sections. Consequently R also does not have problems with merging notebooks on github and you can quickly transition from working with scripts to working interactively and back.
* Slicing and selecting objects in R is intuitive for the domain scientist: element 2, 3 and 4 of an object can be selected as 2:4. The numbering starts with 1.
* There is no need for a discussion about what R version to use: just download the most recent version.

### Recommended sources of information

### Installing compilers and runtimes
Not needed

#### Editors and IDEs
RStudio is the best EDI for R. You will have to install this in addition to installing R. See [paragraph](./r-subsections/rgettingstarted.md) on getting started with R.

#### Coding style conventions

#### Building and packaging code
#### Testing

#### Code quality analysis tools and services

#### Debugging and Profiling
#### Logging
#### Writing documentation
#### Recommended additional packages and libraries
#### Available templates

