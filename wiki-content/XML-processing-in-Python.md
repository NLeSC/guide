For XML files that fit in memory [Beautiful Soup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) is a library. However, when an XML file doesn't fit into memory, you need to use [LXML iterparse](http://lxml.de/parsing.html).

## Tips and Tricks

Error message: `lxml.etree.XMLSyntaxError: ID XXXX already defined, line XXX, column XXX`  
Solution: Use option `huge_tree=True` (`context = etree.iterparse(file_name, events=('start', 'end'), huge_tree=True)`)  
Source: [https://mailman-mail5.webfaction.com/pipermail/lxml/2014-May/007185.html](https://mailman-mail5.webfaction.com/pipermail/lxml/2014-May/007185.html)