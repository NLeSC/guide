## Examples

Many of the examples in this section relate to [xtas](http://xtas.net). xtas is a natural language processing toolkit for Python that reuses many third-party libraries, programs and data sets, and therefore provides a variety of nice examples.

![A graphical overview of xtas. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Underneath this there are three side-by-side squares, representing respectively Python libraries, Software, and Data, that are used by xtas. Within the Python libraries square, there are three boxes. The first box contains the words "BSD", "MIT" and "ALv2". The seconds box contains "LGPLv2.1". The third box contains "GPLv2+". Within the Software square, there are four boxes. The first box contains "Web Service". The second box contains "LGPL v2.1+". The third box contains "Research only" and the fourth box contains "GPL 2+/3+". The Data square also contains four boxes. The first box contains "CC BY-SA 3.0". The second box contains "Research Only". The third box contains "No license, US" and the fourth box contains "CoNLL'02 only".](xtas_overview_96.svg.png)

(Note that the dependency on the GPLv2+ Python library has now been removed, but for the sake of these examples we will assume it to still be there.)

xtas' own Python code is licensed by us under the Apache License version 2.0, but since we own the copyright, we can license it any way we like.

In the following examples, we'll simplify most of this away, and look at one or a few dependencies in turn.


### xtas vs. Snowball

![An illustration of the xtas vs. Snowball example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "Snowball Stemmer" and "Python lib BSD".](xtas_snowball_96.svg.png)

xtas uses Snowball, a Python-based stemming library. Snowball is published under the 3-clause BSD license. Considering only xtas and Snowball, we can answer the three questions as follows:

- How many separate works are there, and what is derived from what?

  There are three works: Snowball, the xtas Python code, and the combined work xtas. The combined work derives from Snowball and from the xtas Python code. The others are independent works.

  Note that the Apache License v2 and the LGPL v2.1 explicitly state that source code that is intended to work in combination with a library is not a derivative work, while the binary resulting from (statically or dynamically) linking the pieces together is; other licenses including the GPL do not make any explicit statement about this. As far as I know, there is no case law on this; we will assume it to be the case in these examples.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  Snowball is licensed under a permissive license, so it can be redistributed under that license, and there are no constraints on the license of derivative works. We own the copyright to the xtas Python code, so we can license it in any way we want.

- How should the work(s) be licensed?

  The xtas Python code, and the xtas combined work, can be licensed under any license we want, so we should use the default NLeSC license, which is the Apache License v2.0. If we redistribute Snowball, we must do so under the BSD license granted by its authors. (We cannot give additional permissions for Snowball, since we don't own the copyright, and additional restrictions would be unenforceable for the same reason.)


### xtas vs. chardet

![An illustration of the xtas vs. chardet example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "chardet" and "Python lib LGPLv2.1".](xtas_chardet_96.svg.png)

xtas uses chardet, a Python library for detecting the character set used in a string of text. Chardet is published under the GNU Lesser General Public License v2.1. Considering only xtas and chardet, we can answer the three questions as follows:

- How many separate works are there, and what is derived from what?

  There are three works: chardet, the xtas Python code, and the combined work. The combined work derives from chardet and from the xtas Python code. The others are independent works.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  Chardet is licensed under a weak copyleft license, so it can be redistributed under the terms of that license. Derivative works can be licensed under any license, but the LGPL v2.1 does require that the recipient can modify the library and use the modified library with the derivative work.

- How should the work(s) be licensed?

  xtas as a whole, and the xtas Python code, can be licensed in any way we want, so we use the default NLeSC license, which is the Apache License v2.0. If we distribute chardet, we must do so under the LGPL v2.1 license granted by its copyright owners.


### xtas vs. unidecode

![An illustration of the xtas vs. unidecode example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "unidecode" and "Python lib GPLv2+".](xtas_unidecode_96.svg.png)

xtas uses unidecode, a Python library for converting text encoded according to The Unicode® Standard into an ASCII approximation of it. Unidecode is published under the GNU General Public License version 2 or later. Considering only xtas and unidecode, we can answer the three questions as follows:

- How many separate works are there, and what is derived from what?

  There are three works: unidecode, the xtas Python code, and the combined work. The combined work derives from unidecode and from the xtas Python code. The others are independent works.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  Unidecode is licensed under a strong copyleft license, so it can be redistributed under the terms of that license. Derivative works must be licensed under the same license. Unidecode is licensed under the GPL version 2 or later, which means that anyone can choose to redistribute it, and any derivative works, under any combination of licenses from this (infinite) list.

- How should the work(s) be licensed?

  If we distribute unidecode, we should do so under the GPL version 2 or higher, as arbitrarily removing licenses from someone else's code does not make sense. The combined work xtas must be distributed under the same licenses, or a subset of them. The xtas Python code can be licensed in any way we want, but if we choose a license that is not compatible with the GPL, then the combined work will not be redistributable.

  The Apache License v2 is incompatible with the GPL version 2 for technical reasons, but it is compatible with the GPL version 3. Since unidecode is (also) licensed under the GPL version 3, we can license the xtas Python code under the Apache License v2, and the combined work under the GPL version 3 or later.


### All together now

![An illustration of the xtas and all Python libraries example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below this, there are three squares. The first square contains the words "Snowball" and "Python lib BSD". The second square contains "chardet" and "Python lib LGPLv2.1". The third square contains the words "unidecode" and "Python lib GPLv2+".](xtas_all_python_libs_96.svg.png)

Now, we will consider all three of the above examples at the same time.

- How many separate works are there, and what is derived from what?

  There are five works: Snowball, chardet, unidecode, the xtas Python code, and xtas the combined work. The combined work is derived from all its components.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  The four components are under Free Software licenses, and/or we own the copyright, so they can be distributed. The BSD, LGPLv2.1 and GPLv2+ all allow licensing the combined work under the GPL version 2 or higher, so there is at least one license that the combined work can be licensed under.

- How should the work(s) be licensed?

  The xtas Python code should be licensed under our default Apache License v2, and the combined work under the GPL version 3 or higher.


### In the Clouds

For the project "Towards Large-Scale Cloud-Resolving Climate Simulations", we want to combine the OpenIFS global circulation model with the DALES large-eddy simulation model. Both these models are available as libraries, so the project entails combining (possibly modified versions of) the OpenIFS and Dales libraries into a single program.

The OpenIFS library (part of the ECMWF weather model code) is available under a proprietary license that allows running the program and making private modifications, but does not allow distributing the program or any derivatives. Dales is published under the GNU GPL version 3.

- How many separate works are there, and what is derived from what?

  There are six works: OpenIFS, modified OpenIFS, Dales, modified Dales, the rest of the program written by us, and the combination of them all.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  The OpenIFS license does not allow redistribution, so it cannot be distributed. Dales can be distributed, under the GPLv3. The rest of the program is written by us and can be distributed. The whole combined work cannot be distributed, since it incorporates OpenIFS. If it did not include OpenIFS, it would have to be distributed under the GPLv3, because of the Dales dependency.

- Can we work on this privately, without distributing anything?

  The GPL allows making private modifications of software covered by it, with no restrictions, provided the changed software is not distributed at all. The OpenIFS license also allows making private modifications. So we can work on this project within NLeSC without violating the licenses, as long as we do not share the results with anyone.

  However, as in any project we work together with a principal investigator outside NLeSC. If both the PI and NLeSC develop the software together, does that still count as private, or are we distributing our changed versions to each other? The GPL version 3 says the following about this:

  > You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

  This wording is clearly written to allow hiring contractors to work on private modifications, and doesn't seem to apply well to the collaborative relationship we have with our PIs. On the other hand, we're still not making copies available to the public.

  In a situation like this, when there is any question as to how a license applies to a particular case, it is best to contact the copyright owners and ask them whether what you want to do is okay. Getting explicit permission is a great way of reducing legal risk.


### Trademarks

Unicode is a registered trademark of Unicode, Inc. in the United States and other countries.

