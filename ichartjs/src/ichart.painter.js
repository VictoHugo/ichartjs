/**
 * @overview The interface this class defined include draw and event,so the sub class has must capability to draw and aware of event. this class is a abstract class,so you should not try to initialize it.
 * @component#iChart.Painter
 * @extend#iChart.Element
 */
iChart.Painter = iChart.extend(iChart.Element, {

	configure : function() {
		/**
		 * indicate the element's type
		 */
		this.type = 'painter';

		this.dimension = iChart._2D;

		/**
		 * define abstract method
		 */
		iChart.DefineAbstract('commonDraw', this);
		iChart.DefineAbstract('initialize', this);

		this.set({
			/**
			 * @cfg {Number} Specifies the default linewidth of the canvas's context in this element.(defaults to 1)
			 */
			brushsize : 1,
			/**
			 * @cfg {String} Specifies the default strokeStyle of the canvas's context in this element.(defaults to 'gray')
			 */
			strokeStyle : 'gray',
			/**
			 * @cfg {Number} Specifies the padding for this element in pixel,the same rule as css padding.(defaults to 10)
			 */
			padding : 10,
			/**
			 * @cfg {String} Specifies the font's color for this element.(defaults to 'black')
			 */
			color : 'black',
			/**
			 * @cfg {Number} Specifies Horizontal offset(x-axis) in pixel.(default to 0)
			 */
			offsetx : 0,
			/**
			 * @cfg {Number}Specifies Vertical distance (y-axis) in pixel.(default to 0)
			 */
			offsety : 0,
			/**
			 * @cfg {String} Specifies the backgroundColor for this element.(defaults to 'FDFDFD')
			 */
			background_color : '#FEFEFE',
			/**
			 * @cfg {float} Specifies the factor make color dark or light for this element,relative to background-color,the bigger the value you set,the larger the color changed.scope{0.01 - 0.5}.(defaults to '0.15')
			 */
			color_factor : 0.15,
			/**
			 * @cfg {String} ('2d','3d')
			 */
			style : '',
			/**
			 * @cfg {Object} Here,specify as true by default
			 */
			border : {
				enable : true
			},
			/**
			 * @cfg {Boolean} True to apply the gradient.(default to false)
			 */
			gradient : false,
			/**
			 * @cfg {String} Specifies the gradient mode of background.(defaults to 'LinearGradientUpDown')
			 * @Option 'LinearGradientUpDown'
			 * @Option 'LinearGradientDownUp'
			 * @Option 'LinearGradientLeftRight'
			 * @Option 'LinearGradientRightLeft'
			 * @Option 'RadialGradientOutIn'
			 * @Option 'RadialGradientInOut'
			 */
			gradient_mode:'LinearGradientUpDown',
			/**
			 * @cfg {Number}Specifies the z-index.(default to 0)
			 */
			z_index : 0,
			/**
			 * @cfg {Object} A config object containing one or more event handlers.(default to null)
			 */
			listeners : null,
			/**
			 * @inner {Number} inner use
			 */
			originx : 0,
			/**
			 * @inner {Number} inner use
			 */
			originy : 0
		});

		this.variable.event = {
			mouseover : false
		};
		
		/**
		 * register the common event
		 */
		this.registerEvent(
		/**
		 * @event Fires after the element initializing is finished this is for test
		 * @paramter iChart.Painter#this
		 */
		'initialize',
		/**
		 * @event Fires when this element is clicked
		 * @paramter iChart.Painter#this
		 * @paramter EventObject#e The click event object
		 * @paramter Object#param The additional parameter
		 */
		'click',
		'dblclick',
		/**
		 * @event Fires when the mouse move on the element
		 * @paramter iChart.Painter#this
		 * @paramter EventObject#e The mousemove event object
		 */
		'mousemove',
		/**
		 * @event Fires when the mouse down on the element
		 * @paramter iChart.Painter#this
		 * @paramter EventObject#e The mousedown event object
		 */
		'mousedown',
		/**
		 * @event Fires when the mouse hovers over the element
		 * @paramter iChart.Painter#this
		 * @paramter EventObject#e The mouseover event object
		 */
		'mouseover',
		/**
		 * @event Fires when the mouse exits the element
		 * @paramter iChart.Painter#this
		 * @paramter EventObject#e The mouseout event object
		 */
		'mouseout',
		/**
		 * @event Fires before the element drawing.Return false from an event handler to stop the draw.
		 * @paramter iChart.Painter#this
		 */
		'beforedraw',
		/**
		 * @event Fires after the element drawing when calling the draw method.
		 * @paramter iChart.Painter#this
		 */
		'draw');
		
		
	},
	afterConfiguration : function() {
	},
	registerEvent : function() {
		for ( var i = 0; i < arguments.length; i++) {
			this.events[arguments[i]] = [];
		}
	},
	init : function() {
		if (!this.initialization) {
			/**
			 * register event
			 */
			if (iChart.isObject(this.get('listeners'))) {
				for ( var e in this.get('listeners')) {
					this.on(e, this.get('listeners')[e]);
				}
			}

			this.initialize();
			/**
			 * fire the initialize event,this probable use to unit test
			 */
			this.fireEvent(this, 'initialize', [this]);
		}
	},
	is3D : function() {
		return this.dimension == iChart._3D;
	},
	applyGradient:function(x,y,w,h){
		if(this.get('gradient')){
			this.push('f_color', this.T.gradient(x||this.x||0,y||this.y||0,w||this.get('width'),h||this.get('height'),[this.get('dark_color'), this.get('light_color')],this.get('gradient_mode')));
			this.push('light_color', this.T.gradient(x||this.x||0,y||this.y||0,w||this.get('width'),h||this.get('height'),[this.get('background_color'), this.get('light_color')],this.get('gradient_mode')));
			this.push('f_color_',this.get('f_color'));
		}
	},
	/**
	 * @method The commnd fire to draw the chart use configuration,this is a abstract method.Currently known,both <link>iChart.Chart</link> and <link>iChart.Component</link> implement this method.
	 * @return void
	 */
	draw : function(o) {
		this.init();
		this.draw = function(o) {
			/**
			 * fire the beforedraw event
			 */
			if (!this.fireEvent(this, 'beforedraw', [this])) {
				return this;
			}
			/**
			 * execute the commonDraw() that the subClass implement
			 */
			this.commonDraw(o);

			/**
			 * fire the draw event
			 */
			this.fireEvent(this, 'draw', [this]);
		}
		this.draw(o);
	},
	fireString : function(socpe, name, args, s) {
		var t = this.fireEvent(socpe, name, args);
		return iChart.isString(t) ? t : s;
	},
	fireEvent : function(socpe, name, args) {
		var L = this.events[name].length;
		if (L == 1)
			return this.events[name][0].apply(socpe, args);
		var r = true;
		for ( var i = 0; i < L; i++) {
			r = this.events[name][i].apply(socpe, args);
		}
		return r;
	},
	on : function(n, fn) {
		if(iChart.isString(n)){
			if (!this.events[n])
				console.log(n);
			this.events[n].push(fn);
		}else if(iChart.isArray(n)){
			n.each(function(c){this.on(c, fn)},this);
		}
		return this;
	},
	doConfig : function() {
		var _ = this._(), p = iChart.parsePadding(_.get('padding')), b = _.get('border.enable'), b = b ? iChart.parsePadding(_.get('border.width')) : [0, 0, 0, 0], bg = _.get('background_color'), f = _.get('color_factor');
		
		_.set({
			border_top:b[0],
			border_right:b[1],
			border_bottom:b[2],
			border_left:b[3],
			hborder:b[1] + b[3],
			vborder:b[0] + b[2],
			padding_top:p[0] + b[0],
			padding_right:p[1] + b[1],
			padding_bottom:p[2] + b[2],
			padding_left:p[3] + b[3],
			hpadding:p[1] + p[3] + b[1] + b[3],
			vpadding:p[0] + p[2] + b[0] + b[2]
		});	
		
		
		if (_.get('shadow')) {
			_.push('shadow', {
				color : _.get('shadow_color'),
				blur : _.get('shadow_blur'),
				offsetx : _.get('shadow_offsetx'),
				offsety : _.get('shadow_offsety')
			});
		}
		
		_.push('fontStyle', iChart.getFont(_.get('fontweight'), _.get('fontsize'), _.get('font')));
		
		_.push('f_color', bg);
		_.push('f_color_', bg);
		_.push("light_color", iChart.light(bg, f));
		_.push("dark_color", iChart.dark(bg, f*0.8));
		_.push("light_color2", iChart.light(bg, f * 2));
		
		_.id = _.get('id');
		
		if(_.is3D()&&!_.get('xAngle_')){
			var P = iChart.vectorP2P(_.get('xAngle'),_.get('yAngle'));
			_.push('xAngle_',P.x);
			_.push('yAngle_',P.y);
		}
	}
});// @end
