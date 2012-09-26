iChart.Pie=iChart.extend(iChart.Chart,{configure:function(){iChart.Pie.superclass.configure.call(this);this.type="pie";this.dataType="simple";this.set({radius:0,offsetAngle:0,bound_event:"click",counterclockwise:!1,intellectLayout:!0,pop_animate:!1,mutex:!1,increment:void 0,label:{enable:!0},sector:{}});this.registerEvent("bound","rebound","parseLabelText");this.sectors=[]},toggle:function(a){this.data[a||0].reference.toggle()},bound:function(a){this.data[a||0].reference.bound()},rebound:function(a){this.data[a||0].reference.rebound()},getSectors:function(){return this.sectors},doAnimation:function(a,d){var b,c=0,e=this.oA;this.data.each(function(f){b=f.reference;c=this.animationArithmetic(a,0,b.get("totalAngle"),d);b.push("startAngle",e);b.push("endAngle",e+c);e+=c;this.is3D()||b.drawSector()},this);this.is3D()&&this.proxy.drawSector()},localizer:function(a){this.sectors.each(function(d){var d=d.label,b=d.labelx,c=d.labely;if(a.labely<=c&&c-a.labely<a.get("height")||a.labely>c&&a.labely-c<d.get("height"))if(a.labelx<b&&b-a.labelx<a.get("width")||a.labelx>b&&a.labelx-b<d.get("width"))b=a.get("quadrantd"),2==b||3==b?a.push("labely",a.get("labely")-a.get("height")+c-a.labely-2):a.push("labely",a.get("labely")+d.get("height")-a.labely+c+2),a.push("line_potins",a.get("line_potins").concat(a.get("labelx"),a.get("labely"))),a.localizer()},this)},doParse:function(a,d){var b=this,c=a.name+(b.get("showpercent")?" "+iChart.toPercent(a.value/b.total,b.get("decimalsnum")):a.value);b.get("label.enable")&&b.push("sector.label.text",b.fireString(b,"parseLabelText",[a,d],c));b.get("tip.enable")&&b.push("sector.tip.text",b.fireString(b,"parseTipText",[a,d],c));b.push("sector.id",d);b.push("sector.value",a.value);b.push("sector.name",a.name);b.push("sector.listeners.changed",function(a,c){b.fireEvent(b,c?"bound":"rebound",[b,a.get("name")])});b.push("sector.startAngle",a.startAngle);b.push("sector.middleAngle",a.middleAngle);b.push("sector.endAngle",a.endAngle);b.push("sector.background_color",a.color);a.reference=this.doSector(a);this.sectors.push(a.reference);this.get("label.enable")&&this.get("intellectLayout")&&this.localizer(a.reference.label)},doConfig:function(){iChart.Pie.superclass.doConfig.call(this);iChart.Assert.gtZero(this.total,"this.total");var a=this._(),d=a.get("radius"),b=a.get("label.enable")?0.35:0.44;a.sectors.zIndex=a.get("z_index");a.oA=iChart.angle2Radian(a.get("offsetAngle"));a.is3D()&&(b+=0.06);var b=a.get("minDistance")*b,c=a.oA,e=c,f=a.data.length;a.data.each(function(b,d){c+=2*b.value/a.total*Math.PI;d==f-1&&(c=2*Math.PI+a.oA);b.startAngle=e;b.endAngle=c;b.totalAngle=c-e;b.middleAngle=(e+c)/2;e=c},a);if(0>=d||d>b)d=a.push("radius",Math.floor(b));a.r=d;"left"==a.get("align")?a.push("originx",d+a.get("l_originx")+a.get("offsetx")):"right"==a.get("align")?a.push("originx",a.get("r_originx")-d+a.get("offsetx")):a.push("originx",a.get("centerx")+a.get("offsetx"));a.push("originy",a.get("centery")+a.get("offsety"));iChart.apply(a.get("sector"),iChart.clone(a.get("communal_option").concat("originx,originy,bound_event,customize_layout,counterclockwise,mutex,increment,label".split(",")),a.options))}});