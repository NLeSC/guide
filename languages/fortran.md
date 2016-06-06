# Fortran

**Disclaimer: In general NLeSC does not recommend using Fortran. However, in some cases it is the only viable option, for instance if a project builds on existing code written in this language. This section will be restricted to Fortran90, which captures majority of scientific software written in Fotran.**

As suggested by the disclaimer, NLeSC regards Fortran as a single-purpose language which should only be considered in
specific situations only, namely in the case of extending a legacy code base, or in the case of performance-critical dense
numerical compute workloads, with no existing alternative. In the latter case it is recommended estimate a NumPy implementation 
performance first, and keep the Fortran part of the application minimal, using a high-level language like Python for program 
control flow, IO, and user interface.

## Recommended sources of information

* [Fortran90 official documentation](http://www.fortran90.org/)
* [Fortran90 handbook](http://micro.ustc.edu.cn/Fortran/Fortran%2090%20Handbook.pdf)

## Compilers

* gfortran: the official GNU Fortran compiler and part of the gcc compiler suite.
* ifort: the intel fortran compiler, widely used in academia and industry because of its superior performance, but
  unfortunately commercial software so not recommended.
