# DAS-5

This text gives a couple of practical hints to get you started using the 
DAS-5 quickly. It is intended for people with little to no experience 
using compute clusters.

First of all, and this is the most important point in this text: read 
the usage policy and make sure you understand every word of it: 
http://www.cs.vu.nl/das5/usage.shtml

The DAS-5 consists of multiple cluster sites, the largest one is located 
at the VU, which you can reach using by the hostname 
`fs0.das5.cs.vu.nl`. The firewall requires that your IP is whitelisted, 
which means you will be able to access the DAS from the eScience Center 
office, but not directly when you are somewhere else. To use the DAS 
from anywhere you can use eduVPN.

When you login in it means you are logged into the headnode, this node 
should not be used for any computational work. The cluster uses a 
reservation system, if you want to use any node that is not the head 
node, you must use the reservation system to gain access to a compute 
node. The reserveration system on DAS-5 is called Slurm, you can see all 
running jobs on the cluster using `squeue` and cancel any of your 
running jobs with `scancel <jobid>`.

The files in your home directory `/home/username/` will be backed up 
automatically, if you accidently delete an important file you can email 
the maintainer and kindly request him to put back an old version of the 
file. If you have to store large data sets put them under 
`/var/scratch/username/`, the scratch space is not backed up.

You can use the command `module` to gain access to a large set of 
preinstalled software. Use `module list` to see what modules are 
currently loaded and `module avail` to see all available modules. You 
can load or unload modules with the 'module load' and `module unload`. 
You may want to add some of the modules you frequently use to your 
bashrc. Note that all that these modules do is add or remove stuff from 
your `PATH` and `LD_LIBRARY_PATH` environment variables. If you need 
software that is not preinstalled, you can install it into your home 
directory. For installing Python packages, you have to use Anaconda or 
`pip install --user`.

If you want an interactive login on any of the compute nodes through the 
reservation system, you could use: `srun -N 1 --pty bash`. The srun 
command is used to run a program on a compute node, -N specifies the 
number of nodes, --pty specifies this is an interactive job, bash is the 
name of the program being launched. This reservation is only cancelled 
when you logout of the interactive session, please observe the rules 
regarding reservation lengths.

To access the nodes you've reserved quickly it's a good idea to generate 
an ssh key and add your own public key to your 'authorized_keys' file. 
This will allow you to ssh to nodes you have reserved without password 
prompts.

To reserve a node with a particular GPU you have to specify to srun what 
kind of node you want. I have the following alias in my bashrc, because 
I use it all the time:  
`alias gpurun="srun -N 1 -C TitanX --gres=gpu:1"`  
If you prefix any command with `gpurun` the command will be executed on 
one of the compute nodes with an Nvidia GTX Titan X GPU in them. You can 
also type `gpurun --pty bash` to get an interactive login on such a 
node.


## Running Jupyter Notebooks on DAS-5 nodes

If you have a Jupyter notebook that needs a powerfull GPU it can be 
useful to run the notebook not on your laptop, but on a GPU-equipped 
DAS-5 node instead.

It can be a bit tricky to get this to work though. That is why I wrote this
text to guide you through all the required steps.

First of all, you need to install jupyter into your DAS-5 account. I 
recommend using miniconda, but any Python environment works. If you are 
using the native Python 2 installation on the DAS don't forget to add 
the `--user` option to the following pip command. You can install 
Jupyter using: `pip install jupyter`.

Now comes the tricky bit, connect to the headnode of the DAS5 and reserve 
a node through the reservation system, for example with the gpurun alias 
explained above. This time we want to start an interactive session so 
you can reserve a node using, for example: `gpurun --pty bash`.

The intermediate step of first creating an interactive terminal and only 
then starting the notebook server, as opposed to directly starting the 
notebook server on a node using `srun` is necessary, unless you unset the 
XDG_RUNTIME_DIR environment variable, but I'd rather not because it 
might break other applications.

The notebook server that we want to start will only listen to 
connections from localhost, which is the node on which the notebook 
server is running. However, on the DAS system firefox is only installed 
on the headnode. We need to configure the notebook server to listen to 
incoming connections from the headnode.

Be warned that the following is highly insecure and should only be used 
within trusted environments with strict access control, like the DAS-5 
system. Go to the desired directory where you want to start your 
notebook server and type:  
``jupyter notebook --ip=* --no-browser``  
If you still get the 'Permission Denied' error, type `unset XDG_RUNTIME_DIR`.

Now, there are 2 different approaches to connect to our notebook server:
  1. starting a browser on the headnode of the DAS and use X-forwarding to access that browser
  2. run your browser locally and setup a socks proxy to forward your http traffic to the headnode of the DAS

### Using X-Forwarding

Using another terminal, create an `ssh -X` connection to the headnode of 
the DAS-5. Note that, it is very important that you use `ssh -X` for the 
whole chain of connections to node, including the one used to connect to 
the headnode of the DAS and any number of intermediate servers you are 
using. This also requires that you have an X server on your local 
machine, if you are running Windows I recommend installing VirtualBox 
with a Linux GuestOS.

On the headnode type `firefox http://node0XX:8888/`, where `node0XX` 
should be replaced with the hostname of the node you are running the 
notebook server on. Now in the browser open your notebook and get 
started using notebooks on a remote server!

### Using a SOCKS proxy

In this step, we will create an ssh tunnel that we will use to forward
our http traffic, effectively turning the headnode of the DAS into your
private proxy server.
The following command is rather handy, you might want to
save it in your bashrc:  
`` alias dasproxy="ssh -fNq -D 8080 <username>@fs0.das5.cs.vu.nl" ``  
Do not forget to replace `<username>` with your own username on the DAS.

After executing the above ssh command, start your local browser and
configure your browser to use the proxyserver. Manually configure the proxy 
as a "Socks v5" proxy with the address 'localhost' and port 8080. 

After changing this setting navigate to the page `http://node0XX:8888/`, 
where `node0XX` should be replaced with the hostname of the node you
are running the notebook server on. Now in the browser open your
notebook and get started using notebooks on a remote server!


