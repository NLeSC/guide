# Eclipse

### Java Code Style

Formatter and cleanup can be imported into Eclipse by:

1. Go to Window>Preferences 
2. Go to Java>Code Style>Formatter
3. Import [attachments/code-format-nlesc-v2.xml](attachments/code-format-nlesc-v2.xml) (Updated 08-08-2013)
4. Go to Java>Code Style>Clean Up
5. Import [attachments/code-cleanup-nlesc.xml](attachments/code-cleanup-nlesc.xml)

### Plugins

There are a huge number of eclipse plugins for various languages and tools. Install these from inside Eclipse under Help->Install new software. Below is a small list of commonly used plugins.

#### Python development

Pydev is the Python development environment for Eclipse.

- Website: http://pydev.org/
- Eclipse update site: http://pydev.org/updates

#### Fortran development

Photran is the Fortran development environment for Eclipse.

- Website: http://www.eclipse.org/photran/
- Eclipse update site: (included in standard eclipse software site)

#### Javascript development

There are 2 choices for Javascript development in Eclipse:
1. Javascript development tools (JSDT), part of Eclipse packages.
2. Aptana, combination of Javascript/PHP and Ruby editors. Update site see http://aptana.com/downloads/start

One has outline in it's editor, while other editor has prettier highlighting.

For server side Javascript use [node Eclipse](http://www.nodeclipse.org/)

#### Sonar

We use SonarQube for checking the quality of our code.

- Sonar website: http://www.sonarqube.org/
- Plugin site: http://docs.codehaus.org/display/SONAR/Installing+SonarQube+in+Eclipse
- Eclipse update site: http://dist.sonar-ide.codehaus.org/eclipse/

#### Java Code coverage

For running and viewing Jacoco code coverage, use eclemma

- Website: http://www.eclemma.org/
- Eclipse update site: http://update.eclemma.org/


#### Subversion

Although we normally use git on GitHub, some projects use an external subversion repository. For this, use the subclipse eclipse plugin

- Website: http://subclipse.tigris.org/
- Eclipse update site: http://subclipse.tigris.org/update_1.10.x

#### GitHub for Eclipse

- Website: http://eclipse.github.com/
- Eclipse update site (egit): http://download.eclipse.org/egit/updates
- Eclipse update site (mylin for github): http://download.eclipse.org/egit/github/updates 

#### DB Entity-Relationship diagrams in Eclipse

 - Website: http://ermaster.sourceforge.net
 - Eclipse update site: http://ermaster.sourceforge.net/update-site/

### Tweaks

#### Replacing black background in tooltips

If you want to change the tooltip colors for all apps then install and run gnome-color-chooser and go to Specific tab > Tooltips. Check the boxes for Foreground and Background and choose colors.
Afterwards restart Eclipse.

See http://askubuntu.com/questions/70599/how-to-change-tooltip-background-color-in-unity

#### Fixing Mint-X theme.

There is a small error in the default gtk2 theme included with Linux Mint 14. For a simple fix, see:

http://dentrassi.de/2013/04/23/fixing-the-mint-x-theme-for-eclipseswt/

# Java

Java code has the big advantage of being very portable. Its recommended to use the latest official Oracle version (Java 7) if at all possible. OpenJDK is usually ok as well, but definitely avoid gcj.

* [Download Oracle Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Javadoc API Documentation](http://docs.oracle.com/javase/7/docs/api/)

###Installing Oracle Java 7 in Ubuntu

To install Ocracle Java 7 (or 6) in Ubuntu, use the webupd8 ppa:

http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html

After updating, don't forget to switch to it using:

    update-java-alternatives -s java-7-oracle

Do not use "update-alternatives --display java", as this only sets the java vm, not javac, jar, jconsole, etc.

###Logging

For logging, we use [the slf4j api](http://www.slf4j.org). The advantage of slf4j is that it is trivial to change logging implementations. The API distribution also contains a few simple implementations.

To get logging info into Eclipse, one option is to use [logback beagle](http://logback.qos.ch/beagle).

###Project directory tree conventions

* src - root of Java source
* lib - external dependencies
* build - temporary build files
* dist - self-contained directory distribution (compiled jar files, copy of lib)
* scripts - utility scripts (e.g. to start a main and set the classpath, etc)

* Be careful when using 'bin' to store executables, as it is used by eclipse to generate class files to. 
  It is recommend to change the default eclipse class output directory to for example 'build' or 'build/eclipse'. 


### Graphs

JFreeChart is a Java library that allows to do nice looking charts.# Getting started

# JavaScript

To learn about JavaScript, view the presentations by [Douglas Crockford](http://en.wikipedia.org/wiki/Douglas_crockford):

* [Crockford on JavaScript](http://www.youtube.com/playlist?list=PL7664379246A246CB)
* [JavaScript: The Good Parts](http://www.youtube.com/watch?v=hQVTIJBZook) 
* JavaScript trilogy:
    * [The JavaScript Programming Language](http://www.youtube.com/watch?v=v2ifWcnQs6M) (1h50m)
    * [Theory of the DOM](http://www.youtube.com/watch?v=Y2Y0U-2qJMs) (1h18m)
    * [Advanced JavaScript](http://www.youtube.com/watch?v=DwYPG6vreJg) (1h07m)

In [this video](http://www.youtube.com/watch?v=c-kav7Tf834) (47m04s), Nicholas Zakas talks about sustainability aspects, such as how to write maintainable JavaScript, how to do JavaScript testing, and good programming style (much needed in JavaScript). Among others, he mentions the following style guides:
* [Google's style guide for JavaScript](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml);
* [Crockford's style guide](http://javascript.crockford.com/code.html) integrates with [JSLint](http://www.jslint.com/), which in turn is available as a plugin for Eclipse.

[These] (http://www.youtube.com/watch?v=yQaAGmHNn9s&list=PLA56F6A06883A2AD8) video tutorials (totaling a couple of hours) are useful if you're just starting with learning the JavaScript language.

To develop a website, usually, JavaScript frameworks are used. For direct manipulation of the HTML DOM tree and HTTP calls [jQuery](http://jquery.com) can be used. [AngularJS](https://angularjs.org) is a framework that separates the view from JavaScript and binds HTML elements to JavaScript code. It can be used for single and multi-page web applications. We advise to use [John Papas style guide](https://github.com/johnpapa/angularjs-styleguide) when making an Angular application.

## Web Standards Curriculum

Another source of information for javascript, is the "web standards curriculum" made by the Web Education Community Group as part of W3C:

http://www.w3.org/community/webed/wiki/Main_Page

In particular, see the page about [Javascript best practices](http://www.w3.org/community/webed/wiki/JavaScript_best_practices)

# Basic workflow

## Starting a project

[Yeoman](http://yeoman.io/) is a tool that generates an initial project setup while adhering to industry best practices. [Here](http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254) is a blog entry that lays out Yeoman's philosophy. In order to run Yeoman, you'll need to install [node.js](http://nodejs.org/) and [node.js package manager](https://www.npmjs.org/). To actually use Yeoman, it needs a generator. We recommend using the [generator-angular](https://github.com/yeoman/generator-angular). Generator-angular creates an Angular application using [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io) for unit testing and [SASS](http://sass-lang.com) (structural layer on top of CSS) for styling webpages. To run JavaScript commands from the command-line, you will need to install some global Javascript libraries. On Ubuntu (14.04) based systems, you can use the following commands to install these packages:
```
sudo apt-get install npm nodejs nodejs-legacy ruby ruby-dev
sudo gem install compass
npm install -g yo generator-angular grunt-cli bower
```

For example:

```bash
mkdir myproject
cd myproject
yo angular appName
....
bower install
grunt serve
```

## Editor

Our editor of choice is Eclipse (Kepler). You'll need to extend it by installing the Aptana Studio plugin. In Eclipse, go to 'Help', then select 'Install new software...', then click the 'Add...' button. Fill in ```http://download.aptana.com/studio3/plugin/install``` for Aptana Studio 3. 

Alternative editors:
* [Brackets](http://brackets.io/?lang=en), [screenshot](https://raw.githubusercontent.com/wiki/NLeSC/kb/attachments/screenshot-brackets.png)
* [Atom](http://atom.io)

## Debugging

* The best debugging tool suite is currently the debugger built into the Google Chrome webbrowser, and its open-source counterpart, Chromium. It can watch variables, step through the code, lets you monitor network traffic, and much more. Activate the debugger through the F12 key.
* On Firefox, use either the built-in debugging functionality (again accessible through the F12 button). Install the [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) Addon for some more advanced debugging functionality.
* Microsoft has a debugging toolset called 'F12' for their Internet Explorer browser. It offers similar capability as that of Google Chrome, Chromium, and Firefox. 
* In Safari on OS X, press ⌘⌥U.

## Hosting data files

To load data files with JavaScript you can't use any file system URLs due to safety restrictions. You should use a web server.
A simple webserver can be started from the directory you want to host files with `python -m SimpleHTTPServer 8000`, then open the webbrowser to http://localhost:8000

## Documentation

[JSDoc](http://usejsdoc.org/) works similarly to JavaDoc, in that it parses your JavaScript files and automatically generates HTML documentation. [Here](http://usejsdoc.org/#JSDoc3_Tag_Dictionary) is an overview of the tag names you can use to document your code.

## Testing

See [[Testing#javascript]] for unit testing and [[Testing#web-based-tests]] for integration tests.

## Syntax checking

Use JSHint (http://www.jshint.com/) to detect errors and potential problems.

## Showing code examples

Code examples can be stored in Gists in GitHub. [bl.ocks.org](http://bl.ocks.org) allows you to view the resulting page, and serve as a small demo.

# MATLAB

### Using a floating license from Lisa

**Please, be aware that this might not work, since the SARA license server update in May 2015. Please refer to [Using MATLAB on Lisa](https://github.com/NLeSC/kb/wiki/Using-MATLAB-on-LISA)**

If you're working on a project for which Matlab licenses are available on Lisa, you can run Matlab locally by creating a tunnel to the license server. Willem Bouten has bought a couple of floating licenses on Lisa so if you're working on a project of his, you're probably allowed to use them. Follow the steps below to run Matlab on a linux machine using one of Lisa's floating licenses.

You need:
* A linux machine
* An account on Lisa

1. Copy the Matlab software to your local computer by executing `(sudo) scp -r USERNAME@lisa.surfsara.nl:/sara/sw/matlab/64/2014b /opt/matlab` where `USERNAME` should be replaced with your username for Lisa.
Copying Matlab from Lisa ensures that you're using a version of Matlab compatible with the licenses. To be able to run the software, you may need to change the permissions for the executables using chmod, and you may need to change the ownership of the complete matlab folder using chown. Running the software at this stage will of course generate an error that there's no license available.

2. Create a bash script (`gedit ~/bin/tunnel`) with the following content below. Again, replace `USERNAME` with your username for Lisa.

        #!/bin/bash
        tunnelproc=`ps -ef | grep 49911 | grep license  | awk '{print $2;}'`
        if [ "$tunnelproc" != "" ]; then
                kill -9 $tunnelproc
        fi
        nohup ssh -N -L 1711:license.osd.sara.nl:1711 -L 1713:license.osd.sara.nl:1713 -L 49911:license.osd.sara.nl:49911 USERNAME@145.100.29.210 >& /dev/null &
        sleep 1


3. Make the bash script you just created runnable (`chmod +x ~/bin/tunnel`).

4. For the script to work, you should have an SSH key pair installed for Lisa. If you don't have it yet, you can generate a new key pair as using `ssh-keygen -t rsa`. After that you can copy the public key to Lisa using `ssh-copy-id USERNAME@lisa.surfsara.nl`. For more information on ssh keys see http://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/.

5. Edit `~/.bashrc` and add the lines below at the bottom of the file.

        export PATH=${HOME}/bin:/opt/matlab/bin:${PATH}
        export LD_LIBRARY_PATH=/opt/matlab/bin/glnxa64
        export LM_LICENSE_FILE=1711@127.0.0.1

6. Each linux session you can create a tunnel by running `tunnel`. After that, you can start Matlab like normal and it should find a license from Lisa.

### Using MATLAB on Lisa


If you're working on a project for which you need access to Matlab you can use it on Lisa ([MATLAB on Lisa](https://surfsara.nl/systems/lisa/software/matlab)).You need:

* A Linux machine
* An account on Lisa

You need to run it as a batch job. For documentation of batch jobs in LISA, please refer to [Batch usage documentation](https://surfsara.nl/systems/lisa/usage/batch-usage).

Here the steps are also provided:
* Login to Lisa

`<your-local-username>@localhost:~$ ssh <your-lisa-username>@lisa.surfsara.nl`

* Make a script called **sleeping.sh**:

***

     #!/bin/bash
     #PBS -lnodes=1
     #PBS -lwalltime=8:00:00
     #PBS -N sleeping
     HOSTNAME=`hostname -f`
     mail -s "Job has started on node $HOSTNAME" <your-email-address>  << EOF
     EOF
     sleep ${PBS_WALLTIME}

* Submit it to the queue:

`<your-lisa-username>@login1:~$ qsub sleeping.sh`

* Once a node gets assigned (for 8 hours), you will get receive an email (this can take a while) with the hostname in the subject. Now you can login from you X11 terminal:

`<your-local-username>@localhost:~$ ssh -Y <your-lisa-username>@lisa.surfsara.nl`

* Then you get to one of the login nodes. You can type:

`<your-lisa-username>@login2:~$ ssh -Y <your-lisa-username>@r24n21`

(if `r24n21` is the node you get assigned to).

* Then you can start MATLAB (2015a is the latest versions. For all installed versions type `module avail matlab`):

`<your-lisa-username>@r24n21:~$ module load matlab/2015a`
`<your-lisa-username@r24n21:~$ matlab`

In this way the allocated node can be used for 8 hours. 


# OpenCL

Open Computing Language (OpenCL) is a language for writing efficient parallel code on both GPU's and CPU's.

###Installing Intel OpenCL on Ubuntu

OpenCL can be used on any modern machine by installing the Intel OpenCL SDK. Unfortunately, there is no Ubuntu package available. Creating it is straightforward though. See:

http://develnoter.blogspot.nl/2012/05/installing-opencl-in-ubuntu-1204.html

###Installing PyOpenCL on Ubuntu

The PyOpenCL package in Ubuntu (python-pyopencl) is broken because of a packaging issue. Fix here:

http://tuxicate.blogspot.nl/2013/04/opencl-python-and-ubuntu-1210.html

# Python

Python is the "dynamic language of choice" of the Netherlands eScience Center.

The style guide for Python is [PEP8](http://www.python.org/dev/peps/pep-0008/). The `pep8` package is a tool to check your Python code against some of the style conventions in PEP 8. The `autopep8` package can automatically format most Python code to conform to the PEP 8 style guide. The `pyflakes` program checks for semantic errors and some style issues that `pep8` doesn't pick up.

The `nose` (aka `nosetests`) package leads to more readable and easier to run unit tests than Python's built-in unit testing framework.

A good way to learn Python is by doing it the hard way at http://learnpythonthehardway.org/

Introduction to python for data science: http://skillsmatter.com/podcast/java-jee/introducing-python-for-data-science

For numerical work in Python, use NumPy and SciPy and their "vectorized" (MATLAB-style) computations. Good vectorized NumPy code can be several orders of magnitude faster than naive Python loops, and more readable as well.

### Anaconda installer
The way to go if (your preferred version of) **Python is not available and you are not root** is to use the [Anaconda installer](http://continuum.io/downloads).

The standard .sh installs dozens of Python modules, likely everything you need.

Alternatively, if you just want Python, you can use the [Miniconda installer](http://conda.pydata.org/miniconda.html).

### Python Virtual Environment
Create isolated Python environments with [virtualenv](https://virtualenv.pypa.io/en/latest/).

Very much recommended for all Python projects, since it fixes all Python dependencies. These may otherwise break, e.g., after a Python upgrade. 

But virtualenv is most handy if you want to **install Python modules when you are not root**. It involves only two commands!

### IPython
[IPython](http://ipython.org) is a great alternative to default python shell.


### Plotting
* [Matplotlib](http://matplotlib.org) together with Numpy can be used when plotting your data.
* [Bokeh](https://github.com/bokeh/bokeh) is Interactive Web Plotting for Python.
* [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/index.html) is Python visualisation
library based on matplotlib. It supports numpy, pandas, scipy and statmodels.

### Database Interface
* [psycopg](http://initd.org/psycopg/) is an [PostgreSQL](http://www.postgresql.org) adapter
* [cx_Oracle](http://cx-oracle.sourceforge.net) enables access to [Oracle](https://www.oracle.com/database/index.html) databases
* [monetdb.sql](https://www.monetdb.org/Documentation/Manuals/SQLreference/Programming/Python)
is [monetdb](https://www.monetdb.org) Python client
* [pymongo](http://api.mongodb.org/python/current/#) allows for work with [MongoDB](http://www.mongodb.com) database
* [py-leveldb](https://code.google.com/p/py-leveldb/) are thread-safe Python bindings for [LevelDb](https://github.com/google/leveldb)

### Parallelisation
The multiprocessing module allows to do very easy and fast parallel executions in one or multiple machines.

### Web Frameworks
There are a set of web frameworks for Python that are very easy to run. We recommend cherrypy

### social media
* [Blog](http://ianozsvald.com/) by Ian Ozsvald, mostly on high performance python.
* [Planet Python](http://planetpython.org)

# R

[R](http://www.r-project.org) is a programming language and software environment for statistical computing and graphics.

One of the strengths of R is the large number of available open source statistical packages. They can be found on [The Comprehensive R Archive Network](http://cran.r-project.org).

### Seting up R
To install R check detailed description at [CRAN website](http://cran.r-project.org).

#### IDE
R programs can be writen in any editor of choice and run on the command line. R code can also be run interactively within R environment, that can be started with `R` command in the shell. To quit R environment type `q()`.

[RSudio](http://www.rstudio.com/products/RStudio/) is a free powerfull integrated development environment (IDE) for R. It features editor with code completion, command line environment, file manager, package manager and history lookup among others.

#### preparing data for analysis
Usually the data you get is not in the format that is easy to process in R. It's called *messy* data. It has to be converted into *tidy* format. There are two packages that make it easy to tidy your messy data. It's [tidyr](https://github.com/hadley/tidyr) and [reshape2](https://github.com/hadley/reshape).

The idea of tidy and messy data is explained in a [tidy data](http://vita.had.co.nz/papers/tidy-data.html) paper by Hadley Wickham.

There is also [manipulatr](https://groups.google.com/forum/#!forum/manipulatr) group used to discuss topics related to data manipulation in R.

#### plotting
R cames with multiple plotting packages. Probably the most popular and powerfull graphics package is [ggplot2](http://ggplot2.org).

Interactive plots can be made with [ggvis](https://github.com/rstudio/ggvis) package and embeded in web application.

#### building interactive web applications
Thanks to [shiny.app](http://shiny.rstudio.com) it is possible to make interactive web application in R without the need to write javascript or html.

#### building reports
[knitr](http://yihui.name/knitr/) is R package designed to build dynamic reports in R. It's possible to generete on the fly new pdf or html documents with results of computations embedded inside.

#### building R packages
There is a great tutorial written by Hadley Wickam describing all the nitty gritty of building your own package in R. It's called [R packages](http://r-pkgs.had.co.nz)

#### learning R
Hadley also wrote a great book about programming in R. It's called [Advanced R](http://adv-r.had.co.nz).

# Ruby

[Ruby](https://www.ruby-lang.org) is a dynamic, open source programming language
with a focus on simplicity and productivity.

## Installing Ruby
Follow [instructions](https://www.ruby-lang.org/en/documentation/installation/#homebrew) on Ruby website. In short:
* on Linux use defalt package manager
* on OS X use [Homebrew](http://brew.sh)

## Installing Ruby packages (gems)
[RubyGems](https://rubygems.org) is a package manager for the Ruby programming language.
```
gem install mygem
```


## Ruby environment ([rbenv](http://rbenv.org))
Use Ruby envirnment to isolate development Ruby from system wide one.
Follow [instructions](http://rbenv.org) to set it up.

# TypeScript

* [TypeScript](http://www.typescriptlang.org/)
  * programming language
  * typed superset of JavaScript
  * compiles to plain JavaScript
  * integration with Eclipse: [TypEcs](http://typecsdev.com/), [screenshot](https://github.com/jspaaks/estep-graphdb/raw/master/wiki-images/2014-10-09-103829_1920x1080_scrot.png)
  * [youtube](http://www.youtube.com/playlist?list=PLyJiOytEPs4d9QUQHHSuY3n3nBmkBuqro): tutorials playlist about TypeScript
  * [tutorial](http://www.typescriptlang.org/Tutorial) from Microsoft's TypeScript website  
  * [blog post](http://www.aaron-powell.com/posts/2012-10-03-typescript-source-maps.html) about how TypeScript can be used with the Google Chrome/Chromium debuggers (and [presumably](http://blog.oio.de/2014/04/04/internet-explorer-11-source-map-based-debugging/) Firefox, and Internet Explorer) through the use of so-called 'source maps'. (Follow [this](http://www.codeproject.com/Articles/649271/How-to-Enable-Source-Maps-in-Firefox) link to set up source mapping for Firefox, also useful for debugging minified JavaScript code).
  * [blog post](http://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) that supposedly is the definitive guide to TypeScript
  * TypeScript Language Specification [pdf](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf)
  * CATS: a TypeScript editor, written in TypeScript [https://github.com/jbaron/cats](https://github.com/jbaron/cats). Note that, on newer Ubuntu versions, you'll have to edit a binary file as per the instructions on [https://www.exponential.io/blog/install-node-webkit-on-ubuntu-linux](this) site (Just changing a '0' to a '1'). Screenshot [here](https://github.com/jspaaks/estep-graphdb/raw/master/wiki-images/2014-10-10-131310_1920x1080_scrot.png).
  * TypeScript IDE from Microsoft - [Visual Studio Code](https://code.visualstudio.com/)


