(function(d){d.Tip=d.extend(d.Html,{configure:function(){d.Tip.superclass.configure.apply(this,arguments);this.type="tip";this.set({name:"",value:"",text:"",showType:"follow",invokeOffset:null,fade_duration:300,move_duration:100,timing_function:"ease-out",invokeOffsetDynamic:!1,style:"textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",border:{enable:!0,radius:5},delay:200});this.registerEvent("parseText")},position:function(a,b){this.style.top=(0>a?0:a)+"px";this.style.left=(0>b?0:b)+"px"},follow:function(a,b){var c=this._();c.style.width="";if(c.get("invokeOffsetDynamic")){if(b.hit){(d.isString(b.text)||d.isNumber(b.text))&&c.text(b.name,b.value,b.text,b.i,c);var e=c.get("invokeOffset")(c.width(),c.height(),b);c.position(e.top,e.left)}}else"follow"!=c.get("showType")&&d.isFunction(c.get("invokeOffset"))?(e=c.get("invokeOffset")(c.width(),c.height(),b),c.position(e.top,e.left)):c.position(a.y-1.1*c.height()-2,a.x+2)},text:function(a,b,c,e,d){d.dom.innerHTML=d.fireString(d,"parseText",[d,a,b,c,e],c)},beforeshow:function(a,b){this.follow(a,b)},hidden:function(){this.get("animation")?this.css("opacity",0):this.css("visibility","hidden")},initialize:function(){d.Tip.superclass.initialize.call(this);var a=this._();a.css("position","absolute");a.text(a.get("name"),a.get("value"),a.get("text"),0,a);a.style=a.dom.style;a.hidden();if(a.get("animation")){var b=a.get("move_duration")/1E3+"s "+a.get("timing_function")+" 0s";a.transition("opacity "+a.get("fade_duration")/1E3+"s "+a.get("timing_function")+" 0s");a.transition("top "+b);a.transition("left "+b);a.onTransitionEnd(function(){0==a.css("opacity")&&a.css("visibility","hidden")},!1)}a.wrap.appendChild(a.dom);a.T.on("mouseover",function(c,b,d){a.show(b,d)}).on("mouseout",function(c,b){a.hidden(b)});if("follow"==a.get("showType"))a.T.on("mousemove",function(b,d,f){a.T.variable.event.mouseover&&setTimeout(function(){a.T.variable.event.mouseover&&a.follow(d,f)},a.get("delay"))})}})})(iChart);