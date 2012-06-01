iChart.Interface=function(){var k=function(a,d){var f=0,b=0,c,e=0,a=[].concat(a);a.each(function(a,d){iChart.merge(a,this.fireEvent(this,"parseData",[this,a,d]));a.color=a.color||iChart.get(d);b=a.value;if(iChart.isNumber(b))b=iChart.parseFloat(b,this.type+":data["+d+"]"),a.value=b,this.total+=b,f=b>f?b:f,c||(c=b),c=b<c?b:c;else if(iChart.isArray(b)){var i=0;e=b.length>e?b.length:e;for(var h=0;h<b.length;h++)i+=b[h],c||(c=b),f=b[h]>f?b[h]:f,c=b[h]<c?b[h]:c;a.total=i}},this);iChart.isNumber(d)?Array.prototype.splice.apply(this.data,[d,0].concat(a)):this.data=this.data.concat(a);this.get("minValue")&&(c=this.get("minValue")<c?this.get("minValue"):c);this.get("maxValue")&&(f=this.get("maxValue")<f?this.get("maxValue"):f);iChart.isArray(this.get("labels"))&&(e=this.get("labels").length>e?this.get("labels").length:e);this.push("maxItemSize",e);this.push("minValue",c);this.push("maxValue",f);this.push("total",this.total);return a},l=function(a,d){this.columnKeys=this.get("columnKeys");var f=0,b=0,c,e,j=this.columnKeys.length;this.data.each(function(a,b){iChart.Assert.equal(a.value.length,j,this.type+":data length and columnKeys not corresponding.");iChart.merge(a,this.fireEvent(this,"parseData",[this,a,b,this.columnKeys]));iChart.Assert.equal(a.value.length,j,this.type+":data length and columnKeys not corresponding.")},this);for(var g=0;g<j;g++){for(var i=[],d=0;d<this.data.length;d++)e=this.data[d],c=e.value[g],e.value[g]=iChart.parseFloat(c,this.type+":data["+d+","+g+"]"),e.color||(e.color=iChart.get(d)),this.total+=c,f=c>f?c:f,b=c<b?c:b,i.push({name:e.name,value:e.value[g],color:e.color});this.columns.push({name:this.columnKeys[g],item:i})}this.push("minValue",b);this.push("maxValue",f);this.push("total",this.total)};return{parser:function(a,d){if("simple"==this.dataType)return k.call(this,a,d);"complex"==this.dataType&&l.call(this,a,d)},_3D:function(){if(this.is3D()){var a=iChart.vectorP2P(this.get("xAngle"),this.get("yAngle"));this.push("xAngle_",a.x);this.push("yAngle_",a.y)}},_2D:"2d",coordinate2d:function(){return new iChart.Coordinate2D(iChart.apply({kedu:{position:this.get("keduAlign"),max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate3d:function(){return new iChart.Coordinate3D(iChart.apply({kedu:{position:this.get("keduAlign"),scaleAlign:this.get("keduAlign"),max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate:function(){var a=this.pushIf("coordinate.width",0.8*this.get("client_width")),d=this.pushIf("coordinate.height",0.8*this.get("client_height"));"left"==this.get("align")?this.push("originx",this.get("l_originx")):"right"==this.get("align")?this.push("originx",this.get("r_originx")-a):this.push("originx",this.get("centerx")-a/2);this.push("originx",this.get("originx")+this.get("offsetx"));this.push("originy",this.get("centery")-d/2+this.get("offsety"));(!this.get("coordinate.valid_width")||this.get("coordinate.valid_width")>a)&&this.push("coordinate.valid_width",a);(!this.get("coordinate.valid_height")||this.get("coordinate.valid_height")>d)&&this.push("coordinate.valid_height",d);this.x=this.get("originx");this.y=this.get("originy");this.push("coordinate.originx",this.x);this.push("coordinate.originy",this.y)}}}();