	/**
	 * @overview this component use for abc
	 * @component#iChart.Rectangle3D
	 * @extend#iChart.Rectangle
	 */
	iChart.Rectangle3D = iChart.extend(iChart.Rectangle,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Rectangle3D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'rectangle3d';
			this.dimension = iChart._3D;
			
			this.set({
				/**
				 * @cfg {Number} Specifies Three-dimensional z-axis deep in pixels.Normally,this will given by chart.(default to undefined)
				 */
				zHeight:undefined,
				/**
				 * @cfg {Number} Three-dimensional rotation X in degree(angle).socpe{0-90}.Normally,this will given by chart.(default to 60)
				 */
				xAngle:60,
				/**
				 * @cfg {Number} Three-dimensional rotation Y in degree(angle).socpe{0-90}.Normally,this will given by chart.(default to 20)
				 */
				yAngle:20,
				xAngle_:undefined,
				yAngle_:undefined,
				/**
				 * @cfg {Number} Override the default as 2
				 */
				shadow_offsetx:2
			});
			
		},
		drawRectangle:function(){
			this.T.cube(
				this.get('originx'),
				this.get('originy'),
				this.get('xAngle_'),
				this.get('yAngle_'),
				this.get('width'),
				this.get('height'),
				this.get('zHeight'),
				this.get('f_color'),
				this.get('border.enable'),
				this.get('border.width'),
				this.get('light_color'),
				this.get('shadow')
			);
		},
		isEventValid:function(e){
			return {valid:e.x>this.x&&e.x<(this.x+this.get('width'))&&e.y<this.y+this.get('height')&&e.y>this.y};
		},
		tipInvoke:function(){
			var _ = this._();
			return function(w,h){
				return {
					left:_.topCenterX - w/2,
					top:_.topCenterY - h
				}
			}
		},
		doConfig:function(){
			iChart.Rectangle3D.superclass.doConfig.call(this);
			var _ = this._();
			_.pushIf("zHeight",_.get('width'));
			
			_.topCenterX=_.x+(_.get('width')+_.get('width')*_.get('xAngle_'))/2;
			_.topCenterY=_.y-_.get('width')*_.get('yAngle_')/2;
			
			if(_.get('valueAlign')=='top'){
				_.push('value_x',_.topCenterX);
				_.push('value_y',_.topCenterY);
			}
			
		}
});//@end