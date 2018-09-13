# Publishing Scientific Results

## Ready-to-go demos
For many projects, we will prepare attractive demos. We want to be able to show a working demo at any moment in time. Therefore, we want to have special branches in git that contain fully stand-alone demos, including a slide deck, that can just be checked out and used directly.

## Handling datasets and results
Assuming you have only the software in a (private) git repo, you might want to also add and share with others the data and results related to that software:
* Add also the data and figures using git lfs ([Git Large File Storage](https://git-lfs.github.com/)).
* If not, make the repo public.

## Making software citable

Digital Object Identifiers are globally unique identifiers which can point to any digital object, such as a version of a paper, a version of software etc. This has the advantage that it is unambigous and standardized. For papers, using DOIs is commonplace, and a DOI is usually provided by the publisher. For software, you can make your own DOI with [Zenodo](https://zenodo.org/):

1. Make a [Zenodo](https://zenodo.org/) account and link it with your github account as explained on [guides.github.com/activities/citable-code](https://guides.github.com/activities/citable-code/).
1. You can tell Zenodo what metadata you want to associate with the software by including a ``.zenodo.json`` file in the root of your repository, but writing that file by hand is error-prone. Therefore it is advisable to just generate it from the ``CITATION.cff`` file that should already be in the root of the repository. To do so, you'll need a command line tool ``cffconvert`` which you can install [from PyPI](https://pypi.org/project/cffconvert/) by:

    ```bash
    pip install --user cffconvert
    ```
1. Make sure that your ``CITATION.cff`` is valid YAML by copy-pasting the contents to http://www.yamllint.com/.
1. Make sure that your ``CITATION.cff`` is valid CFF, by:

    ```bash
    # (in the repository's root directory)
    cffconvert --validate
    ```
If the command does not return anything, that means the CFF is valid.
1. Generate the ``.zenodo.json`` file using ``cffconvert`` as follows:

    ```bash
    cffconvert --ignore-suspect-keys --outputformat zenodo --outfile .zenodo.json
    ```
1. On Zenodo, make sure to 'Flip the switch' to the ``on`` position on the GitHub repository that you want to make a release of.
1. Go to your Github repository, use the _Create a new release_ button to create a release on GitHub.
1. Zenodo should automatically be notified and should make a snapshot copy of the current state of your repository (just one branch, without any history), and should also assign that snapshot a persistent identifier (DOI).
1. Use the DOI whenever you refer to your software, be it in papers, posters, or even tweets and blogs.
1. Add the software's Zenodo badge to your repository's README.

## Available archival / preprint servers or services
* [arXiv](http://arxiv.org/) (physics, mathematics, computer science, quantitative biology, quantitative finance, statistics)
* [bioRxiv](http://biorxiv.org/) (biology)
* [PeerJ Preprints](https://peerj.com/archives-preprints/) (biological and medical sciences)
* [CogPrints](http://cogprints.org/) (psychology, neuroscience, linguistics, and other fields related to cognition)
* [figshare](https://figshare.com/) (all disciplines)
* [GitHub](https://github.com/) (all disciplines)
* [Social Science Research Network](http://www.ssrn.com/en/) (cognitive sciences, economics, humanities, law and more)

## Data storage and preservation

We strongly advise to store your research data in a secure location where regular back-ups of the data are made, before you start working with the data. If it is logistically impossible to store the data in a secure location immediately after data collection then here are some tips on how to improve data preservation in the time window in between data collection and data arrival at a secure location. For example, you collect data on humans in an environment without (secure) internet connection and need to temporarily store your data offline on a laptop before being able to upload it to a data archive.

### Planning data storage

We recommend that you start as early as possible to think how are you managing your data during and after your project. Some questions you should ask yourself are:

 - What data am I using in my project ? Think about measurements coming from experiments (performed by you or by third parties), but also interviews, statistical information, etc.
 - Where is my data coming from ? How is it being collected ?
 - Where and how is this information being stored ?
 - Does my data comply with the required standards applicable ? For example think of the FAIR principles, GDPR, or other ethical restrictions.

These type of considerations should usually be covered by your data management plan, if your funding agency requires so. And when it is not required by your funding agency, it is probably a good idea to have a data management plan for yourself. If you are writing a data management plan, considering using [DMPOnline](https://dmponline.dcc.ac.uk/).

### Tips for short term storage

#### Checksum and sign your data archive:

- Do a checksum on your files to check preservation of integrity. This means you will need to store the checksum somewhere, usually they are tiny, so they can be provided along with the data. In fact, some Linux distributions provide the checksum of the iso image so you can check your image when you download it. Storing checksums within the filename is not common practice anymore. A lot of data formats allow storing the checksum in the file; ie. the metadata part contains the checksum of the data part.

#### File permissions and location:

- If you need to work with your data, but do not plan to change it then set file access permissions to read only.
- Try to avoid processing files that are also being synced with a cloud platform (like dropbox or onedrive).
- Try to make a back-up if possible and store this back-up at a different physical location.

#### Specific remarks on person identifiable information:

- Do not do anything without consulting your privacy consultant.

### Tips for long term storage

For long term storage we advise researchers based in The Netherlands to explore the services of [SURFsara website](https://userinfo.surfsara.nl/), the Collaborative organization for ICT in Dutch education and research, including but not exclusively:
-	[Surfdrive](https://www.surf.nl/en/services-and-products/surfdrive/surfdrive.html) for secure data sharing up to 250 GB.
-	[Data archive](https://userinfo.surfsara.nl/systems/data-archive) for long term storage of extremely large datasets.

For researchers outside the Netherlands alternative data storing platforms include:
-	https://www.re3data.org
-	https://zenodo.org/
-	http://rd-alliance.github.io/metadata-directory/standards/
