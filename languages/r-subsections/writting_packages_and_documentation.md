# Writting packages and documentation

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



