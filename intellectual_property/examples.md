## Examples

Many of the examples in this section relate to [xtas](http://xtas.net). xtas is a natural language processing toolkit for Python that reuses many third-party libraries, programs and data sets, and therefore provides a variety of nice examples.

![A graphical overview of xtas. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Underneath this there are three side-by-side squares, representing respectively Python libraries, Software, and Data, that are used by xtas. Within the Python libraries square, there are three boxes. The first box contains the words "BSD", "MIT" and "ALv2". The seconds box contains "LGPLv2.1". The third box contains "GPLv2+". Within the Software square, there are four boxes. The first box contains "Web Service". The second box contains "LGPL v2.1+". The third box contains "Research only" and the fourth box contains "GPL 2+/3+". The Data square also contains four boxes. The first box contains "CC BY-SA 3.0". The second box contains "Research Only". The third box contains "No license, US" and the fourth box contains "CoNLL'02 only".](xtas_overview.svg.png)

(Note that the dependency on the GPLv2+ Python library has now been removed, but for the sake of these examples we will assume it to still be there.)

xtas' own Python code is licensed by us under the Apache License version 2.0, but since we own the copyright, we can license it any way we like.

In the following examples, we'll simplify most of this away, and look at one or a few dependencies in turn.


### xtas vs. Snowball

![An illustration of the xtas vs. Snowball example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "Snowball Stemmer" and "Python lib BSD".](xtas_snowball.svg.png)

xtas uses Snowball, a Python-based stemming library. Snowball is published under the 3-clause BSD license. Considering only xtas and Snowball, we can answer the three questions as follows:

- How many separate works are there, and what is derived from what?

  There are three works: Snowball, the xtas Python code, and the combined work xtas. The combined work derives from Snowball and from the xtas Python code. The others are independent works.

  Note that the Apache License v2 and the LGPL v2.1 explicitly state that source code that is intended to work in combination with a library is not a derivative work, while the binary resulting from (statically or dynamically) linking the pieces together is; other licenses including the GPL do not make any explicit statement about this. As far as I know, there is no case law on this; we will assume it to be the case in these examples.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  Snowball is licensed under a permissive license, so it can be redistributed under that license, and there are no constraints on the license of derivative works. We own the copyright to the xtas Python code, so we can license it in any way we want.

- How should the work(s) be licensed?

  The xtas Python code, and the xtas combined work, can be licensed under any license we want, so we should use the default NLeSC license, which is the Apache License v2.0. If we redistribute Snowball, we must do so under the BSD license granted by its authors. (We cannot give additional permissions for Snowball, since we don't own the copyright, and additional restrictions would be unenforceable for the same reason.)


### xtas vs. chardet

![An illustration of the xtas vs. chardet example. A large rectangle represents the combined work xtas. Within this rectangle, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "chardet" and "Python lib LGPLv2.1".](xtas_chardet.svg.png)

xtas uses chardet, a Python library for detecting the character set used in a string of text. Chardet is published under the GNU Lesser General Public License v2.1. Considering only xtas and chardet, we can answer the three questions as follows:

- How many separate works are there, and what is derived from what?

  There are three works: chardet, the xtas Python code, and the combined work. The combined work derives from chardet and from the xtas Python code. The others are independent works.

- Can the works be distributed, i.e. do the licenses allow this and are they compatible?

  Chardet is licensed under a weak copyleft license, so it can be redistributed under the terms of that license. Derivative works can be licensed under any license, but the LGPL v2.1 does require that the recipient can modify the library and use the modified library with the derivative work.

- How should the work(s) be licensed?

  xtas as a whole, and the xtas Python code, can be licensed in any way we want, so we use the default NLeSC license, which is the Apache License v2.0. If we distribute chardet, we must do so under the LGPL v2.1 license granted by its copyright owners.


