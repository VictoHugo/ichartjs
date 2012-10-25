	/**
	 * @overview this component use for abc
	 * @component#iChart.Sector2D
	 * @extend#iChart.Sector
	 */
	iChart.Sector2D = iChart.extend(iChart.Sector,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Sector2D.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'sector2d';
			
			this.set({
				/**
				 * @cfg {Float (0~)} Specifies the sector's radius.Normally,this will given by chart.(default to 0)
				 */
				radius:0
			});
			
		},
		drawSector:function(){
			this.T.sector(
					this.x,
					this.y,
					this.r,
					this.get('donutwidth'),
					this.get('startAngle'),
					this.get('endAngle'),
					this.get('f_color'),
					this.get('border.enable'),
					this.get('border.width'),
					this.get('border.color'),
					this.get('shadow'),
					this.get('counterclockwise'));
		},
		isEventValid:function(e,_){
			if(!_.get('ignored')){
				if(_.isLabel()&&_.label.isEventValid(e,_.label).valid){
					return {valid:true};
				}
				
				var r = iChart.distanceP2P(_.x,_.y,e.x,e.y),b=_.get('donutwidth');	
				if(_.r<r||(b&&(_.r-b)>r)){
					return {valid:false};
				}
				
				if(iChart.angleInRange(_.get('startAngle'),_.get('endAngle'),iChart.atan2Radian(_.x,_.y,e.x,e.y))){
					return {valid:true};
				}
			}
			return {valid:false};
		},
		tipInvoke:function(){
			var _ = this;
			return function(w,h){
				var P = iChart.p2Point(this.x,this.y,this.get('middleAngle'),this.r*0.8),Q  = iChart.quadrantd(this.get('middleAngle'));
				return {
					left:(Q>=2&&Q<=3)?(P.x - w):P.x,
					top:Q>=3?(P.y - h):P.y
				}
			}
		},
		doConfig:function(){
			iChart.Sector2D.superclass.doConfig.call(this);
			var _ = this._();
			_.r = _.get('radius');
			
			iChart.Assert.gt(_.r,0);
			
			if(_.get('donutwidth')>_.r){
				_.push('donutwidth',0);
			}
			
			_.applyGradient(_.x-_.r,_.y-_.r,2*_.r,2*_.r);
			
			_.pushIf('increment',iChart.lowTo(5,_.r/10));
			
			var A = _.get('middleAngle'),L = _.get('increment');
			_.push('inc_x',L * Math.cos(2 * Math.PI -A));
			_.push('inc_y',L * Math.sin(2 * Math.PI - A));
			
			if(_.get('label')){
				var P2 = iChart.p2Point(_.x,_.y,A,_.get('donutwidth')?_.r - _.get('donutwidth')/2:_.r/2);
				if(_.get('mini_label')){
					_.doText(_,P2.x,P2.y);
				}else{
					var Q  = iChart.quadrantd(A),
						P = iChart.p2Point(_.x,_.y,A,_.r + L);
					_.doLabel(_,P2.x,P2.y,Q,[{x:P2.x,y:P2.y},{x:P.x,y:P.y}],P.x,P.y);
				}
			}
		}
});
/**
 * @end
 */