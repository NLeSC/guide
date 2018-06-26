# C and C++

C++ may be the most complicated programming language in existence. It supports a variety of programming styles, including imperative, object oriented, functional, and generic programming. It lets you create very high-level abstractions, but it also gives you low-level primitives and direct control over memory. Its powerful type system can check for many errors at compile time, making your software safer, but it can also be ignored or overridden, resulting in dangerous code. Because of its versatility, C++ leaves you free to design your code in any way you want, but that also means that it does not guide you in any way.

In short, C++ is a very sharp tool. It can be used to create beautiful masterpieces (and ugly-but-extremely-fast work horses), but it takes a long time to master, and while learning you're likely to cut yourself more than once. At the eScience Center, we work together with scientists and engineers with a wide variety of programming skills, including expert software engineers, but also domain scientists with only basic knowledge of programming. **For most projects and new code, we therefore recommend simpler languages like Python or Java**. However, if we need to make extensions to a program written in C++, then it usually makes sense to write those extensions also in C++. When that happens, we will use C++ best practices to do so.

That being said, C++ (over its older brother C) is a very powerful, and possibly beautiful language, with a long history of opiniated debates. These debates are more often based on myth than fact.

* C++ is *portable*. There is an ANSI standard that every C++ compiler should compile without change. Reason for using C++ is often efficiency on a binary level, where some portability is lost, when *source code is not available*. C++11 standardizes threads, which was a major portability issue between Windows and Unix/BSD platforms.
* C++ can be safe, *if you want to*.
 
It is *not possible* to write this guide without making some choices that not everyone will agree with.

## C vs. C++
The first of these choices is: **don't write C**. C++ is a superset of C with much more powerful means of abstraction. This results in cleaner, more maintainable and even faster code. If you need fine-grained control over resources, you'll have it; if you can do with a more Pythonesque approach, you'll have it. If you're dealing with legacy C code, it is easy to write a small wrapper for C++. If you're still not convinced, it is worth your time to learn C++ classes, templates, and study what the STL has to offer; simply because it will save others time in the future. See the books section below. Here's an [instruction video](https://www.youtube.com/watch?v=YnWhqhNdYyk).

### Standards
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
* Vim, recommended plugins: 
  + [NERDTree](https://github.com/scrooloose/nerdtree) file explorer.
  + [editorconfig](https://github.com/editorconfig/editorconfig-vim)
  + [stl.vim](https://vim.sourceforge.io/scripts/script.php?script_id=4293) adds STL to syntax highlighting 
  + [Syntastic](https://github.com/scrooloose/syntastic)
  + Integrated debugging using [Clewn](http://clewn.sourceforge.net/)
* Emacs:
  + Has GDB mode for debugging.
* Atom
* Sublime
* Eclipse
* CodeLite (has integrated debugger)

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

#### Dynamic program analysis using `-fsanitize`
Both GCC and Clang allow you to compile your code with the `-fsanitize=` flag , which will instrument your program to detect various errors quickly. The most useful option is probably
```
-fsanitize=address -O2 -fno-omit-frame-pointer -g
```
which is a fast memory error detector. There are also other options available like `-fsanitize=thread` and `-fsanitize=undefined`. See the GCC man page or the [Clang online manual](https://clang.llvm.org/docs/index.html) for more information.

#### Dynamic program analysis using the valgrind suite of tools
The [valgrind suite of tools](http://valgrind.org/info/tools.html) has tools similar to what is provided by the `-fsanitize` compiler flag as well as various profiling tools. Using the valgrind tool memcheck to detect memory errors is typically slower than using compiler provided option, so this might be something you will want to do less often. You will probably want to compile your code with debug symbols enabled (`-g`) in order to get useful output with memcheck. When using the profilers, keep in mind that a [statistical  profiler](https://en.wikipedia.org/wiki/Profiling_(computer_programming)#Statistical_profilers) may give you more realistic results.

### Debugging
* GDB - the GNU Debugger, many graphical front-ends are based on GDB.
* DDD - primitive GUI frontend for GDB.
* Nemiver - standalone graphical debugger for Gnome.

## Style
### Style guides
Good style is not just about layout and linting on trailing whitespace. It will mean the difference between a blazing fast code and a broken one.

* [C++ Core Guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
* [Guidelines Support Library](https://github.com/Microsoft/GSL)
* [Google Style Guide](https://google.github.io/styleguide/cppguide.html)
* [Google Style Guide - github](https://github.com/google/styleguide) Contains the CppLint linter.

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

