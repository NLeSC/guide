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

Features of jobs:
- compile project.
- runs tests.
- generates documentation.
- triggers by GitHub commit.
- notifications to commit author when unstable.
- when applicable launches a SonarQube analysis, which can be viewed at https://sonar.esciencecenter.nl .

## New job by copying existing job

1. Create a new job
    1. Give job name,
    2. Select the 'Copy existing Job' and type name of existing job.
    3. Press `OK`
2. Adjust GitHub project url
3. Adjust git repository url. Use https or ssh as protocol
4. Make sure in the *Build Trigger* section the *Build when a change is pushed to GitHub* item is checked
5. Go over all *Build steps* and *Post-build actions* and replace the existing names with the new ones.
6. On the GitHub project > Settings > Service Hooks, check `Jenkins (github plugin`.
    1. Jenkins Hook Url: *https://ci.esciencecenter.nl/github-webhook/*
    2. Check activate and press `Update settings`.
    3. Now any commit added to GitHub on the configure branch will start a Jenkins build.

