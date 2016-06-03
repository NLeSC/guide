# Data handling


#### data loading

... read.table() is faster than read.csv()


#### preparing data for analysis
There are two packages that ease tidying up messy data. It's [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape). The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham. There is also [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) group used to discuss topics related to data manipulation in R.


#### speeding up code
As in many computing languages loops should be avoided. Here is a list of tricks to speed up your code: (Explanations and example will follow)

* ifelse()
* lapply()
* sapply()
* mapply()
* grep()
* A %in% B
* matrix multiplication
* aggregate()
* which()
* table()
* grep()
* gsub()





