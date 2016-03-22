This is a checklist that should be followed when preparing a software release. This can be used both by eScience engineers that prepare the release, as well as by coordinators when evaluating the quality criteria of a release candidate.


# 1. Documentation.
* Provide a README.md file in the root of your distribution. This should give a very brief overview of the   functionality of your software package, and point to the real documentation. The ".md" extension means the file has the MarkDown format. This is automatically pretty-printed in GitHub and many other tools.

* User manual (as PDF) in the "doc" directory. This is the real manual, targeted at your users. Make sure this is readable by domain experts, and not only software developers. Make sure to include:
    * NLeSC logo.
    * Examples.
    * Author name(s).
    * Versions numbers of the software and documentation.
    * References to:
        * The NLeSC web site.
        * The project web site.
        * The Github page of the project.
        * Location of the issue tracker.
        * More information (e.g. research papers).


# 2. Build system.
Make sure the source has a central build system that can compile the software, test the software, and generate the documentation. We prefer to use "gradle" for Java projects, and "CMake" for C-based projects. [For more information, see this page.](https://github.com/NLeSC/wiki/wiki/Build-Systems)


# 3. Code quality.
* Follow the NLeSC coding style. [We have Eclipse templates for Java.](https://github.com/NLeSC/wiki/wiki/Eclipse)
* Make sure that you use the correct namespace / package name (e.g., nl.esciencecenter.package).
* Make sure automated testing procedures are in place.
    * You should have a "target" in your build system to automatically build and run tests.
    * You should write unit tests, with at least 70% code coverage.
    * You should also provide integration tests, testing your code on multiple platforms (Windows, Linux, OS X).
* If applicable (e.g., if you are using Java), you can test your code quality with Sonar.

[For more information on testing, see this page.](https://github.com/NLeSC/wiki/wiki/Testing)


# 4. Licencing.
* [Our preferred licence is APACHE 2.0.](https://github.com/NLeSC/wiki/wiki/Software-Licensing)
  If you want a different licence, you should have a very good reason. Make sure to discuss this with your coordinator and the CTO.
* Put the LICENCE file in the root of your software distribution.
* Put a copyright header in every source file.
* Mention the author in every source file.
* Put a NOTICE file in the root of your distribution. Here, you should ask the user of the software to give credit to the NLeSC. You can also ask the users to cite your publications, etc.


# 5. Commit your release to the master branch in Github.
[For more information on version control and Github, see this page.](https://github.com/NLeSC/wiki/wiki/Version-Control)

# 6. Put your release in the NLeSC app store.
More info on the app store will be announced soon.

# 7. Send an e-mail to Scott.
Send an email announcing the release. He can make a news item on the web site, etc.
