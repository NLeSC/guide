# Fortran

**Disclaimer: In general the Netherlands eScience Center does not recommend using Fortran. However, in some cases it is the only viable option, for instance if a project builds upon existing code written in this language. This section will be restricted to Fortran90, which captures majority of Fortran source code.**

The second use case may be extremely performance-critical dense
numerical compute workloads, with no existing alternative. In this case it is recommended to keep the Fortran part of the application minimal, using a high-level language like Python for program control flow, IO, and user interface.

## Recommended sources of information

* [Fortran90 official documentation](http://www.fortran90.org/)
* [Fortran wiki](http://fortranwiki.org/fortran/show/HomePage)
* [Fortran90 handbook](http://micro.ustc.edu.cn/Fortran/Fortran%2090%20Handbook.pdf)

## Compilers

* **gfortran**: the official GNU Fortran compiler and part of the gcc compiler suite.
* **ifort**: the Intel Fortran compiler, widely used in academia and industry because of its superior performance, but
  unfortunately this is commercial software so not recommended. The same holds for the Portland compiler **pgfortran**

## Debuggers and diagnostic tools
There exist many commercial performance profiling tools by Intel and the Portland Group which we shall not discuss here. Most important freely available alternatives are
* **gdb**: the GNU debugger, part of the gcc compiler suite. Use the **-g** option to compile with debugging symbols.
* **gprof**: the GNU profiler, part of gcc too. Use the **-p** option to compile with profiling enabled.
* **valgrind**: to detect memory leaks.

## Editors and IDEs

Most lightweight editors provide Fortran syntax highlighting. Vim and emacs are most widely used, but for code
completion and refactoring tools one might consider the [CBFortran](http://cbfortran.sourceforge.net/) distribution of Code::Blocks.

## Coding style conventions

If working on an existing code base, adopt the existing conventions. Otherwise we recommend the
standard conventions, described in the [official documentation](http://www.fortran90.org/src/best-practices.html#fortran-style-guide) and the [Fortran company style guide](http://www.fortran.com/Fortran_Style.pdf). We would like to add the following advice:

* Use free-form text input style (the default), with a maximal line width well below the 132 characters imposed by the Fortran90 standard.
* When a method does not need to alter any data in any module and returns a single value, use a function for it, otherwise use a subroutine. Minimize the latter to reasonable extent.
* Use the intent attributes in subroutine variable declarations as it makes the code much easier to understand.
* Use a performance-driven approach to the architecture, do not use the object-oriented features of Fortran90 if they slow down execution. Encapsulation by modules is perfectly acceptable.
* Add concise comments to modules and routines, and add comments to less obvious lines of code.
* Provide a test suite with your code, containing both unit and integration tests. Both automake and cmake provide test
  suite functionality; if you create your makefile yourself, add a separate testing target.
