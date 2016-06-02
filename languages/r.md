[R](http://www.r-project.org) is a programming language and software environment for statistical computing and graphics.

One of the strengths of R is the large number of available open source statistical packages. They can be found on [The Comprehensive R Archive Network](http://cran.r-project.org).


#### preparing data for analysis
Usually the data you get is not in the format that is easy to process in R. It's called *messy* data. It has to be converted into *tidy* format. There are two packages that make it easy to tidy your messy data. It's [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape).

The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham.

There is also [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) group used to discuss topics related to data manipulation in R.



#### building reports
[knitr](http://yihui.name/knitr/) is R package designed to build dynamic reports in R. It's possible to generete on the fly new pdf or html documents with results of computations embedded inside.

#### building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz)

#### learning R
Hadley also wrote a great book about programming in R. It's called [Advanced R](http://adv-r.had.co.nz).

## Testing

* [testthat](https://github.com/hadley/testthat) is a testing package by Hadley Wickham. [Testing chapter](http://r-pkgs.had.co.nz/tests.html) of a book [R packages](http://r-pkgs.had.co.nz) describes in detail testing process in R with use of `testthat`.

## Writing Documentation

### function documentation
Read [Documentation](http://r-pkgs.had.co.nz/man.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book for details about docuemnting R code.

Customary R uses `.Rd` files in `/man` directory for documentation. Function level comments starting with `#'` are recognised by `roxygen` and are used to automatically generate .Rd files. Read more about `roxygen` syntax on it's [github page](https://github.com/yihui/roxygen2). `roxygen` will also populage `NAMESPACE` file which is necessary to manage package level imports.

### package documentation
Packages should be documented in a `vignette`. Read more about vignettes in [Package documentation](http://r-pkgs.had.co.nz/vignettes.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book.

