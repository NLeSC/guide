# More Examples

## External programs: xtas vs. CoreNLP

xtas can run the Stanford CoreNLP program, which is written in Java and distributed under the GNU GPL version 3 or later. When the user calls the corresponding xtas function, CoreNLP is started by xtas, the user's input is sent to it through a pipe, and then the CoreNLP output is handed back to the user or processed further.

![An illustration of the xtas vs. CoreNLP example. A square represents the combined work xtas. Within this square, there is a wide low rectangle at the top representing the xtas Python code, licensed under the Apache License v2. Below that is a square containing the words "Stanford CoreNLP" and "Java program GPLv3+".](xtas_corenlp_1_96.svg.png)

One interpretation of this situation is that this is no different from calling a function in a library, and that any distribution of xtas as a whole, including CoreNLP, should therefore be under the GPLv3+. Contributing to this interpretation is the fact that xtas will download and install CoreNLP automatically if needed.

![Another illustration of the xtas vs. CoreNLP example. A square on the left represents the combined work xtas. Within this square, there is a rectangle representing the xtas Python code, licensed under the Apache License v2. On the right is a separate square representing CoreNLP, with the text "Stanford CoreNLP" and "Java program GPLv3+". Between the squares are two arrows, one at the top pointing from xtas to CoreNLP, and one at the bottom pointing from CoreNLP to xtas.](xtas_corenlp_2_96.svg.png)

Another interpretation is that xtas and CoreNLP are separate works, and that xtas merely communicates with CoreNLP over its standard user interface.

In this interpretation xtas is a separate program that helps a user use the CoreNLP program from the Python language, and not a derivative work of CoreNLP. One can consider xtas analogous to a package installer and a command shell here, which are clearly not derivative works of the packages they install or the programs they start.

Under this interpretation, xtas as a whole (not including CoreNLP) can be distributed under any license we choose (subject to restrictions imposed by its other dependencies of course).

In practice, we do not distribute CoreNLP at all; we only distribute the xtas Python code, under the Apache License version 2.


## Data sets: Movie review emotion

xtas contains a function that detects emotions in movie reviews. It works by fitting a model to a set of training data, and then applying the model to the xtas user's data.

The training data set it uses is available on the Internet from the website of a European university, with a note saying that it can be used for academic research purposes only. xtas automatically downloads this data set the first time the user calls the function.

Since it was created in Europe, the training data set is protected by database rights, which limit copying substantial parts of it. This means that the xtas user needs permission to have xtas download the data set, which they only have if they use the data for research purposes.

Since the download happens automatically this may not be obvious, so it is documented in the function's documentation, and the function will refuse to work  unless a named argument `for_academic_research=True` is used when calling it.

xtas itself is not a database, and therefore cannot be a derivative work of the data set. The same goes for the model that is fit to the data.

An alternative way to provide this functionality would be to fit the model once, and then distribute the model (but not the data set) with xtas. Whether doing so constitutes academic research is debatable however.


## Mixed: Download a car?

For an internal research project, we needed annotated images of cars to train a neural network on. Such images can be found easily on car trading web sites, and so the question arose whether we could just grab a big collection of images from such a site.

Dutch database law contains a provision (article 5.b.) that says that retrieval of a substantial part of the contents of a database for scientific research is allowed, as long as the source is acknowledged and the use is non-commercial.

Unfortunately, this is not the only barrier. The photos on the site are also copyrighted works, owned by whoever made them, and making a copy requires their permission.

Furthermore, the web site has a set of general terms and conditions, which forbids retrieving a substantial portion of the database. These apply to anyone using the web site.

Downloading a car? Bad idea.


## Trademarks: Back to the future

We have a research project on using deep learning for time series data called [mcfly](https://github.com/NLeSC/mcfly), named after the main character of the Back to the Future movies. Of course, this is a commercial franchise, so the question arose whether we can use that name for our project.

A simple name is too short to be a copyrightable work, but names can be trademarked. A trademark search revealed an English band called McFly, who have trademarked that name for the class of entertainment services. Since our research project is not in that market, this is no problem.

There is also a registered trademark for "McFly & Brown", an Amsterdam recruitment company, and that registration covers the class of "Scientific and technological services and research and design relating thereto" (even though this company does not seem to do any science or software development itself).

Of course, "McFly & Brown" is not the same as "mcfly", and the question in this case is whether the two are confusingly similar.

First, the two names are not actually the same, as we don't have the second part. Second, it seems unlikely that anyone would assume a highly technical scientific research project would be associated with a recruitment agency. Third, both names are derived from a well-known movie, which probably makes people more likely to conclude that the similarity is coincidental.

Whether any of that reasoning holds up in court we're not sure of, but it sounded reasonable enough to name the project "mcfly".

