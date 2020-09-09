# Bash

In most Linux distributions, Bash is the default way of interacting with the
system.
Bash is the recommended shell at the Netherlands eScience Center because it is
the most commonly used shell and therefore the most convenient for
collaboration.

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

- the keyboard shortcuts
- the name and function of commonly used command line tools
- how to configure bash aliases

### Bash keyboard shortcuts
In introduction to
[bash keyboard shortcuts](https://www.tecmint.com/linux-command-line-bash-shortcut-keys/)
can be found here.
Note that Bash can also be configured such that it uses the *vi* keyboard
shortcuts instead of the default *emacs* ones, which can be useful if you
[prefer vi](https://skeptics.stackexchange.com/questions/17492/does-emacs-cause-emacs-pinky).

### Commonly used command line tools
It is recommended that you know at least the names and use of the following
command line tools.
The details of how to use a tool exactly can easily be found by searching the
internet or using `man` to read the manual, but you will be vastly more
efficient if you already know the name of the command you are looking for.

Working with files
- `ls` - List files and directories
- `tree` - Graphical representation of a directory structure
- `cd` - Change working directory
- `pwd` - Show current working directory
- `cp` - Copy a file or directory
- `mv` - Move a file or directory
- `rm` - Remove a file or directory
- `mkdir` - Make a new directory
- `touch` - Make a new file
- `chmod` - Change the permissions on a file or directory
- `chown` - Change the owner of a file or directory
- `find` - Search for files and directories on the file system
- `locate`, `updatedb` - Search for files and directories quickly using a database
- `tar` - (Un)pack .tar or .tar.gz files
- `unzip` - Unpack .zip files
- `df`, `du` - Show free space on disk, show file sizes on disk

Working with text
- `echo` - Repeat some text
- `diff` - Show the difference between two text files
- `grep` - Search in text
- `sed` - Edit text
- `cut` - Select columns from text
- `cat` - Print the content of a file
- `head` - Print the first n lines
- `tail` - Print the last n lines
- `tee`	- Read from standard input and write to standard output and file
- `less` - Read text
- `sort` - Sort text
- `uniq` - Keep unique lines
- `wc` - Count words/lines
- `nano`, `emacs`, `vi` - Interactive text editors found on most Linux systems

Working with programs
- `man` - Read the manual
- `ps` - Print all currently running programs
- `top` - Interactively display all currently running programs
- `kill` - Stop a running program
- `\time` - Collect statistics about resource usage (e.g. runtime, memory, disk IO)
- `which` - Find which file will be executed when you run a command
- `xargs` - Run programs with arguments in parallel

Working with remote systems
- `ssh` - Connect to a shell on a remote computer
- `rsync` - Copy files between computers using SSH/SFTP
- `lftp` - Copy files between computers using FTP
- `wget`, `curl` - Copy a file using https or make a request to a remote API
- `scp`, `sftp`, `ftp` - Simple tools for transferring files over (S)FTP - not recommended

Miscellaneous
- `bash` - The command to start bash
- `history` - View all past commands
- `fg`, `bg` - Move a program to the foreground, background, useful with Ctrl+Z
- `su` - Switch user
- `sudo` - Run a command with root permissions

For further inspiration, see this
[extensive list of command line tools](https://fossbytes.com/a-z-list-linux-command-line-reference/).

### Bash aliases
[Bash aliases](https://linuxize.com/post/how-to-create-bash-aliases/)
allow you to define shorthands for commands you use often.
Typically these are defined in the `~/.bashrc` or `~/.bash_aliases` file.

## Scripts

It is possible to write bash scripts.
This is done by writing the commands that you would normally use on the command
line in text file and e.g. running the file with `bash some-file.sh`.
However, doing this is only recommended if there really are no other options.
If you have the option to write a Python script instead, that is the recommended
way to go.
This will bring you all the advantages of a fully-fledged programming
language and Python is the recommended programming language at the
Netherlands eScience Center.
If you do not mind having an extra dependency and would like to use the features
and commands available in the shell from Python, the
[sh](https://amoffat.github.io/sh/) library is a nice option.

If you really must write a bash script, always use
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

a non-zero exit code usually indicates that an error occurred.
If needed, you can temporarily allow this kind of error for a single line by
wrapping it like this
```bash
set +e
false  # A command that returns a non-zero exit code
set -e
```

## Further resources

- [Cheat sheet](https://devhints.io/bash)
- The [Bash Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html) or use `man bash`
