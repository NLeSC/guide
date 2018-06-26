# Code reviews

## Introduction
At the eScience Center, we value software quality. Higher quality software has
fewer defects, better security, and better performance, which leads to happier
users who can work more effectively.

Code reviews are an effective method for improving software quality. McConnell
(2004) suggests that unit testing finds approximately 25% of defects, function
testing 35%, integration testing 45%, and code review 55-60%. While that
means that none of these methods are good enough on their own, and that they
should be combined, clearly code review is an essential tool here.

Code review also improves the development
process. By reviewing new additions for quality, less technical debt is
accumulated, which helps long-term maintainability of the code. Reviewing lets
developers learn from each other, and spreads knowledge of the code around
the team. It is also a good means of getting new developers up to speed.

The main downside of code reviews is that they take time and effort. In
particular, if someone from outside the project does the reviewing, they'll
have to learn the code, which is a significant investment. Once up to speed,
the burden is reduced significantly however, and the returns include a much
smaller amount of time spent debugging later.



## Approach

It's important to distinguish between semi-formal code *reviews* and formal
code *inspections*. The latter involve "up to six participants and hours of
meetings paging through detailed code printouts" (SMARTBEAR 2016). As this
extra formality does not seem to yield better results, we limit ourselves to
light-weight, informal code reviews.



## Process

We haven't yet decided on how to integrate code reviews into our working
process. While that gets hashed out, here is some general advice from various
sources and experience.

- Review everything, nothing is too short or simple

- Try to have something else to do, and spread the load throughout your
working day. Don't review full-time.

- Don't review for more than an hour at a time, after that the success rate
drops quite quickly

- Don't review more than 400 lines of code (LOC) at a time, less than 200
LOC is better

- Take the time, read carefully, don't review more than 500 LOC / hour



## Prerequisites

Before handing over a change or a set of code for review, the following items
should be there for the reviewer to work with:

- Documentation on what was changed and why (feature, bug, issue #, etc.)
- Comments / annotations by the author on the code itself
- Test cases

Also, before doing a code review, make sure any *tools* have run that check
the code automatically, e.g. checkers for coding conventions and static
analysis tools, and the test suite. Ideally, these are run as part of the
continuous integration infrastructure.



## Review checklist

This section provides two checklists for code reviews, one for the whole
program, and one for individual files or proposed changes.

In all cases, the
goal is to use your brain and your programming experience to figure out how
to make the code better. The lists are intended to be a source of inspiration
and a description of what should be best practices in most circumstances.
Some items on this list may not apply to your project
or programming language, in which case they should be disregarded.



### Excluded from this checklist

The following items are part of a software quality check, but are better done
by an automated tool than by a human. As such, they've been excluded from this
checklist. If tools are not available, they should be checked manually.

- Coding conventions (e.g. PEP 8)
- Test coverage



### Program level checklist

Here is a list of things to consider when looking at the program as a whole,
rather than when looking at an individual file or change.

#### Documentation

Documentation is a prerequisite for using, developing and reviewing the
program. Here are some things to check for.

- Is there a description of the purpose of the program or library?
- Are detailed requirements listed?
- Are requirements ranked according to MoSCoW?
- Is the use and function of third-party libraries documented?
- Is the structure/architecture of the program documented? (see below)
- Is there an installation manual?
- Is there a user manual?
- Is there documentation on how to contribute?
  - Including how to submit changes
  - Including how to document your changes

#### Architecture

These items are mainly important for larger programs, but may still be good
to consider for small ones as well.

- Is the program split up into clearly separated modules?
- Are these modules as small as they can be?
- Is there a clear, hierarchical or layered, dependency structure between
  these modules?
  - If not, functionality should be rearranged, or perhaps heavily
    interdependent modules should be combined
- Can the design be simplified?

#### Security

If you're making software that is accessible to the outside world (e.g. a web
application), then security becomes important. Security issues are defects,
but not all defects are security issues. A security-conscious design can help
mitigate the security impact of defects.

- Which modules deal with user input?
- Which modules generate output?
- Are input and output compartmentalised?
  - If not, consider making separate modules that manage all input
    and output, so validation can happen in one place
- In which modules is untrusted data present?
  - The fewer the better
- Is untrusted data compartmentalised?
  - Ideally, validate in the input module and pass only
    validated data to other parts

#### Legal

"I'm an engineer, not a lawyer!" is an oft-overheard phrase, but being an
engineer doesn't give you permission to ignore the legal rights of the
creators of the code you're using. Here are some things to check. When in
doubt, ask your licensing person for advice.

- Are the licenses of all modules/libraries that are used documented?
- Are the requirements set by those licenses fulfilled?
  - Are the licenses included where needed?
  - Are copyright statements included in the code where needed?
  - Are copyright statements included in the documentation where needed?
- Are the licenses of all the parts compatible with each other?
- Is the project license compatible with all libraries?


### File/Change level checklist

When you're checking individual changes (e.g. pull requests) or files, the
code itself becomes the subject of scrutiny. Depending on the language, files
may contain interfaces, classes or other type definitions, and functions. All
these should be checked, as well as the file overall:

- Does this file contain a logical grouping of functionality?
- How big is it? Should it be split up?
- Is it easy to understand?
- Can any of the code be replaced by library functions?

#### Interfaces
- Is the interface documented?
- Does the concept it models make sense?
- Can it be split up further? (Interfaces should be as small as possible)

Note that most of the following items assume an object-oriented programming
style, which may not be relevant to the code you're looking at.

#### Classes and types

- Is the class documented?
- Does it have a single responsibility? Can it be split?
- If it's designed to be extended, can it be?
- If it's not designed to be extended, is it protected against that? (e.g. final declarations)
- If it's derived from another class, can you substitute an object of this class for one of its parent class(es)?
- Is the class testable?
    - Are the dependencies clear and explicit?
    - Does it have a small number of dependencies?
    - Does it depend on interfaces, rather than on classes?

#### Function/Method declarations

- Are there comments that describe the intent of the function or method?
- Are input and output documented? Including units?
- Are pre- and postconditions documented?
- Are edge cases and unusual things commented?

#### Function/Method definitions

- Are edge cases and unusual things commented?
- Is there incomplete code?
- Could this function be split up (is it not too long)?
- Does it work? Perform intended function, logic correct, ...
- Is it easy to understand?
- Is there redundant or duplicate code? (DRY)
- Do loops have a set length and do they terminate correctly?
- Can debugging or logging code be removed?
- Can any of the code be replaced by library functions?

#### Security

- If you're using a library, do you check errors it returns?
- Are all data inputs checked?
- Are output values checked and encoded properly?
- Are invalid parameters handled correctly?

#### Tests

- Do unit tests actually test what they are supposed to?
- Is bounds checking being done?
- Is a test framework and/or library used?



## Providing feedback

The main purpose of a code review is to find issues or defects in a piece of
code. These issues then need to be communicated back to the developer who
proposed the change, so that they can be fixed. Doing this badly can quickly
spoil everyone's fun.

Perhaps the most important point in this guide therefore is that the goal of a
code review is *not* to provide criticism of a piece of code, or even worse,
the person who wrote it. *The goal is to help create an improved version.*

So, when providing feedback, stay positive and constructive. Suggest a better
way if possible, rather than just commenting that the current solution is bad.
Ideally, submit a patch rather than an issue ticket. And always keep in mind
that you're not required to find anything, if the code is fine, it's fine. If
it's more than fine, file a compliment!

Most of our projects are hosted on GitHub, so most results will be
communicated through pull requests and issues there. However, if you find
something particularly bad or weird, consider talking in person, where a
lengthy, complicated, or politically sensitive explanation is easier to do.


### Communicating results through GitHub

If you are reviewing a pull request on Github, comments should be added in the
`Files changed` section, so they can be attached to a particular line of code.
Make many small comments this way, rather than a big ball of text with
everything in it, so that different issues can be kept separate. Where
relevant, refer to existing Issues and documentation.

If you're reviewing existing code rather than changes, it is still handy to
use pull requests. If you find an issue that has an obvious fix, you can
submit a pull request with a patch in the usual way.

If you don't have a fix, you can add an empty comment to the relevant line,
and create a pull request from that as a patch. The relevant line(s) will then
light up in the pull request's `Files changed` overview, and you can add your
comments there. In this case, either the pull request is never merged (but the
comments processed some other way, or not at all), or the extra comments are
reverted and replaced by an agreed-upon fix.

In all cases, file many small pull requests, not one big one, as GitHub's
support for code reviews is rather limited. Putting too many issues into a
single pull request quickly becomes unwieldy.

## References

Atwood, Jeff (2006) [Code Reviews: Just Do It](http://blog.codinghorror.com/code-reviews-just-do-it/)

Burke, Kevin (2011) [Why code review beats testing: evidence from decades of programming research.](https://kev.inburke.com/kevin/the-best-ways-to-find-bugs-in-your-code/)

McConnell, Steve (2004) Code Complete: A Practical Handbook of Software Construction, Second Edition. Microsoft Press. ISBN-13: 978-0735619678

SMARTBEAR (2016) [Best practices for code review.](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)


