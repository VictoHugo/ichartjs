iChart.Pie2D=iChart.extend(iChart.Pie,{configure:function(){iChart.Pie2D.superclass.configure.call(this);this.type="pie2d"},doSector:function(){return new iChart.Sector2D(this.get("sector"),this)},doConfig:function(){iChart.Pie2D.superclass.doConfig.call(this);this.push("sector.radius",this.r);this.data.each(function(a,b){this.doParse(a,b)},this);this.pushComponent(this.sectors)}});