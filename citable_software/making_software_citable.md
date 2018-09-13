# Making software citable

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