NetCDF4 (Network Common Data Form) is a file format (based on HDF5) used to store mostly geographical data such as climate and forcasting data, hydrological model output, etc. See: http://www.unidata.ucar.edu/software/netcdf/

### NetCDF4 in Python

There is a package available in Python to read and write netcdf4 files:

https://code.google.com/p/netcdf4-python/

To install in Ubuntu (it is a non standard package), there is a ppa available here:

https://launchpad.net/~adrian-m-benson/+archive/ppa

### Practical info

NetCDF files often follow (parts of) the **NetCDF Climate and Forecast (CF) Metadata Convention**. The latest relase of these conventions can be found here:

http://cf-pcmdi.llnl.gov/

NetCDF is a self-describing dataformat, it includes metadata describing all variables and their properties. To show all the metadata from a file use _ncdump -h file.nc_. The reverse, to quickly create a netcdf file from a metadata description, can be done using _ncgen_.

A set of commandline tools to deal with common operations (slicing, concatenating, selecting variables, simple statistics, adding or adjusting metadata) are in the **netcdf operator** package:

http://nco.sourceforge.net/



