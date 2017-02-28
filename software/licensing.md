# Licensing

## Apache 2 license

[Apache 2 license](http://www.apache.org/licenses/LICENSE-2.0)

The Apache License version 2.0 is the default choice for licensing software developed at the Netherlands eScience Center. Other licenses can be used in special cases, e.g. when we add to existing software that already has a different license, or if there are commercial partners that require different licensing.

The formal text of the licence is here: http://www.apache.org/licenses/LICENSE-2.0.html
An informal explanation of what that means is here: http://www.oss-watch.ac.uk/resources/apache2

## License grant

Each source file in your program or library should start with the following copyright statement in a comment block at the top (but underneath a shebang line if present, for technical reasons):

    Copyright <years> Netherlands eScience Center and <Other owners>
    Licensed under the Apache License, version 2.0. See LICENSE for details.

The same notice should be somewhere in your README file, which should also contain an overview of dependencies and which licenses they are under. For <years>, you should list all years in which changes were published, so if you started in a private repository in 2015, opened it up in 2016, and did the final commit in 2017, <years> should be 2016, 2017. For our "standard" projects, the default is to share the copyright between the eScience Center and the PI(s) institutions, but other arrangements may have been made. So check that, and make sure everyone is represented under <Otehr owners>.

## Compatible licenses of all libraries

All software used in the project **MUST HAVE** compatible licenses. Compatibility should be checked
when a new dependency is added to the project. See the Intellectual Property section for more information.

## NOTICE(.txt|.md)

The NOTICE file is the Apache License' way of dealing with attributions. If you have any dependencies that are distributed under the Apache License, and you redistribute them (in either binary or source code form), then you must include the original NOTICE file(s) as well. If you have any attribution requirements of your own, you can add them in your own NOTICE file. If you do not distribute the dependencies, but only e.g. list them in a requirements.txt, then you do not need to include their NOTICE files in your program.

Read more [here](http://www.apache.org/dev/licensing-howto.html)

