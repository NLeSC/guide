# TL;DR: Some Rules

Intellectual property is a complex subject matter, and we're interested in developing code, not doing legal analysis. While we cannot always get away from doing some legal analysis in more complex cases, the majority of things we run into are relatively simple, and can be resolved by following some simple rules. This section gives such a set of rules, and does so rather conservatively, i.e. it lists only things that the eScience Center is definitely okay with. If your particular case is not listed here, then it may still be possible, but only after careful consideration. So in that case, read on and/or ask for help.

**I want to publish my source code, not including any of its dependencies, is that ok?**

If
- you publish your source code (and only your source code) under the Apache License version 2.0,
- *and* you do *not* include any externally-developed libraries you used,
- *and* all of the externally-developed libraries you used are under a free/open source license (see below)
then you are good to go.

For the purpose of this rule, the following dependency licenses are okay

- MIT
- BSD 2-clause
- BSD 3-clause
- Apache License version 2.0
- GNU Lesser General Public License v2 or later
- GNU General Public License v2 or later

and any other licenses, including "for academic use only" and similar statements, are not okay.


*Rationale: For all but the copyleft licenses in this list, the GNU GPL v2 or later, this is clearly allowed, regardless of whether the program is considered a derivative work.

For a dependency with a copyleft license, it is slightly more complicated. To our knowledge, there is no case law on whether the source code of a program, purely because it depends on some library and contains import and call statements, is a derivative work of that library. We do not believe this to be the case however, as none of the library code is included, and the two works are not linked into a single address space. While the source code may be partially written in terms of concepts that are defined by the library, this does not make it a derivative work any more than a novel is a derivative work of a dictionary.

Note that this is a different situation from having a statically or dynamically linked binary, because in that case the actual library code *is* included, and the binary is clearly a derivative work.

Furthermore, if the program source code *were* to be considered a derivative work of a GPL dependency, then licensing the program under the GPL would not bar us from also licensing it under the Apache License v2.0, as the GPL allows the copyright owner to give extra permissions on top of the GPL license. That case, however, would not be materially different from licensing our source code only under the Apache License v2.0, as all the permissions a licensee gets under the GPL are also given by the Apache license. Thus in such a case, there would be no harm done. If a library author were to complain, then we could offer an additional GPL license on top of the Apache License if it makes them feel better.

Finally, just as importantly, the purpose of a copyleft license is to codify a tit-for-tat system: I'll share my code with you, if you share yours with mine. By releasing our code under the Apache License v2.0, we are clearly upholding our end of that bargain, thus making this decision an ethical one as well.*


**I want to use a library with license X, is that ok?**

This is certainly no problem if the library has one of the following licenses:

- MIT
- BSD 2-clause
- BSD 3-clause
- Apache License version 2.0

These are all permissive licenses that impose very little restrictions on how your program can be used. So go right ahead.

We try to avoid copyleft licenses, such as the GNU Lesser General Public License (LGPL) and GNU General Public License (GPL), but if there is no alternative available, then using a library licensed under the (L)GPL is fine too.

*Rationale: The Netherlands eScience Center is a publicly funded institution, and a such we want to maximise the number of ways in which people and organisations, including commercial ones, can use the software we develop. Copyleft licenses restrict this somewhat, so we try to avoid them. However, any Free Software can still be used by anyone for any purpose, redistributed, forked, and commercialised, which is enough freedom that we will not do a lot of extra work just to avoid copyleft.*


**I want to publish a data set, is that ok?**

If
- You or your collaborators collected the data yourselves, as part of the project,
- *and* you all agree that you want to publish it under the Creative Commons CC-BY 4.0 license
then you are good to go.

If the data set contains (possibly processed) data you obtained from elsewhere, then the licensing situation of that data needs to be evaluated first. If you or our collaborators want to use a different license, then this should be discussed first.

