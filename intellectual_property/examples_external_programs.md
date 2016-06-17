## Examples: External Programs

Not all reusable software components come in the form of libraries. Sometimes you want to use an external program, and communicate with it through pipes or sockets. This adds some more shades of gray.

### xtas vs. CoreNLP

xtas can run the Stanford CoreNLP program, which is written in Java and distributed under the GNU GPL version 3 or later. When the user calls the corresponding xtas function, CoreNLP is started by xtas, the user's input is sent to it through a pipe, the CoreNLP output is read back out, and handed to the user or processed further.

![An illustration of the xtas vs. CoreNLP example. A square represents the combined work xtas. Within this square, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "Stanford CoreNLP" and "Java program GPLv3+".](xtas_corenlp_1_96.svg.png)

One interpretation of this situation is that this is no different from calling a function in a library, and that any distribution of xtas as a whole, including CoreNLP, should therefore be under the GPLv3+. Contributing to this interpretation is the fact that xtas will download and install CoreNLP automatically if needed.

![Another illustration of the xtas vs. CoreNLP example. A square on the left represents the combined work xtas. Within this square, there is a rectangle representing the xtas Python code, licensed under the Apache License v2. On the right is a separate square representing CoreNLP, with the text "Stanford CoreNLP" and "Java program GPLv3+". Between the squares are two arrows, one at the top pointing from xtas to CoreNLP, and one at the bottom pointing from CoreNLP to xtas.](xtas_corenlp_2_96.svg.png)

Another interpretation is that xtas and CoreNLP are separate works, and that xtas merely communicates with CoreNLP over its standard user interface. In this interpretation xtas is a separate program that helps a user use the CoreNLP program from a Python interface, and not a derivative work of CoreNLP. One can consider xtas analogous to a package installer and a command shell here, which are clearly not derivative works of the packages they install or the programs they start.

Under this interpretation, xtas as a whole can be distributed under any license we choose (subject to restrictions imposed by its other dependencies of course).

In practice, we do not distribute CoreNLP at all; we only distribute the xtas Python code, under the Apache License version 2. If we made, say, a Docker container with xtas and CoreNLP in it, we could license that under the GPLv3+.


