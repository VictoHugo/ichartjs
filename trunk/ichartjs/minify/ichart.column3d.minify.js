iChart.Column3D=iChart.extend(iChart.Column,{configure:function(){iChart.Column3D.superclass.configure.call(this);this.type="column3d";this.dimension=iChart._3D;this.set({xAngle:60,yAngle:20,zScale:1,bottom_scale:1.4})},doConfig:function(){iChart.Column3D.superclass.doConfig.call(this);this.push("rectangle.xAngle_",this.get("xAngle_"));this.push("rectangle.yAngle_",this.get("yAngle_"));var e=this.coo.getScale(this.get("scaleAlign")),g=this.get("zHeight")*(this.get("bottom_scale")-1)/2*this.get("yAngle_"),h=this.get("hiswidth")/2,f=this.get("hiswidth")+this.get("hispace"),c=this.coo.get("height"),d;this.data.each(function(a,b){d=(a.value-e.start)*c/e.distance;this.doParse(a,b,b,this.x+this.get("hispace")+b*f,this.y+(c-d)-g,d);a.reference=new iChart.Rectangle3D(this.get("rectangle"),this);this.rectangles.push(a.reference);this.labels.push(new iChart.Text({id:b,text:a.name,originx:this.x+this.get("hispace")+f*b+h,originy:this.y+c+this.get("text_space")},this))},this);this.pushComponent(this.labels);this.pushComponent(this.rectangles)}});