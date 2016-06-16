# What is R?
R is a programming language and software environment for statistical computing and graphics, for more information see: https://www.r-project.org/.

# Getting started

### Seting up R
To install R check detailed description at [CRAN website](http://cran.r-project.org).

#### IDE
R programs can be writen in any editor. R code can be run from the command line or interactively within R environment, that can be started with `R` command in the shell. To quit R environment type `q()`.

[RStudio](http://www.rstudio.com/products/RStudio/) is a free powerfull integrated development environment (IDE) for R. It features editor with code completion, command line environment, file manager, package manager and history lookup among others. You will have to install RStudio in addition to installing R. Please note that updating RStudio does not update R and the other way around.

Within RStudio you can work on ad-hoc code or create a project. Compared with Python an R project is a bit like a virtual environment as it preserves the workspace and installed packages for that project. Creating a project is needed to build an R package. A project is created via the menu at the top of the screen.

### Installing compilers and runtimes
Not needed as most functions in R are already compiled in C, nevertheless R has compiling functionality see [here](https://stat.ethz.ch/R-manual/R-devel/library/compiler/html/compile.html). See overview by Hadley Wickham [here](http://r-pkgs.had.co.nz/src.html).


 

# Phylosophy and typical use cases
R is particularly popular in the social, health, and biological sciences where it is used for statistical modeling. R can also be used for signal processing (e.g. FFT), image analyses, and neuro-linguistic programming. The R syntax is similar in compactness and readability as python and matlab by which it serves as a good prototyping environment.

One of the strengths of R is the large number of available open source statistical packages of developed by domain experts. For example, R-package [Seewave](http://rug.mnhn.fr/seewave/) is specialised in sound analyses. Packages are typically released on CRAN [The Comprehensive R Archive Network](http://cran.r-project.org).

Some remarks for readers familiar with Python:
* Just like in Python the speed of R code is dependent on how well you are able to avoid using loops. R is based on C and it is possible to speed up your R-code by writing aspects in C or C++. However, there are also a large variety of existing R functions and packages that have already done this for you, see also the [paragraph on R data handling](./r-subsections/rdata_handling.md) which gives tips on how to speed up your code.  R can work with Spark and MapReduce, and also comes with parallel processing packages like parallel and foreach.
* Compared with Python, R does not need a notebook to program interactively. In RStudio the user can run sections of the code by selecting them and pressing Ctrl+Enter. Consequently R also does not have problems equivalent to merging notebooks on github and you can quickly transition from working with scripts to working interactively using the Ctrl+Enter key and back.
* Numbering in R starts with 1 and not with 0.
* There is no need for a discussion about what R version to use like in Python: just download the most recent version.

### Recommended sources of information
Some R packages have their own google.group. All R functions have their own documentation in a standardized format. To learn R, Hadley Wickham wrote a great book about programming in R. It's called [Advanced R](http://adv-r.had.co.nz). Further, stackoverflow and google should answer most of your questions.

### Coding style conventions
It is good to follow the R style conventions as [posted](http://adv-r.had.co.nz/Style.html) by Hadley Wickham, which is seems compatible with the R style convention as posted by [Google](https://google.github.io/styleguide/Rguide.xml).

One point in both style conventions that has resulted in some discussion is the '<-' syntax for variable assignment. In the majority of R tutorials and books you will see that authors use this syntax, e.g. 'a <- 3' to assign value 3 to object 'a'. Please note that R syntax 'a = 3' will preform exactly the same operation in 99.9% of situations. The = syntax has less keystrokes and could therefore be considered more efficient and readable. Further, the = syntax avoids the risk for typos like a < -1, which will produce a boolean if a exists, and a <- 1 which will produce an object 'a' with a numeric value. Further, the = syntax may be more natural for those who already use it in a other computing languages.

The difference between '<-' and '=' is mainly related to scoping, for an official R definition look [here](https://stat.ethz.ch/R-manual/R-devel/library/base/html/assignOps.html). The example below demonstrates the difference in behaviour:

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

From a computer science perspective it is probably best to adhere to the <- convention. From a domain science perspective it is understandable to use =. The code performs exactly the same. Please note that it is also possible to develop code with = syntax and to transfer it to <- syntax once the code is finished, the formatR package offers tools for doing this. The CRAN repository for R packages accepts both forms of syntax.

# Recommended additional packages and libraries

## Graphics

#### plotting
For an generic impression of what R can do see: http://www.r-graph-gallery.com/all-graphs/

The basic R installation comes with a wide range of functions to plot data to a window on your screen or to a file. If you need to quickly inspect your data or create a custom-made static plot then the basic functions offer the building blocks to do the job. A tutorial with some examples of plotting optins in R can be found [here](http://www.statmethods.net/graphs/index.html).

However, externally contributed plotting packages may offer easier syntax or convenient templates for creating plots. The most popular and powerful contributed graphics package is [ggplot2](http://ggplot2.org). Also see this overview (pdf) of [ggplot2](http://ggplot2.org/resources/2007-past-present-future.pdf) options. Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application, and this [tutorial](http://www.statmethods.net/advgraphs/ggplot2.html).

In summary, it is good to familiarize yourself with both the basic plotting functions as well as the contributed graphics packages. In theory, the basic plot functions can do everything that ggplot2 can do, it is mostly a matter of how much you like either syntax.


#### building interactive web applications
Thanks to [shiny.app](http://shiny.rstudio.com) it is possible to make interactive web application in R without the need to write javascript or html.

## Data handling

#### preparing data for analysis
There are packages that ease tidying up messy data, e.g. [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape). The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham. There is also [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) group used to discuss topics related to data manipulation in R.

#### speeding up code
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
* dplyr package, see [also](https://cran.rstudio.com/web/packages/dplyr/vignettes/introduction.html)

Use ?functionname to access fucntion documentation.









### Available templates
http://rapport-package.info/
http://shiny.rstudio.com/articles/templates.html
http://rmarkdown.rstudio.com/developer_document_templates.html

### Testing, Debugging and Profiling
* [testthat](https://github.com/hadley/testthat) is a testing package by Hadley Wickham. [Testing chapter](http://r-pkgs.had.co.nz/tests.html) of a book [R packages](http://r-pkgs.had.co.nz) describes in detail testing process in R with use of `testthat`. See also [checking](http://r-pkgs.had.co.nz/check.html) and [testing](http://r-pkgs.had.co.nz/tests.html) R packages. note that within RStudio R package check and R package test can be done via simple toolbar clicks.
Debugging is possible in RStudio, see [link](https://support.rstudio.com/hc/en-us/articles/205612627-Debugging-with-RStudio). For profiling tips see [link](http://adv-r.had.co.nz/Profiling.html)

### Code quality analysis tools and services
...

### Logging
...
