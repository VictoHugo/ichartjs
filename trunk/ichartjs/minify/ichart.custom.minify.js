iChart.Custom=iChart.extend(iChart.Component,{configure:function(){iChart.Custom.superclass.configure.apply(this,arguments);this.type="custom";this.set({drawFn:iChart.emptyFn,eventValid:void 0});this.registerEvent()},doDraw:function(a){this.get("drawFn").call(this,a)},isEventValid:function(a){return iChart.isFunction(this.get("eventValid"))?this.get("eventValid").call(this,a):{valid:!1}},doConfig:function(){iChart.Custom.superclass.doConfig.call(this)}});