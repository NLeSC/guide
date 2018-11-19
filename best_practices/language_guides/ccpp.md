# C and C++

C++ is one of the hardest languages to learn. Entering a project where C++ coding is needed should not be taken lightly. This guide focusses on tools and documentation for use of C++ in an open-source environment.

### Standards
The latest ratified standard of C++ is C++17. The first standardised version of C++ is from 1998. The next version of C++ is scheduled for 2020. With these updates (especially the 2011 one) the preferred style of C++ changed drastically. As a result, a program written in 1998 looks very different from one from 2018, but it still compiles. There are many videos on Youtube describing some of these changes and how they can be used to make your code look better (i.e. more maintainable). This goes with a warning: Don't try to be too smart; other people still have to understand your code.

## Practical use
### Compilers
There are two main-stream open-source C++ compilers. 

* [GCC](https://gcc.gnu.org/)
* [LLVM - CLANG](http://llvm.org/)

Overall, these compilers are more or less similar in terms of features, language support, compile times and (perhaps most importantly) performance of the generated binaries.
The generated binary performance does differ for specific algorithms.
See for instance [this Phoronix benchmark for a comparison of GCC 9 and Clang 7/8](https://www.phoronix.com/scan.php?page=article&item=gcc9-stage3-skylake).

MacOS (XCode) has a custom branch of `clang`, which misses some features like OpenMP support, and its own libcxx, which misses some standard library things like the very useful `std::filesystem` module.
It is nevertheless recommended to use it as much as possible to maintain binary compatibility with the rest of macOS.

If you need every last erg of performance, some cluster environments have the Intel compiler installed.

These compilers come with a lot of options. Some basic literacy in GCC and CLANG:

* `-O` changes optimisation levels
* `-std=c++xx` sets the C++ standard used
* `-I*path*` add path to search for include files
* `-o*file*` output file
* `-c` only compile, do not link
* `-Wall` be more verbose with warnings

And linker flags:

* `-l*library*` links to a library
* `-L*path*` add path to search for libraries
* `-shared` make a shared library
* `-Wl,-z,defs` ensures all symbols are accounted for when linking to a shared object

### Interpreter
There **is** a C++ interpreter called [Cling](https://rawgit.com/vgvassilev/cling/master/www/index.html).
This also comes with a [Jupyter notebook kernel](http://jupyter.org/try).

### Build systems
There are several build systems that handle C/C++.
Currently, [the CMake system is most popular](https://www.jetbrains.com/research/devecosystem-2018/cpp/).
It is not actually a build system itself; it generates build files based on (in theory) platform-independent and compiler-independent configuration files.
It can generate Makefiles, but also [Ninja](https://ninja-build.org/) files, which gives much faster build times, NMake files for Windows and more.
Some popular IDEs keep automatic count for CMake, or are even completely built around it ((CLion)[https://www.jetbrains.com/clion/]).
The major drawback of CMake is the confusing documentation, but this is generally made up for in terms of community support.
When Googling for ways to write your CMake files, make sure you look for "modern CMake", which is a style that has been gaining traction in the last few years and makes everything better (e.g. dependency management, but also just the CMake files themselves).

Traditionally, the auto-tools suite (AutoConf and AutoMake) was *the* way to build things on Unix; you'll probably know the three command salute:

    > ./configure --prefix=~/.local 
        ...
    > make -j4
        ...
    > make install

With either one of these two (CMake or Autotools), any moderately experienced user should be able to compile your code (if it compiles).

There are many other systems.
Microsoft Visual Studio has its own project model / build system and a library like Qt also forces its own build system on you.
We do not recommend these if you don't also supply an option for building with CMake or Autotools.
Another modern alternative that has been gaining attention mainly in the GNU/Gnome/Linux world is [Meson](http://mesonbuild.com/), which is also based on [Ninja](https://ninja-build.org/).


### Library ecosystem
There is no standard package manager like `pip`, `npm` or `gem` for C++.
The first go-to for libraries should be your OS package manager.
If the target package is not in there, try to see if there is an equivalent library that is, and see what kind of software uses it.
A good, cross-platform option nowadays is to use [`miniconda`](https://conda.io/miniconda.html), which works on Linux, macOS and Windows.
The `conda-forge` channel especially has a lot of C++ libraries; specify that you want to use this with command line option `-c conda-forge`.

If you do have to install a library, or you are working in a cluster environment without the apropriate module (`module avail`), you enter what is called *dependency hell*.
Some agility in compiling and installing libraries is essential.
You can install libraries in `/usr/local` or in `${HOME}/.local` if you aren't root, but there you have no package management.

One way around this if the system does use `module` is to use [Easybuild](https://easybuild.readthedocs.io/en/latest/), which makes installing modules in your home directory quite easy.
Many recipes (called Easyblocks) for building packages or whole toolchains are [available online](https://easybuild.readthedocs.io/en/latest/version-specific/Supported_software.html).
These are written in Python.

Another simple solution is to use something like `xstow`.
[XStow](http://xstow.sourceforge.net/) is a poor-mans package manager.
You install each library in its own directory (`~/.local/pkg/<package>` for instance), then running `xstow` will create symlinks to the files in the `~/.local` directory (one above the XStow package directory).
Using XStow in this way alows you to keep a single additional search path when compiling your next library.

A lot of libraries come with a package description for `pkg-config`. These descriptions are installed in `/usr/lib/pkgconfig`. You can point `pkg-config` to your additional libraries by setting the `PKG_CONFIG_PATH` environment variable. This also helps for instance when trying to automatically locate dependencies from CMake, which has `pkg-config` support as a fallback for when libraries don't support CMake's `find_package`.

Note that C++20 will bring Modules, which can be used as an alternative to including (precompiled) header files.
This will allow for easier packaging and will probably cause the ecosystem landscape to change considerably.

### Editors
This is largely a matter of taste, but not always.

In theory, given that there are many good command line tools available for working with C(++) code, any code editor will do to write C(++).
Some people also prefer to avoid relying on IDEs too much; by helping your memory they can also help you to write less maintainable code.
People of this persuasion would usually recommend any of the following editors:
* Vim, recommended plugins: 
  + [NERDTree](https://github.com/scrooloose/nerdtree) file explorer.
  + [editorconfig](https://github.com/editorconfig/editorconfig-vim)
  + [stl.vim](https://vim.sourceforge.io/scripts/script.php?script_id=4293) adds STL to syntax highlighting 
  + [Syntastic](https://github.com/scrooloose/syntastic)
  + Integrated debugging using [Clewn](http://clewn.sourceforge.net/)
* Emacs:
  + Has GDB mode for debugging.
* More modern editors: Atom / Sublime Text / VS Code
  + Rich plugin ecosystem
  + Easier on the eyes... I mean modern OS/GUI integration

In practice, sometimes you run into large/complex existing projects and navigating these can be really hard, especially when you just start working on the project.
In these cases, an IDE can really help.
Intelligent code suggestions, easy jumping between code segments in different files, integrated debugging, testing, VCS, etc. can make the learning curve a lot less steep.
Good/popular IDEs are
* CLion
* Visual Studio (Windows only, but many people swear by it)
* Eclipse

### Code and program quality analysis

C++ (and C) compilers come with built in linters and tools to check that your program runs correctly, make sure you use those. In order to find issues, it is probably a good idea to use both compilers (and maybe the valgrind memcheck tool too), because they tend to detect different problems.

#### Static code analysis with GCC
To use the GCC linter, use the following set of compiler flags when compiling C++ code:
```
-O2 -Wall -Wextra -Wcast-align -Wcast-qual -Wctor-dtor-privacy -Wdisabled-optimization -Wformat=2 
-Winit-self -Wlogical-op -Wmissing-declarations -Wmissing-include-dirs -Wnoexcept -Wold-style-cast 
-Woverloaded-virtual -Wredundant-decls -Wshadow -Wsign-conversion -Wsign-promo -Wstrict-null-sentinel 
-Wstrict-overflow=5 -Wswitch-default -Wundef -Wno-unused
```
and these flags when compiling C code:
```
-O2 -Wall -Wextra -Wformat-nonliteral -Wcast-align -Wpointer-arith -Wbad-function-cast 
-Wmissing-prototypes -Wstrict-prototypes -Wmissing-declarations -Winline -Wundef 
-Wnested-externs -Wcast-qual -Wshadow -Wwrite-strings -Wno-unused-parameter 
-Wfloat-equal
```
Use at least optimization level 2 (`-O2`) to have GCC perform code analysis up to a level where you get all warnings. Use the `-Werror` flag to turn warnings into errors, i.e. your code won't compile if you have warnings. See this [post](https://stackoverflow.com/questions/5088460/flags-to-enable-thorough-and-verbose-g-warnings) for an explanation of why this is a reasonable selection of warning flags.

#### Static code analysis with Clang (LLVM)
Clang has the very convenient flag
```
-Weverything
```
A good strategy is probably to start out using this flag and then disable any warnings that you do not find useful.

#### Static code analysis with cppcheck
An additional good tool that detects many issues is cppcheck. Most editors/IDEs have plugins to use it automatically.

#### Dynamic program analysis using `-fsanitize`
Both GCC and Clang allow you to compile your code with the `-fsanitize=` flag , which will instrument your program to detect various errors quickly. The most useful option is probably
```
-fsanitize=address -O2 -fno-omit-frame-pointer -g
```
which is a fast memory error detector. There are also other options available like `-fsanitize=thread` and `-fsanitize=undefined`. See the GCC man page or the [Clang online manual](https://clang.llvm.org/docs/index.html) for more information.

#### Dynamic program analysis using the valgrind suite of tools
The [valgrind suite of tools](http://valgrind.org/info/tools.html) has tools similar to what is provided by the `-fsanitize` compiler flag as well as various profiling tools. Using the valgrind tool memcheck to detect memory errors is typically slower than using compiler provided option, so this might be something you will want to do less often. You will probably want to compile your code with debug symbols enabled (`-g`) in order to get useful output with memcheck. When using the profilers, keep in mind that a [statistical  profiler](https://en.wikipedia.org/wiki/Profiling_%28computer_programming%29#Statistical_profilers) may give you more realistic results.

### Debugging
Most of your time programming C(++) will probably be spent on debugging.
At some point, surrounding every line of your code with `printf("here %d", i++);` will no longer avail you and you will need a more powerful tool.
With a debugger, you can inspect the program while it is running.
You can pause it, either at random points when you feel like it or, more usually, at so-called breakpoints that you specified in advance, for instance at a certain line in your code, or when a certain function is called.
When paused, you can inspect the current values of variables, manually step forward in the code line by line (or by function, or to the next breakpoint) and even change values and continue running.
Learning to use these powerful tools is a very good time investment.
There are some really good CppCon videos about debugging on YouTube.

* GDB - the GNU Debugger, many graphical front-ends are based on GDB.
* LLDB - the LLVM debugger. This is the go-to GDB alternative for the LLVM toolchain, especially on macOS where GDB is hard to setup.
* DDD - primitive GUI frontend for GDB.
* The IDEs mentioned above either have custom built-in debuggers or provide an interface to GDB or LLDB.


## Libraries
Historically, many C and C++ projects have seemed rather hestitant about using external dependencies (perhaps due to the poor dependency management situation mentioned above).
However, many good (scientific) computing libraries are available today that you should consider using if applicable.
Here follows a list of libraries that we recommend and/or have experience with.

### Usual suspects
These scientific libraries are well known, widely used and have a lot of good online documentation.

* [GNU Scientific library (GSL)](https://www.gnu.org/software/gsl/doc/html/index.html)
* [FFTW](http://www.fftw.org): Fastest Fourier Transform in the West
* [OpenMPI](https://www.open-mpi.org). Use with caution, since it will strongly define the structure of your code, which may or may not be desirable.

### Boost
This is what the Google style guide has to say about Boost:

>  * **Definition:** The Boost library collection is a popular collection of peer-reviewed, free, open-source C++ libraries.
>  * **Pros:** Boost code is generally very high-quality, is widely portable, and fills many important gaps in the C++ standard library, such as type traits and better binders.
>  * **Cons:** Some Boost libraries encourage coding practices which can hamper readability, such as metaprogramming and other advanced template techniques, and an excessively "functional" style of programming.

As a general rule, don't use Boost when there is equivalent STL functionality.

### xtensor
[xtensor](http://quantstack.net/xtensor) is a modern (C++14) N-dimensional tensor (array, matrix, etc) library for numerical work in the style of Python's NumPy.
It aims for maximum performance (and in most cases it succeeds) and has an active development community.
This library features, among other things:
* Lazy-evaluation: only calculate when necessary.
* Extensible template expressions: automatically optimize many subsequent operations into one "kernel".
* NumPy style syntax, including broadcasting.
* C++ STL style interfaces for easy integration with STL functionality.
* [Very low-effort integration with today's main data science languages Python](https://blog.esciencecenter.nl/irregular-data-in-pandas-using-c-88ce311cb9ef?gi=23ebfce3ae77), R and Julia.
This all makes xtensor a very interesting choice compared to similar older libraries like Eigen and Armadillo.


### General purpose, I/O
* Configuration file reading and writing:
    * [yaml-cpp](https://github.com/jbeder/yaml-cpp): A YAML parser and emitter in C++
    * [JSON for Modern C++](https://nlohmann.github.io/json/)
* Command line argument parsing:
    * [argagg](https://github.com/vietjtnguyen/argagg)
    * [Clara](https://github.com/catchorg/Clara)
* [fmt](https://github.com/fmtlib/fmt): pythonic string formatting
* [hdf5-cpp](https://bitbucket.hdfgroup.org/projects/HDFFV/repos/hdf5/browse): The popular HDF5 binary format C++ interface.


### Parallel processing
* [Intel TBB](https://www.threadingbuildingblocks.org) (Threading Building Blocks): template library for task parallelism
* [ZeroMQ](http://zeromq.org): lower level flexible communication library with a unified interface for message passing between threads and processes, but also between separate machines via TCP.


## Style
### Style guides
Good style is not just about layout and linting on trailing whitespace. It will mean the difference between a blazing fast code and a broken one.

* [C++ Core Guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
* [Guidelines Support Library](https://github.com/Microsoft/GSL)
* [Google Style Guide](https://google.github.io/styleguide/cppguide.html)
* [Google Style Guide - github](https://github.com/google/styleguide) Contains the CppLint linter.

### Project layout
A C++ project will usually have directories `/src` for source codes, `/doc` for Doxygen output, `/test` for testing code. Some people like to put header files in `/include`. In C++ though, many header files will contain functioning code (templates and inline functions). This makes the separation between code and interface a bit murky.
In this case, it can make more sense to put headers and implementation in the same tree, but different communities will have different opinions on this.
A third option that is sometimes used is to make separate "template implementation" header files.

## Sustainability
### Testing
Use [Google Test](https://github.com/google/googletest).
It is light-weight, good and is used a lot.
[Catch2](https://github.com/catchorg/Catch2) is also pretty good, well maintained and has native support in the CLion IDE.

### Documentation
Use [Doxygen](http://www.stack.nl/~dimitri/doxygen/). It is the de-facto standard way of inlining documentation into comment sections of your code. The output is very ugly.

A newer but less mature option is [cldoc](http://jessevdk.github.io/cldoc/).

## Resources
### Online
* [CppCon videos](https://www.youtube.com/user/CppCon): Many really good talks recorded at the various CppCon meetings.
* [CppReference.com](http://en.cppreference.com/w/)
* [C++ Annotations](http://www.icce.rug.nl/documents/cplusplus/)
* [CPlusPlus.com](http://www.cplusplus.com/)
* [Modern C++, according to Microsoft](https://msdn.microsoft.com/en-us/library/hh279654.aspx)

### Books
* Bjarne Soustrup - The C++ Language
* Scott Meyers - Effective Modern C++

