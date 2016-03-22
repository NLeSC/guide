# Making Videos

Some random thoughts on making (screencast) movies (by Niels Drost)

### Screencasts

In Linux, screencasts are best made with "recordmydesktop":

    sudo apt-get install recordmydesktop

These movies end up as ogv.

If you need very high resolution (4K Video) screen captures, use the Visualization Workstation (a.k.a Maarten's Desktop)

### Editing

Editing is best done with the (free) Windows Movie Maker. Part of the free "Windows Essentials" package.

Movie Maker is _very_ picky about the codec used. If the codec is not exactly right, you will get low quality and/or framedrops. I suggest to convert each and every video to 1080p mjpeg, with mencoder, then feed it to Movie maker.

For videos with an aspect ratio over 16:9 use:

    mencoder $1 -vf scale=-3:1080,expand=1920:1080 -ovc lavc -lavcopts vcodec=mjpeg -nosound  -o $2

For videos with an aspect ratio under 16:9 use:

    mencoder $1 -vf scale=1920:-3,expand=1920:1080 -ovc lavc -lavcopts vcodec=mjpeg -nosound  -o $2

For seperate jpeg frames use:

    mencoder "mf://*.jpg" -mf fps=7 -ovc lavc -lavcopts vcodec=mjpeg:vhq -nosound -o output.avi

If you feed mencoder non-jpg (e.g. png) frames or non 1080p frames your results may vary.

### Image Conversion

To convert frames to 1080p jpeg use ImageMagick (http://www.imagemagick.org).

Convert bunch of png's to jpg:

    for i in *.png ; do convert  $i -quality 100 $i.jpg ; done

Scale an image:

    convert  input.png -scale 1920x1080 output.png

Both in one step:

    convert  input.png -scale 1920x1080 -quality 100 output.jpg

Making a montage of 4 separate 1080p frames. Don't forget to scale down afterwards:

    montage top-left.png top-right.png bottom-left.png bottom-right.png -geometry 1920x1080+0+0 -background black montage.png
    
### Video Conversion

To convert a video to Windows Media Format (WMV) to be able to use it in a powerpoint presentation, one option would be to use Format Factory (http://www.pcfreetime.com/)