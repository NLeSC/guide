# C and C++

With great power comes great responsibility. **Always asume someone with half your skill will use, edit and expand your code.** Every C++ programmer has a slightly different dialect; aim for consistency and document choices you make. Add lot's of examples, be a teacher.

That being said, C++ (over its older brother C) is a very powerful, and possibly beautiful language, with a long history of opiniated debates. These debates are more often based on myth than fact.

* C++ is *portable*. There is an ANSI standard that every C++ compiler should compile without change. Reason for using C++ is often efficiency on a binary level, where some portability is lost, when *source code is not available*. C++11 standardizes threads, which was a major portability issue between Windows and Unix/BSD platforms.
* C++ can be safe, *if you want to*.
 
It is *not possible* to write this guide without making some choices that not everyone will agree with.

## C vs. C++
The first of these choices is: **don't write C**. C++ is a superset of C with much more powerful means of abstraction. This results in cleaner, more maintainable and even faster code. If you need fine-grained control over resources, you'll have it; if you can do with a more Pythonesque approach, you'll have it. If you're dealing with legacy C code, it is easy to write a small wrapper for C++. If you're still not convinced, it is worth your time to learn C++ classes, templates, and study what the STL has to offer; simply because it will save others time in the future. See the books section below. Here's an [instruction video](https://www.youtube.com/watch?v=YnWhqhNdYyk).

## Standards
The latest ratified standard of C++ is C++14. The first standardised version of C++ is from 1998. The next version of C++ is scheduled for 2017. With these updates (especially the 2011 one) the preferred style of C++ changed drastically. As a result, a program written in 1998 looks very different from one from 2016, but it still compiles. There are many videos on Youtube describing some of these changes and how they can be used to make your code look better (i.e. more maintainable). This goes with a warning: Don't try to be too smart; other people still have to understand your code.

## Practical use
### Compilers
There are two main-stream open-source C++ compilers. GCC traditionally has the most up-to-date C++ support, and generally generates the fastest binary code. In terms of compile times LLVM is often a bit faster; also it has a bit more modern design, making it easier to use for code analysis.

* [GCC](https://gcc.gnu.org/)
* [LLVM](http://llvm.org/)

### Build systems
There are several build systems that handle C/C++. Currently the CMake system seems to be most popular. It builds on top of POSIX make, and some popular IDEs keep automatic count for CMake. The major drawback of CMake is the confusing documentation. Traditionally, the auto-tools suite (AutoConf and AutoMake) is *the* way to build things; you'll probably know the three command salute:

    > ./configure --prefix=~/.local 
        ...
    > make -j4
        ...
    > make install

With either one of these two (CMake or Autotools), any moderately experienced user should be able to compile your code (if it compiles).

There are many other systems, to name a few: Boost::Build, Perforce JAM, IcMake, Boil, etcetera. A library like Qt even forces its own build system on you. These are not recommended if you don't also supply an option for building with CMake or Autotools.

### Library ecosystem
There is no package manager like `pip`, `npm` or `gem` for C++. The first go-to for libraries should be your OS package manager. If the target package is not in there, try to see if there is an equivalent library that is, and see what kind of software uses it. If you do have to install a library, or you are working in a cluster environment without the apropriate module (`module avail`), you enter what is called *dependency hell*. Some agility in compiling and installing libraries is essential. You can install libraries in `/usr/local` or in `${HOME}/.local` if you aren't root, but there you have no package management. A simple solution is to use `xstow`. [XStow](http://xstow.sourceforge.net/) is a poor-mans package manager. You install each library in its own directory (`~/.local/pkg/<package>` for instance), then running `xstow` will create symlinks to the files in the `~/.local` directory (one above the XStow package directory). Using XStow in this way alows you to keep a single additional search path when compiling your next library.

### Editors
Any code editor will do. Try to avoid relying on IDEs too much; by helping your memory they can also help you to write less maintainable code.

## Style
### Style guides
Good style is not just about layout and linting on trailing whitespace. It will mean the difference between a blazing fast code and a broken one.

* [C++ Core Guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
* [Guidelines Support Library](https://github.com/Microsoft/GSL)
* [Google Style Guide](https://google.github.io/styleguide/cppguide.html)

### Project layout
A C++ project will usually have directories `/src` for source codes, `/doc` for Doxygen output, `/test` for testing code. Some people like to put header files in `/include`. In C++ though, many header files will contain functioning code (templates and inline functions). This makes the separation between code and interface a bit murky, so it makes more sense to put headers and implementation in the same tree.

### Boost
This is what the Google style guide has to say about Boost: 
* **Definition:** The Boost library collection is a popular collection of peer-reviewed, free, open-source C++ libraries.
* **Pros:** Boost code is generally very high-quality, is widely portable, and fills many important gaps in the C++ standard library, such as type traits and better binders.
* **Cons:** Some Boost libraries encourage coding practices which can hamper readability, such as metaprogramming and other advanced template techniques, and an excessively "functional" style of programming.

As a general rule, don't use Boost when there is equivalent STL functionality. Use of `boost::variant` should be Ok.

## Sustainability
### Testing
Use [Google Test](https://github.com/google/googletest). It is light-weight, good and is used a lot.

### Documentation
Use [Doxygen](http://www.stack.nl/~dimitri/doxygen/). It is the de-facto standard way of inlining documentation into comment sections of your code. The output is very ugly, but there is no viable alternative at the moment.

## Resources
### Online
* [CppReference.com](http://en.cppreference.com/w/)
* [C++ Annotations](http://www.icce.rug.nl/documents/cplusplus/)
* [CPlusPlus.com](http://www.cplusplus.com/)

### Books
* Bjarne Soustrup - The C++ Language
* Scott Meyers - Effective Modern C++

