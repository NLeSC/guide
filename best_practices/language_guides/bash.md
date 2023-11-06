# Bash

*Page maintainer: Bouwe Andela* [@bouweandela](https://github.com/bouweandela)


Bash is both a command line interface,
also known as a **shell**, and a scripting language.
On most Linux distributions, the Bash shell is the default way of interacting
with the system.
Zsh is an alternative shell that also understands the Bash scripting language,
this is the default shell on recent versions of Mac OS.
Both Bash and Zsh are available for most operating systems.

At the Netherlands eScience Center, Bash is the recommended shell scripting
language because it is the most commonly used shell language and therefore the
most convenient for collaboration.
To facilitate mutual understanding, it is also recommended that you are aware of
the shell that your collaborators are using and that you write documentation
with this in mind.
Using the same shell as your collaborators is a simple way of making sure you
are always on the same page.

In this chapter, a short introduction and best practices for both interactive
and use in scripts will be given.
An excellent tutorial introducing Bash can be found
[here](https://swcarpentry.github.io/shell-novice/).
If you have not used Bash or another shell before, it is recommended that you
follow the tutorial before continuing reading.
Learning to use Bash is highly recommended, because after some initial learning,
you will be more efficient and have a better understanding of what is going on
than when clicking buttons from the graphical user interface of your operating
system or integrated development environment.

## Interactive use

If you are a (research) software engineer, it is highly recommended that you
learn

- the [keyboard shortcuts](#Bash-keyboard-shortcuts)
- how to configure [Bash aliases](#Bash-aliases)
- the name and function of [commonly used command line tools](#Commonly-used-command-line-tools)

### Bash keyboard shortcuts
An introduction to
[bash keyboard shortcuts](https://www.tecmint.com/linux-command-line-bash-shortcut-keys/)
can be found here.
Note that Bash can also be configured such that it uses the *vi* keyboard
shortcuts instead of the default *emacs* ones, which can be useful if you
[prefer vi](https://skeptics.stackexchange.com/questions/17492/does-emacs-cause-emacs-pinky).

### Bash aliases
[Bash aliases](https://linuxize.com/post/how-to-create-bash-aliases/)
allow you to define shorthands for commands you use often.
Typically these are defined in the `~/.bashrc` or `~/.bash_aliases` file.

### Commonly used command line tools
It is recommended that you know at least the names and use of the following
command line tools.
The details of how to use a tool exactly can easily be found by searching the
internet or using `man` to read the manual, but you will be vastly more
efficient if you already know the name of the command you are looking for.

**Working with files**

- `ls` - List files and directories
- `tree` - Graphical representation of a directory structure
- `cd` - Change working directory
- `pwd` - Show current working directory
- `cp` - Copy a file or directory
- `mv` - Move a file or directory
- `rm` - Remove a file or directory
- `mkdir` - Make a new directory
- `touch` - Make a new empty file or update its access and modification time to the current time
- `chmod` - Change the permissions on a file or directory
- `chown` - Change the owner of a file or directory
- `find` - Search for files and directories on the file system
- `locate`, `updatedb` - Search for files and directories quickly using a database
- `tar` - (Un)pack .tar or .tar.gz files
- `unzip` - Unpack .zip files
- `df`, `du` - Show free space on disk, show disk space usage of files/folders

**Working with text**

Here we list the most commonly used Bash tools that are built to manipulate
*lines of text*.
The nice thing about these tools is that you can combine them by streaming the
output of one tool to become the input of the next tool.
Have a look at the
[tutorial](https://swcarpentry.github.io/shell-novice/04-pipefilter.html)
for an introduction.
This can be done by creating
[pipelines](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Pipelines)
with the pipe operator `|` and by redirecting text to output streams or files
using
[redirection operators](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Redirections)
like `>` for output and `<` for input to a command from a text file.

- `echo` - Repeat some text
- `diff` - Show the difference between two text files
- `grep` - Search for lines of text matching a simple string or regular expressions
- `sed` - Edit lines of text using regular expressions
- `cut` - Select columns from text
- `cat` - Print the content of a file
- `head` - Print the first n lines
- `tail` - Print the last n lines
- `tee`	- Read from standard input and write to standard output and file
- `less` - Read text
- `sort` - Sort lines of text
- `uniq` - Keep unique lines
- `wc` - Count words/lines
- `nano`, `emacs`, `vi` - Interactive text editors found on most Unix systems

**Working with programs**

- `man` - Read the manual
- `ps` - Print all currently running programs
- `top` - Interactively display all currently running programs
- `kill` - Stop a running program
- `\time` - Collect statistics about resource usage such as runtime, memory use, storage access (the `\` in front is needed to run the `time` program instead of the bash builtin function with the same name)
- `which` - Find which file will be executed when you run a command
- `xargs` - Run programs with arguments in parallel

**Working with remote systems**

- `ssh` - Connect to a shell on a remote computer
- `rsync` - Copy files between computers using SSH/SFTP
- `lftp` - Copy files between computers using FTP
- `wget`, `curl` - Copy a file using https or make a request to a remote API
- `scp`, `sftp`, `ftp` - Simple tools for transferring files over (S)FTP - not recommended
- `who` - show who is logged on
- `screen` - Run multiple bash sessions and keep them running even when you log out

**Installing software**

- `apt` - The default package manager on Debian based Linux distributions
- `yum`, `dnf` - The default package manager on RedHat/Fedora based Linux distributions
- `brew` - A package manager for MacOS
- `conda` - A package manager that supports many operating systems
- `pip` - The Python package manager
- `docker`, `singularity` - Run an entire Linux operating system including software from a [container](https://www.docker.com/resources/what-container)

**Miscellaneous**

- `bash`, `zsh` - The command to start Bash/Zsh
- `history` - View all past commands
- `fg`, `bg` - Move a program to the foreground, background, useful with Ctrl+Z
- `su` - Switch user
- `sudo` - Run a command with root permissions

For further inspiration, see this
[extensive list of command line tools](https://fossbytes.com/a-z-list-linux-command-line-reference/).

## Scripts

It is possible to write bash scripts.
This is done by writing the commands that you would normally use on the command
line in text file and e.g. running the file with `bash some-file.sh`.

However, doing this is only recommended if there really are no other options.
If you have the option to write a Python script instead, that is the recommended
way to go.
This will bring you all the advantages of a fully-fledged programming language
(such as libraries, frameworks for testing and documentation) and Python is the
recommended programming language at the Netherlands eScience Center.
If you do not mind having an extra dependency and would like to use the features
and commands available in the shell from Python, the
[sh](https://sh.readthedocs.io) library is a nice option.

Disclaimer: if you are an experienced Bash developer, there might be situations
where using a Bash script solves your problem faster or in a more portable way
than a Python script.
Do take take a moment to think about whether such a solution is easy to
contribute to for collaborators and will be easy to maintain in the future, as
the number of features, supported systems, and code paths grows.

When writing a bash script, always use
[`shellcheck`](https://www.shellcheck.net/)
to make sure that your bash script is as likely to do what you think it should
do as possible.

In addition to that, always start the script with
```bash
set -euo pipefail
```
this will stop the script if there is

- `-e` a command that exits with a non-zero exit code
- `-o pipefail` a command in a pipe that exits with a non-zero exit code
- `-u` an undefined variable in your script

an exit code other than zero usually indicates that an error occurred.
If needed, you can temporarily allow this kind of error for a single line by
wrapping it like this
```bash
set +e
false  # A command that returns a non-zero exit code
set -e
```

## Further resources

- [Bash Tutorial](https://swcarpentry.github.io/shell-novice/)
- [Bash Cheat sheet](https://devhints.io/bash)
- The [Bash Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html) or use `man bash`
- [Oh My Zsh](https://ohmyz.sh/) offers an extensive set of themes and shortcuts for the Zsh
