To run [[tests|Testing]], perform [[Code-Quality]] analysis and build artifacts a Continuous Integration server can be used. The build will be performed every git push and pull request. Using a CI server will help with `it works for me` problems.
NLeSC uses continuous integration services as much as possible when creating code.

[Background information on Continuous Integration](http://www.martinfowler.com/articles/continuousIntegration.html)

# Travis-CI

The NLeSC public repositories should be build with [Travis-CI](https://travis-ci.org). Travis-CI is free for Open Source projects. A repo can be added from Github to Travis-CI by a Github administrator.

[Getting started with Travis CI](http://docs.travis-ci.com/user/getting-started/)

PS. If you want to get mails from Travis-CS then you have to login at https://travis-ci.org

# Jenkins-CI

At the NLeSC we run a [Jenkins-CI](http://jenkins-ci.org/) instance which is behind a login at https://ci.esciencecenter.nl .
It is used for private repositories and repositories requiring HPC middlewares.
