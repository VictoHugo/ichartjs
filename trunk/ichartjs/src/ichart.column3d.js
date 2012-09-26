	/**
	 * @overview this component use for abc
	 * @component#@chart#iChart.Column3D
	 * @extend#iChart.Column
	 */
	iChart.Column3D = iChart.extend(iChart.Column,{
		/**
		 * initialize the context for the Column3D 
		 */
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Column3D.superclass.configure.call(this);
			
			this.type = 'column3d';
			this.dimension = iChart._3D;
			
			this.set({
				/**
				 * @cfg {Number(0~90)} Three-dimensional rotation X in degree(angle).(default to 60)
				 */
				xAngle:60,
				/**
				 * @cfg {Number(0~90)} Three-dimensional rotation Y in degree(angle).(default to 20)
				 */
				yAngle:20,
				/**
				 * @cfg {Number} Three-dimensional z-axis deep factor.frame of reference is width.(default to 1)
				 */
				zScale:1,
				/**
				 * @cfg {Number(1~)} Three-dimensional z-axis deep factor of pedestal.frame of reference is width.(default to 1.4)
				 */
				bottom_scale:1.4
			});
		},
		doConfig:function(){
			iChart.Column3D.superclass.doConfig.call(this);
			
			//get the max/min scale of this coordinate for calculated the height
			var _ = this._(),S = _.coo.getScale(_.get('scaleAlign')),
				zh = _.get('zHeight')*(_.get('bottom_scale')-1)/2*_.get('yAngle_'),
				h2 = _.get('colwidth')/2,
				gw = _.get('colwidth')+_.get('hispace'),
				H = _.coo.get('height'),h;
			
			/**
			 * quick config to all rectangle
			 */
			_.push('rectangle.xAngle_',_.get('xAngle_'));
			_.push('rectangle.yAngle_',_.get('yAngle_'));
			
			_.data.each(function(d, i) {
				h = (d.value - S.start) * H / S.distance;
				
				_.doParse(_,d, i, i, _.x + _.get('hispace') + i * gw, _.y +(H-h)-zh, h);
				d.reference = new iChart.Rectangle3D(_.get('rectangle'), _);
				_.rectangles.push(d.reference);
				
				_.labels.push(new iChart.Text({
					id : i,
					text : d.name,
					originx : _.x + _.get('hispace') + gw * i + h2,
					originy : _.y + H + _.get('text_space')
				}, _));
				
			}, _);
			
			_.components.push(_.labels);
			_.components.push(_.rectangles);
		}
		
});//@end