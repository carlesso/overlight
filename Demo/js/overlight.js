/*
---
description: Overlight, a simple lightbox implementation

license: GPL v3

authors:
  - Enrico Carlesso (http://www.ecarlesso.org)

requires:
  - core/1.2.4: '*'

provides:
 - Overlight

...
*/

$extend(Element.Styles, {'MozBorderRadius': '@px @px @px @px',
	    'MozBoxShadow': '@px @px @px rgb(@, @, @)'});


var Overlight = new Class({
	setOptions: function(options) {
	    this.options = Object.extend({
		    delay: 4,
		    bg_color: '#000',
		    onComplete: Class.empty,
		    'html': '<h1>TEST</h1>',
		    container: document.body,
		    opacity: 0.65,
		    duration: 500,
		    width: 500,
		    height: 'auto',
		    clickHides: true
		}, options || {});
	},
	
	initialize: function(options) {
	    this.setOptions(options);
	    this.ov_bg = new Element('div', {
		    'class': 'overlay_bg',
		    'styles': {
			'position': 'absolute',
			'background-color': this.options.bg_color,
			'top': 0,
			'left': 0,
			'width': '100%',
			'opacity': 0,
			'height': this.options.container.getScrollSize().y,
			'z-index': 999
		    },
		    'events': {
			'click': function(e) {
			    e.stop();
			    if (this.options.clickHides)
				this.close();
			}.bind(this)
		    }
		});
		
	    this.ov_content = new Element('div', {
		    'styles': {
			'MozBorderRadius': 10,
			'MozBoxShadow': '10px 10px 10px rgb(255, 0 0)',
			'margin-top': '100px',
			'width': this.options.width,
			'height': this.options.height,
			'border': '10px solid #222',
			'background-color': 'white',
			'opacity': 0,
			'z-index': 1000,
			'position': 'fixed'
		    },
		    'events': {
			'click': function(e) {
			    e.stop();
			    if (this.options.clickHides)
				this.close();
			}.bind(this)
		    }
		});
	    this.options.container.grab(this.ov_content);
	    this.options.container.grab(this.ov_bg);
	    this.effect = new Fx.Tween(this.ov_bg, { 
		    duration: this.options.duration,
		    property: 'opacity'
		});
	    this.effect_content = new Fx.Tween(this.ov_content, { 
		    duration: this.options.duration,
		    property: 'opacity'
		});

	},
	
	close: function() {
	    console.log('finono');
	    this.effect.start(0);
	    this.effect_content.start(0);
	    this.effect.addEvent('complete', function() {
		    console.log('fine');
		});
	},
	
	show: function(content, duration) {
	    this.ov_content.set('html', content);
	    this.ov_content.setStyle('left', (this.options.container.getScrollSize().x - this.options.width) / 2 );
	    this.effect.start(this.options.opacity);
	    this.effect_content.start(1);
	    this.close.delay(duration, this);
	}
    });

