### Using a floating license from Lisa

**Please, be aware that this might not work, since the SARA license server update in May 2015. Please refer to [Using MATLAB on Lisa](https://github.com/NLeSC/kb/wiki/Using-MATLAB-on-LISA)**

If you're working on a project for which Matlab licenses are available on Lisa, you can run Matlab locally by creating a tunnel to the license server. Willem Bouten has bought a couple of floating licenses on Lisa so if you're working on a project of his, you're probably allowed to use them. Follow the steps below to run Matlab on a linux machine using one of Lisa's floating licenses.

You need:
* A linux machine
* An account on Lisa

1. Copy the Matlab software to your local computer by executing `(sudo) scp -r USERNAME@lisa.surfsara.nl:/sara/sw/matlab/64/2014b /opt/matlab` where `USERNAME` should be replaced with your username for Lisa.
Copying Matlab from Lisa ensures that you're using a version of Matlab compatible with the licenses. To be able to run the software, you may need to change the permissions for the executables using chmod, and you may need to change the ownership of the complete matlab folder using chown. Running the software at this stage will of course generate an error that there's no license available.

2. Create a bash script (`gedit ~/bin/tunnel`) with the following content below. Again, replace `USERNAME` with your username for Lisa.

        #!/bin/bash
        tunnelproc=`ps -ef | grep 49911 | grep license  | awk '{print $2;}'`
        if [ "$tunnelproc" != "" ]; then
                kill -9 $tunnelproc
        fi
        nohup ssh -N -L 1711:license.osd.sara.nl:1711 -L 1713:license.osd.sara.nl:1713 -L 49911:license.osd.sara.nl:49911 USERNAME@145.100.29.210 >& /dev/null &
        sleep 1


3. Make the bash script you just created runnable (`chmod +x ~/bin/tunnel`).

4. For the script to work, you should have an SSH key pair installed for Lisa. If you don't have it yet, you can generate a new key pair as using `ssh-keygen -t rsa`. After that you can copy the public key to Lisa using `ssh-copy-id USERNAME@lisa.surfsara.nl`. For more information on ssh keys see http://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/.

5. Edit `~/.bashrc` and add the lines below at the bottom of the file.

        export PATH=${HOME}/bin:/opt/matlab/bin:${PATH}
        export LD_LIBRARY_PATH=/opt/matlab/bin/glnxa64
        export LM_LICENSE_FILE=1711@127.0.0.1

6. Each linux session you can create a tunnel by running `tunnel`. After that, you can start Matlab like normal and it should find a license from Lisa.
