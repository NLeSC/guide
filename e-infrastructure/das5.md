# DAS-5

This text gives a couple of practical hints to get you started using the DAS-5 quickly. It is intended for people with little to no experience using compute clusters.

First of all, and this is the most important point in this text: read the usage policy and make sure you understand every word of it: http://www.cs.vu.nl/das5/usage.shtml

The DAS-5 consists of multiple cluster sites, the largest one is located at the VU, which you can reach using by the hostname `fs0.das5.cs.vu.nl`. The firewall requires that your IP is whitelisted, which means you will be able to access the DAS from the eScience Center office, but not directly when you are somewhere else. To use the DAS from anywhere you can use eduVPN.

When you login in it means you are logged into the headnode, this node should not be used for any computational work. The cluster uses a reservation system, if you want to use any node that is not the head node, you must use the reservation system to gain access to a compute node. The reserveration system on DAS-5 is called Slurm, you can see all running jobs on the cluster using `squeue` and cancel any of your running jobs with `scancel <jobid>`.

The files in your home directory `/home/username/` will be backed up automatically, if you accidently delete an important file you can email the maintainer and kindly request him to put back an old version of the file. If you have to store large data sets put them under `/var/scratch/username/`, the scratch space is not backed up.

You can use the command `module` to gain access to a large set of preinstalled software. Use `module list` to see what modules are currently loaded and `module avail` to see all available modules. You can load or unload modules with the 'module load' and `module unload`. You may want to add some of the modules you frequently use to your bashrc. Note that all that these modules do is add or remove stuff from your `PATH` and `LD_LIBRARY_PATH` environment variables. If you need software that is not preinstalled, you can install it into your home directory. For installing Python packages, you have to use Anaconda or `pip install --user`.

If you want an interactive login on any of the compute nodes through the reservation system, you could use: `srun -N 1 --pty bash`. The srun command is used to run a program on a compute node, -N specifies the number of nodes, --pty specifies this is an interactive job, bash is the name of the program being launched. This reservation is only cancelled when you logout of the interactive session, please observe the rules regarding reservation lengths.

To access the nodes you've reserved quickly it's a good idea to generate an ssh key and add your own public key to your 'authorized_keys' file. This will allow you to ssh to nodes you have reserved without password prompts.

To reserve a node with a particular GPU you have to specify to srun what kind of node you want. I have the following alias in my bashrc, because I use it all the time:
`alias gpurun="srun -N 1 -C TitanX --gres=gpu:1"`
If you prefix any command with `gpurun` the command will be executed on one of the compute nodes with an Nvidia GTX Titan X GPU in them. You can also type `gpurun --pty bash` to get an interactive login on such a node.
