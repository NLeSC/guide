The following will install Geoserver with PostGIS and nginx on an Ubuntu 14.04.1 LTS server. In the case of SIM-CITY, this is hosted on a virtual machine with two cores. Start by installing the software dependencies:

    sudo apt-get install aptitude nginx tomcat7 postgresql-client postgresql postgis tomcat7-doc tomcat7-admin curl unzip osm2pgsql postgresql-doc php5-fpm

## Installing services

### Set up Tomcat

Disable external connections to tomcat: add the statement `address="127.0.0.1"` in `/var/lib/tomcat7/conf/server.xml` to the line with:
  
      <Connector port="8080"
  
Add support for tomcat admin: add the following lines to `/var/lib/tomcat7/conf/tomcat-users.xml`:
  
      <role rolename="admin-gui"/>
      <role rolename="manager-gui"/>
      <user username="[username]" password="[password]" roles="manager-gui,admin-gui"/>

Set up tomcat directories correctly:
  
      cd /usr/share/tomcat7
      sudo ln -s /var/lib/tomcat7/common
      sudo ln -s /var/lib/tomcat7/server
      sudo ln -s /var/lib/tomcat7/shared

Set tomcat memory: create `/usr/share/tomcat7/bin/setenv.sh` with the following contents:
  
      #!/bin/bash
      CATALINA_OPTS="-server -Xmx1200m"

and set execution permissions
  
      sudo chmod +x /usr/share/tomcat7/bin/setenv.sh

## Install Geoserver

Download the web archive and that should be it:
  
      cd /tmp
      curl -O# http://downloads.sourceforge.net/project/geoserver/GeoServer/2.6.1/geoserver-2.6.1-war.zip
      unzip geoserver-2.6.1-war.zip
      sudo mv geoserver-2/geoserver.war /var/lib/tomcat7/webapps
      rm -r geoserver*

### Set up PostGIS

Make users:
  
      sudo adduser postgres
      sudo adduser nlesc

Set up PostGIS database:
  
      sudo su postgres
      psql
      CREATE USER nlesc WITH PASSWORD 'mypassword';
      CREATE DATABASE maps OWNER nlesc;
      \connect maps
      CREATE EXTENSION postgis;
      CREATE EXTENSION postgis_topology;
  
Allow connection with password: edit `/etc/postgresql/9.3/main/pg_hba.conf` and set:

      # "local" is for Unix domain socket connections only
      local   all             all                                     md5
  
Import a map from OpenStreetMap to database `maps`:
  
      sudo su nlesc
      osm2pgsql -U nlesc -d maps map.osm

### Set up the web server nginx

For editing the database, install phpPgAdmin:

    sudo mkdir /srv/https /srv/http
    cp /usr/share/nginx/html/* /srv/http
    cp /usr/share/nginx/html/* /srv/https
    cd /tmp
    curl -O# http://heanet.dl.sourceforge.net/project/phppgadmin/phpPgAdmin%20%5Bstable%5D/phpPgAdmin-5.1/phpPgAdmin-5.1.tar.bz2
    tar xjf phpPgAdmin-5.1.tar.bz2
    sudo mv phpPgAdmin-5.1 /srv/https/phppgadmin

Create a self-signed SSL certificate:
  
      sudo mkdir /etc/nginx/ssl
      sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt

Enable SSL, Tomcat Admin and Geoserver in nginx: edit `/etc/nginx/sites-enabled/default`:
  * set server name
  * set root to `/srv/http`
  * uncomment https section
  * set https server name
  * set root to `/srv/https`
  * set `ssl_certificate /etc/nginx/ssl/nginx.crt`
  * set `ssl_certificate_key /etc/nginx/ssl/nginx.key`
  * add tomcat manager, and geoserver proxies and phppgadmin to https:
```
      location /tomcat7-manager {
          proxy_pass http://127.0.0.1:8080/manager;
      }

      location /geoserver {
          proxy_pass http://127.0.0.1:8080/geoserver;
      }
      location /phppgadmin {
          index index.html index.php;
      }

      location ~ /\.ht {
          deny all;
      }
      location ~ \.php$ {
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
                fastcgi_pass unix:/var/run/php5-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
      }
```
* In `/etc/php5/fpm/php.ini` set `cgi.fix_pathinfo = 0;`

### Finally

Reload all services to make the changes go into effect:

    sudo service php5-fpm restart
    sudo service postgresql restart
    sudo service tomcat7 restart
    sudo service nginx restart

## Configuration

Go to `https://[server-hostname]/geoserver`, log in with user `admin` and password `geoserver`. In settings, set password authentication to Strong PBE and change the admin password. Log out again and log in with user `root` and password `geoserver`. Again, change the password.

In Authentication settings, click on every filter chain and remove `anonymous` from authorised users. In general settings, set Proxy Base URL to `https://[server-hostname]/geoserver`.

Add a new workspace, and check the Proxy Base URL. Add a PostGIS data store to the workspace and set the user (`nlesc`) and database (`maps`). Now you can add layers from the PostGIS database.