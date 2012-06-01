iChart.Interface=function(){return{_3D:function(){var b=iChart.vectorP2P(this.get("xAngle"),this.get("yAngle"));this.push("xAngle_",b.x);this.push("yAngle_",b.y)},_2D:"2d",coordinate2d:function(){return new iChart.Coordinate2D(iChart.apply({kedu:{position:this.get("keduAlign"),max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate3d:function(){return new iChart.Coordinate3D(iChart.apply({kedu:{position:this.get("keduAlign"),scaleAlign:this.get("keduAlign"),
max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate:function(){var b=this.pushIf("coordinate.width",0.8*this.get("client_width")),a=this.pushIf("coordinate.height",0.8*this.get("client_height"));"left"==this.get("align")?this.push("originx",this.get("l_originx")):"right"==this.get("align")?this.push("originx",this.get("r_originx")-b):this.push("originx",this.get("centerx")-b/2);this.push("originx",this.get("originx")+this.get("offsetx"));this.push("originy",
this.get("centery")-a/2+this.get("offsety"));(!this.get("coordinate.valid_width")||this.get("coordinate.valid_width")>b)&&this.push("coordinate.valid_width",b);(!this.get("coordinate.valid_height")||this.get("coordinate.valid_height")>a)&&this.push("coordinate.valid_height",a);this.x=this.get("originx");this.y=this.get("originy");this.push("coordinate.originx",this.x);this.push("coordinate.originy",this.y)},parser:function(){this.data=this.get("data");if("simple"==this.dataType){for(var b=0,a=0,e,
c=0,g,d=0;d<this.data.length;d++)if(g=this.data[d],iChart.merge(g,this.fireEvent(this,"parseData",[g,d])),g.color||(g.color=iChart.get(d)),a=g.value,iChart.isNumber(a))a=iChart.parseFloat(a,this.type+":data["+d+"]"),g.value=a,this.total+=a,b=a>b?a:b,e||(e=a),e=a<e?a:e;else if(iChart.isArray(a)){for(var h=0,c=a.length>c?a.length:c,f=0;f<a.length;f++)h+=a[f],e||(e=a),b=a[f]>b?a[f]:b,e=a[f]<e?a[f]:e;g.total=h}iChart.isArray(this.get("labels"))&&(c=this.get("labels").length>c?this.get("labels").length:
c);this.push("maxItemSize",c);this.push("minValue",e);this.push("maxValue",b);this.push("total",this.total)}else if("complex"==this.dataType){this.columnKeys=this.get("columnKeys");a=b=0;g=this.columnKeys.length;for(d=0;d<this.data.length;d++)c=this.data[d],iChart.Assert.equal(c.value.length,g,this.type+":data length and columnKeys not corresponding."),iChart.merge(c,this.fireEvent(this,"parseData",[c,this.columnKeys,d])),iChart.Assert.equal(c.value.length,g,this.type+":data length and columnKeys not corresponding.");
for(d=0;d<g;d++){h=[];for(f=0;f<this.data.length;f++)c=this.data[f],e=c.value[d],c.value[d]=iChart.parseFloat(e,this.type+":data["+f+","+d+"]"),c.color||(c.color=iChart.get(f)),this.total+=e,b=e>b?e:b,a=e<a?e:a,h.push({name:c.name,value:c.value[d],color:c.color});this.columns.push({name:this.columnKeys[d],item:h})}this.push("minValue",a);this.push("maxValue",b);this.push("total",this.total)}}}}();