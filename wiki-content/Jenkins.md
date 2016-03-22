Jenkins for the Netherlands eScience Center is hosted at https://ci.esciencecenter.nl/ , to use/view you must be a member of the GitHub NLeSC organization.

Features of jobs:
- compile project.
- runs tests.
- generates documentation.
- triggers by GitHub commit.
- notifications to commit author when unstable.
- when applicable launches a SonarQube analysis, which can be viewed at https://sonar.esciencecenter.nl .

New job by copying existing job
-------------------------------

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

