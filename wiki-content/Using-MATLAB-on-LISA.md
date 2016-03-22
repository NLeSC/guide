### Using MATLAB on Lisa


If you're working on a project for which you need access to Matlab you can use it on Lisa ([MATLAB on Lisa](https://surfsara.nl/systems/lisa/software/matlab)).You need:

* A Linux machine
* An account on Lisa

You need to run it as a batch job. For documentation of batch jobs in LISA, please refer to [Batch usage documentation](https://surfsara.nl/systems/lisa/usage/batch-usage).

Here the steps are also provided:
* Login to Lisa

`<your-local-username>@localhost:~$ ssh <your-lisa-username>@lisa.surfsara.nl`

* Make a script called **sleeping.sh**:

***

     #!/bin/bash
     #PBS -lnodes=1
     #PBS -lwalltime=8:00:00
     #PBS -N sleeping
     HOSTNAME=`hostname -f`
     mail -s "Job has started on node $HOSTNAME" <your-email-address>  << EOF
     EOF
     sleep ${PBS_WALLTIME}

* Submit it to the queue:

`<your-lisa-username>@login1:~$ qsub sleeping.sh`

* Once a node gets assigned (for 8 hours), you will get receive an email (this can take a while) with the hostname in the subject. Now you can login from you X11 terminal:

`<your-local-username>@localhost:~$ ssh -Y <your-lisa-username>@lisa.surfsara.nl`

* Then you get to one of the login nodes. You can type:

`<your-lisa-username>@login2:~$ ssh -Y <your-lisa-username>@r24n21`

(if `r24n21` is the node you get assigned to).

* Then you can start MATLAB (2015a is the latest versions. For all installed versions type `module avail matlab`):

`<your-lisa-username>@r24n21:~$ module load matlab/2015a`
`<your-lisa-username@r24n21:~$ matlab`

In this way the allocated node can be used for 8 hours. 



