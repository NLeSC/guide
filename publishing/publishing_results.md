#Publishing Scientific Results

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
