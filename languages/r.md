[R](http://www.r-project.org) is a programming language and software environment for statistical computing and graphics.

One of the strengths of R is the large number of available open source statistical packages. They can be found on [The Comprehensive R Archive Network](http://cran.r-project.org).

### Seting up R
To install R check detailed description at [CRAN website](http://cran.r-project.org).

#### IDE
R programs can be writen in any editor of choice and run on the command line. R code can also be run interactively within R environment, that can be started with `R` command in the shell. To quit R environment type `q()`.

[RSudio](http://www.rstudio.com/products/RStudio/) is a free powerfull integrated development environment (IDE) for R. It features editor with code completion, command line environment, file manager, package manager and history lookup among others.

#### preparing data for analysis
Usually the data you get is not in the format that is easy to process in R. It's called *messy* data. It has to be converted into *tidy* format. There are two packages that make it easy to tidy your messy data. It's [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape).

The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham.

There is also [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) group used to discuss topics related to data manipulation in R.

#### plotting
R cames with multiple plotting packages. Probably the most popular and powerfull graphics package is [ggplot2](http://ggplot2.org).

Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application.

#### building interactive web applications
Thanks to [shiny.app](http://shiny.rstudio.com) it is possible to make interactive web application in R without the need to write javascript or html.

#### building reports
[knitr](http://yihui.name/knitr/) is R package designed to build dynamic reports in R. It's possible to generete on the fly new pdf or html documents with results of computations embedded inside.

#### building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz)

#### learning R
Hadley also wrote a great book about programming in R. It's called [Advanced R](http://adv-r.had.co.nz).
