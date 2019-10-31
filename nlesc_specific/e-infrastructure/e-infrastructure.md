# Access to (Dutch) e-Infrastructure

To successfully run a project and to make sure the project is sustainable after it has ended, it is important to choose the e-Infrastructure carefully. Examples of e-Infrastructure used by eScience Center projects are High Performance Computing machines (Supercomputers, Grids, Clusters), Clouds, data storage infrastructure, and web application servers.

In general PI's will already have access to (usually local) e-Infrastructure, and are encouraged to think about what e-Infrastructure they need in the project proposal. Still, many also request our help in finding suitable e-Infrastructure during the project.

Which infrastructure is best very much depends on the project, so we will not attempt to describe the optimal infrastructure here. Instead, we describe what is most commonly used, and how to gain access to this e-Infrastructure.

Lack of e-Infrastructure should never be a reason for not being able to to a project (well). If you ever find yourself without proper e-Infrastructure, come talk to the Efficient Computing team. We should be able to get you going quickly.

## SURF

SURF is the most obvious supplier of e-Infrastructure for Netherlands eScience Center projects. For all e-Infrastructure needs we usually first look to SURF. This does not mean SURF is our exclusive e-Infrastructure provider. We use whatever infrastructure is best for the project, provided by SURF or otherwise.

<!--
### New project meeting with SURF

It is not always apparent what is available at SURF, under what conditions machines can be used, etc. Also SURF is more than willing to try to accommodate any special requests from projects, _if_ some lead-time is available before the infrastructure is actually needed.

Once we have a good idea of what e-Infrastructure is required in a project (probably some time after the official start of a project), a meeting with SURF is held to see what infrastructure needs can be filled with SURF infrastructure. The first point of contact is Jan Bot (jan.bot@surfsara.nl) who works at SURFsara, and across the hall from our office. For now please also invite Niels Drost to the meeting, and perhaps bring your coordinator.
-->

### Getting access to SURF infrastructure

In general access to SURFsara resources is free of charge for scientists in The Netherlands. For most infrastructure gaining access is a matter of filling in a simple web-form, which you can do yourself on behalf of the scientists in the project. Exceptions are the Cartesius and Lisa, for which a more involved process is required. For these machines, only the PI of a project can submit (or anyone else with an NWO Iris account).

The Netherlands eScience Center also has access to the infrastructure provided by SURFnet. Access is normally done on a per-organization basis, so may vary from one project partner to the next.

### Available systems at SURF

Here we list some of the most likely to be used resources at SURF. See the [overview of all SURF services and products](https://www.surf.nl/en/services-and-products), and [detailed information on the SURFsara infrastructure](https://userinfo.surfsara.nl/systems).

SURFsara:

- **Cartesius**: The national supercomputer of The Netherlands. It contains a lot of very high performance machines, connected through a fast interconnect (about 41000 cores in total, plus 132 GPUs). It also has a large storage system (7+ Pb). Cartesius is typically designed for large parallel applications that require thousands of cores at once.
- **Lisa**: National Cluster. Similar machines as the Cartesius, without the interconnect (about 8000 cores in total). Storage also more limited. Lisa is typically designed to run lots of small (1 to 16 core) applications at the same time.
- **Grid**: Same machines again, now with a Grid Middleware. Not recommended for use in eScience Center projects.
- **HPC Cloud**: On demand computing infrastructure. Nice if you need longer running services, or have a lot of special software requirements.
- **Hadoop**: Big Data analytics framework.
- **BeeHub**: Lots of storage with a webDAV interface.
- **Elvis**: Remote rendering cluster. Creates a remote desktop session to a Linux machine with powerful Nvidia Graphics installed.
- **Data Archive**: Secure, long-term storage of research data on tape. Access to archive included with Cartesius and Lisa project accounts.

SURFnet:

- **SURFconext**: Federated identity management. Allows scientists to login to services using their home organization account. Best known example is SURFspot. Can be added to custom services as well.
- **SURFdrive**: Dropbox-like service hosted by SURF.

Ask questions to: helpdesk@surfsara.nl.

## DAS-5

The Netherlands eScience Center participates in the [DAS-5 (Distributed ASCI Supercomputer)](http://www.cs.vu.nl/das5), a system for experimental computer science. Though not intended for production work, it is great for developing software on, especially HPC, parallel and/or distributed software.

DAS-5 consists of 6 clusters at 5 different locations in the Netherlands, with a total of about 200 machines, over 3000 cores, and about 800Tb total storage. These clusters are connected with dedicated lightpaths. Internally, each cluster has a fast interconnect. DAS-5 also contains an ever increasing amount of accelerators (mostly GPU's).

DAS-5 is explicitly meant as an experimentation platform: any job should be able to run instantly, long queue times should be avoided. Running long jobs is therefore not allowed during working hours. During nights and weekends these rules do not apply. See [the usage policy](http://www.cs.vu.nl/das5/usage.shtml).

Any eScience Center employee can get a DAS-5 account, usually available within a few hours.

## Security and convenience when committing code to GitHub from a cluster

When accessing a cluster, it is generally [safer to use a pair of keys than to login using a username and password](https://superuser.com/questions/303358/why-is-ssh-key-authentication-better-than-password-authentication). There is a [guide on how to setup those keys](https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/). Make sure you encrypt your private key and that it is not automatically decrypted when you login to your local machine.
Make a separate pair of keys to access your GitHub account following [GitHub's instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/). It involves [uploading your public key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) and [testing your connection](https://help.github.com/articles/testing-your-ssh-connection/).

When committing code from a cluster to GitHub, one needs to store an encrypted private key in the $HOME/.ssh directory on the cluster. This is inconvenient, because it requires submitting a password to unlock the private key. This password has to be resubmitted when SSHing to a local node from the head node. To bypass this inconvenience [SSH agent forwarding](https://developer.github.com/guides/using-ssh-agent-forwarding/) is recommended. It is very simple. On your local machine, make a $HOME/.ssh/config file to contain the following:
```
Host example.com
    ForwardAgent yes
```
Replace example.com by the head node of your cluster, i.e. the node you use to login to.
Next,
```
chmod 600 $HOME/.ssh/config.
```
Done!

The only remaining problem is that SSH keys cannot be used when git cloning was done using https instead of SSH, but that can be [corrected](http://stackoverflow.com/questions/6565357/git-push-requires-username-and-password):
```
git remote set-url origin git@github.com:username/repo.git
```
## Commercial Clouds

If needed a project can use commercial cloud resources, normally only if all SURF resources do not meet the requirements. As long as the costs are within limits these can come out of the eScience Center general project budget, for larger amounts the PI will need to provide funding.

We do not have an official standard commercial cloud provider, but have the most experience with Amazon AWS.

## Procolix

If a more long term infrastructure is needed which cannot be provided by SURF, the default company we use for managed hosting is [Procolix](https://www.procolix.com/). Procolix hosts our eduroam/surfconext authentication machines.

In principle the eScience Center will not pay for infrastructure needed by projects. In these cases the PIs will have to pay the bill.

## GitHub Pages

If a project is in need of a website or webapp using only static content (javascript, html, etc), it is also possible to host this at github. See https://pages.github.com/

## Local Resources

A scientist may have access to locally available infrastructure.

## Other

This list does not include any resources from Nikhef, CWI, RUG, Target, etc, as these are (as far as we know) not open to all scientists.

## Avoid if possible

Try to avoid using self-managed resources (the proverbial machine under the Postdoc's desk). This may seem an easy solution at first, but will most probably require significant effort over the course of the project. It also increases the changes of the infrastructure disappearing at some random moment after the project has finished.
