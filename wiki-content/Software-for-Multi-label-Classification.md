## SciKit-Learn

[SciKit-Learn](http://scikit-learn.org/stable/) is a Python library that provides data mining and data analysis tools.

* [Tutorials](http://scikit-learn.org/stable/tutorial/index.html)
* [Working With Text Data](http://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html)
* [Multi-class and multi-label algorithms](http://scikit-learn.org/stable/modules/multiclass.html#multiclass)

### Pros and Cons

* Flexible tool (+/-)
  * You need to build a Pipeline to create a classifier (+/-)
  * It is easy to apply to new data (+)
* Limited set of multi-label algorithms implemented (January 2015; will probably be extended) (-)
* Provides direct access to many [performance measures](http://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) (+) 

## MEKA

[MEKA](http://meka.sourceforge.net/) provides an implementation of methods for multi-label learning and evaluation. It is based on the WEKA Machine Learning Toolkit; it includes dozens of multi-label methods from the scientific literature, as well as a wrapper to the related MULAN framework.

### Pros and Cons

* Provides implementations of many multi-label algorithms (+)
* Unclear how to apply classifier to new data (-)
* Unclear how what performance measures are reported/how to use them (-)
