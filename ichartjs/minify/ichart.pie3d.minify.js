iChart.Pie3D=iChart.extend(iChart.Pie,{configure:function(){iChart.Pie3D.superclass.configure.apply(this,arguments);this.type="pie3d";this.dimension=iChart._3D;this.set({zRotate:45,yHeight:30});this.registerEvent("beforeDrawRow","drawRow")},doSector:function(a,b){this.doParse(a,b);a.reference=new iChart.Sector3D(this.get("sector"),this);this.sectors.push(a.reference)},doConfig:function(){iChart.Pie3D.superclass.doConfig.call(this);this.push("zRotate",iChart.between(0,90,90-this.get("zRotate")));this.push("sector.semi_major_axis",this.r);this.push("sector.semi_minor_axis",this.r*this.get("zRotate")/90);this.push("sector.cylinder_height",this.get("yHeight")*Math.cos(iChart.angle2Radian(this.get("zRotate"))));this.push("sector.semi_major_axis",this.r);this.data.each(function(a,b){this.doSector(a,b)},this);this.pushComponent(this.sectors)}});