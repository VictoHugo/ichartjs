iChart.LineSegment=iChart.extend(iChart.Component,{configure:function(){iChart.LineSegment.superclass.configure.apply(this,arguments);this.type="linesegment";this.set({intersection:!0,label:!1,point_style:"round",point_hollow:!0,point_size:3,points:[],keep_with_coordinate:!1,shadow:!0,shadow_blur:1,shadow_offsetx:0,shadow_offsety:1,spacing:0,coordinate:null,event_range_x:0,limit_y:!1,tip_offset:2,event_range_y:0,area:!1,area_opacity:0.4,tip:{enable:!1,border:{width:2}}});this.tip=this.label=null},
drawLabel:function(){if(this.get("intersection")&&this.get("label"))for(var a=this.get("points"),c=0;c<a.length;c++)this.T.textStyle("center","bottom",iChart.getFont(this.get("fontweight"),this.get("fontsize"),this.get("font"))),this.T.fillText(a[c].value,this.x+a[c].x,this.y-a[c].y-3*this.get("point_size")/2,!1,this.get("background_color"),"lr",16)},drawLineSegment:function(){this.T.shadowOn(this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"));
var a=this.get("points");if(this.get("area")){for(var c=[this.x,this.y],b=0;b<a.length;b++)c.push(this.x+a[b].x),c.push(this.y-a[b].y);c.push(this.x+this.get("width"));c.push(this.y);b=this.get("light_color");this.get("gradient")&&(b=this.T.avgLinearGradient(this.x,this.y-this.get("height"),this.x,this.y,[this.get("light_color2"),b]));this.T.polygon(b,!1,1,"",!1,"",0,0,0,this.get("area_opacity"),c)}for(b=0;b<a.length-1;b++)this.T.line(this.x+a[b].x,this.y-a[b].y,this.x+a[b+1].x,this.y-a[b+1].y,this.get("brushsize"),
this.get("fill_color"),!1);if(this.get("intersection"))for(b=0;b<a.length;b++)this.get("point_hollow")?this.T.round(this.x+a[b].x,this.y-a[b].y,this.get("point_size"),"#FEFEFE",this.get("brushsize"),this.get("fill_color")):this.T.round(this.x+a[b].x,this.y-a[b].y,this.get("point_size"),this.get("fill_color"));this.get("shadow")&&this.T.shadowOff()},doDraw:function(){this.drawLineSegment();this.drawLabel()},isEventValid:function(){return{valid:!1}},tipInvoke:function(){var a=this.x,c=this.get("tip_offset"),
b=this.get("point_size")+c,g=this;return function(e,f,d){var h=d.left,i=d.top,h=3>g.tipPosition&&0<d.left-e-a-c||2<g.tipPosition&&0>d.left-e-a-c?h-(e+c):h+c,i=0==g.tipPosition%2?d.top+b:d.top-f-b;return{left:h,top:i}}},doConfig:function(){iChart.LineSegment.superclass.doConfig.call(this);iChart.Assert.gtZero(this.get("spacing"),"spacing");for(var a=this,c=this.get("spacing"),b=a.get("event_range_y"),g=a.get("event_range_x"),e=a.get("tipInvokeHeap"),f=a.get("points"),d=0;d<f.length;d++)f[d].width=
f[d].x,f[d].height=f[d].y;g=0==g?a.push("event_range_x",Math.floor(c/2)):a.push("event_range_x",iChart.between(1,Math.floor(c/2),g));0==b&&(b=a.push("event_range_y",Math.floor(a.get("point_size"))));a.get("tip.enable")&&(a.on("mouseover",function(){e.push(a);a.tipPosition=e.length}).on("mouseout",function(){e.pop()}),a.push("tip.invokeOffsetDynamic",!0),a.tip=new iChart.Tip(a.get("tip"),a));var h=a.get("coordinate"),i=a.get("limit_y"),j=a.get("keep_with_coordinate"),k=function(c,d,e){return Math.abs(d-
(a.x+f[c].x))<g&&(!i||i&&Math.abs(e-(a.y-f[c].y))<b)?true:false},l=function(b){return{valid:true,text:f[b].value,top:a.y-f[b].y,left:a.x+f[b].x,hit:true}};a.isEventValid=function(b){if(h&&!h.isEventValid(b).valid)return{valid:false};var d=Math.floor((b.offsetX-a.x)/c);if(d<0||d>=f.length-1){d=iChart.between(0,f.length-1,d);return k(d,b.offsetX,b.offsetY)?l(d):{valid:j}}for(var e=d;e<=d+1;e++)if(k(e,b.offsetX,b.offsetY))return l(e);return{valid:j}}}});