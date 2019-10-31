# Licensing


##Why use a license in the first place?

Without a license, all rights are at the author of the code, and that means nobody else can use, copy, distribute, or modify it work without consent. A license gives this consent.

If you don't have a licence for your software, it is effectively unusable by the whole research community, and those potential collaborators will turn to someone else's software. 

##Why choose a permissive open-source license?
 
As a researcher, you want to encourage use of your software, because use of software leads to credit for your software. A permissive open-source license gives the least amount of restrictions (while still requiring attribution), removing most barriers for usage.


## Apache 2 license

[Apache 2 license](http://www.apache.org/licenses/LICENSE-2.0)

The Apache License version 2.0 is the default choice for licensing software developed at the Netherlands eScience Center. Other licenses can be used in special cases, e.g. when we add to existing software that already has a different license (see below), or if there are commercial partners that require different licensing.

The formal text of the licence is here: http://www.apache.org/licenses/LICENSE-2.0.html
An informal explanation of what that means is here: http://www.oss-watch.ac.uk/resources/apache2

## License grant

Each source file in your program or library should start with the following copyright statement in a comment block at the top (but underneath a shebang line if present, for technical reasons):

    Copyright <years> Netherlands eScience Center and <Legal entities of project partners>
    Licensed under the Apache License, version 2.0. See LICENSE for details.

The same notice should be somewhere in your README file, which should also contain an overview of dependencies and which licenses they are under. For <years>, you should list all years in which changes were published, so if you started in a private repository in 2015, opened it up in 2016, and did the final commit in 2017, <years> should be 2016, 2017. For our "standard" projects, the default is to share the copyright between the eScience Center and the PI(s) institutions, but other arrangements may have been made. So check that, and make sure everyone is represented under <Legal entities of project partners>.

## Compatible licenses of all libraries

All software used in the project **MUST HAVE** compatible licenses. Compatibility should be checked
when new external code is added to the project. See the Intellectual Property section for more information.

## LICENSE

The actual license of the code is stored in the *LICENSE* file.
Github can add this file automatically when you create a new repository, or you can [add it via the repositories Github page](https://help.github.com/articles/adding-a-license-to-a-repository/).

## NOTICE

The NOTICE file is the Apache License' way of dealing with attributions. If you have any dependencies that are distributed under the Apache License, and you redistribute them (in either binary or source code form), then you must include the original NOTICE file(s) as well. If you have any attribution requirements of your own, you can add them in your own NOTICE file. If you do not distribute the dependencies, but only e.g. list them in a requirements.txt, then you do not need to include their NOTICE files in your program.

NOTICE should contain the following text, adapted with the product's name and copyright dates:
```
  [PRODUCT_NAME]
  Copyright [XXXX-XXXX] The Netherlands eScience Center, [PROJECT_PARTNERS]

  This product includes software developed at
  The Netherlands eScience Center (https://www.esciencecenter.nl/)
  For the [PROJECT_NAME] project
```

If any of the software dependencies has a NOTICE file, its contents shoud be appended below.
Read more in the [ASF licensing how-to](http://www.apache.org/dev/licensing-howto.html).

## Modifying existing software

If you are modifying a file written by someone else, which already has its own copyright statement and Open Source license grant (possibly with a different license), then that existing statement and the grant must be kept. If you've added more than a trivial fix, add the first of the two lines above to the copyright statement, but keep the existing license grant. In these cases, we simply release our contributions under the same license the other contributors have chosen, as this avoids a lot of unnecessary complexity. If the software is proprietary, ask for advice first.

