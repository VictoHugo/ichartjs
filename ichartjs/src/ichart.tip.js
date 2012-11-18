 	/**
	 * @overview the tip component.
	 * @component#iChart.Tip
	 * @extend#iChart.Element
	 */
	iChart.Tip = iChart.extend(iChart.Html,{
		configure:function(){
			
			/**
			 * invoked the super class's configuration
			 */
			iChart.Tip.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the legend's type
			 */
			this.type = 'tip';
			
			this.set({
				/**
				 * @cfg {String} Specifies the text want to disply.(default to '')
				 */
				 text:'',
				 /**
					 * @cfg {String} Specifies the tip's type.(default to 'follow') Available value are:
					 * @Option follow
					 * @Option fixed
					 */
				 showType:'follow',
				 /**
					 * @cfg {Function} Specifies Function to calculate the position.(default to null)
					 */
				 invokeOffset:null,
				 /**
					 * @cfg {Number} Specifies the duration when fadeIn/fadeOut in millisecond.(default to 300)
					 */
				 fade_duration:300,
				 /**
					 * @cfg {Number} Specifies the duration when move in millisecond.(default to 100)
					 */
				 move_duration:100,
				 /**
				  * ease
				  * linear
				  * ease-in
				  * ease-out
				  * ease-in-out
				  */
				 timing_function:'ease-out',
				 /**
					 * @cfg {Boolean} if calculate the position every time (default to false)
					 */
				 invokeOffsetDynamic:false,
				 /**
					 * @cfg {String} Specifies the css of this Dom.
					 */
				 style:'textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;',
				 /**
					 * @cfg {Object} Override the default as enable = true,radius = 5
					 */
				 border:{
					enable:true,
					radius : 5
				 },
				 delay:200
			});
		},
		position:function(t,l){
			this.style.top =  (t<0?0:t)+"px";
			this.style.left = (l<0?0:l)+"px";
		},
		follow:function(e,m){
			var _ = this._();
			_.style.width = "";
			if(_.get('invokeOffsetDynamic')){
				if(m.hit){
					if(iChart.isString(m.text)||iChart.isNumber(m.text)){
						_.dom.innerHTML =  m.text;
					}
					var o = _.get('invokeOffset')(_.width(),_.height(),m);
					_.position(o.top,o.left);
				}
			}else{
				if(_.get('showType')!='follow'&&iChart.isFunction(_.get('invokeOffset'))){
					var o = _.get('invokeOffset')(_.width(),_.height(),m);
					_.position(o.top,o.left);
				}else{
					_.position((e.y-_.height()*1.1-2),e.x+2);
				}
			}
		},
		text:function(text){
			this.dom.innerHTML = text;
		},
		beforeshow:function(e,m){
			this.follow(e,m);
		},
		show:function(e,m){
			this.beforeshow(e,m);
			this.css('visibility','visible');
			if(this.get('animation')){
				this.css('opacity',1);
			}
		},
		hidden:function(e){
			if(this.get('animation')){
				this.css('opacity',0);
			}else{
				this.css('visibility','hidden');
			}
		},
		initialize:function(){
			iChart.Tip.superclass.initialize.call(this);
			
			var _ = this._();
			
			_.css('position','absolute');
			_.dom.innerHTML = _.get('text');
			_.style = _.dom.style;
			_.hidden();
			
			if(_.get('animation')){
				var m =  _.get('move_duration')/1000+'s '+_.get('timing_function')+' 0s';
				_.transition('opacity '+_.get('fade_duration')/1000+'s '+_.get('timing_function')+' 0s');
				_.transition('top '+m);
				_.transition('left '+m);
				_.onTransitionEnd(function(e){
					if(_.css('opacity')==0){
						_.css('visibility','hidden');
					}
				},false);
			}
			
			_.wrap.appendChild(_.dom);
			
			_.T.on('mouseover',function(c,e,m){
				_.show(e,m);	
			}).on('mouseout',function(c,e,m){
				_.hidden(e);
			});
			
			if(_.get('showType')=='follow'){
				_.T.on('mousemove',function(c,e,m){
					if(_.T.variable.event.mouseover){
						setTimeout(function(){
							if(_.T.variable.event.mouseover)
								_.follow(e,m);
						},_.get('delay'));
					}
				});
			}
		}
});
/**
 * @end
 */
