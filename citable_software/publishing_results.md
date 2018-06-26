# Publishing Scientific Results

## Ready-to-go demos
For many projects, we will prepare attractive demos. We want to be able to show a working demo at any moment in time. Therefore, we want to have special branches in git that contain fully stand-alone demos, including a slide deck, that can just be checked out and used directly.

## Handling datasets and results
Assuming you have only the software in a (private) git repo, you might want to also add and share with others the data and results related to that software:
* Add also the data and figures using git lfs ([Git Large File Storage](https://git-lfs.github.com/)).
* If not, make the repo public.

## Making software citable
* Make a [Zenodo](https://zenodo.org/) account and link it with your github account as explained on [guides.github.com/activities/citable-code](https://guides.github.com/activities/citable-code/)
* Add a ``.zenodo.json`` file to the root of your repository. File format
  largely follows that of the REST API
  http://developers.zenodo.org/#representation. For example:

    ```json
    {
        "description": "This is the description that will be used on Zenodo instead of the release title, readme content, or github repo subtitle.",
        "license": "Apache-2.0",
        "title": "Just the name of the tool here, no need to include the github organization or version",
        "upload_type": "software",
        "creators": [
            {
                "affiliation": "Netherlands eScience Center",
                "name": "Spaaks, Jurriaan H."
            },
            {
                "affiliation": "Netherlands eScience Center",
                "name": "Diblen, Faruk"
            }
        ],
        "access_right": "open",
        "keywords": [
            "these",
            "are",
            "the keywords",
            "I have all the best keywords"
        ]
    }
    ```
    Note that including version information as well as date information in the
    ``.zenodo.json`` file is not advised, Zenodo can accurately derive that from
    the information that GitHub provides in its webhook. Regarding the license information, choose one from this list:
    http://licenses.opendefinition.org/licenses/groups/all.json
* Make a release in github
* Zenodo automatically tracks the release and generates a unique DOI
* Use the DOI for citing your software
* A badge can be added to the README reflecting the DOI of the latest release

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
-	www.re3data.org
-	https://zenodo.org/
-	http://rd-alliance.github.io/metadata-directory/standards/
