"use strict";function _possibleConstructorReturn(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?t:i}function _inherits(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _get=function t(i,e,s){null===i&&(i=Function.prototype);var h=Object.getOwnPropertyDescriptor(i,e);if(void 0===h){var a=Object.getPrototypeOf(i);return null===a?void 0:t(a,e,s)}if("value"in h)return h.value;var n=h.get;if(void 0!==n)return n.call(s)},_createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();window.$={},$.cols={black:"#000",ash:"#9d9d9d",blind:"#fff",bloodred:"#be2633",pigmeat:"#e06f8b",oldpoop:"#493C2B",newpoop:"#a46422",blaze:"#eb8931",zornskin:"#f7e26b",shadegreen:"#2f484e",leafgreen:"#44891A",slimegreen:"#A3CE27",nightblue:"#1B2632",seablue:"#005784",skyblue:"#31A2F2",cloudblue:"#B2DCEF"},window.addEventListener("load",function(){new Game},!1),$.data={title:"Day Of The Glitch"},$.loadCallback=function(t){var i=document.createElement("canvas"),e=void 0,s=t.draw.scale(t.imgs.tile0,3),h=0,a=void 0,n=void 0;for(i.width=t.w,i.height=t.h,e=i.getContext("2d"),e.fillStyle=$.cols.nightblue,e.fillRect(0,0,t.w,t.h),e.globalAlpha=.1,n=0;n<t.h/s.height;n+=1){for(a=0;a<t.w/s.width;a+=1)e.drawImage(s,a*s.width,h);h+=s.height}e.globalAlpha=1,a=new Image,a.src=i.toDataURL("image/gif"),t.imgs.floor=a},$.data.i={boom:"CAAIAMIEAL4mM+uJMffia////zGi8jGi8jGi8jGi8iH5BAEKAAQALAAAAAAIAAgAAAMXSAQMuiAEBoMQk9kxsBac94lV9jQOkQAAOw==",circle:"CAAIAIABAL4mMzGi8iH5BAEKAAEALAAAAAAIAAgAAAIMTIBgl8gNo5wvrWYKADs=",drone:"CAAIAMIAAAAAAL4mM+uJMffiawAAAAAAAAAAAAAAACH5BAEKAAQALAAAAAAIAAgAAAMXSCqiLgC0xaoj7JHBBsZDyH1EECzXlQAAOw==",dude:"DAAIAMIFAAUDC0k8K0SJGvfia/3//AAAAAAAAAAAACH5BAEKAAcALAAAAAAMAAgAAAMheLoavi60KGklY5ATsFbZcAhCOJKkggoq2qbAEh/xzCgJADs=",face:"EAAQAMIEAC9ITr4mMwBXhKPOJwAAAAAAAAAAAAAAACH5BAEKAAQALAAAAAAQABAAAAM/SCqiTuytJmNlOL/M+RpgKIKUMATBeKblioLo2zBuWg+Zqua6yIGAoJAUoQ2EQ1zJdEQCiJMeFGLcWagdDSEBADs=",font:"jwAFAIABAAAAAP///yH5BAEKAAEALAAAAACPAAUAAAJzDGKHcLzOFDRJ0UbXzdJ2lFQbRo5ipJ1TA7XsW2KanNWyZXpuzuNSz5txQDZTChSrsI6kXfOHDNmcl9+LKXxiU7fHBwV2zFxJzwZbGiazq+kyqua2h0I6vEhLh977Dm1fBaW1BvUwYmYY16UiuDN29VhRAAA7",girl:"DAAIAMIAAAAAAAUDC74mM6RkIuBvi/3//AAAAAAAACH5BAEKAAcALAAAAAAMAAgAAAMjeLoKvg60KGksYxSHNSDZcBBAOBIocXypkqonegQLPd/MkgAAOw==",heart:"BQAFAKECAL4mM+Bvi////////yH5BAEKAAEALAAAAAAFAAUAAAIIDGygu3mBQgEAOw==",mark:"CAAIAIABAAAAADGi8iH5BAEKAAEALAAAAAAIAAgAAAIPDBBpiax2HpQnsgptsysVADs=",mono:"BgAIAMIFAAAAAL4mM+Bvi52dnf///zGi8jGi8jGi8iH5BAEKAAcALAAAAAAGAAgAAAMUeBehS6QdAkAMow6GN+eC8CmSkgAAOw==",robo:"CQANAMIFAL4mM0SJGqPOJ/fia////zGi8jGi8jGi8iH5BAEKAAcALAAAAAAJAA0AAAMjeAqsLhCqcYK1c7UJCOsfQ4wMdYiNeW5m6GirM8zxC9vHTCUAOw==",shadow:"CAAEAIAAAAAAAAAAACH5BAEKAAEALAAAAAAIAAQAAAIHDI6Gy9lRAAA7",sight:"CQAJAIABAKPOJzGi8iH5BAEKAAEALAAAAAAJAAkAAAIRTGCXanjgXlyUVQpjbmlqUwAAOw==",skull:"BwAGAIABAJ2dnTGi8iH5BAEKAAEALAAAAAAHAAYAAAIKhG8RoLmNYnyMFQA7",stomper:"CwAMAMICAL4mM+BvizGi8rLc7zGi8jGi8jGi8jGi8iH5BAEKAAEALAAAAAALAAwAAAMgGCrM+kEAKeBqNUYxescgtoXOGF7k06kDVG5uJppWkAAAOw==",tile0:"EAAQAKECAAAAAC9ITjGi8jGi8iH5BAEKAAIALAAAAAAQABAAAAIqFI6ZFu3vDAii2msPpbhy3YVgiI1kNp2XqbKnS8JiqlYg131AnUnKvysAADs="},$.data.sfx={jump:[0,,.2432,,.1709,.3046,,.1919,,,,,,.5923,,,,,1,,,,,.5],noise:[3,,.41,.5861,.4234,.67,,.74,-.52,,,-.76,.24,,,,,,.18,,,,,.37],coin:[0,,.0509,.3048,.2229,.6475,,,,,,.2917,.6948,,,,,,1,,,,,.5],shoot:[2,,.1128,,.178,.7748,.0046,-.4528,,,,,,.185,.0994,,,,1,,,,,.5],explode:[3,,.3708,.5822,.3851,.0584,,-.0268,,,,-.0749,.7624,,,,,,1,,,,,.5],die:[2,.1987,.388,.4366,.0335,.5072,,.1128,-.1656,.1987,,-.376,.2686,-.684,.1392,-.6819,-.8117,-.1072,.9846,.057,,.004,-.0045,.56],glitch:[0,.0092,.667,.0173,.5449,.1575,,-.0179,-.0289,.2259,.8272,.9965,.4172,-.684,.4795,.086,.0206,,.9931,.2268,,.0015,-.0268,.5],tap:[1,,.1953,,.1186,.2659,,,,,,,,,,,,,1,,,.1,,.5]};var WaveMgr=function(){function t(i,e){_classCallCheck(this,t),this.g=i,this.p=e.p,this.robos=$.H.shuffle(["hostage","hostage2","stompV","stompH","sprintV","drone","stampede"])}return _createClass(t,[{key:"nextWave",value:function(){this.wave={num:10,freq:.6,groups:[this.robos[this.p.wave-1]]},console.log(this.wave),this.p.inWave=this.wave.num}},{key:"spawn",value:function(){var t=this;this[$.H.rndArray(this.wave.groups)].call(this),this.g.addEvent({time:this.wave.freq,cb:function(){t.p.inWave-=1,t.p.spawn()}})}},{key:"stompV",value:function(){var t=$.H.rnd(20,this.g.w-30),i=new Robo(this.g,{p:this.p,i:"stomper",x:t,y:0});this.g.ents.push(i),this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:t,y:-60})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:t,y:-120})),this.g.ents.push(new Human(this.g,{p:this.p,master:i,offX:0,offY:-50}))}},{key:"stompH",value:function(){var t=$.H.rnd(20,this.g.w-150);this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:t,y:-50})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:t+50,y:-50})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:t+100,y:-50})),this.g.ents.push(new Human(this.g,{p:this.p,x:t+50,y:20}))}},{key:"sprintV",value:function(){var t=$.H.rnd(40,this.g.w-40);this.g.ents.push(new Human(this.g,{p:this.p,x:t,y:0})),this.p.wave>4&&this.g.ents.push(new Robo(this.g,{p:this.p,i:"mono",x:t,y:-150})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"mono",x:t,y:-180})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"mono",x:t-30,y:-190})),this.g.ents.push(new Robo(this.g,{p:this.p,i:"mono",x:t+30,y:-190}))}},{key:"hostage",value:function(){var t=$.H.rnd(20,this.g.w-150),i=new Robo(this.g,{p:this.p,i:"robo",x:t,y:0});this.g.ents.push(i),this.g.ents.push(new Human(this.g,{p:this.p,master:i,offX:35,offY:0}))}},{key:"hostage2",value:function(){var t=$.H.rnd(20,this.g.w-150),i=new Robo(this.g,{p:this.p,i:"robo",x:t,y:0});this.g.ents.push(new Robo(this.g,{p:this.p,i:"robo",x:t+100})),this.g.ents.push(i),this.g.ents.push(new Human(this.g,{p:this.p,master:i,offX:35,offY:0}))}},{key:"drone",value:function(){var t=$.H.rnd(20,this.g.w-150);this.g.ents.push(new Robo(this.g,{p:this.p,i:"drone",x:t,y:-10}))}},{key:"stampede",value:function(){for(var t=0;t<10;t++)this.g.ents.push(new Human(this.g,{p:this.p,x:$.H.rnd(40,this.g.w,-40),y:$.H.rnd(0,100)*-1}));for(var i=0;i<3;i++)this.g.ents.push(new Robo(this.g,{p:this.p,i:"stomper",x:$.H.rnd(60,this.g.w,-80),y:-140}))}}]),t}();$.H={listen:function(t,i){window.addEventListener(t,i,!1)},el:function(t){return document.getElementById(t)},rnd:function(t,i){return Math.floor(Math.random()*(i-t+1)+t)},rndArray:function(t){return t[~~(Math.random()*t.length)]},textWidth:function(t,i){return t.length*(3*i.scale)+t.length*(1*i.scale)},timeStamp:function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()},shuffle:function(t){var i,e,s;for(s=t.length;s;s--)i=Math.floor(Math.random()*s),e=t[s-1],t[s-1]=t[i],t[i]=e;return t},mkFavicon:function(t){var i=document.createElement("canvas");i.width=i.height=64;var e=i.getContext("2d");e.drawImage(t,0,0);var s=document.createElement("link");s.type="image/x-icon",s.rel="shortcut icon",s.href=i.toDataURL("image/x-icon"),document.getElementsByTagName("head")[0].appendChild(s)},mkCanvas:function(t,i){var e=document.createElement("canvas"),s=e.getContext("2d");return e.width=t,e.height=i,s.mozImageSmoothingEnabled=!1,s.imageSmoothingEnabled=!1,e},resize:function(t,i,e){i=i||1,e=e||!1;var s=t.width*i,h=t.height*i,a=document.createElement("canvas");a.width=t.width,a.height=t.height;var n=a.getContext("2d");n.drawImage(t,0,0);var o=n.getImageData(0,0,t.width,t.height),r=document.createElement("canvas");r.width=s,r.height=h;var l,c,g=r.getContext("2d"),u=g.getImageData(0,0,s,h);for(l=0;l<h;l++)for(c=0;c<s;c++){var d=4*(Math.floor(l/i)*t.width+Math.floor(c/i)),f=4*(l*s+c);u.data[f]=o.data[d],u.data[f+1]=o.data[d+1],u.data[f+2]=o.data[d+2],u.data[f+3]=o.data[d+3],0===o.data[d+3]?(u.data[f]=0,u.data[f+1]=0,u.data[f+2]=0,u.data[f+3]=0):e&&(u.data[f]=e[0],u.data[f+1]=e[1],u.data[f+2]=e[2],u.data[f+3]=255)}g.putImageData(u,0,0);var A=new Image;return A.src=r.toDataURL("image/png"),A}};var Load=function(){function t(i){_classCallCheck(this,t),this.g=i,this.imgsLoaded=0,this.imgsTotal=Object.keys($.data.i).length,this.loadImages()}return _createClass(t,[{key:"loadImages",value:function(){var t,i=this.g,e="data:image/gif;base64,R0lGODlh",s=$.data.i;for(t in s)s.hasOwnProperty(t)&&(i.imgs[t]=new Image,i.imgs[t].onload=this.checkLoaded(),i.imgs[t].src=e+s[t])}},{key:"checkLoaded",value:function(){var t=this,i=(this.g,this);this.imgsLoaded+=1,i.imgsLoaded===i.imgsTotal&&window.setTimeout(function(){t.mkFonts(),$.loadCallback(t.g)},100)}},{key:"mkFonts",value:function(){var t=this.g,i={b:[0,0,0],w:[255,255,255],g:[68,137,26],lg:[163,206,39],r:[190,38,51],y:[247,226,107],o:[235,137,49],p:[224,111,139]},e=t.imgs,s=void 0;for(s in i)t.fonts[s]=$.H.resize(t.imgs.font,1,i[s]);for(s in e)e[s+"_w"]=$.H.resize(e[s],1,[255,255,255]);window.setTimeout(function(){t.init()},250)}}]),t}();$.Audio={init:function(){var t=AudioContext||webkitAudioContextx;this.ctx=!!t&&new t,this.ctx&&this.encode()},encode:function(){var t=this;t.sounds=[];var i=function(t){var i,e,s;for(t=jsfxr(t),t=atob(t.substr(t.indexOf(",")+1)),i=t.length,e=new Uint8Array(i),s=0;s<i;s++)e[s]=t.charCodeAt(s);return e.buffer},e=function(e){t.ctx.decodeAudioData(i($.data.sfx[e]),function(i){t.sounds[e]=i})};for(var s in $.data.sfx)e(s)},play:function(t){if(this.ctx&&this.sounds[t]){var i=this.ctx.createBufferSource();i.buffer=this.sounds[t],i.connect(this.ctx.destination),i.start(0)}},say:function(t){var i=arguments.length<=1||void 0===arguments[1]?1.1:arguments[1],e=new SpeechSynthesisUtterance(t);e.lang="en-US",e.rate=i,e.pitch=.1,window.speechSynthesis.speak(e)}};var Game=function(){function t(){_classCallCheck(this,t);var i=navigator.userAgent.toLowerCase(),e=void 0,s=void 0;this.l=document.getElementById("l"),this.h=document.getElementById("h"),e=320,s=480,this.c=document.getElementsByTagName("canvas")[0],this.ctx=this.c.getContext("2d"),this.w=e,this.h=s,this.c.width=e,this.c.height=s,this.c.style.width=e+"px",this.c.style.height=s+"px",this.dt=0,this.fps=30,this.frameStep=1/this.fps,this.frameCurr=0,this.framePrev=$.H.timeStamp(),this.mobile="createTouch"in document||!1,this.android=i.indexOf("android")>-1,this.ios=/ipad|iphone|ipod/.test(i),this.firefox=i.indexOf("firefox")>-1,this.plays=0,this.events=[],this.ents=[],this.imgs=[],this.fonts=[],this.sfx=[],document.title=$.data.title,this.load()}return _createClass(t,[{key:"load",value:function(){this.draw=new Draw(this.ctx,this.w,this.h),this.input=new Input(this),this.emitter=new Emitter(this),this.shake=new Shake(this),this.firefox||this.ios?this.audio={play:function(){},say:function(){}}:(this.audio=$.Audio,this.audio.init()),this.load=new Load(this)}},{key:"init",value:function(){var t=this;this.scale(),$.H.mkFavicon(this.draw.scale(this.imgs.face,4)),this.changeState("Title"),this.loop(),window.addEventListener("resize",function(){return t.scale()},!1)}},{key:"loop",value:function(){var t=this;for(this.frameCurr=$.H.timeStamp(),this.dt=this.dt+Math.min(1,(this.frameCurr-this.framePrev)/1e3),this.c.className="",this.input.poll();this.dt>this.frameStep;)this.dt=this.dt-this.frameStep,this.state.update(this.frameStep);this.shake.update(this.dt),this.state.render(this.dt),this.framePrev=this.frameCurr,requestAnimationFrame(function(){return t.loop()})}},{key:"update",value:function(t){var i=!0,e=!1,s=void 0;try{for(var h,a=this.ents[Symbol.iterator]();!(i=(h=a.next()).done);i=!0){var n=h.value;console.log("ok"),n.update(t)}}catch(o){e=!0,s=o}finally{try{!i&&a["return"]&&a["return"]()}finally{if(e)throw s}}}},{key:"render",value:function(){this.draw.clear();var t=!0,i=!1,e=void 0;try{for(var s,h=this.ents[Symbol.iterator]();!(t=(s=h.next()).done);t=!0){var a=s.value;a.render()}}catch(n){i=!0,e=n}finally{try{!t&&h["return"]&&h["return"]()}finally{if(i)throw e}}}},{key:"scale",value:function(){this.scalePortrait()}},{key:"scalePortrait",value:function(){var t=window.innerHeight,i=this.w/this.h,e=t*i;e/this.w;this.mobile&&t<window.innerWidth?(this.l.style.display="block",$.H.el("h").innerHTML="Rotate Device",this.c.style.display="none"):(this.l.style.display="none",this.c.style.display="block"),1==window.navigator.standalone&&this.ios||(this.c.width=this.w,this.c.height=this.h,this.cx=this.w/2,this.cy=this.h/2,this.c.style.width=~~e+"px",this.c.style.height=~~t+"px")}},{key:"changeState",value:function(t){switch(this.ents=[],this.events=[],t){case"Title":this.state=new Title(this);break;case"Splash":this.state=new Splash(this);break;case"Play":this.state=new Play(this)}}},{key:"mkFont",value:function(t,i){var e=this,s=e.draw.scale(e.fonts[t],i);return s.scale=i,s}},{key:"addEvent",value:function(t){this.events.push(t)}}]),t}(),State=function(){function t(i){_classCallCheck(this,t),this.g=i,this.init()}return _createClass(t,[{key:"init",value:function(){this.bgCol=!1,this.fader=0}},{key:"update",value:function(t){for(var i=this.g,e=i.ents.length;e--;)i.ents[e].update(t);for(e=i.ents.length;e--;)i.ents[e].remove&&i.ents.splice(e,1);for(e=i.events.length;e--;){var s=i.events[e];if(!s)break;s.time-=i.dt,s.time<0&&(s.cb.call(this),i.events.splice(e,1))}this.fader=Math.sin(.005*(new Date).getTime())}},{key:"render",value:function(){var t=this.g.ents.length;for(this.bgCol&&this.g.draw.clear(this.bgCol),t=0;t<this.g.ents.length;t+=1)this.g.ents[t].render()}}]),t}(),Input=function(){function t(i){var e=this;_classCallCheck(this,t);var s=window.addEventListener;this.g=i,this.up=!1,this.down=!1,this.left=!1,this.right=!1,this.m={x:i.w/2,y:i.h/2,click:0},this.keys={up:0,down:0,left:0,right:0,shoot:0,enter:0},this.keyMappings={up:38,down:40,left:37,right:39,shoot:32,enter:13},s("keydown",function(t){return e.press(t,1)},!1),s("keyup",function(t){return e.press(t,0)},!1),s("mousemove",function(t){return e.trackMove(t)},!1),s("mousedown",function(t){return e.m.click=1},!1),s("mouseup",function(t){return e.m.click=0},!1),s("touchstart",function(t){e.m.click=1,e.trackMove(t.touches[0])},!1),s("touchend",function(t){e.m.click=0,e.trackMove(t.touches[0])},!1),s("touchmove",function(t){t.preventDefault(),e.trackMove(t.touches[0])},!1)}return _createClass(t,[{key:"poll",value:function(){}},{key:"press",value:function(t,i){for(var e in this.keyMappings)t.keyCode===this.keyMappings[e]&&(this.keys[e]=i)}},{key:"trackMove",value:function(t){var i=this.g,e=i.c.offsetTop,s=i.c.offsetLeft,h=parseInt(i.c.style.width,10)/i.c.width,a=~~((t.pageX-s)/h),n=~~((t.pageY-e)/h);a=a>i.w?i.w:a,a=a<0?0:a,n=n>i.h?i.h:n,n=n<0?0:n,this.m.x=~~a,this.m.y=~~n}}]),t}(),Draw=function(){function t(i,e,s){_classCallCheck(this,t),this.ctx=i,this.w=e,this.h=s}return _createClass(t,[{key:"clear",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"#000":arguments[0];this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.w,this.h)}},{key:"rect",value:function(t,i,e,s,h){this.ctx.fillStyle=h,this.ctx.fillRect(t,i,e,s)}},{key:"circle",value:function(t,i,e){this.ctx.beginPath(),this.ctx.fillStyle="#fff",this.ctx.arc(t,i,e,0,2*Math.PI),this.ctx.closePath()}},{key:"scale",value:function(t,i,e){var s=$.H.mkCanvas(t.width*i,t.height*i),h=s.getContext("2d");return s.width&&(h.save(),h.scale(i,i),h.drawImage(t,0,0),h.restore()),s}},{key:"flip",value:function(t,i,e){var s=$.H.mkCanvas(t.width,t.height),h=s.getContext("2d"),a=i?-1:1,n=e?-1:1,o=i?t.width*-1:0,r=e?t.height*-1:0;return s.width=t.width,s.height=t.height,h.save(),h.scale(a,n),h.drawImage(t,o,r,t.width,t.height),h.restore(),s}},{key:"text",value:function(t,i,e,s,h){var a=0,n=this.ctx,o=65,r=0,l=3*i.scale,c=5*i.scale,g=1*i.scale,u=$.H.textWidth(t,i),d=0;for("number"!=typeof t&&"0"!==t[0]||(t+="",r=43),e=e||(this.w-u)/2,h&&(this.text(t,h.f,e+h.offset,s),this.text(t,h.f,e-h.offset,s),this.text(t,h.f,e,s+h.offset),this.text(t,h.f,e,s-h.offset)),a=0;a<t.length;a+=1)d=(t.charCodeAt(a)-o+r)*(l+g),d>-1&&n.drawImage(i,d,0,l,c,~~e,~~s,l,c),e+=l+g}}]),t}(),Sprite=function(){function t(i){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,t),this.g=i,this.dead=!1,this.remove=!1,this.id=Date.now()+"-"+i.ents.length,this.angle=0,this.lastPos={x:this.x,y:this.y},this.flip={x:0,y:0},this.restrict=!0,this.scale=e.scale||1,this.frame=e.frame||1,this.frames=e.frames||1,this.frameRate=e.frameRate||80,this.frameNext=e.frameNext||0;for(var s in e)this[s]=e[s];this.o=e,e.i&&this.mkImg(e.i),this.bound=e.bound||{w:this.w,h:this.h,x:0,y:0},this.init()}return _createClass(t,[{key:"init",value:function(){this.anims={idle:{frames:[1],rate:80}},this.changeAnim("idle")}},{key:"update",value:function(t){this.lastPos.x=this.x,this.lastPos.y=this.y,this.collidesWith&&this.hitGroup(this.collidesWith),this.updateAnim(t),this.updateMove(t),this.restrict&&this.restrictToScreen(),this.gravity&&(this.vy+=this.gravity*this.g.dt)}},{key:"updateAnim",value:function(t){this.frameNext<0&&(this.frameNext=this.anim.rate,this.anim.counter+=1,this.anim.counter>=this.anim.frames.length&&(this.anim.next?this.changeAnim(this.anim.next):this.anim.counter=0),this.frame=this.anim.frames[this.anim.counter]),this.frameNext-=1e3*t}},{key:"updateMove",value:function(t){}},{key:"restrictToScreen",value:function(){this.x<0&&(this.x=0),this.x>this.g.w-this.w&&(this.x=this.g.w-this.w),this.y>this.g.h-this.h&&(this.y=this.g.h-this.h)}},{key:"render",value:function(){var t=this.g,i=this.i,e=this.frame;i?(this.flip.y&&(i=t.draw.flip(i,0,1)),this.flip.x&&(i=t.draw.flip(i,1,0),e=this.frames-this.frame+1),t.ctx.drawImage(i,e*this.w-this.w,0,this.w,this.h,~~this.x,~~this.y,this.w,this.h)):this.g.draw.rect(~~this.x,~~this.y,this.w,this.h,this.col)}},{key:"doDamage",value:function(t){}},{key:"receiveDamage",value:function(t){}},{key:"kill",value:function(){this.dead=!0,this.remove=!0}},{key:"hitGroup",value:function(t){for(var i=this.g,e=i.ents.length;e--;)i.ents[e]&&i.ents[e].group===t&&i.ents[e].id!==this.id&&this.hit(i.ents[e])&&i.ents[e].dead===!1&&(this.doDamage(i.ents[e]),i.ents[e].receiveDamage(this))}},{key:"hit",value:function(t){return!(t.y+t.h<this.y||t.y>this.y+this.h||t.x+t.w<this.x||t.x>this.x+this.w)}},{key:"mkImg",value:function(t){var i=this.g;this.i=i.draw.scale(i.imgs[t],this.scale),this.w=this.i.width/this.frames,this.h=this.i.height,this.iHurt=i.draw.scale(i.imgs[t+"_w"],this.scale)}},{key:"changeAnim",value:function(t){this.anim&&this.anim.name&&this.anim.name===t||(this.anim=this.anims[t],this.anim.name=t,this.anim.counter=0,this.frame=this.anim.frames[0],this.frameNext=this.anim.rate)}},{key:"rotate",value:function(t,i){var e=document.createElement("canvas"),s=e.getContext("2d"),h=Math.max(t.width,t.height)+6;i*(180/Math.PI);return e.width=h,e.height=h,s.translate(h/2,h/2),s.rotate(i+Math.PI/2),s.drawImage(t,-(t.width/2),-(t.height/2)),e}}]),t}(),Particle=function(t){function i(t,e){_classCallCheck(this,i);var s=_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e));return s.name="particle",s.scale=1,s.group="na",s.w=4,s.h=4,s.lifespan=$.H.rnd(20,50),s.ttl=s.lifespan,s.alpha=1,s.vx=e.vx||$.H.rnd(0,300)-300,s.vy=e.vy||$.H.rnd(0,300)*-1,s}return _inherits(i,t),_createClass(i,[{key:"update",value:function(t){_get(Object.getPrototypeOf(i.prototype),"update",this).call(this,t),this.x+=this.vx*t,this.y+=this.vy*t,this.ttl-=1,this.ttl<0&&(this.remove=!0)}},{key:"render",value:function(){var t=this.g;t.draw.rect(this.x,this.y,5,5,$.cols[this.col])}}]),i}(Sprite),Emitter=function(){function t(i){_classCallCheck(this,t),this.g=i}return _createClass(t,[{key:"particle",value:function(t,i,e){var s=arguments.length<=3||void 0===arguments[3]?["ash"]:arguments[3],h=this.g,a=void 0;for(a=0;a<t;a+=1){var n=$.H.rndArray(s),o=6/t*a;h.ents.push(new Particle(h,{x:i,y:e,col:n,vx:300*Math.cos(o),vy:300*Math.sin(o)}))}}},{key:"explosion",value:function(t,i,e,s,h){for(var a=this.g,n=$.H.rnd;t--;)window.setTimeout(function(){a.ents.push(new Explosion(a,{x:i+n(-10,10),y:e+n(-10,10),magnitude:h,particles:s}))},150*t)}}]),t}(),Shake=function(){function t(i){_classCallCheck(this,t),this.g=i,this.c=i.c,this.ttl=0,this.mag=0}return _createClass(t,[{key:"start",value:function(t,i){this.mag=t,this.ttl=i,this.l=(window.innerWidth-this.c.style.width)/2}},{key:"update",value:function(){var t=(this.g,this.c),i=$.H.rnd(-this.mag,this.mag);this.ttl-=1,this.ios||(0===this.ttl?(t.style.marginLeft=this.l+"px",t.style.marginTop="0px"):this.ttl>0&&(t.style.marginTop=i+"px",t.style.marginLeft=i+this.l+"px"))}}]),t}(),Button=function(t){function i(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,i),e.size=e.size||4,e.w=e.w||150,e.h=e.h||50,e.delay=e.delay||100,e.col=e.col||$.cols.slimegreen,e.triggerOnEnter=e.triggerOnEnter||!1,e.fadeIn=e.fadeIn||0;var s=_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e));return s.p=t.mkFont("w",e.size),s.pHover=t.mkFont("b",e.size),s.boxX=~~(s.g.w/2-s.w/2),s.boxY=s.y-15,s.clicked=!1,s.clickCol=e.clickCol||"#fff",s.currentCol=s.col,s.clicked=!1,s.fontCol="p",s}return _inherits(i,t),_createClass(i,[{key:"update",value:function(){var t=this,i=this.g.input.m.click;this.fontCol="p",this.fadeIn-=1,this.hover=this.intersects(),this.hover&&(this.g.c.className="hover",this.fontCol="pHover"),this.currentCol=this.hover||this.hover&&i?this.clickCol:this.col,(!this.clicked&&this.hover&&i||!this.clicked&&this.triggerOnEnter&&this.g.input.keys.enter)&&(this.g.audio.play("tap"),this.clicked=!0,setTimeout(function(){t.cb.call()},this.delay))}},{key:"render",value:function(){var t=this.hover?this.pHover:this.p;this.g.draw.rect(this.boxX,this.boxY,this.w,this.h,this.currentCol),this.g.draw.text(this.text,t,this.x,this.y)}},{key:"intersects",value:function(){var t=this.g.input.m;return t.x>this.boxX&&t.x<this.boxX+this.w&&t.y>this.boxY&&t.y<this.boxY+this.h}}]),i}(Sprite),Explosion=function(t){function i(t,e){_classCallCheck(this,i);e.i=e.i||"boom",e.white=e.white||!1;var s=_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e));return s.name="explosion",s.group="na",s.startX=e.x,s.startY=e.y,s.magnitude=e.magnitude||10,s.factor=1,s.p=e.p||!1,s.angle=0,s.grow=1,s.opacity=e.opacity||1,s.scale=~~(s.magnitude/2),s}return _inherits(i,t),_createClass(i,[{key:"update",value:function(t){this.g;this.scale>=this.magnitude&&(this.factor*=-1),this.scale<=this.magnitude&&(this.scale+=this.factor),this.scale<=1&&(this.remove=!0),this.mkImg(this.o.i)}},{key:"render",value:function(){var t=this.startX-this.w/2,i=this.y-this.h/2,e=this.g,s=this.white?this.iHurt:this.i;this.opacity<1&&(e.ctx.globalAlpha=this.opacity),e.ctx.drawImage(s,t,i),this.opacity<1&&(e.ctx.globalAlpha=1)}}]),i}(Sprite),Robo=function(t){function i(t,e){switch(_classCallCheck(this,i),e.group="baddie",e.collidesWith="fire",e.frames=1,e.scale=3,e.i=e.i||$.H.rndArray(["robo","mono","stomper","drone"]),e.x=e.x||$.H.rnd(30,t.w-30),e.y=e.y||0,e.restrict=!1,e.i){case"robo":e.vy=$.H.rnd(80,120),e.vx=$.H.rnd(0,300)-150;break;case"mono":e.vy=180,e.vx=0;break;case"drone":e.vy=250,e.vx=0,e.shadow=t.draw.scale(t.imgs.shadow,e.scale);break;case"stomper":default:e.vy=150,e.vx=0,e.canChangeDir=!1}return e.changeDir=1,e.doFlip=1,_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e))}return _inherits(i,t),_createClass(i,[{key:"doDamage",value:function(t){t.alpha<.8||this.dead||(this.p.score+=this.scale,this.remove=!0,this.g.audio.play("explode"),this.g.ents.push(new Explosion(this.g,{x:this.x+this.w/2,y:this.y+this.h/2})),this.p.splats.push({i:"mark",x:this.x,y:this.y}),this.g.shake.start(10,10),this.g.emitter.particle(13,this.x+this.w/2,this.y+this.h/2,["blaze","zornskin"]),this.p.combo+=1,this.p.flash=$.cols.blaze,_get(Object.getPrototypeOf(i.prototype),"kill",this).call(this))}},{key:"update",value:function(t){_get(Object.getPrototypeOf(i.prototype),"update",this).call(this,t),this.y+=this.vy*t,this.x+=this.vx*t,this.canChangeDir&&(this.changeDir-=10*t),this.doFlip-=10*t,this.doFlip<0&&(this.doFlip=1,this.flip.x=1===this.flip.x?0:1),(this.changeDir<0||this.x<=1||this.x>=this.g.w-this.w)&&(this.changeDir=$.H.rnd(2,7),this.vx*=-1),"drone"==this.i&&(this.vx+=50),this.y>this.g.h-this.h&&(this.p.gameOver?(this.g.emitter.particle(20,this.x,this.y,["bloodred"]),this.p.flash=$.cols.bloodred):(this.g.ents.push(new Explosion(this.g,{x:this.x,y:this.y,p:this,vy:100,magnitude:18,white:!0})),this.g.shake.start(30,20),this.g.emitter.particle(20,this.x,this.y,["blind"]),this.g.audio.play("explode"),this.p.lives-=1,this.p.flash="#fff"),_get(Object.getPrototypeOf(i.prototype),"kill",this).call(this))}},{key:"render",value:function(){this.shadow&&(this.g.ctx.globalAlpha=.5,this.g.ctx.drawImage(this.shadow,this.x,this.y+30),this.g.ctx.globalAlpha=1),_get(Object.getPrototypeOf(i.prototype),"render",this).call(this)}}]),i}(Sprite),Circle=function(t){function i(t,e){_classCallCheck(this,i),e.vx=0,e.vy=0,e.gravity=.1,e.scale=2,e.i="circle",e.group="fire";var s=_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e));return s.name="fire",s.alpha=1,s}return _inherits(i,t),_createClass(i,[{key:"update",value:function(){this.alpha-=.125,this.alpha<0&&this.kill()}},{key:"doDamage",value:function(t){this.kill()}},{key:"receiveDamage",value:function(t){this.kill()}},{key:"render",value:function(){this.i=this.iHurt,this.g.ctx.globalAlpha=this.alpha,_get(Object.getPrototypeOf(i.prototype),"render",this).call(this),this.g.ctx.globalAlpha=1}}]),i}(Sprite),Human=function(t){function i(t,e){return _classCallCheck(this,i),e.group="human",e.collidesWith="fire",e.frames=2,e.scale=4,e.i=$.H.rndArray(["dude","girl"]),e.y=e.y||0,e.vy=$.H.rnd(140,160),e.vx=$.H.rnd(0,300)-150,e.changeDir=0,e.doFlip=1,e.phrase=$.H.rndArray(["HELP","ARRGH","RUN"]),_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e))}return _inherits(i,t),_createClass(i,[{key:"init",value:function(){this.fader=0,this.f=this.g.mkFont("w",2),this.anims={run:{frames:[1,2],rate:100}},this.changeAnim("run")}},{key:"update",value:function(t){_get(Object.getPrototypeOf(i.prototype),"update",this).call(this,t),this.master&&!this.master.dead?(this.x>this.g.w-this.w&&(this.master.changeDir=0),this.x=this.master.x+this.offX,this.y=this.master.y-this.offY):(this.y+=this.vy*t,this.x+=this.vx*t,this.changeDir-=10*t),(this.changeDir<0||this.x<=1||this.x>=this.g.w-this.w)&&(this.changeDir=$.H.rnd(5,15),this.vx*=-1,this.flip.x=this.vx>0?0:1),this.y>this.g.h-this.h&&(this.p.gameOver||(this.p.score+=5,this.g.ents.push(new Text(this.g,{text:"THANKS",col:"w",accel:0,x:this.x,y:this.g.h,vy:10,vx:this.x>this.g.w/2?-100:100,scale:2}))),this.g.audio.play("jump"),_get(Object.getPrototypeOf(i.prototype),"kill",this).call(this)),this.fader=Math.sin(.005*(new Date).getTime())}},{key:"render",value:function(){_get(Object.getPrototypeOf(i.prototype),"render",this).call(this),this.fader>0&&this.g.draw.text(this.phrase,this.f,this.x,this.y-this.h/2)}},{key:"doDamage",value:function(t){t.alpha<.8||this.dead||(this.g.audio.play("die"),this.g.emitter.particle(5,this.x+this.w/2,this.y+this.h/2,["pigmeat","bloodred"]),this.p.splats.push({i:"skull",x:this.x,y:this.y}),this.p.lives-=1,_get(Object.getPrototypeOf(i.prototype),"kill",this).call(this))}}]),i}(Sprite),Text=function(t){function i(t,e){_classCallCheck(this,i),e.group="text",e.vy=e.vy||-220,e.vx=e.vx||0,e.w=10,e.w=10,e.o=1,e.scale=e.scale||4,e.col=e.col||"w",e.accel=e.accel||10;var s=_possibleConstructorReturn(this,Object.getPrototypeOf(i).call(this,t,e));return s.p=t.mkFont(e.col,e.scale),s}return _inherits(i,t),_createClass(i,[{key:"update",value:function(t){this.y<0&&this.kill(),this.vy-=this.accel,this.vx&&(this.x+=this.vx*t),this.y+=this.vy*t}},{key:"render",value:function(){this.text?this.g.draw.text(this.text,this.p,this.x,this.y):this.o&&this.g.ctx.drawImage(this.i,this.x,this.y)}}]),i}(Sprite),Static=function(){function t(i){arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,t),this.g=i,this.face=i.draw.scale(i.imgs.face,10),this.faceX=i.w/2-this.face.width/2,this.faceY=i.h/2-this.face.height/2,this.reset()}return _createClass(t,[{key:"update",value:function(t){this.ttl-=10*t}},{key:"render",value:function(){var t=void 0,i=void 0,e=void 0,s=this.g.ctx;if(this.ttl>0)for(t=0;t<500;t+=1)i=~~(Math.random()*this.g.w),e=~~(Math.random()*this.g.h),s.fillStyle=$.H.rndArray([$.cols.ash,$.cols.black]),s.fillRect(i,e+4,4,2);else this.ttl>-2&&(s.globalAlpha=.2,s.drawImage(this.face,this.faceX,this.faceY),s.globalAlpha=1,s.fillStyle=$.cols.slimegreen,s.fillRect(0,$.H.rnd(0,this.g.h),this.g.w,$.H.rnd(1,5)))}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]?10:arguments[0];this.g.audio.play("noise"),this.ttl=t}}]),t}(),Title=function(t){function i(){return _classCallCheck(this,i),_possibleConstructorReturn(this,Object.getPrototypeOf(i).apply(this,arguments))}return _inherits(i,t),_createClass(i,[{key:"init",value:function(){var t=this;this.g.hiScore||(this.g.hiScore=20),this.bgCol=$.cols.nightblue,this.title=this.g.mkFont("lg",6),this.titleShadow=this.g.mkFont("g",6),this.hi=this.g.mkFont("w",3),this.sm=this.g.mkFont("w",2),this.hiScore=parseInt(localStorage.getItem("hiScore"),10)||20,this.g.audio.say("DAY. OF. THE. GLITCH",1.2),this.sight=this.g.draw.scale(this.g.imgs.sight,4),this["static"]=new Static(this.g),this.g.ents.push(new Button(this.g,{y:380,triggerOnEnter:!0,col:$.cols.blaze,text:"PLAY",cb:function(){t.g.changeState("Play")}})),this.g.ents.push(new Button(this.g,{y:450,size:2,clickCol:"transparent",col:"transparent",text:"BY EOINMCG",cb:function(){window.location="//twitter.com/eoinmcg"}})),this.g.addEvent({time:2,cb:function(){t.reGlitch()}})}},{key:"update",value:function(t){_get(Object.getPrototypeOf(i.prototype),"update",this).call(this,t),this["static"].update(t)}},{key:"render",value:function(){this.g.draw.clear(this.bgCol),this["static"].render(),this.g.ctx.globalAlpha=.4,this.g.draw.text("HI",this.hi,20,20),this.g.draw.text(this.hiScore,this.hi,60,20),this.g.ctx.globalAlpha=1,this.g.draw.text("DAY OF THE",this.title,!1,60,{f:this.titleShadow,offset:2}),this.g.draw.text("GLITCH",this.title,!1,105,{f:this.titleShadow,offset:2});var t=!0,i=!1,e=void 0;try{for(var s,h=this.g.ents[Symbol.iterator]();!(t=(s=h.next()).done);t=!0){var a=s.value;a.render()}}catch(n){i=!0,e=n}finally{try{!t&&h["return"]&&h["return"]()}finally{if(i)throw e}}this.g.ctx.drawImage(this.sight,this.g.input.m.x-15,this.g.input.m.y-15)}},{key:"reGlitch",value:function(){var t=this;this["static"].reset(),this.g.addEvent({time:$.H.rnd(1,3)/2,cb:function(){t.reGlitch()}})}}]),i}(State),Play=function(t){function i(){return _classCallCheck(this,i),_possibleConstructorReturn(this,Object.getPrototypeOf(i).apply(this,arguments))}return _inherits(i,t),_createClass(i,[{key:"init",value:function(){this.bgCol=$.cols.nightblue,this.bgCol=!1,this.floor=this.g.mkFont("w",10),this.h1=this.g.mkFont("w",7),this.p=this.g.mkFont("r",6),this.pS=this.g.mkFont("p",6),this.hi=this.g.mkFont("w",3),this.charge=0,this.maxCharge=140,this.chargeRate=15,this.shootDelay=2,this.waveMgr=new WaveMgr(this.g,{p:this}),this.heart=this.g.draw.scale(this.g.imgs.heart,4),this.score=0,this.hiScore=parseInt(localStorage.getItem("hiScore"),10)||20,this.newHi=!1,this.holding=!1,this.lastClick=!1,this.combo=0,this.g.audio.say("RESISTANCE IS FUTILE!"),this.sight=this.g.draw.scale(this.g.imgs.sight,4),this["static"]=new Static(this.g,{
ttl:-20}),this.lives=3,this.gameOver=!1,this.flash=0,this.splats=[],this.splatImgs={skull:this.g.draw.scale(this.g.imgs.skull,3),mark:this.g.draw.scale(this.g.imgs.mark,6)},this.wave=0,this.waveComplete=!1,this.nextWave()}},{key:"update",value:function(t){this.flash=0,_get(Object.getPrototypeOf(i.prototype),"update",this).call(this,t),this["static"].update(t),this.lives<0&&!this.gameOver&&this.gameOverSequence(),this.score>this.hiScore&&!this.newHi&&(this.newHi=!0,this.g.audio.say("NEW HISCORE!"),this.g.ents.push(new Text(this.g,{text:"NEW HISCORE",col:"p",accel:0,x:90,y:this.g.h,vy:10}))),this.checkWave(),!this.gameOver&&this.lastClick&&this.charge<this.maxCharge&&this.shootDelay<=0?(this.charge+=this.chargeRate,this.shootDelay=2,this.g.audio.play("shoot"),this.g.ents.push(new Circle(this.g,{x:this.g.input.m.x-5,y:this.g.input.m.y-5}))):this.lastClick||(this.charge-=this.chargeRate),this.charge<0?this.charge=0:this.charge>this.maxCharge&&(this.charge=this.maxCharge),this.lastClick=this.g.input.m.click,this.holding=!(!this.g.input.m.click||!this.lastClick),this.shootDelay-=1,this.holding||(this.combo>2&&(this.g.audio.play("coin"),this.g.audio.say("COMBO! "+this.combo),this.g.ents.push(new Text(this.g,{text:"COMBO",col:"g",x:120,y:this.g.h-180})),this.g.ents.push(new Text(this.g,{text:this.combo,col:"g",x:150,y:this.g.h-140}))),this.combo=0)}},{key:"render",value:function(){var t=(this.g.input.m,void 0),e=void 0;for(this.g.ctx.drawImage(this.g.imgs.floor,0,0),e=0;e<this.splats.length;e+=1)t=this.splats[e],this.g.ctx.drawImage(this.splatImgs[t.i],t.x,t.y);for(_get(Object.getPrototypeOf(i.prototype),"render",this).call(this),this.g.ctx.globalAlpha=.05,this.g.draw.text("FLOOR",this.floor,70,100),this.g.draw.text(this.wave,this.floor,150,160),this.g.ctx.globalAlpha=1,this.g.draw.text(this.score,this.hi,this.g.w-20-12*this.score.toString().length,this.g.h-30),this.g.draw.rect(20,20,this.g.w-40,20,"#000"),this.g.draw.rect(20,20,2*this.charge,20,$.cols.bloodred),e=0;e<this.lives;e+=1)this.g.ctx.drawImage(this.heart,20+27*e,this.g.h-30);this.gameOver&&this.fader>0&&this.g.draw.text("GAME OVER",this.pS,!1,200,{f:this.p,offset:2}),this.flash&&this.g.draw.rect(0,0,this.g.w,this.g.h,this.flash),this.g.ctx.drawImage(this.sight,this.g.input.m.x-15,this.g.input.m.y-15),this["static"].render()}},{key:"gameOverSequence",value:function(){for(var t=this,i=this.g.ents.length;i--;)"human"==this.g.ents[i].group&&this.g.ents[i].doDamage({alpha:1});this.gameOver=!0,this.g.audio.say("GAME! OVER!"),this.waveMgr.robos=$.H.shuffle(this.waveMgr.robos),this.newHi&&localStorage.setItem("hiScore",this.score),this.g.addEvent({time:1,cb:function(){t.g.audio.say("HA! HA! GOOD GAME... FOR A HUMAN!"),t.startButton=t.g.ents.push(new Button(t.g,{y:280,triggerOnEnter:!0,col:$.cols.blaze,state:"Play",text:"RETRY",cb:function(){t.g.audio.play("tap"),t.g.changeState("Play")}})),t.quitButton=t.g.ents.push(new Button(t.g,{y:360,col:$.cols.skyblue,state:"Title",text:"TWEET",cb:function(){location="https://twitter.com/intent/tweet?&text=I+scored+"+t.score+"+in+Day+Of+The+Glitch&via=eoinmcg&url="+encodeURI(location.href)}}))}})}},{key:"checkWave",value:function(){var t=this.g.ents.length,i=0;if(this.inWave<=0&&!this.waveComplete){for(;t--;)"baddie"!==this.g.ents[t].group&&"human"!==this.g.ents[t].group||(i+=1);i<=0&&(this.waveComplete=!0,this["static"].reset(),this.nextWave())}}},{key:"nextWave",value:function(){var t=this;this.wave>0&&this.g.audio.play("glitch"),this.splats=[],this.g.addEvent({time:.7,cb:function(){t.gameOver||(t.wave+=1,t.waveComplete=!1,t.waveMgr.nextWave(),t.spawn())}})}},{key:"spawn",value:function(){this.gameOver||this.inWave<=0||this.waveMgr.spawn()}}]),i}(State);