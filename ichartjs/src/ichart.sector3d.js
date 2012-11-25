	/**
	 * @overview this component use for abc
	 * @component#iChart.Sector3D
	 * @extend#iChart.Sector
	 */
	iChart.Sector3D = iChart.extend(iChart.Sector,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Sector3D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'sector3d';
			this.dimension = iChart._3D;
			
			this.set({
				/**
				 * @cfg {Number}  Specifies major semiaxis of ellipse.Normally,this will given by chart.(default to 0)
				 */
				semi_major_axis:0,
				/**
				 * @cfg {Number} Specifies minor semiaxis of ellipse.Normally,this will given by chart.(default to 0)
				 */
				semi_minor_axis:0,
				/**
				 * @cfg {Float (0~)} Specifies the sector's height(thickness).Normally,this will given by chart.(default to 0)
				 */
				cylinder_height:0
			});
			
			
		},
		drawSector:function(){
			this.T.sector3D(
					this.x,
					this.y,
					this.a,
					this.b,
					this.get('startAngle'),
					this.get('endAngle'),
					this.h,
					this.get('f_color'),
					this.get('border.enable'),
					this.get('border.width'),
					this.get('border.color'),
					this.get('shadow'),
					this.get('shadow_color'),
					this.get('shadow_blur'),
					this.get('shadow_offsetx'),
					this.get('shadow_offsety'),
					this.get('counterclockwise'));
		},
		isEventValid:function(e,_){
			if(!_.get('ignored')){
				if(_.isLabel()&&_.label.isEventValid(e,_.label).valid){
						return {valid:true};
				}
				if(!iChart.inEllipse(e.x - _.x,e.y-_.y,_.a,_.b)){
					return {valid:false};
				}
				if(iChart.angleInRange(_.sA,_.eA,iChart.atan2Radian(_.x,_.y,e.x,e.y))){
					return {valid:true};
				}
			}
			return {valid:false};
		},
		p2p:function(x,y,a,z){
			return {
				x:x+this.a*Math.cos(a)*z,
				y:y+this.b*Math.sin(a)*z
			};
		},
		tipInvoke:function(){
			var _ =  this,A =  _.get('middleAngle'),Q  = iChart.quadrantd(A);
			return function(w,h){
				var P = _.p2p(_.x,_.y,A,0.6);
				return {
					left:(Q>=2&&Q<=3)?(P.x - w):P.x,
					top:Q>=3?(P.y - h):P.y
				}
			}
		},
		doConfig:function(){
			iChart.Sector3D.superclass.doConfig.call(this);
			var _ = this._(),ccw = _.get('counterclockwise'),mA = _.get('middleAngle');
			
			_.a = _.get('semi_major_axis');
			_.b = _.get('semi_minor_axis');
			_.h = _.get('cylinder_height');
			
			iChart.Assert.gt(_.a,0);
			iChart.Assert.gt(_.b,0);
			
			
			var toAngle = function(A){
				return Math.abs(iChart.atan2Radian(0,0,_.a*Math.cos(A),ccw?(-_.b*Math.sin(A)):(_.b*Math.sin(A))))*(A>0?1:-1);
			},
			L = _.pushIf('increment',iChart.lowTo(5,_.a/8));
			_.sA = toAngle.call(_,_.get('startAngle'));
			_.eA = toAngle.call(_,_.get('endAngle'));
			_.mA = toAngle.call(_,mA);
			//console.log(_.sA+','+_.eA+'=='+_.get('startAngle')+','+_.get('endAngle'));
			
			_.push('inc_x',L * Math.cos(2 * Math.PI -_.mA));
			_.push('inc_y',L * Math.sin(2 * Math.PI - _.mA));
			
			if(_.get('label')){
				if(_.get('mini_label')){
					var P3 = _.p2p(_.x,_.y,mA,0.5);
					_.doText(_,P3.x,P3.y);
				}else{
					var Q  = iChart.quadrantd(mA),
						P =  _.p2p(_.x,_.y,mA,L/_.a+1),
						C1 = _.p2p(_.x,_.y,mA,L*0.6/_.a+1),
						P2 = _.p2p(_.x,_.y,mA,1);
						_.doLabel(_,P2.x,P2.y,Q,[{x:P2.x,y:P2.y},{x:C1.x,y:C1.y},{x:P.x,y:P.y}],P.x,P.y,L*0.4);
					
				}
			}
		}
});
/**
 *@end
 */	