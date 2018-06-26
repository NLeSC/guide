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

### How to set it up

It can be a bit tricky to get this to work. In short, what you need is
to install jupyter, for example using the following command:
```
pip install jupyter
```
And it's recommended that you add this alias to your .bashrc file:
```
`alias notebook-server="srun -N 1 -C TitanX --gres=gpu:1 bash -c 'hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'"`
```
Now you can start the server with the command ``notebook-server``.

You just need to connect to your jupyter notebook server after this.
The easiest way to do this is to start firefox on the headnode (fs0) and connect to the node that was printed by the ``notebook-server`` command. Depending on what node you got from the scheduler you can go to the address ``http://node0XX:8888/``. For more details and different ways of connecting to the server see the longer explanation below.

### More detailed explanation

First of all, you need to install jupyter into your DAS-5 account. I 
recommend using miniconda, but any Python environment works. If you are 
using the native Python 2 installation on the DAS don't forget to add 
the `--user` option to the following pip command. You can install 
Jupyter using: `pip install jupyter`.

Now comes the tricky bit, we are going to connect to the headnode of the DAS5 and reserve 
a node through the reservation system and start a notebook server on that node.
You can use the following alias for that, I suggest storing it in your .bashrc file:  
`alias notebook-server="srun -N 1 -C TitanX --gres=gpu:1 bash -c 'hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'"`   

Let's first explain what this alias actually does for you.
The first part of the command is similar to the `gpurun` alias explained above. If you
do not require a GPU in your node, please remove the `-C TitanX --gres=gpu:1` part.
Now let's take a look at what the rest of this command is doing.

On the node that we reserve through `srun` we execute the following bash command:  
`hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'`  
This is actually two commands, the first only prints the name of the host,
which is important because you'll need to connect to that node later. The
second command starts with unsetting the environment variable XDG_RUNTIME_DIR.

On the DAS, we normally do not have access to the default directory
pointed to by the environment variable XDG_RUNTIME_DIR. The Jupyter notebook
server wants to use this directory for storing temporary files, if
XDG_RUNTIME_DIR is not set it will just use /tmp or something for
which it does have permission to access.

The notebook server that we start would normally only listen to 
connections from localhost, which is the node on which the notebook 
server is running. That is why we pass the `--ip=*` option, to configure the
notebook server to listen to incoming connections from the headnode. Be warned
that this is actually highly insecure and should only be used within trusted
environments with strict access control, like the DAS-5 system. 

We also need the ``--no-browser`` no browser option, because we do not want to run the browser on the DAS node.

You can type ``notebook-server`` now to actually reserve a node and start the jupyter notebook server.

Now that we have a running Jupyter notebook server, there are 2 different approaches to connect to our notebook server:
  1. run your browser locally and setup a socks proxy to forward your http traffic to the headnode of the DAS
  2. starting a browser on the headnode of the DAS and use X-forwarding to access that browser

Approach 1 is very much recommended, but if you can't get it to work, you can defer to option 2.

### Using a SOCKS proxy

In this step, we will create an ssh tunnel that we will use to forward
our http traffic, effectively turning the headnode of the DAS into your
private proxy server. Make sure you that you can connect to the headnode
of the DAS, for example using a VPN. 
The following command is rather handy, you might want to
save it in your bashrc:  
`` alias dasproxy="ssh -fNq -D 8080 <username>@fs0.das5.cs.vu.nl" ``  
Do not forget to replace `<username>` with your own username on the DAS.

Option `-f` stands for background mode, which means the process started with this command will keep running in the background, `-N` means there is no command to be executed on the remote host, and `-q` stands for quiet mode, meaning that most output will be surpressed.

After executing the above ssh command, start your local browser and
configure your browser to use the proxyserver. Manually configure the proxy 
as a "Socks v5" proxy with the address 'localhost' and port 8080. 

After changing this setting navigate to the page `http://node0XX:8888/`, 
where `node0XX` should be replaced with the hostname of the node you
are running the notebook server on. Now in the browser open your
notebook and get started using notebooks on a remote server!

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
