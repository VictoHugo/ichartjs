/**
 * @overview this component will draw a cluster bar2d chart.
 * @component#@chart#iChart.BarMulti2D
 * @extend#iChart.Bar
 */
iChart.BarMulti2D = iChart.extend(iChart.Bar, {
	/**
	 * initialize the context for the BarMulti2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		iChart.BarMulti2D.superclass.configure.call(this);

		this.type = 'barmulti2d';
		this.dataType = 'complex';

		this.set({
			/**
			 * @cfg {Array} the array of labels close to the axis
			 */
			labels : []
		});
	},
	doConfig : function() {
		iChart.BarMulti2D.superclass.doConfig.call(this);

		var _ = this._(), L = _.data.length, KL = _.get('labels').length, W = _.coo.get(_.W), H = _.coo.get(_.H), b = 'barheight', s = 'barspace', total = KL * L,
		/**
		 * bar's height
		 */
		bh = _.pushIf(b, H / (KL + 1 + total));
		if (bh * L > H) {
			bh = _.push(b, H / (KL + 1 + total));
		}
		/**
		 * the space of two bar
		 */
		_.push(s, (H - bh * total) / (KL + 1));
		/**
		 * get the max/min scale of this coordinate for calculated the height
		 */
		var S = _.coo.getScale(_.get('scaleAlign')), gw = L * bh + _.get(s), h2 = _.get(b) / 2,w,
		I = _.coo.get(_.X) + S.basic*W,x = _.coo.get(_.Y)-_.get('text_space')-_.coo.get('axis.width')[3],y = _.coo.get(_.Y)+ _.get(s);
		
		_.push('sub_option.height', bh);
		
		_.columns.each(function(column, i) {
			column.item.each(function(d, j) {
				w = (d.value - S.start) * W / S.distance;
				_.doParse(_, d, j, {
					id : i + '-' + j,
					originy : y + j * bh + i * gw,
					width : Math.abs(w),
					originx: I+(w>0?1:-Math.abs(w))
				});
				_.rectangles.push(new iChart.Rectangle2D(_.get('sub_option'), _));
			}, _);
			_.doLabel(i, column.name, x, y - _.get(s) * 0.5 + (i + 0.5) * gw);
		}, _);
	}

});
/**
 * @end
 */
