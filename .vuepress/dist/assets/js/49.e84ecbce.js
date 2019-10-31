(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{251:function(e,o,t){"use strict";t.r(o);var n=t(0),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"das-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#das-5"}},[e._v("#")]),e._v(" DAS-5")]),e._v(" "),t("p",[e._v("This text gives a couple of practical hints to get you started using the\nDAS-5 quickly. It is intended for people with little to no experience\nusing compute clusters.")]),e._v(" "),t("p",[e._v("First of all, and this is the most important point in this text: read\nthe usage policy and make sure you understand every word of it:\nhttp://www.cs.vu.nl/das5/usage.shtml")]),e._v(" "),t("p",[e._v("The DAS-5 consists of multiple cluster sites, the largest one is located\nat the VU, which you can reach using by the hostname\n"),t("code",[e._v("fs0.das5.cs.vu.nl")]),e._v(". The firewall requires that your IP is whitelisted,\nwhich means you will be able to access the DAS from the eScience Center\noffice, but not directly when you are somewhere else. To use the DAS\nfrom anywhere you can use eduVPN.")]),e._v(" "),t("p",[e._v("When you login in it means you are logged into the headnode, this node\nshould not be used for any computational work. The cluster uses a\nreservation system, if you want to use any node that is not the head\nnode, you must use the reservation system to gain access to a compute\nnode. The reserveration system on DAS-5 is called Slurm, you can see all\nrunning jobs on the cluster using "),t("code",[e._v("squeue")]),e._v(" and cancel any of your\nrunning jobs with "),t("code",[e._v("scancel <jobid>")]),e._v(".")]),e._v(" "),t("p",[e._v("The files in your home directory "),t("code",[e._v("/home/username/")]),e._v(" will be backed up\nautomatically, if you accidently delete an important file you can email\nthe maintainer and kindly request him to put back an old version of the\nfile. If you have to store large data sets put them under\n"),t("code",[e._v("/var/scratch/username/")]),e._v(", the scratch space is not backed up.")]),e._v(" "),t("p",[e._v("You can use the command "),t("code",[e._v("module")]),e._v(" to gain access to a large set of\npreinstalled software. Use "),t("code",[e._v("module list")]),e._v(" to see what modules are\ncurrently loaded and "),t("code",[e._v("module avail")]),e._v(" to see all available modules. You\ncan load or unload modules with the 'module load' and "),t("code",[e._v("module unload")]),e._v(".\nYou may want to add some of the modules you frequently use to your\nbashrc. Note that all that these modules do is add or remove stuff from\nyour "),t("code",[e._v("PATH")]),e._v(" and "),t("code",[e._v("LD_LIBRARY_PATH")]),e._v(" environment variables. If you need\nsoftware that is not preinstalled, you can install it into your home\ndirectory. For installing Python packages, you have to use Anaconda or\n"),t("code",[e._v("pip install --user")]),e._v(".")]),e._v(" "),t("p",[e._v("If you want an interactive login on any of the compute nodes through the\nreservation system, you could use: "),t("code",[e._v("srun -N 1 --pty bash")]),e._v(". The srun\ncommand is used to run a program on a compute node, -N specifies the\nnumber of nodes, --pty specifies this is an interactive job, bash is the\nname of the program being launched. This reservation is only cancelled\nwhen you logout of the interactive session, please observe the rules\nregarding reservation lengths.")]),e._v(" "),t("p",[e._v("To access the nodes you've reserved quickly it's a good idea to generate\nan ssh key and add your own public key to your 'authorized_keys' file.\nThis will allow you to ssh to nodes you have reserved without password\nprompts.")]),e._v(" "),t("p",[e._v("To reserve a node with a particular GPU you have to specify to srun what\nkind of node you want. I have the following alias in my bashrc, because\nI use it all the time:"),t("br"),e._v(" "),t("code",[e._v('alias gpurun="srun -N 1 -C TitanX --gres=gpu:1"')]),t("br"),e._v("\nIf you prefix any command with "),t("code",[e._v("gpurun")]),e._v(" the command will be executed on\none of the compute nodes with an Nvidia GTX Titan X GPU in them. You can\nalso type "),t("code",[e._v("gpurun --pty bash")]),e._v(" to get an interactive login on such a\nnode.")]),e._v(" "),t("h2",{attrs:{id:"running-jupyter-notebooks-on-das-5-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-jupyter-notebooks-on-das-5-nodes"}},[e._v("#")]),e._v(" Running Jupyter Notebooks on DAS-5 nodes")]),e._v(" "),t("p",[e._v("If you have a Jupyter notebook that needs a powerfull GPU it can be\nuseful to run the notebook not on your laptop, but on a GPU-equipped\nDAS-5 node instead.")]),e._v(" "),t("h3",{attrs:{id:"how-to-set-it-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-it-up"}},[e._v("#")]),e._v(" How to set it up")]),e._v(" "),t("p",[e._v("It can be a bit tricky to get this to work. In short, what you need is\nto install jupyter, for example using the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pip install jupyter\n")])])]),t("p",[e._v("And it's recommended that you add this alias to your .bashrc file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("`alias notebook-server=\"srun -N 1 -C TitanX --gres=gpu:1 bash -c 'hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'\"`\n")])])]),t("p",[e._v("Now you can start the server with the command "),t("code",[e._v("notebook-server")]),e._v(".")]),e._v(" "),t("p",[e._v("You just need to connect to your jupyter notebook server after this.\nThe easiest way to do this is to start firefox on the headnode (fs0) and connect to the node that was printed by the "),t("code",[e._v("notebook-server")]),e._v(" command. Depending on what node you got from the scheduler you can go to the address "),t("code",[e._v("http://node0XX:8888/")]),e._v(". For more details and different ways of connecting to the server see the longer explanation below.")]),e._v(" "),t("h3",{attrs:{id:"more-detailed-explanation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-detailed-explanation"}},[e._v("#")]),e._v(" More detailed explanation")]),e._v(" "),t("p",[e._v("First of all, you need to install jupyter into your DAS-5 account. I\nrecommend using miniconda, but any Python environment works. If you are\nusing the native Python 2 installation on the DAS don't forget to add\nthe "),t("code",[e._v("--user")]),e._v(" option to the following pip command. You can install\nJupyter using: "),t("code",[e._v("pip install jupyter")]),e._v(".")]),e._v(" "),t("p",[e._v("Now comes the tricky bit, we are going to connect to the headnode of the DAS5 and reserve\na node through the reservation system and start a notebook server on that node.\nYou can use the following alias for that, I suggest storing it in your .bashrc file:"),t("br"),e._v(" "),t("code",[e._v("alias notebook-server=\"srun -N 1 -C TitanX --gres=gpu:1 bash -c 'hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'\"")])]),e._v(" "),t("p",[e._v("Let's first explain what this alias actually does for you.\nThe first part of the command is similar to the "),t("code",[e._v("gpurun")]),e._v(" alias explained above. If you\ndo not require a GPU in your node, please remove the "),t("code",[e._v("-C TitanX --gres=gpu:1")]),e._v(" part.\nNow let's take a look at what the rest of this command is doing.")]),e._v(" "),t("p",[e._v("On the node that we reserve through "),t("code",[e._v("srun")]),e._v(" we execute the following bash command:"),t("br"),e._v(" "),t("code",[e._v("hostname; XDG_RUNTIME_DIR= jupyter notebook --ip=* --no-browser'")]),t("br"),e._v("\nThis is actually two commands, the first only prints the name of the host,\nwhich is important because you'll need to connect to that node later. The\nsecond command starts with unsetting the environment variable XDG_RUNTIME_DIR.")]),e._v(" "),t("p",[e._v("On the DAS, we normally do not have access to the default directory\npointed to by the environment variable XDG_RUNTIME_DIR. The Jupyter notebook\nserver wants to use this directory for storing temporary files, if\nXDG_RUNTIME_DIR is not set it will just use /tmp or something for\nwhich it does have permission to access.")]),e._v(" "),t("p",[e._v("The notebook server that we start would normally only listen to\nconnections from localhost, which is the node on which the notebook\nserver is running. That is why we pass the "),t("code",[e._v("--ip=*")]),e._v(" option, to configure the\nnotebook server to listen to incoming connections from the headnode. Be warned\nthat this is actually highly insecure and should only be used within trusted\nenvironments with strict access control, like the DAS-5 system.")]),e._v(" "),t("p",[e._v("We also need the "),t("code",[e._v("--no-browser")]),e._v(" no browser option, because we do not want to run the browser on the DAS node.")]),e._v(" "),t("p",[e._v("You can type "),t("code",[e._v("notebook-server")]),e._v(" now to actually reserve a node and start the jupyter notebook server.")]),e._v(" "),t("p",[e._v("Now that we have a running Jupyter notebook server, there are 2 different approaches to connect to our notebook server:")]),e._v(" "),t("ol",[t("li",[e._v("run your browser locally and setup a socks proxy to forward your http traffic to the headnode of the DAS")]),e._v(" "),t("li",[e._v("starting a browser on the headnode of the DAS and use X-forwarding to access that browser")])]),e._v(" "),t("p",[e._v("Approach 1 is very much recommended, but if you can't get it to work, you can defer to option 2.")]),e._v(" "),t("h3",{attrs:{id:"using-a-socks-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-a-socks-proxy"}},[e._v("#")]),e._v(" Using a SOCKS proxy")]),e._v(" "),t("p",[e._v("In this step, we will create an ssh tunnel that we will use to forward\nour http traffic, effectively turning the headnode of the DAS into your\nprivate proxy server. Make sure you that you can connect to the headnode\nof the DAS, for example using a VPN.\nThe following command is rather handy, you might want to\nsave it in your bashrc:"),t("br"),e._v(" "),t("code",[e._v('alias dasproxy="ssh -fNq -D 8080 <username>@fs0.das5.cs.vu.nl"')]),t("br"),e._v("\nDo not forget to replace "),t("code",[e._v("<username>")]),e._v(" with your own username on the DAS.")]),e._v(" "),t("p",[e._v("Option "),t("code",[e._v("-f")]),e._v(" stands for background mode, which means the process started with this command will keep running in the background, "),t("code",[e._v("-N")]),e._v(" means there is no command to be executed on the remote host, and "),t("code",[e._v("-q")]),e._v(" stands for quiet mode, meaning that most output will be surpressed.")]),e._v(" "),t("p",[e._v("After executing the above ssh command, start your local browser and\nconfigure your browser to use the proxyserver. Manually configure the proxy\nas a \"Socks v5\" proxy with the address 'localhost' and port 8080.")]),e._v(" "),t("p",[e._v("After changing this setting navigate to the page "),t("code",[e._v("http://node0XX:8888/")]),e._v(",\nwhere "),t("code",[e._v("node0XX")]),e._v(" should be replaced with the hostname of the node you\nare running the notebook server on. Now in the browser open your\nnotebook and get started using notebooks on a remote server!")]),e._v(" "),t("h3",{attrs:{id:"using-x-forwarding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-x-forwarding"}},[e._v("#")]),e._v(" Using X-Forwarding")]),e._v(" "),t("p",[e._v("Using another terminal, create an "),t("code",[e._v("ssh -X")]),e._v(" connection to the headnode of\nthe DAS-5. Note that, it is very important that you use "),t("code",[e._v("ssh -X")]),e._v(" for the\nwhole chain of connections to node, including the one used to connect to\nthe headnode of the DAS and any number of intermediate servers you are\nusing. This also requires that you have an X server on your local\nmachine, if you are running Windows I recommend installing VirtualBox\nwith a Linux GuestOS.")]),e._v(" "),t("p",[e._v("On the headnode type "),t("code",[e._v("firefox http://node0XX:8888/")]),e._v(", where "),t("code",[e._v("node0XX")]),e._v("\nshould be replaced with the hostname of the node you are running the\nnotebook server on. Now in the browser open your notebook and get\nstarted using notebooks on a remote server!")])])}),[],!1,null,null,null);o.default=a.exports}}]);