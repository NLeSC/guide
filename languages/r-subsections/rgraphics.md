# Graphics

#### plotting
For an generic impression of what R can do see: http://www.r-graph-gallery.com/all-graphs/

The basic R installation comes with a wide range of functions to plot data to a window on your screen or to a file. If you need to quickly inspect your data or create a custom-made static plot then the basic functions offer the building blocks to do the job. A tutorial with some examples of plotting optins in R can be found [here](http://www.statmethods.net/graphs/index.html).

However, externally contributed plotting packages may offer easier syntax or convenient templates for creating plots. The most popular and powerful contributed graphics package is [ggplot2](http://ggplot2.org). Also see this overview (pdf) of [ggplot2](http://ggplot2.org/resources/2007-past-present-future.pdf) options. Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application.

In summary, it is good to familiarize yourself with both the basic and contributed graphics tools as the best choice may depend on what graphic you want to create.


#### building interactive web applications
Thanks to [shiny.app](http://shiny.rstudio.com) it is possible to make interactive web application in R without the need to write javascript or html.

#### building reports
[knitr](http://yihui.name/knitr/) is R package designed to build dynamic reports in R. It's possible to generete on the fly new pdf or html documents with results of computations embedded inside.
