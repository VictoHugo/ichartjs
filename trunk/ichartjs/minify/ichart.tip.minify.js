iChart.Tip=iChart.extend(iChart.Html,{configure:function(){iChart.Tip.superclass.configure.apply(this,arguments);this.type="tip";this.set({text:"",showType:"follow",invokeOffset:null,fade_duration:300,move_duration:100,invokeOffsetDynamic:!1,style:"textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",border:{enable:!0},delay:200})},follow:function(a,b){var c=this.dom.style;if(this.get("invokeOffsetDynamic")){if(b.hit){if(iChart.isString(b.text)||iChart.isNumber(b.text))this.dom.innerHTML=b.text;var d=this.get("invokeOffset")(this.width(),this.height(),b);c.top=d.top+"px";c.left=d.left+"px"}}else"follow"==this.get("showType")?(c.top=a.offsetY-1.1*this.height()-2+"px",c.left=a.offsetX+2+"px"):iChart.isFunction(this.get("invokeOffset"))?(d=this.get("invokeOffset")(this.width(),this.height(),b),c.top=d.top+"px",c.left=d.left+"px"):(c.top=a.offsetY-1.1*this.height()-2+"px",c.left=a.offsetX+2+"px")},text:function(a){this.dom.innerHTML=a},beforeshow:function(a,b){this.follow(a,b)},show:function(a,b){this.beforeshow(a,b);this.css("visibility","visible");this.get("animation")&&this.css("opacity",1)},hidden:function(){this.get("animation")?this.css("opacity",0):this.css("visibility","hidden")},initialize:function(){iChart.Tip.superclass.initialize.call(this);var a=this;a.css("position","absolute");a.dom.innerHTML=a.get("text");a.hidden();if(a.get("animation")){var b=a.get("move_duration")/1E3+"s ease-in 0s";a.transition("opacity "+a.get("fade_duration")/1E3+"s ease-in 0s");a.transition("top "+b);a.transition("left "+b);a.onTransitionEnd(function(){0==a.css("opacity")&&a.css("visibility","hidden")},!1)}a.wrap.appendChild(a.dom);a.T.on("mouseover",function(c,b){a.show(c,b)}).on("mouseout",function(b){a.hidden(b)});if("follow"==a.get("showType"))a.T.on("mousemove",function(b,d){a.T.variable.event.mouseover&&setTimeout(function(){a.T.variable.event.mouseover&&a.follow(b,d)},a.get("delay"))})}});