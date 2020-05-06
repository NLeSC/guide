# Examples

Examples using libraries can be found in the [Turing Way software license chapter](https://the-turing-way.netlify.app/licensing/01/softwarelicenses).

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

