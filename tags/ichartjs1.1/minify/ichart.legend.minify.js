iChart.Legend=iChart.extend(iChart.Component,{configure:function(){iChart.Legend.superclass.configure.apply(this,arguments);this.type="legend";this.set({data:void 0,width:"auto",column:1,row:"max",maxwidth:0,line_height:16,sign:"square",sign_size:10,sign_space:5,legend_space:5,z_index:1009,text_with_sign_color:!1,align:"right",valign:"middle"});this.atomic=!0;this.registerEvent("parse")},isEventValid:function(a,c){var g={valid:!1};a.x>this.x&&a.x<c.x+c.width&&a.y>c.y&&a.y<c.y+c.height&&c.data.each(function(b,f){if(a.x>b.x&&a.x<b.x+b.width_+c.get("signwidth")&&a.y>b.y&&a.y<b.y+c.get("line_height"))return g={valid:!0,index:f,target:b},!1},c);return g},drawCell:function(a,c,g,b,f,d){var e=d.get("sign_size"),j=d.getPlugin("sign");if(!j||!j.call(d,d.T,f,a+e/2,c,e,b))-1!=f.indexOf("bar")&&d.T.box(a,c-e/12,e,e/6,0,b),"round"==f?d.T.round(a+e/2,c,e/2,b):"round-bar"==f?d.T.round(a+e/2,c,e/4,b):"square-bar"==f?d.T.box(a+e/4,c-e/4,e/2,e/2,0,b):"square"==f&&d.T.box(a,c-e/2,e,e,0,b);d.T.fillText(g,a+d.get("signwidth"),c,0,d.get("text_with_sign_color")?b:d.get("color"),"lr",d.get("line_height"))},doDraw:function(a){a.T.box(a.x,a.y,a.width,a.height,a.get("border"),a.get("f_color"),!1,a.get("shadow"));a.T.textStyle(a.L,"middle",iChart.getFont(a.get("fontweight"),a.get("fontsize"),a.get("font")));a.data.each(function(c){a.drawCell(c.x,c.y,c.text,c.color,c.sign,a)})},doLayout:function(a,c){var g=a.get("sign_size"),b=0,f=0,d=0,e=a.get("column"),j=a.get("row"),k=a.data.length;a.T.textFont(a.get("fontStyle"));a.get("line_height")<g&&a.push("line_height",g+g/5);a.push("signwidth",g+a.get("sign_space"));a.data.each(function(b){b.width_=a.T.measureText(b.text)},a);for(var h=0;h<e;h++){for(var d=0,i=h;i<k;i+=e)d=Math.max(d,a.data[i].width_);a.columnwidth[h]=d;b+=d}for(h=0;h<j;h++){d=0;for(i=h*e;i<k;i++)d=Math.max(d,a.data[i].text.split("\n").length);a.columnheight[h]=d;f+=d}b=a.push(a.W,b+a.get("hpadding")+a.get("signwidth")*e+(e-1)*a.get("legend_space"));if(b>a.get("maxwidth"))e=a.get("maxwidth")/b,j=iChart.lowTo,k=Math.floor,a.push("fontsize",j(6,k(a.get("fontsize")*e))),a.push("sign_size",j(6,k(g*e))),a.push("sign_space",j(4,k(a.get("sign_space")*e))),a.push("legend_space",j(4,k(a.get("legend_space")*e))),a.push("fontStyle",iChart.getFont(a.get("fontweight"),a.get("fontsize"),a.get("font"))),a.doLayout(a,c);else{var l;a.width=b;a.height=f=a.push(a.H,f*a.get("line_height")+a.get("vpadding"));a.y=a.get("valign")==a.O?c.get("t_originy"):a.get("valign")==a.B?c.get("b_originy")-f:c.get("centery")-f/2;a.x=a.get("align")==a.L?c.get("l_originx"):a.get("align")==a.C?c.get("centerx")-b/2:c.get("r_originx")-b;a.x=a.push(a.X,a.x+a.get("offsetx"));a.y=a.push(a.Y,a.y+a.get("offsety"));d=a.y+a.get("padding_top");g=a.get("legend_space")+a.get("signwidth");for(h=0;h<j;h++){f=a.x+a.get("padding_left");l=a.columnheight[h]/2*a.get("line_height");d+=l;for(i=0;i<e&&h*e+i<k;i++)b=a.data[h*e+i],b.y=d,b.x=f,f+=a.columnwidth[i]+g;d+=l}}},doConfig:function(){iChart.Legend.superclass.doConfig.call(this);var a=this._(),c=a.root,g=iChart.isNumber(a.get("column")),b=iChart.isNumber(a.get("row")),f=a.data.length;a.get("align")==a.C&&"middle"==a.get("valign")&&a.push("valign",a.O);c.get("align")==a.L&&"middle"==a.get("valign")&&a.push("align",a.R);a.data.each(function(b,c){iChart.merge(b,a.fireEvent(a,"parse",[a,b.name,c]));b.text=b.text||b.name;b.sign=b.sign||a.get("sign")},a);!g&&!b&&(g=a.push("column",1));g&&!b&&(b=a.push("row",Math.ceil(f/a.get("column"))));!g&&b&&(g=a.push("column",Math.ceil(f/a.get("row"))));g=a.get("column");b=a.get("row");f>b*g&&(b+=Math.ceil((f-b*g)/g),b=a.push("row",b));a.columnwidth=Array(g);a.columnheight=Array(b);a.doLayout(a,c)}});