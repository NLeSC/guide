# Writting, testing and documenting packages

#### Building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz).



### Documentation

Read [Documentation](http://r-pkgs.had.co.nz/man.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book for details about documenting R code.

Customary R uses `.Rd` files in `/man` directory for documentation. These files are folders are automatically created by RStudio when you create a new project from your existing R-function files.  

If you use 'roxygen' function level comments starting with `#'` are recognised by `roxygen` and are used to automatically generate .Rd files. Read more about `roxygen` syntax on it's [github page](https://github.com/yihui/roxygen2). `roxygen` will also populage `NAMESPACE` file which is necessary to manage package level imports.

R function documentation offers plenty of space to document the functionality, including code examples, literature references, and links to related functions. Nevertheless, it can sometimes be helpful for the user to also have a more generic description of the package with for example use-cases. You can do this with a `vignette`. Read more about vignettes in [Package documentation](http://r-pkgs.had.co.nz/vignettes.html) chapter of Hadleys [R packages](http://r-pkgs.had.co.nz) book.



