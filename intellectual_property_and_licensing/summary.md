# Executive summary

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

and any other licenses, including "for academic use only" and similar statements, are not okay.


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

