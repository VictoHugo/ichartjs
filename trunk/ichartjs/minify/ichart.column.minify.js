iChart.Column=iChart.extend(iChart.Chart,{configure:function(){iChart.Column.superclass.configure.call(this);this.type="column";this.set({coordinate:{},column_width:void 0,column_space:void 0,text_space:6,scaleAlign:"left",sub_option:{},label:{}});this.registerEvent()},doAnimation:function(a,b,c){var e;c.labels.each(function(a){a.draw()});c.rectangles.each(function(d){e=Math.ceil(c.animationArithmetic(a,0,d.height,b));d.push(c.Y,d.y+(d.height-e));d.push(c.H,e);d.drawRectangle()})},getCoordinate:function(){return this.coo},doLabel:function(a,b,c,e,d){a.labels.push(new iChart.Text(iChart.apply(a.get("label"),{id:b,text:c,originx:e,originy:d}),a))},doParse:function(a,b,c,e){a.doActing(a,b,e,c)},engine:function(a){var b=a.get("column_width"),c=a.get("column_space"),e=a.coo.getScale(a.get("scaleAlign")),d=a.coo.get(a.H),f=b/2,h=b*(a.get("group_fator")||0),i="complex"!=a.dataType?b+c:a.data.length*b+c+(a.is3D()?(a.data.length-1)*h:0),g=a.coo.get(a.Y)+d,j=g-e.basic*d-(a.is3D()?a.get("zHeight")*(a.get("bottom_scale")-1)/2*a.get("yAngle_"):0),k=c+a.coo.get("x_start"),g=g+a.get("text_space")+a.coo.get("axis.width")[2];a.doEngine(a,b,c,e,d,f,h,i,k,j,g)},doConfig:function(){iChart.Column.superclass.doConfig.call(this);var a=this._();a.sub=a.is3D()?"Rectangle3D":"Rectangle2D";a.rectangles=[];a.labels=[];a.components.push(a.labels);a.components.push(a.rectangles);a.coo=iChart.Coordinate.coordinate_.call(a,function(){var b=a.data.length,c=a.get("coordinate.valid_width"),e,d,f;"complex"==a.dataType?(f=a.get("labels").length,b=f*b+(a.is3D()?(b-1)*f*a.get("group_fator"):0),e=Math.floor(c/(f+1+b)),d=a.pushIf("column_width",e),f+=1):("stacked"==a.dataType&&(b=a.get("labels").length),e=Math.floor(2*c/(3*b+1)),d=a.pushIf("column_width",e),f=b+1);d*b>c&&(d=a.push("column_width",e));a.push("column_space",(c-d*b)/f);a.is3D()&&(a.push("zHeight",a.get("column_width")*a.get("zScale")),a.push("sub_option.zHeight",a.get("zHeight")),a.push("sub_option.xAngle_",a.get("xAngle_")),a.push("sub_option.yAngle_",a.get("yAngle_")))});a.rectangles.zIndex=a.get("z_index");a.labels.zIndex=a.get("z_index")+1;a.push("sub_option.width",a.get("column_width"))}});