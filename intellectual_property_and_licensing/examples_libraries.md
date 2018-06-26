# Examples: Using Libraries

Many of the examples in this section relate to [xtas](http://xtas.net). xtas is a natural language processing toolkit for Python that reuses many third-party libraries, programs and data sets, and therefore provides a variety of nice examples.

![A graphical overview of xtas. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Underneath this there are three side-by-side squares, representing respectively Python libraries, Software, and Data, that are used by xtas. Within the Python libraries square, there are three boxes. The first box contains the words "BSD", "MIT" and "ALv2". The seconds box contains "LGPLv2.1". The third box contains "GPLv2+". Within the Software square, there are four boxes. The first box contains "Web Service". The second box contains "LGPL v2.1+". The third box contains "Research only" and the fourth box contains "GPL 2+/3+". The Data square also contains four boxes. The first box contains "CC BY-SA 3.0". The second box contains "Research Only". The third box contains "No license, US" and the fourth box contains "CoNLL'02 only".](xtas_overview_96.svg.png)

xtas itself is written in Python, and it uses a number of Python libraries that are licensed under common Free licenses. These include the simple permissive BSD and MIT licenses, the permissive Apache License version 2.0 (ALv2), the GNU Lesser General Public License version 2.1 (LGPLv2.1), and the GNU General Public License version 2 or later (GPLv2+).

(Note that the dependency on the GPLv2+ Python library has now been removed, but for the sake of these examples we will assume it to still be there.)

xtas' own Python code is distributed by us under the Apache License version 2.0. Since we own the copyright, we can license it any way we like (although there's a gray area with respect to GPL dependencies, see below). We do not distribute any combined works or binaries, but in the examples below we'll assume that there is a combined work, so that we can consider how it should be licensed.

In the following examples, we'll simplify most of this away, and look at one or a few dependencies in turn.


## xtas vs. Snowball

![An illustration of the xtas vs. Snowball example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "Snowball Stemmer" and "Python lib BSD".](xtas_snowball_96.svg.png)

xtas uses Snowball, a Python-based stemming library. Snowball is published under the 3-clause BSD license. Considering only xtas and Snowball, we can answer the three questions as follows.

### Which separate works are there, and what is derived from what?

There are three works: Snowball, the xtas Python code, and the combined work xtas. The combined work derives from Snowball and from the xtas Python code. The others are independent works.

Note that the ALv2 and the LGPL v2.1 explicitly state that source code that is intended to work in combination with a library is not a derivative work, while the binary resulting from (statically or dynamically) linking the pieces together is; other licenses including the GPL do not make any explicit statement about this.

As far as I know, there is no case law on this; we will assume it to be the case in these examples.

### Can the works be distributed, i.e. do the licenses allow this and are they compatible?

Snowball is licensed under a permissive license, so it can be redistributed under that license, and there are no constraints on the license of derivative works. We own the copyright to the xtas Python code, so we can license it in any way we want.

### How should the work(s) be licensed?

The xtas Python code, and the xtas combined work, can be licensed under any license we want, so we should use the default eScience Center license, which is the Apache License v2.0.

If we redistribute Snowball, we must do so under the BSD license granted by its authors. (We cannot give additional permissions for Snowball, since we don't own the copyright, and additional restrictions would be unenforceable for the same reason.)


## xtas vs. chardet

![An illustration of the xtas vs. chardet example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "chardet" and "Python lib LGPLv2.1".](xtas_chardet_96.svg.png)

xtas uses chardet, a Python library for detecting the character set used in a string of text. Chardet is published under the GNU Lesser General Public License v2.1. Considering only xtas and chardet, we can answer the three questions as follows.

### Which separate works are there, and what is derived from what?

There are three works: chardet, the xtas Python code, and the combined work. The combined work derives from chardet and from the xtas Python code. The others are independent works.

### Can the works be distributed, i.e. do the licenses allow this and are they compatible?

Chardet is licensed under a weak copyleft license, so it can be redistributed under the terms of that license. Derivative works can be licensed under any license, but the LGPL v2.1 does require that the recipient can (and is allowed to) modify the library and use the modified library with the derivative work.

### How should the work(s) be licensed?

xtas as a whole, and the xtas Python code, can be licensed in any way we want, so we use the default eScience Center license, which is the Apache License v2.0. If we distribute chardet, we must do so under the LGPL v2.1 license granted by its copyright owners.


## xtas vs. unidecode

![An illustration of the xtas vs. unidecode example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "unidecode" and "Python lib GPLv2+".](xtas_unidecode_96.svg.png)

xtas previously used unidecode, a Python library for converting text encoded according to The Unicode® Standard into an ASCII approximation of it. Unidecode is published under the GNU General Public License version 2 or later (GPLv2+). Considering only xtas and unidecode, we can answer the three questions as follows.

### Which separate works are there, and what is derived from what?

There are three works: unidecode, the xtas Python code, and the combined work. The combined work derives from unidecode and from the xtas Python code.

Whether the xtas Python code is a derivative work of unidecode is not clearly defined by the law, and there is no case law on this. The Apache license and the LGPL explicitly state that it is not for the purpose of those licenses, but the GPL does not contain such a clause.

As they are developed separately and there is no code from unidecode in the xtas code, we assume here that it is not a derivative work.

### Can the works be distributed, i.e. do the licenses allow this and are they compatible?

Unidecode is licensed under a strong copyleft license, so it can be redistributed under the terms of that license. Derivative works must be licensed under the same license.

Unidecode is licensed under the GPL version 2 or later. This is known as a _disjunctive license_. The copyright owners of unidecode offer everyone a GPLv2 license, but also a GPLv3 license, and even proactively any later version of the GNU GPL that may be created in the future. A potential user may choose to accept any one of these licenses, or a combination of them, if they want to copy the work or make derivative works.

### How should the work(s) be licensed?

If we distribute unidecode, we should do so under the GPL version 2 or higher, as arbitrarily removing licenses from someone else's code does not make sense. The combined work xtas must be distributed under the same licenses, or a subset of them. The xtas Python code can be licensed in any way we want.

We should choose a license for the xtas Python code that is compatible with at least one of the licenses that unidecode can be distributed under, so that others can assemble and distribute combined works. Our default license, the ALv2, is compatible with the GPLv3 (but not with the GPLv2, for technical reasons), so we can use it here.

The combined work should then be licensed under the GPL version 3 or later. If it is important that it can be used under the GPLv2 as well, then we can license the xtas Python code under both the ALv2 and the GPLv2 (i.e. we offer both licenses, and the user can choose to accept either or both), and the combined work under the GPL version 2 or later.

Finally, if it is decided at some point in the future that the xtas Python source code is a derivative work of unidecode because it calls into it, even if none of unidecode is included in the work, then we must distribute the xtas Python code under at least one of the GPL licenses that unidecode is distributed under. In that case, we can offer xtas under the ALv2 and GPLv2+ set of licenses.

The simplest solution in this case would be to simply license the xtas Python code and the derived work under the GPLv3. However, we want people to be able to use as much of our software as possible in proprietary software, which is why our preferred license is the permissive ALv2.

As is probably clear by now, dependencies that are under a strong copyleft license complicate your life if you want people to be able to make proprietary works based on your software. For this reason, we try to avoid them.


## All together now

![An illustration of the xtas and all Python libraries example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below this, there are three squares. The first square contains the words "Snowball" and "Python lib BSD". The second square contains "chardet" and "Python lib LGPLv2.1". The third square contains the words "unidecode" and "Python lib GPLv2+".](xtas_all_python_libs_96.svg.png)

Now, we will consider all three of the above examples at the same time.

### How many separate works are there, and what is derived from what?

There are five works: Snowball, chardet, unidecode, the xtas Python code, and xtas the combined work. The combined work is derived from all its components.

### Can the works be distributed, i.e. do the licenses allow this and are they compatible?

The four components are under Free Software licenses, and/or we own the copyright, so they can be distributed. The BSD, LGPLv2.1 and GPLv2+ all allow licensing the combined work under the GPL version 2 or higher, so there is at least one license that the combined work can be licensed under.

### How should the work(s) be licensed?

The xtas Python code should be licensed under our default Apache License v2, and the combined work under the GPL version 3 or higher. (See the unidecode example above for alternatives.)


## In the Clouds

For the project "Towards Large-Scale Cloud-Resolving Climate Simulations", we want to combine the OpenIFS global circulation model with the DALES large-eddy simulation model. Both these models are available as libraries, so the project entails combining the OpenIFS and Dales libraries into a single program.

(This is a simplified example, the reality of this project is a notch or two more complicated, and the below is not exactly what we do.)

The OpenIFS library (part of the ECMWF weather model code) is available under a proprietary license that allows running the program and making private modifications, but does not allow distributing the program or any derivatives. DALES is published under the GPL version 3.

### How many separate works are there, and what is derived from what?

There are four works: OpenIFS, DALES, the rest of the program written by us, and the combination of them all. The combined work is derived from its components.

### Can the works be distributed, i.e. do the licenses allow this and are they compatible?

The OpenIFS license does not allow redistribution, so it cannot be distributed. DALES can be distributed, under the GPLv3. The rest of the program is written by us and can be licensed by us if we want to.

The whole combined work cannot be distributed, since it incorporates OpenIFS. If it did not include OpenIFS, it would have to be distributed under the GPLv3, because of the DALES dependency.

### Can we work on this privately, without distributing anything?

The GPL allows making private modifications of software covered by it, with no restrictions, provided the changed software is not distributed at all. The OpenIFS license also allows making private modifications. So we can work on this project (and prepare and run combined works) within the Netherlands eScience Center without violating the licenses, as long as we do not share the results with anyone.

However, as in most of our projects, we work together with a principal investigator outside the eScience Center. This means that we exchange materials between different legal entities, which counts as distribution. We can do that with our own code (which we can even publish openly under the ALv2) and with DALES, but not with OpenIFS or any combined works.

### What other options are there in this kind of situation?

We can try to split up the system into independent programs that run in separate processes and communicate with each other over well-documented, generic interfaces. In this way, there would never be a combined work, just a few independent works that exchange information. Exactly how separate the programs have to be to not be considered a single work is, again, a gray area.

We could also ask the OpenIFS and DALES copyright owners for permission to share combined works between the eScience Center and the PI. That would remove all uncertainty, but may not be practical in general.

Another option would be to replace one of the dependencies by one written by ourselves. This is usually impractical, both due to time constraints and because the new version would not have the scientific pedigree of the existing one.

The fundamental issue here is that the GPL tries to make everyone shared stewards of the software we use, while proprietary software tries to keep control over it in the hands of a single owner.

Combining them in a single project is complicated and not without legal risk, and we should avoid it. If that's not possible, we should tread carefully.


## Trademarks

Unicode is a registered trademark of Unicode, Inc. in the United States and other countries.

