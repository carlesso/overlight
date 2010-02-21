Overlay
=========

Overlight is a simple lightbox implementation useful to display content on users click and let them disappear by timeout and/or click

![Screenshot](http://davidwalsh.name/dw-content/overlayscreen.png)

How to Use
----------

Overlight should be initialized in the head of your page, providing the options you prefer. Then either associate events to show or call it 'by-hand'.

### Javascript
    over = new Overlight();

    $(element).addEvent('click', function() {
    	over.show('<h4>This is a TEST</h4><br /> And it will disappear in 5 seconds!', 5000);
	});

For further help read the documentation or visit [http://www.ecarlesso.org/js/overlight].
