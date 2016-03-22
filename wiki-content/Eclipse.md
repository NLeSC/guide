### Java Code Style

Formatter and cleanup can be imported into Eclipse by:

1. Go to Window>Preferences 
2. Go to Java>Code Style>Formatter
3. Import [attachments/code-format-nlesc-v2.xml](attachments/code-format-nlesc-v2.xml) (Updated 08-08-2013)
4. Go to Java>Code Style>Clean Up
5. Import [attachments/code-cleanup-nlesc.xml](attachments/code-cleanup-nlesc.xml)

### Plugins

There are a huge number of eclipse plugins for various languages and tools. Install these from inside Eclipse under Help->Install new software. Below is a small list of commonly used plugins.

#### Python development

Pydev is the Python development environment for Eclipse.

- Website: http://pydev.org/
- Eclipse update site: http://pydev.org/updates

#### Fortran development

Photran is the Fortran development environment for Eclipse.

- Website: http://www.eclipse.org/photran/
- Eclipse update site: (included in standard eclipse software site)

#### Javascript development

There are 2 choices for Javascript development in Eclipse:
1. Javascript development tools (JSDT), part of Eclipse packages.
2. Aptana, combination of Javascript/PHP and Ruby editors. Update site see http://aptana.com/downloads/start

One has outline in it's editor, while other editor has prettier highlighting.

For server side Javascript use [node Eclipse](http://www.nodeclipse.org/)

#### Sonar

We use SonarQube for checking the quality of our code.

- Sonar website: http://www.sonarqube.org/
- Plugin site: http://docs.codehaus.org/display/SONAR/Installing+SonarQube+in+Eclipse
- Eclipse update site: http://dist.sonar-ide.codehaus.org/eclipse/

#### Java Code coverage

For running and viewing Jacoco code coverage, use eclemma

- Website: http://www.eclemma.org/
- Eclipse update site: http://update.eclemma.org/


#### Subversion

Although we normally use git on GitHub, some projects use an external subversion repository. For this, use the subclipse eclipse plugin

- Website: http://subclipse.tigris.org/
- Eclipse update site: http://subclipse.tigris.org/update_1.10.x

#### GitHub for Eclipse

- Website: http://eclipse.github.com/
- Eclipse update site (egit): http://download.eclipse.org/egit/updates
- Eclipse update site (mylin for github): http://download.eclipse.org/egit/github/updates 

#### DB Entity-Relationship diagrams in Eclipse

 - Website: http://ermaster.sourceforge.net
 - Eclipse update site: http://ermaster.sourceforge.net/update-site/

### Tweaks

#### Replacing black background in tooltips

If you want to change the tooltip colors for all apps then install and run gnome-color-chooser and go to Specific tab > Tooltips. Check the boxes for Foreground and Background and choose colors.
Afterwards restart Eclipse.

See http://askubuntu.com/questions/70599/how-to-change-tooltip-background-color-in-unity

#### Fixing Mint-X theme.

There is a small error in the default gtk2 theme included with Linux Mint 14. For a simple fix, see:

http://dentrassi.de/2013/04/23/fixing-the-mint-x-theme-for-eclipseswt/



