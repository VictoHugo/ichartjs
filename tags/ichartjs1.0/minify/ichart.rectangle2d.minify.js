iChart.Rectangle2D=iChart.extend(iChart.Rectangle,{configure:function(){iChart.Rectangle2D.superclass.configure.apply(this,arguments);this.type="rectangle2d";this.set({shadow_offsety:-2})},drawRectangle:function(){this.T.box(this.get("originx"),this.get("originy"),this.get("width"),this.get("height"),this.get("border"),this.get("f_color"),this.get("shadow"))},isEventValid:function(a){return{valid:a.x>this.x&&a.x<this.x+this.width&&a.y<this.y+this.height&&a.y>this.y}},tipInvoke:function(){var a=this;return function(b,d){return{left:a.tipX(b,d),top:a.tipY(b,d)}}},doConfig:function(){iChart.Rectangle2D.superclass.doConfig.call(this);var a=this,b=a.get("tipAlign");"left"==b||"right"==b?a.tipY=function(b,c){return a.get("centery")-c/2}:a.tipX=function(b){return a.get("centerx")-b/2};"left"==b?a.tipX=function(b){return a.x-a.get("value_space")-b}:"right"==b?a.tipX=function(){return a.x+a.width+a.get("value_space")}:a.tipY="bottom"==b?function(){return a.y+a.height+3}:function(b,c){return a.y-c-3};a.applyGradient()}});