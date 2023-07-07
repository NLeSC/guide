# Project Planning

Roughly speaking, a project's life consists of three phases: the start, the middle, and the end.
A lot of planning happens in the beginning, of course, but applying a good workflow throughout, and especially knowing when to stop, can be equally powerful in successfully completing a project.
The following tips and tricks on how to plan a long term project are therefore split up over these phases.

## Start

### Know where you are

A lot of decisions you will make along the line depend on the exact kind of project you are working on.
Knowing the project and the place you are starting from is therefore an important initial step.
Are you doing an experimental project? Then estimating time to completion can be particularly difficult.
Is the project simply an idea? Is it risky? What is the outcome of the project if a key hypothesis is wrong?

Perhaps you are working from an existing tool.
Is there a community? Are there existing users? Are basic maintenance and user support questions likely to distract you from your project tasks? Or are they in fact an important element of your project?

### Know what to do

What subtasks can you define in your project?
Make a list, as comprehensive as possible, of all the different steps you need to take and elements you want to complete as part of this project.
The resolution of this list should not be too high; at this point, think about the project as a whole, and don’t lose yourself in details like individual issues or work items.

Also, do not make this list alone: work together with the Lead Applicant, they are the designer of the project, after all.

On this list, specify which elements are “need-to-have” and which are “nice-to-have”.
Specifically, define your Minimum Viable Product (MVP), and be honest here.Which components are essential for the project? They are part of the MVP.
If a module or task falls outside the MVP that does not mean that it cannot or will not be done, but it should have a lower priority than those parts that are make-or-break components.

### Make a time budget

Estimate how much time you need for all individual tasks on your list.
This, too, you should not do alone.
On many tasks, you will collaborate with others.
At this stage, you can think together to estimate how long an individual task may take.
If your list includes a specific technology with which you are not yet familiar, ask someone who knows it better for help.

Some other things to keep in mind:

- Don’t forget to include time for learning new essential skills.
- Depending on how good you are at estimating time, it may be wise to double, triple, or even quintuple your initial time estimates to come to a more realistic number.
- The question is not “how long does this take”, but “how long does this take you”. Look at comparable things you have done in the past, learn from it, and apply the lesson to your current time budget.
- Operations uses 10-15% of hours off your budget as overhead, so you have less time than is listed on the proposal.

### Get what you need

Apart from time to execute your tasks, you may need resources.
Get them early.
For example, do you need training data for your model? This can be essential for your project, but the data may not be adequately available when the project starts.
Prioritize this early on.
Another consideration may be storage and computing capacity.
Will you need external parties to provide extra capacity? Keep in mind that making these arrangements can take quite some time, so start early.

## Middle

### Work in iterations

Make a complete module before you move on.
A complete module includes tests, documentation, and perhaps even a paragraph for a paper, or a segment of a tutorial.
Making sure the module is complete before you move on to the next means that you do not run out of hours with a beautiful software tool that nobody knows how to use.

Working in completed steps also ensures that your software does as least some things 100%, instead of meeting _all_ requirements for 60%.

### Make tutorial writing a part of your workflow

Integrating a tutorial while writing the software also helps shift your focus to that of a user, and may highlight missing components sooner.
While writing, you may need to reassess the importance of a specific module, either realizing it is in fact a need-to-have, or downgrading its importance and refocusing on a more pressing task first.

### Update your time budget

Assess the current state of your time budget frequently.
Keep an eye on Ganttic (pro-tip: the most accurate representation is on the first Monday of the month, after hours have been submitted and Ganttic has been updated) and confirm whether your planning fits with the current state of the project, and the currently remaining hours.
Keep your project partners updated on the progress as well.
When time constraints appear, they may want to reprioritize elements of the project; they should not be confronted with a _fait accompli_ at the end.

## End

### Done is better than perfect

You can use time boundaries to your advantage to help you stop working on something.
It can be done better — can’t it always? — but is it worth the time investment? And do you have the time to invest? In your initial planning you found time to fit the task; here, you fit the task to the time.

### Close pull requests, open issues

Issues on GitHub are a great way to get the things you did not manage to complete out of your head, and into your project’s record.
Leaving a project with open issues is not bad form, it is support for whoever keeps the work going.
Writing down possible “next steps” is part of finishing up.

However, while open issues are helpful, open pull requests are not.
Merge them, or close them, but do not leave phantom PRs for another time.
