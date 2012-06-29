(function(r){var x=navigator.userAgent.toLowerCase(),g=function(c){return c.test(x)},l=Object.prototype.toString,m=document.documentMode,y=g(/opera/);y&&g(/version\/10\.5/);var E=g(/\bchrome\b/),F=g(/webkit/),s=!E&&g(/safari/),P=s&&g(/applewebkit\/4/),Q=s&&g(/version\/3/),R=s&&g(/version\/4/),u=!y&&g(/msie/),S=u&&(g(/msie 8/)&&7!=m&&9!=m||8==m),T=u&&(g(/msie 9/)&&7!=m&&8!=m||9==m);u&&g(/msie 10/);var U=!!document.createElement("canvas").getContext,v=!F&&g(/gecko/),z=v&&g(/rv:1\.9/),G=v&&g(/rv:2\.0/),V=z&&g(/rv:1\.9\.1/),W=z&&g(/rv:1\.9\.2/),X=G&&g(/rv:2\.0\.\d/),Y=v&&g(/firefox/),Z=g(/windows|win32/),$=g(/macintosh|mac os x/),aa=g(/linux/),w={Linear:function(c,d,e,i){return e*c/i+d},Quad:{easeIn:function(c,d,e,i){return e*(c/=i)*c+d},easeOut:function(c,d,e,i){return-e*(c/=i)*(c-2)+d},easeInOut:function(c,d,e,i){return 1>(c/=i/2)?e/2*c*c+d:-e/2*(--c*(c-2)-1)+d}},Cubic:{easeIn:function(c,d,e,i){return e*(c/=i)*c*c+d},easeOut:function(c,d,e,i){return e*((c=c/i-1)*c*c+1)+d},easeInOut:function(c,d,e,i){return 1>(c/=i/2)?e/2*c*c*c+d:e/2*((c-=2)*c*c+2)+d}},Quart:{easeIn:function(c,d,e,i){return e*(c/=i)*c*c*c+d},easeOut:function(c,d,e,i){return-e*((c=c/i-1)*c*c*c-1)+d},easeInOut:function(c,d,e,i){return 1>(c/=i/2)?e/2*c*c*c*c+d:-e/2*((c-=2)*c*c*c-2)+d}},Bounce:{easeOut:function(c,d,e,i){return(c/=i)<1/2.75?e*7.5625*c*c+d:c<2/2.75?e*(7.5625*(c-=1.5/2.75)*c+0.75)+d:c<2.5/2.75?e*(7.5625*(c-=2.25/2.75)*c+0.9375)+d:e*(7.5625*(c-=2.625/2.75)*c+0.984375)+d}}},D=function(c){var d=!1,e=!1,i=[],g=function(){if(document.addEventListener)return function(){document.removeEventListener("DOMContentLoaded",g,!1);o()};if(document.attachEvent)return function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),o())}}(),m=function(){if(!d){try{document.documentElement.doScroll("left")}catch(a){setTimeout(m,1);return}o()}},o=function(){if(!d){d=!0;for(var a=0;a<i.length;a++)i[a].call(document);i=[]}},r=function(){if(!e){e=!0;if("complete"===document.readyState)return setTimeout(o,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",g,!1),c.addEventListener("load",o,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);c.attachEvent("onload",o);var a=!1;try{a=null==c.frameElement}catch(b){}document.documentElement.doScroll&&a&&m()}}},x=function(a){r();d?a.call(document,f):i.push(function(){return a.call(this)})},f=function(a){if(!a||a.nodeType)return a;if("string"===typeof a)return-1!=a.indexOf("#")&&(a=a.substring(1)),document.getElementById(a);"function"===typeof a&&x(a)};f.apply=function(a,b){if(a&&b&&"object"==typeof b)for(var c in b)"undefined"!=typeof b[c]&&(a[c]=b[c]);if(!b&&a){var j={};for(c in a)j[c]=a[c];return j}return a};f.applyIf=function(a,b){if(a&&b&&"object"==typeof b)for(var c in b)"undefined"!=typeof b[c]&&"undefined"==typeof a[c]&&(a[c]=b[c]);return!b&&a?f.apply(a):a};f.merge=function(a,b,c){if(a&&b&&"object"==typeof b){for(var j in b)"undefined"!=typeof b[j]&&("[object Object]"===l.apply(b[j])?"[object Object]"===l.apply(a[j])?f.merge(a[j],b[j]):a[j]=f.clone(b[j],!0):a[j]=b[j]);if("object"==typeof c)return f.merge(a,c)}return a};f.clone=function(a,b,c){var j={};if("[object Array]"===l.apply(a)&&"[object Object]"===l.apply(b))for(var h=0;h<a.length;h++)j[a[h]]=c&&"[object Object]"===l.apply(b[a[h]])?f.clone(b[a[h]]):b[a[h]];else if("[object Object]"===l.apply(a))for(h in a)j[h]=b&&"[object Object]"===l.apply(a[h])&&!(a[h]instanceof f.Painter)?f.clone(a[h],b):a[h];return j};f.override=function(a,b){if(b){var c=a.prototype;f.apply(c,b);f.isIE&&b.hasOwnProperty("toString")&&(c.toString=b.toString)}};f.extend=function(){var a=function(a){for(var b in a)this[b]=a[b]},b=Object.prototype.constructor;return function(c,j){var h=function(){c.apply(this,arguments)},d=function(){},e=c.prototype;d.prototype=e;d=h.prototype=new d;d.constructor=h;h.superclass=e;e.constructor==b&&(e.constructor=c);h.override=function(a){f.override(h,a)};d.superclass=d.supr=function(){return e};d.override=a;f.override(h,j);h.extend=function(a){return f.extend(h,a)};return h}}();var A=Math.sin,H=Math.cos,ba=Math.atan,ca=Math.sqrt,da=Math.abs,n=Math.PI,B=2*n,ea=Math.ceil,C=Math.round,fa=Math.floor,I=Math.max,J=Math.min,k=parseFloat,K=function(a,b){if(f.isNumber(a))return[a,a,a,a];a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g,/\s/).replace(/\s/g,",").split(",");1==a.length?a[0]=a[1]=a[2]=a[3]=k(a[0])||b:2==a.length?(a[0]=a[2]=k(a[0])||b,a[1]=a[3]=k(a[1])||b):3==a.length?(a[0]=k(a[0])||b,a[1]=a[3]=k(a[1])||b,a[2]=k(a[2])||b):(a[0]=k(a[0])||b,a[1]=k(a[1])||b,a[2]=k(a[2])||b,a[3]=k(a[3])||b);return a},L=function(a,b){if(0==a)return a;b=b||5;return 0==parseInt(a)?parseFloat((a/b+"").substring(0,(a+"").length+1)):Math.ceil(a/b)},ga="navy,olive,silver,gold,lime,fuchsia,aqua,green,red,blue,pink,purple,yellow,maroon,black,gray,white".split(","),M={navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",orange:"rgb(255,165,0)",silver:"rgb(192,192,192)",white:"rgb(255,255,255)",gold:"rgb(255,215,0)",lime:"rgb(0,255,0)",fuchsia:"rgb(255,0,255)",aqua:"rgb(0,255,255)",green:"rgb(0,128,0)",gray:"rgb(80,80,80)",red:"rgb(255,0,0)",blue:"rgb(0,0,255)",pink:"rgb(255,192,203)",purple:"rgb(128,0,128)",yellow:"rgb(255,255,0)",maroon:"rgb(128,0,0)",black:"rgb(0,0,0)",azure:"rgb(240,255,255)",beige:"rgb(245,245,220)",brown:"rgb(165,42,42)",cyan:"rgb(0,255,255)",darkblue:"rgb(0,0,139)",darkcyan:"rgb(0,139,139)",darkgrey:"rgb(169,169,169)",darkgreen:"rgb(0,100,0)",darkkhaki:"rgb(189,183,107)",darkmagenta:"rgb(139,0,139)",darkolivegreen:"rgb(85,107,47)",darkorange:"rgb(255,140,0)",darkorchid:"rgb(153,50,204)",darkred:"rgb(139,0,0)",darksalmon:"rgb(233,150,122)",darkviolet:"rgb(148,0,211)",indigo:"rgb(75,0,130)",khaki:"rgb(240,230,140)",lightblue:"rgb(173,216,230)",lightcyan:"rgb(224,255,255)",lightgreen:"rgb(144,238,144)",lightgrey:"rgb(211,211,211)",lightpink:"rgb(255,182,193)",lightyellow:"rgb(255,255,224)",magenta:"rgb(255,0,255)",violet:"rgb(128,0,128)"},ha=function(a){a=a.replace(/\s/g,"").toLowerCase();if(/rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)/.exec(a)||/rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0(\.[0-9])?|1(\.0)?)\)/.exec(a))return a;if(/#(([a-fA-F0-9]{6})|([a-fA-F0-9]{3}))/.exec(a))return a=a.replace(/#/g,"").replace(/^(\w)(\w)(\w)$/,"$1$1$2$2$3$3"),"rgb("+parseInt(a.substring(0,2),16)+","+parseInt(a.substring(2,4),16)+","+parseInt(a.substring(4,6),16)+")";if(M[a])return M[a];throw Error("invalid colors value '"+a+"'");},N=function(a,b){b=b||0.14;return 0.5<a?b-(1-a)/10:0.1<a?b-0.16+a/5:a>b?b:a/2},O=function(a,b,c,j){var b=ha(b),h=/rgb\((\w*),(\w*),(\w*)\)/.exec(b);if(h)b=[h[1],h[2],h[3]];else if(h=/rgba\((\w*),(\w*),(\w*),(.*)\)/.exec(b))b=[h[1],h[2],h[3],h[4]];else throw Error("invalid colors value '"+b+"'");var d;var h=b,e=void 0,i=void 0;f.isArray(h)&&(e=h[1],i=h[2],h=h[0]);var h=h/255,e=e/255,i=i/255,g=I(I(h,e),i),k=J(J(h,e),i),k=g-k;0==k?d=[0,0,g]:(h==g?d=(e-i)/k:e==g?d=(i-h)/k+2:i==g&&(d=(h-e)/k+4),d*=60,0>d&&(d+=360),d=[d,k/g,g]);d[1]-=j||0;a?(d[2]-=N(d[2],c),d[1]=f.upTo(d[1],1),d[2]=f.lowTo(d[2],0)):(d[2]+=N(1-d[2],c),d[1]=f.lowTo(d[1],0),d[2]=f.upTo(d[2],1));a=d;c=b[3];b=j=void 0;f.isArray(a)&&(b=c,c=a[1],j=a[2],a=a[0]);var l,m,n;d=fa(a/60)%6;a=a/60-d;p=j*(1-c);q=j*(1-c*a);t=j*(1-c*(1-a));switch(d){case 0:l=j;m=t;n=p;break;case 1:l=q;m=j;n=p;break;case 2:l=p;m=j;n=t;break;case 3:l=p;m=q;n=j;break;case 4:l=t;m=p;n=j;break;case 5:l=j,m=p,n=q}return"rgb"+(b?"a":"")+"("+C(255*l)+","+C(255*m)+","+C(255*n)+(b?","+b+")":")")};f.apply(f,{version:"1.0",email:"wanghetommy@gmail.com",isEmpty:function(a,b){return null===a||void 0===a||f.isArray(a)&&!a.length||(!b?""===a:!1)},isArray:function(a){return"[object Array]"===l.apply(a)},isDate:function(a){return"[object Date]"===l.apply(a)},isObject:function(a){return!!a&&"[object Object]"===l.apply(a)},isFunction:function(a){return"[object Function]"===l.apply(a)},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isString:function(a){return"string"===typeof a},isBoolean:function(a){return"boolean"===typeof a},isFalse:function(a){return"boolean"===typeof a&&!a},isElement:function(a){return a?!!a.tagName:!1},isDefined:function(a){return"undefined"!==typeof a},getFont:function(a,b,c){return a+" "+b+"px "+c},getDoc:function(){return c.contentWindow?c.contentWindow.document:c.contentDocument?c.contentDocument:c.document},DefineAbstract:function(a,b){if(!b[a])throw Error("Cannot instantiate the type '"+b.type+"'.you must implements it with method '"+a+"'.");},getAnimationArithmetic:function(a){return"linear"==a?w.Linear:"bounce"==a?w.Bounce.easeOut:"easeInOut"==a||"easeIn"==a||"easeOut"==a?w[f.DefaultAnimationArithmetic][a]:w.Linear},noConflict:function(){return D},parseBorder:function(a,b){return K(a,b)},parsePadding:function(a,b){return K(a,b)},distanceP2P:function(a,b,c,d){return ca((c-a)*(c-a)+(d-b)*(d-b))},atan2Radian:function(a,b,c,d){if(a==c)return d>b?n/2:3*n/2;var e=f.quadrant(a,b,c,d),a=ba(da((b-d)/(a-c)));1==e?a=n-a:2==e?a=n+a:3==e&&(a=B-a);return a},angle2Radian:function(a){return a*n/180},radian2Angle:function(a){return 180*a/n},quadrant:function(a,b,c,d){return a<c?b<d?3:0:b<d?2:1},quadrantd:function(a){a=2*(a%(2*n));return ea(a/n)},upTo:function(a,b){return b>a?a:b},lowTo:function(a,b){return b<a?a:b},between:function(a,b,c){return c>b?b:c<a?a:c},inRange:function(a,b,c){return b>c&&a<c},angleInRange:function(a,b,c){a%=B;b%=B;return b>a?b>c&&a<c:b<a?c<b||c>a:c==b},inRangeClosed:function(a,b,c){return b>=c&&a<=c},inEllipse:function(a,b,c,d){return 1>=a*a/c/c+b*b/d/d},p2Point:function(a,b,c,d){return{x:a+H(c)*d,y:b+A(c)*d}},vectorP2P:function(a,b,c){c||(b=f.angle2Radian(b),a=f.angle2Radian(a));b=A(b);return{x:b*A(a),y:b*H(a)}},iGather:function(a){return(a||"ichartjs")+"-"+(new Date).getTime().toString()},toPercent:function(a,b){return(100*a).toFixed(b)+"%"},parseFloat:function(a,b){if(!f.isNumber(a)&&(a=k(a),!f.isNumber(a)))throw Error("'"+b+"'is not a valid number.");return a},ceil:function(a,b){return a+L(a,b)},floor:function(a,b){return a-L(a,b)},get:function(a){return ga[a%16]},_2D:"2d",_3D:"3d",light:function(a,b,c){return O(!1,a,b,c)},dark:function(a,b,c){return O(!0,a,b,c)},fixPixel:function(a){return f.isNumber(a)?a:k(a.replace("px",""))||0},toPixel:function(a){return f.isNumber(a)?a+"px":f.fixPixel(a)+"px"},emptyFn:function(){return!0},supportCanvas:U,isOpera:y,isWebKit:F,isChrome:E,isSafari:s,isSafari2:P,isSafari3:Q,isSafari4:R,isIE:u,isIE8:S,isIE9:T,isGecko:v,isGecko3:z,isGecko4:G,isFF:Y,isFF3_5:V,isFF3_6:W,isFF4:X,isLinux:aa,isWindows:Z,isMac:$,FRAME:24,INTERVAL:30,DefaultAnimationArithmetic:"Cubic"});f.Assert={gtZero:function(a,b){f.Assert.gt(a,0,b)},gt:function(a,b,c){if(!f.isNumber(a)&&a>=b)throw Error(c+" required Number gt "+b+",given:"+a);},isNumber:function(a,b){if(!f.isNumber(a))throw Error(b+" required Number,given:"+a);},isNotEmpty:function(a,b){if(!a||""==a)throw Error(" required not empty.cause:"+b);if(f.isArray(a)&&0==a.length)throw Error("required must has one element at least.cause:"+b);},isArray:function(a,b){if(!f.isArray(a))throw Error(b+" required Array,given:"+a);},isFunction:function(a,b){if(!f.isFunction(a))throw Error(b+" required Function,given:"+a);},isTrue:function(a,b){if(!0!==a)throw Error(b);},equal:function(a,b,c){if(a!==b)throw Error(c);}};f.Event={addEvent:function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},fix:function(a){"undefined"==typeof a&&(a=c.event);a.target||(a.target=a.srcElement||document);!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(null==a.pageX&&null!=a.clientX){var b=document.documentElement,d=document.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if("undefined"==typeof a.offsetX&&"undefined"==typeof a.offsetY&&"number"!=typeof a.offsetX){for(var d=b=0,e=a.target;e!=document.body&&e;)b+=e.offsetLeft,d+=e.offsetTop,e=e.offsetParent;a.offsetX=a.pageX-b;a.offsetY=a.pageY-d}if(null==a.which&&(null!=a.charCode||null!=a.keyCode))a.which=null!=a.charCode?a.charCode:a.keyCode;!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey);!a.which&&void 0!==a.button&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);a.stopPropagation||(a.stopPropagation=function(){c.event.cancelBubble=true});return a}};return f}(r);Array.prototype.each=function(c,d){for(var e=this.length,i,g=0;g<e&&!(i=d?c.call(d,this[g],g):c(this[g],g),"boolean"===typeof i&&!i);g++);};Array.prototype.eachAll=function(c,d){this.each(function(e,g){D.isArray(e)?e.eachAll(c,d):d?c.call(d,e,g):c(e,g)},d)};r.iChart=r.$=D})(window);