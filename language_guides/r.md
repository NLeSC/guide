# R

*Page maintainers: [Malte Lüken](https://github.com/maltelueken) and [Pablo Rodríguez-Sánchez](https://github.com/PabRod)* .

## What is R?

R is a functional programming language and software environment for statistical computing and graphics: https://www.r-project.org/.

### Philosophy and typical use cases
R is particularly popular in the social, health, and biological sciences where it is used for statistical modeling. R can also be used for signal processing (e.g. FFT), machine learning, image analyses, and natural language processing. The R syntax is similar to that of Matlab and Python in terms of compactness and readability, which makes it a good prototyping language for science.

One of the strengths of R is the large number of available open source statistical packages, often developed by domain experts. For example, R-package [Seewave](http://rug.mnhn.fr/seewave/) is specialised in sound analyses. Packages are typically released on CRAN [The Comprehensive R Archive Network](http://cran.r-project.org).

### Some crucial differences with Python
Are you familiar with Python? Then kickstart your R journey by reading this [blog post](https://towardsdatascience.com/the-starter-guide-for-transitioning-your-python-projects-to-r-8de4122b04ad).

### Recommended sources of information
All R functions come with documentation in a standardized format. Some R packages have their own google group. Further, stackoverflow and standard search engines can lead you to answers to issues.

If you prefer books, consider the following resources:

* [R for Data Science](https://r4ds.had.co.nz/) by Hadley Wickham,
* [Advanced R](https://adv-r.hadley.nz/) by Hadley Wickham,
* [Writing better R code](http://www.bioconductor.org/help/course-materials/2013/CSAMA2013/friday/afternoon/R-programming.pdf) by Laurent Gatto.


## Getting started

### Setting up R
To install R check detailed description at [CRAN website](http://cran.r-project.org).

#### IDE
R programs can be written in any text editor. R code can be run from the command line or interactively within R environment, that can be started with `R` command in the shell. To quit R environment type `q()`.

Said this, it is highly recommended to use an integrated development environment (IDE). The most popular one is [RStudio / Posit](https://posit.co/products/open-source/rstudio/). It is free and quite powerful. It features editor with code completion, command line environment, file manager, package manager and history lookup among others.

It comes with many menus and key bindings (visible when you hover your mouse over the menu item). For instance, you can run code sections by selecting them and pressing `Ctrl+Enter`.

Note you will have to install RStudio in addition to installing R. Please note that updating RStudio does not automatically update R and the other way around.

Within RStudio you can work on ad-hoc code or create a project. Compared with Python an R project is a bit like a virtual environment as it preserves the workspace and installed packages for that project. Creating a project is needed to build an R package. A project is created via the menu at the top of the screen.

### Installing compilers and runtimes
Not needed as most functions in R are already compiled in C, nevertheless R has compiling functionality as described in the [R manual](https://stat.ethz.ch/R-manual/R-devel/library/compiler/html/compile.html). See [overview by Hadley Wickham](http://r-pkgs.had.co.nz/src.html).

## Coding style conventions
We recommend following the [Tidyverse style guide](https://style.tidyverse.org/).
Its guidelines can be automatically followed using linters such as:

- [styler](https://github.com/r-lib/styler)
- [lintr](https://github.com/r-lib/lintr)

### The `<-` operator
Assigning variables with `<-` instead of `=` is recommended, although **most** of the time both are equivalent.

If you are interested in the controversy around assignment operators, check out this [blog post](https://csgillespie.wordpress.com/2010/11/16/assignment-operators-in-r-vs/).

### `%>%` and `|>`
The symbols `%>%` and `|>` represent the pipe operator.
The first one is part of the `magrittr` package, and it gained so much popularity that a similar operator, `|>`, was added as part of native R since version 4.1.0. For details on the differences between the two, see this [blog post](https://www.tidyverse.org/blog/2023/04/base-vs-magrittr-pipe/).
They just add syntactic sugar to the way we pass a variable to a function.
The example below shows its basic behavior:

```r
var %>% function(params)
# Is equivalent to
function(var, params)
```

These operators are pretty useful for composing functions, and very often appear concatenated:

```r
grades |> remove_nans() |> mean() |> print()
```

You can think of it as a production chain, were an object (the `grades`) passes through three machines, one that removes the `NaN`s, another one that takes the mean, and a last one that prints the result.

## Recommended additional packages and libraries
One of the strengths of R is its community, that creates and maintains a constellation of packages.
Very rarely will you use just base R.
Here we give you a list of usual packages, starting by one solving the first problem you'll find... how to manage that many packages!

### Managing environments with `renv`
[`renv`](https://rstudio.github.io/renv/articles/renv.html) allows you to create and manage a dependencies library on a per-project basis. It also keeps track of the specific versions of each package used in the project, which is great for reproducibility... and avoiding future headhaches!

### Plotting with basic functions and ggplot2 and ggvis
For a generic impression about plotting with R, see: https://www.r-graph-gallery.com/all-graphs

The basic R installation comes with a wide range of functions to plot data to a window on your screen or to a file. If you need to quickly inspect your data or create a custom-made static plot then the basic functions offer the building blocks to do the job. There is a [Statmethods.net tutorial with some examples of plotting options in R](http://www.statmethods.net/graphs/index.html).

However, externally contributed plotting packages may offer easier syntax or convenient templates for creating plots. The most popular and powerful contributed graphics package is [ggplot2](https://ggplot2.tidyverse.org/). Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application, and this [tutorial](https://www.statmethods.net/advgraphs/ggplot2.html).

In summary, it is good to familiarize yourself with both the basic plotting functions as well as the contributed graphics packages. In theory, the basic plot functions can do everything that ggplot2 can do, it is mostly a matter of how much you like either syntax and how much freedom you need to tailor the visualisation to your use case.

### Building interactive web applications with shiny
Thanks to [shiny.app](https://shiny.posit.co/) it is possible to make interactive web application in R without the need to write javascript or html.

### Building reports with knitr
[knitr](https://yihui.name/knitr/) is an R package designed to build dynamic reports in R. It's possible to generate on the fly new pdf or html documents with results of computations embedded inside.

### Preparing data for analysis
There are packages that ease tidying up messy data, e.g. [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape). The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham. There is also the google group [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) to discuss topics related to data manipulation in R.

### Speeding up code
Speeding up code always start with knowing where your bottlenecks are.
The following profiling tools will help you doing so:

* Introduction to [profiling in R](https://bookdown.org/rdpeng/rprogdatascience/profiling-r-code.html)

Some rules of thumb that can quickly improve your code are the follwing:

* Avoid loops, use `apply` functionals instead
* Try to use vectorized functions
* Checkout the [`purrr`](https://purrr.tidyverse.org/) package
* If you are really in a hurry, consider communicating with `C++` code using [`Rcpp`](https://www.rcpp.org/).

For a deeper introduction to the many optimization methods, check the free ebook:

* [Efficient R programming](https://csgillespie.github.io/efficientR/), by Colin Gillespie and Robin Lovelace.

## Package development

### Building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz).
For a quicker introduction, consider this software Carpentries' [lesson on R packages](https://carpentries-incubator.github.io/lesson-R-packaging/), originated and developed at our Center!

### Package documentation
Read [Documentation](http://r-pkgs.had.co.nz/man.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book for details about documenting R code.

Customary R uses `.Rd` files in `/man` directory for documentation. These files and folders are automatically created by RStudio when you create a new project from your existing R-function files.

Function level comments starting with `#'` are used by `roxygen` to automatically generate the `.Rd` files. This means that you **don't have to edit the `.Rd` files directly**.

R function documentation offers plenty of space to document the functionality, including code examples, literature references, and links to related functions. Nevertheless, it can sometimes be helpful for the user to also have a more generic description of the package with for example use-cases. You can do this with a `vignette`.

Read more about vignettes in [Package documentation](http://r-pkgs.had.co.nz/vignettes.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book.
Read more about `roxygen` syntax on it's [github page](https://github.com/yihui/roxygen2). `roxygen` will also populate `NAMESPACE` file which is necessary to manage package level imports.

## Available templates
Most of the templating is nativelly managed by the [`usethis`](https://usethis.r-lib.org/) package.
It contains functions that create the boilerplate for you, reducing the burden on your memory and reducing chances for errors.
In the snippet below you can see how it feels to use it.

```r
usethis::create_package()     # Creates a package structure
usethis::use_readme_md()      # Adds a readme
usethis::use_apache_license() # Adds an Apache License
usethis::use_testthat()       # Adds the testing infrastructure
usethis::use_citation()       # Adds a citation file
# etc...

```
Having said this, these others can serve as inspiration:

* https://rapporter.github.io/rapport/
* https://shiny.posit.co/r/articles/build/templates/
* https://bookdown.org/yihui/rmarkdown/document-templates.html

## Testing, Checking, Debugging and Profiling

### Testing and checking
[Testthat](https://github.com/hadley/testthat) is a testing package by Hadley Wickham. [Testing chapter](http://r-pkgs.had.co.nz/tests.html) of a book [R packages](http://r-pkgs.had.co.nz) describes in detail testing process in R with use of `testthat`. Further, [testthat: Get Started with Testing](https://journal.r-project.org/archive/2011-1/RJournal_2011-1_Wickham.pdf) by Whickham may also provide a good starting point.

See also [checking](http://r-pkgs.had.co.nz/check.html) and [testing](http://r-pkgs.had.co.nz/tests.html) R packages. note that within RStudio R package check and R package test can be done via simple toolbar clicks.

### Continuous integration
[Continuous integration](https://book.the-turing-way.org/reproducible-research/ci) should be done with an online service. We recommend using GitHub actions.

### Debugging and Profiling
Debugging is possible in RStudio, see [link](https://support.posit.co/hc/en-us/articles/205612627-Debugging-with-RStudio). For profiling tips see [link](http://adv-r.had.co.nz/Profiling.html)


## Not in this tutorial yet:
* Logging
