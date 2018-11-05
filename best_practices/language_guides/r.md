# What is R?
R is a functional programming language and software environment for statistical computing and graphics: https://www.r-project.org/.

## Philosophy and typical use cases
R is particularly popular in the social, health, and biological sciences where it is used for statistical modeling. R can also be used for signal processing (e.g. FFT), machine learning, image analyses, and natural language processing. The R syntax is similar in compactness and readability as python and matlab by which it serves as a good prototyping environment in science.

One of the strengths of R is the large number of available open source statistical packages, often developed by domain experts. For example, R-package [Seewave](http://rug.mnhn.fr/seewave/) is specialised in sound analyses. Packages are typically released on CRAN [The Comprehensive R Archive Network](http://cran.r-project.org). 

A few remarks for readers familiar with Python:
* Compared with Python, R does not need a notebook to program interactively. In [RStudio](https://www.rstudio.com/), an IDE that is installed separately, the user can run sections of the code by selecting them and pressing Ctrl+Enter. Consequently the user can quickly transition from working with scripts to working interactively using the Ctrl+Enter.
* Numbering in R starts with 1 and not with 0.

### Recommended sources of information
Some R packages have their own google.group. All R functions come with documentation in a standardized format. To learn R, see the book [Advanced R](http://adv-r.had.co.nz) by Hadley Wickham, or [Writing better R code](http://www.bioconductor.org/help/course-materials/2013/CSAMA2013/friday/afternoon/R-programming.pdf) from the same author. Further, stackoverflow and standard search engines can lead you to answers to issues.

# Getting started

### Setting up R
To install R check detailed description at [CRAN website](http://cran.r-project.org).

#### IDE
R programs can be written in any text editor. R code can be run from the command line or interactively within R environment, that can be started with `R` command in the shell. To quit R environment type `q()`.

[RStudio](http://www.rstudio.com/products/RStudio/) is a free powerful integrated development environment (IDE) for R. It features editor with code completion, command line environment, file manager, package manager and history lookup among others. You will have to install RStudio in addition to installing R. Please note that updating RStudio does not automatically update R and the other way around.

Within RStudio you can work on ad-hoc code or create a project. Compared with Python an R project is a bit like a virtual environment as it preserves the workspace and installed packages for that project. Creating a project is needed to build an R package. A project is created via the menu at the top of the screen.

### Installing compilers and runtimes
Not needed as most functions in R are already compiled in C, nevertheless R has compiling functionality as described in the [R manual](https://stat.ethz.ch/R-manual/R-devel/library/compiler/html/compile.html). See [overview by Hadley Wickham](http://r-pkgs.had.co.nz/src.html).

# Coding style conventions
It is good to follow the R style conventions as [posted](http://adv-r.had.co.nz/Style.html) by Hadley Wickham, which is seems compatible with the R style convention as posted by [Google](https://google.github.io/styleguide/Rguide.xml).

One point in both style conventions that has resulted in some discussion is the '<-' syntax for variable assignment. In the majority of R tutorials and books you will see that authors use this syntax, e.g. 'a <- 3' to assign value 3 to object 'a'. Please note that R syntax 'a = 3' will preform exactly the same operation in 99.9% of situations. The = syntax has less keystrokes and could therefore be considered more efficient and readable. Further, the = syntax avoids the risk for typos like a < -1, which will produce a boolean if 'a' exists, and a <- 1 which will produce an object 'a' with a numeric value. Further, the = syntax may be more natural for those who already use it in other computing languages.

The difference between '<-' and '=' is mainly related to scoping. See the [official R definition](https://stat.ethz.ch/R-manual/R-devel/library/base/html/assignOps.html) for more information. The example below demonstrates the difference in behaviour:

Define a simple function named addone to add 1 to the function input:
- addone = function(x) return(x + 1)
- addone(3)
  - will produce 4
- addone(b=3)
  - will throw an error message because the function does not know argument b
- addone(b<-3)
  - will produce 4 as it will first assign 3 to b and then uses b as value for the first argument in addone, which happens to be x
- addone(x=3)
  - will produce 4 as it will assign 3 to known function argument x

The <- supporters will argue that this example demonstrates that = should be avoided. However, it also demonstrates that = syntax can work in the context of function input if = is only used for assigning values to input arguments that are expected by the function (x in the example above) and to never introduce new R objects as part of a function call (b in the example above).

From a computer science perspective it is probably best to adhere to the <- convention. From a domain science perspective it is understandable to use =. The code performs exactly the same and guarantees that new objects created as part of a function call result in an error. Please note that it is also possible to develop code with = syntax and to transfer it to <- syntax once the code is finished, the formatR package offers tools for doing this. The CRAN repository for R packages accepts both forms of syntax.

# Recommended additional packages and libraries

## Plotting with basic functions and ggplot2 and ggvis
For a generic impression of what R can do see: http://www.r-graph-gallery.com/all-graphs/

The basic R installation comes with a wide range of functions to plot data to a window on your screen or to a file. If you need to quickly inspect your data or create a custom-made static plot then the basic functions offer the building blocks to do the job. There is a [Statmethods.net tutorial with some examples of plotting options in R](http://www.statmethods.net/graphs/index.html).

However, externally contributed plotting packages may offer easier syntax or convenient templates for creating plots. The most popular and powerful contributed graphics package is [ggplot2](http://ggplot2.org). Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application, and this [tutorial](http://www.statmethods.net/advgraphs/ggplot2.html).

In summary, it is good to familiarize yourself with both the basic plotting functions as well as the contributed graphics packages. In theory, the basic plot functions can do everything that ggplot2 can do, it is mostly a matter of how much you like either syntax and how much freedom you need to tailor the visualisation to your use case.

## Building interactive web applications with shiny
Thanks to [shiny.app](http://shiny.rstudio.com) it is possible to make interactive web application in R without the need to write javascript or html.

## Building reports with knitr
[knitr](https://yihui.name/knitr/) is an R package designed to build dynamic reports in R. It's possible to generate on the fly new pdf or html documents with results of computations embedded inside.

## Preparing data for analysis
There are packages that ease tidying up messy data, e.g. [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape). The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham. There is also the google group [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) to discuss topics related to data manipulation in R.

## Speeding up code
As in many computing languages loops should be avoided in R. Here is a list of tricks to speed up your code:

* read.table() is sometimes faster than read.csv()
* ifelse()
* lapply()
* sapply()
* mapply()
* grep()
* %in% for testing whether and where values in one object occur in another object
* aggregate()
* which() for identifying which object indices match a certain condition
* table() for getting a frequency table of categorical data
* grep()
* gsub()
* dplyr package, see [also](http://dplyr.tidyverse.org/)

Use ?functionname to access fucntion documentation.


# Package development

### Building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz).

### Package documentation
Read [Documentation](http://r-pkgs.had.co.nz/man.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book for details about documenting R code.

Customary R uses `.Rd` files in `/man` directory for documentation. These files and folders are automatically created by RStudio when you create a new project from your existing R-function files.  

If you use 'roxygen' function level comments starting with `#'` are recognised by `roxygen` and are used to automatically generate .Rd files. Read more about `roxygen` syntax on it's [github page](https://github.com/yihui/roxygen2). `roxygen` will also populate `NAMESPACE` file which is necessary to manage package level imports.

R function documentation offers plenty of space to document the functionality, including code examples, literature references, and links to related functions. Nevertheless, it can sometimes be helpful for the user to also have a more generic description of the package with for example use-cases. You can do this with a `vignette`. Read more about vignettes in [Package documentation](http://r-pkgs.had.co.nz/vignettes.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book.


# Available templates
* http://rapport-package.info/
* http://shiny.rstudio.com/articles/templates.html
* http://rmarkdown.rstudio.com/developer_document_templates.html

# Testing, Checking, Debugging and Profiling

### Testing and checking
[Testthat](https://github.com/hadley/testthat) is a testing package by Hadley Wickham. [Testing chapter](http://r-pkgs.had.co.nz/tests.html) of a book [R packages](http://r-pkgs.had.co.nz) describes in detail testing process in R with use of `testthat`. Further, [testthat: Get Started with Testing](https://journal.r-project.org/archive/2011-1/RJournal_2011-1_Wickham.pdf) by Whickham may also provide a good starting point.

See also [checking](http://r-pkgs.had.co.nz/check.html) and [testing](http://r-pkgs.had.co.nz/tests.html) R packages. note that within RStudio R package check and R package test can be done via simple toolbar clicks.

### Continuous integration
Continuous integration can be done with for example [Travis], (https://travis-ci.org/), see [Chapter](../testing.md) on testing.

### Debugging and Profiling
Debugging is possible in RStudio, see [link](https://support.rstudio.com/hc/en-us/articles/205612627-Debugging-with-RStudio). For profiling tips see [link](http://adv-r.had.co.nz/Profiling.html)


# Not in this tutorial yet:
* Logging
