Class: Overlight {#Overlay}
=================================

### Implements:

Options, Events


Overlight Method: constructor {#Overlight:constructor}
-----------------------------------------------------------


### Syntax:

	var over = new Overlight(options);

### Arguments:

1. options - (*)  The options for Overlight istance.

### Options:

* container - (*string* or *element*, defaults to document.body) - The id or the element itself which will be the container;
* delay - (*integer*, defaults to 4000) - The delay (in millisecond) after which the box will close itself;
* bgColor - (*string*, defaults to '#000') - The color of the overlay, which may or may not be semi-transparent;
* opacity - (*float*, defaults to 0.65) - The opacity of the overlay;
* duration - (*integer*, defaults to 500) - The open/close duration;
* width - (*integer*, defaults to 500) - The width of the box. Cannot be 'auto' because of the position: fixed;
* height - (*integer* or *string*, defaults to 'auto') - The heigt of the box, in css language;
* clickHides - (*boolean*, defaults to true) - If true, an anywhere-click will call the close() function.

