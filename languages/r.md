## What is R?
R is a programming language and software environment for statistical computing and graphics, for more information see: https://www.r-project.org/.

### Phylosophy and typical use cases
R is particularly popular in the social, health, and biological sciences where it is used for statistical modeling. R can also be used for signal processing (e.g. FFT), image analyses, and neuro-linguistic programming. The R syntax is similar in compactness and readability as python and matlab by which it serves as a good prototyping environment.

One of the strengths of R is the large number of available open source statistical packages of developed by domain experts. For example, R-package [Seewave](http://rug.mnhn.fr/seewave/) is specialised in sound analyses. Packages are typically released on CRAN [The Comprehensive R Archive Network](http://cran.r-project.org).

Some remarks for readers familiar with Python:
* Just like in Python the speed of R code is dependent on how well you are able to avoid using loops. R is based on C and it is possible to speed up your R-code by writing aspects in C. However, there are also a large variety of existing R functions and packages that have already done this for you, see also the [paragraph on R data handling](./r-subsections/rdata_handling.md).  R can work with Spark and MapReduce, and also comes with parallel processing packages like parallel and foreach.
* Compared with Python, R does not need a notebook to program interactively. In RStudio the user can run sections of the code and then press Ctrl+Enter to run those sections. Consequently R also does not have problems with merging notebooks on github and you can quickly transition from working with scripts to working interactively using the Ctrl+Enter key and back.
* Slicing and selecting objects in R is intuitive for the domain scientist: element 2, 3 and 4 of an object can be selected as 2:4. The numbering starts with 1.
* There is no need for a discussion about what R version to use like in Python: just download the most recent version.

### Recommended sources of information
Stackoverflow, some R packages have their own google.group, and all R functions have their own documentation. 

### Installing compilers and runtimes
...

#### Editors and IDEs
RStudio is the best EDI for R. You will have to install this in addition to installing R. See [paragraph](./r-subsections/rgettingstarted.md) on getting started with R.

#### Coding style conventions
Please see R style conventions as posted by Hadley Wickham in: http://adv-r.had.co.nz/Style.html

One style conversion that has resulted in some discussion is the '<-' syntax for variable assignment. In the majority of R tutorials you will see that authors use 'a <- 3' syntax to assign value 3 to object 'a'. However, R syntax 'a = 3' will preform exactly the same operation in 99.9% of situations. The = syntax has less keystrokes and could therefore be considered be more efficient and readable. Further, the = syntax avoids risk for typos like a < -1, which will produce a boolean, and a <- 1 which will produce a numeric value. Further, the = syntax may be more natural for you when you previously used it in a different language.

In the example below I have shown the practical difference between the two types of syntax:
- addone = function(x) return(x + 1)
  - we have now defined a simple function named addone to add 1 to the function input
- addone(3)
  - will produce 4
- addone(b=3)
  - will throw an error message because the function does not know argument b
- addone(b<-3)
  - will produce 4 as it will first assign 3 to b and then uses b as input argument for addone
- addone(x=3)
  - will produce 4 as it will assign 3 to known function argument x

The <- supporters would argue that this demonstrates that = should be avoided. However, if you favour the = syntax then you should use your own convention to only assign values to expected input arguments by the function (x in the example above) and to never introduce new objects as part of a function call (b in the example above).

#### Building and packaging code 
Is discussed [here](./r-subsections/writting_packages_and_documentation.md).

#### Testing
...
#### Code quality analysis tools and services
...
#### Debugging and Profiling
...
#### Logging
...
#### Writing documentation
...
#### Recommended additional packages and libraries
...
#### Available templates
...

