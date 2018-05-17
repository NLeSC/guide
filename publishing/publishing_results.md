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

- Do a checksum on your files to check preservation of integrity. This means you will need to store the checksum somewhere, usually they are tiny, so they can be provided along with the data. In fact, some Linux distributions provide the checksum of the iso image so you can check your image when you download it. Storing checksums within the filename is not common practice anymore. A lot of data formats allow storing the checksum in the file; ie. the metadata part contains the checksum of the data part. For example netcdf, and FITST. Here are tutorials on how to do a checksum for [Linux](https://linux.die.net/man/1/sha256sum) ([second link](https://www.computerhope.com/unix/ucksum.htm)), [Windows](https://www.microsoft.com/en-us/download/details.aspx?id=11533), and [Mac OSx](https://www.rekha.com/how-to-verify-md5-sha1-and-sha256-checksum-on-mac.html).
- Sign your archives with [GnuPG](https://wiki.archlinux.org/index.php/GnuPG) ([download](https://www.gnupg.org/download/index.en.html ))which would require you to set up a 'ring of thrust'.

Only having both gpg-es and checksum-ed the archive ensures you that it is not altered.

#### File permissions and location:

- If you need to work with your data, but do not plan to change it then set file access permissions to read only.
- Try to avoid processing files that are also being synced with a cloud platform (like dropbox or onedrive).
- Try to make a back-up if possible and store this back-up at a different physical location.

#### Specific remarks on human data:

- Avoid storing person identifiable information with your data where possible, but use person identifiers instead with the key being stored in a secure location.
- If person identifiable information needs to be stored as part of the dataset then make sure the data and data carrier (e.g. hard-drive) is encrypted and the storage procedure complies with a data management plan approved by an ethics committee.
- For all human data make sure that only data is stored for which consent was given by the participant or their guardian following the protocol approved by an ethics committee.

### Tips for long term storage

For long term storage we advise researchers based in The Netherlands to explore the services of [SURFsara website](https://userinfo.surfsara.nl/), the Collaborative organization for ICT in Dutch education and research, including but not exclusively:
-	[Surfdrive](https://www.surf.nl/en/service-and-products/surfdrive/surfdrive.html) for secure data sharing up to 250 GB.
-	[Data archive](https://userinfo.surfsara.nl/systems/data-archive) for long term storage of extremely large datasets.

For researchers outside the Netherlands alternative data storing platforms include:
-	www.re3data.org
-	https://zenodo.org/
-	http://rd-alliance.github.io/metadata-directory/standards/

### Data storage certificates:
-	https://serverius.net/about/datacenter-and-network-certification/
