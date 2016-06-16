# Data handling

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
* which()
* table()
* grep()
* gsub()






