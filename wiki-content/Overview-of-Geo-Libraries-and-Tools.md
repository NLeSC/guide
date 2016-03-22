### JavaScript Visualization Libraries

* [Cesium](http://cesiumjs.org/) - WebGL Virtual Globe and Map Engine

* [Leaflet](http://leafletjs.com/) - a JavaScript library for mobile-friendly maps

* [OpenLayers](http://openlayers.org/) OpenLayers has been developed to further the use of geographic information of all kinds. License: FreeBSD

* [GeoExt](http://geoext.github.io/geoext2/). Javascript library combining OpenLayers with ExtJS. Available for both ExtJS version 3 and 4.

* [X3Dom](http://www.x3dom.org/). Javascript framework and runtime for 3D graphics on the web. Striving to be for 3D what SVG is for 2D.

* [X3DomExt](http://www.3dvisworld.com/features/feature-articles/7816-brandenburg-3d-browser-based-3d-presentation-of-geological-data.html). Javascript library for combining 3Dom with ExtJS. Not open source yet.

### Working with geospatial data in R
* [CRAN Task View: Analysis of Spatial Data](http://cran.r-project.org/web/views/Spatial.html)
* [Creating maps in R](https://github.com/Robinlovelace/Creating-maps-in-R)
* [Using R — Working with Geospatial Data](http://mazamascience.com/WorkingWithData/?p=1277)

### Visualization Applications

See [here](https://www.dkrz.de/Nutzerportal-en/workshops/EGU2014-Visualization) for screenshots of most applications listed here.

* [Google Earth](http://earth.google.com/) - 3D Globe Visualization Application, Applet, and App.

* [Mapnik](http://mapnik.org/) Visualization of GIS data; can be used to render production quality maps, and is often used to generate tiles for web applications. Uses GDAL for input, but can also connect directly to PostGIS. Best used via the XML interface. Licence: LGPLv2.1

* [QGis](http://www.qgis.org/en/site/) Opensource GIS-viewer comparable to ESRI ArcGIS. Can connect to PostgreSQL/PostGIS database for vector data; raster data can be imported via a special plugin. Uses GDAL, so supported formats depend on GDAL installation. Licence: GPLv2.

* [GRASS](http://grass.osgeo.org/) Open-source GIS. Note: upcoming GRASS versions will have much improved support for vector data processing.

* [MapBox](https://www.mapbox.com/tilemill/) - Web-application for creating and hosting on-line maps. [Extensive Tutorial](https://github.com/bertspaan/tilemill-workshop)
    * [How do web maps work?](https://www.mapbox.com/foundations/how-web-maps-work/)

* [Avizo Green](http://www.vsg3d.com/avizo/overview), 3D Analysis Software for Environmental Data, made by the German Climate Computing Center (DKRZ (Commercial).

* [Unidata IDV](https://www.unidata.ucar.edu/software/idv/), Java-Based 3D Visualization from the makers of NetCDF (Free, Registration Required).

* [Paraview](http://www.paraview.org), 2D and 3D Visualizations, with parallel computing support (FOSS).  [Tutorial](http://www.paraview.org/Wiki/The_ParaView_Tutorial)

* [Geovisionary](www.virtalis.com/geovisionary/), Virtial Reality 3D (Geo) visualizations by British Geological Survey. [Video](https://www.youtube.com/watch?v=LOsAJtmzVrA&rel=0)

* [Google Map Egine](mapsengine.google.com), custom data layers in google maps. [Info here](https://www.google.com/enterprise/mapsearth/products/mapsengine.html)

* [Google Earth Egine](https://earthengine.google.org), Operations on (satellite) map data.

* [Vapor](http://www.vapor.ucar.edu), NCAR Ocean and Climate Visualzation. Specially focuses on viewing large (TB) datasets on a single workstation. Both GUI and commandline tools. [Tutorial](http://www.vapor.ucar.edu/sites/default/files/TACCTutorial2011.pdf)

* [SimViz](http://www.dkrz.de/Nutzerportal-en/doku/vis/sw/simvis/simvis), DKRZ made "exploratory" visualization.  [Tutorial](and http://mms.dkrz.de/pdf/vis/simvis_tutorial.pdf)

* [NCAR Command Language (NCL)](http://www.ncl.ucar.edu/) is a scripting language for creating 2D and 3D graphs and visualizations of Geo Data. A bit like Gnuplot for GEO data.

* [OpenGeoSys Data Explore](http://www.opengeosys.org). Visualization application part of the OpenGeoSys open-source modeling framework. [Demo video](https://www.youtube.com/watch?v=bj6lticy6jA#t=103)

### Standards

There a quite a few standards for accessing geospatial data, most come from the Open Geospatial Consortium: http://www.opengeospatial.org/ Some standards include:

* [Web Map Service(WMS)](http://www.opengeospatial.org/standards/wms) - Service for getting geo images (as png or jpg, etc) from some server over http
* [Web Map Tile Service (WMTS)](http://www.opengeospatial.org/standards/wmts). Tiled version of WMS.
* [Web Coverage Service (WCS)](http://www.opengeospatial.org/standards/wcs):  Service for getting multi-dimensional coverage (raster) data from some server.
* [Web Coverage Processing Service (WCPS)](http://www.opengeospatial.org/standards/wcps): Processing on coverage data. Implemented as an extension on WCS, so server-side processing can be done on data while retrieving it.
* [Web Feature Service (WFS)](http://www.opengeospatial.org/standards/wfs): Service for getting geo references "features", for instance shape files.
* [Web Processing Server (WPS)](http://www.opengeospatial.org/standards/wps): Service for processing on data while keeping it on the server.
* [Keyhole Markup Language(KML)](http://www.opengeospatial.org/standards/kml) - xml standard for
annotations of maps.

### Data Servers

Some implementations of the above standards include:

* [Hyrax](http://www.opendap.org/) - OPeNDAP Reference Server Implementation. Serves NetCDF4, HDF5, and others, over http.
* [GeoServer](http://geoserver.org) - Geospatial data server. Serves data from a variety of sources as WMS, KML, and other standard formats
* [EarthServer](http://www.earthserver.eu): reference implementation of WCPS, based on Rasdaman. Includes a number of showcase "lighthouse" applications at http://earthserver.bgs.ac.uk/
* [ncWMS](http://www.resc.rdg.ac.uk/trac/ncWMS/): WMS server that can read data from netCDF/CF (Climate and Forcasting conventions) files, with very little configuration required.
* [THREDDS](http://www.unidata.ucar.edu/software/thredds/current/tds/TDS.html): swiss-army knife server for data. Distributed as WAR. Supports OPeNDAP, WMS, WCS, HTTP. Even includes ncWMS. See http://data.ncdc.noaa.gov/thredds/catalog.html for an installation at NOAA.
* [MapServer](http://mapserver.org): swiss-army knife webserver for data, written in C. Supports WMS, WFS, WMC, WCS, and others. usually ran on Apache or IIS.
* [CEDA WPS Server](http://ceda-wps2.badc.rl.ac.uk/ui/home). Allows server-side processing on data sets using CDO tools. http://meetingorganizer.copernicus.org/EGU2014/EGU2014-4565.pdf
* [ZOO Project](http://www.zoo-project.org/) Framework for creating and chaining WPS services.

### Open Source Geospatial Foundation

The Open Source Geospatial Foundation (OSGeo, http://www.osgeo.org), supports the "collaborative development of open source geospatial software, and promote its widespread use.

- Lots of interesting hosted/supported projects available on the website: http://www.osgeo.org
- Bootable live cd/dvd/usb stick/virtual machine with a lot of geo software pre-installed: http://live.osgeo.org
- Screenshots and short intro of _a_lot_ of geo software (all included in the live dvd) http://live.osgeo.org/en/presentation/index.html


### Data processing

* [GDAL](http://www.gdal.org/) Processing (transformation, format conversion) of vector and raster data. Supports most formats, including proprietary ESRI formats when ESRI libraries are installed. Java bindings exist. License: X/MIT

* [Proj.4](http://trac.osgeo.org/proj/) Cartographic projection library (lat,lon) -> (a lot). Implements all projections you will ever use or need. Don't try to do this yourself. The library is used in most open source GIS software. Licence: MIT

* [JHMaps](http://www.jhlabs.com/java/maps/proj/) Compatible alternative for PROJ.4. Pure java project. License: Apachev2

* [PostGIS / PostgreSQL](http://postgis.net/) Geospatial extension to PostgreSQL. Implements geospatial queries (intersections, unions, etc.) on vector and raster data. Raster functions require at least version 2.0. Licence is GPLv2.

* [Fiona](https://pypi.python.org/pypi/Fiona) and [Shapely](https://pypi.python.org/pypi/Shapely) Alternative to the vector part of PostGIS. Fiona provides clean python bindings to GDAL, Shapely implements GIS operations (intersections, unions, etc.). Both are under a BSD license.

* [JTS](http://www.vividsolutions.com/jts/jtshome.htm) Java Topology Suite. Original java implementation of many GIS operators. License LGPL. (v3?). Is reimplemented in C++ as [GEOS](http://trac.osgeo.org/geos/). License LGPLv2.1

### Finding more information about GIS
* [GIS stack exchange](http://gis.stackexchange.com)
