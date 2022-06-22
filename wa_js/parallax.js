/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
;(function(e,d,a,g){(function(){var i=0;var j=["ms","moz","webkit","o"];for(var h=0;h<j.length&&!d.requestAnimationFrame;++h){d.requestAnimationFrame=d[j[h]+"RequestAnimationFrame"];d.cancelAnimationFrame=d[j[h]+"CancelAnimationFrame"]||d[j[h]+"CancelRequestAnimationFrame"]}if(!d.requestAnimationFrame){d.requestAnimationFrame=function(n){var k=new Date().getTime();var l=Math.max(0,16-(k-i));var m=d.setTimeout(function(){n(k+l)},l);i=k+l;return m}}if(!d.cancelAnimationFrame){d.cancelAnimationFrame=function(k){clearTimeout(k)}}}());function f(k,j){var i=this;if(typeof j=="object"){delete j.refresh;delete j.render;e.extend(this,j)}this.$element=e(k);if(!this.imageSrc&&this.$element.is("img")){this.imageSrc=this.$element.attr("src")}var h=(this.position+"").toLowerCase().match(/\S+/g)||[];if(h.length<1){h.push("center")}if(h.length==1){h.push(h[0])}if(h[0]=="top"||h[0]=="bottom"||h[1]=="left"||h[1]=="right"){h=[h[1],h[0]]}if(this.positionX!=g){h[0]=this.positionX.toLowerCase()}if(this.positionY!=g){h[1]=this.positionY.toLowerCase()}i.positionX=h[0];i.positionY=h[1];if(this.positionX!="left"&&this.positionX!="right"){if(isNaN(parseInt(this.positionX))){this.positionX="center"}else{this.positionX=parseInt(this.positionX)}}if(this.positionY!="top"&&this.positionY!="bottom"){if(isNaN(parseInt(this.positionY))){this.positionY="center"}else{this.positionY=parseInt(this.positionY)}}this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px");if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){if(this.imageSrc&&this.iosFix&&!this.$element.is("img")){this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position})}return this}if(navigator.userAgent.match(/(Android)/)){if(this.imageSrc&&this.androidFix&&!this.$element.is("img")){this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position})}return this}this.$mirror=e("<div />").prependTo("body");var l=this.$element.find(">.parallax-slider");var m=false;if(l.length==0){this.$slider=e("<img />").prependTo(this.$mirror)}else{this.$slider=l.prependTo(this.$mirror);m=true}this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"});this.$slider.addClass("parallax-slider").one("load",function(){if(!i.naturalHeight||!i.naturalWidth){i.naturalHeight=this.naturalHeight||this.height||1;i.naturalWidth=this.naturalWidth||this.width||1}i.aspectRatio=i.naturalWidth/i.naturalHeight;f.isSetup||f.setup();f.sliders.push(i);f.isFresh=false;f.requestRender()});if(!m){this.$slider[0].src=this.imageSrc}if(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||l.length>0){this.$slider.trigger("load")}}e.extend(f.prototype,{speed:0.2,bleed:0,zIndex:-100,iosFix:true,androidFix:true,position:"center",overScrollFix:false,refresh:function(){this.boxWidth=this.$element.outerWidth();this.boxHeight=this.$element.outerHeight()+this.bleed*2;this.boxOffsetTop=this.$element.offset().top-this.bleed;this.boxOffsetLeft=this.$element.offset().left;this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var j=f.winHeight;var k=f.docHeight;var l=Math.min(this.boxOffsetTop,k-j);var n=Math.max(this.boxOffsetTop+this.boxHeight-j,0);var h=this.boxHeight+(l-n)*(1-this.speed)|0;var i=(this.boxOffsetTop-l)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0;this.imageHeight=h;this.offsetBaseTop=i;var m=this.imageWidth-this.boxWidth;if(this.positionX=="left"){this.offsetLeft=0}else{if(this.positionX=="right"){this.offsetLeft=-m}else{if(!isNaN(this.positionX)){this.offsetLeft=Math.max(this.positionX,-m)}else{this.offsetLeft=-m/2|0}}}}else{this.imageWidth=this.boxWidth;this.imageHeight=this.boxWidth/this.aspectRatio|0;this.offsetLeft=0;var m=this.imageHeight-h;if(this.positionY=="top"){this.offsetBaseTop=i}else{if(this.positionY=="bottom"){this.offsetBaseTop=i-m}else{if(!isNaN(this.positionY)){this.offsetBaseTop=i+Math.max(this.positionY,-m)}else{this.offsetBaseTop=i-m/2|0}}}}},render:function(){var j=f.scrollTop;var k=f.scrollLeft;var h=this.overScrollFix?f.overScroll:0;var i=j+f.winHeight;if(this.boxOffsetBottom>j&&this.boxOffsetTop<=i){this.visibility="visible";this.mirrorTop=this.boxOffsetTop-j;this.mirrorLeft=this.boxOffsetLeft-k;this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)}else{this.visibility="hidden"}this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-h,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth});this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}});e.extend(f,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:false,isFresh:false,isBusy:false,setup:function(){if(this.isReady){return}var k=e(a),j=e(d);var i=function(){f.winHeight=j.height();f.winWidth=j.width();f.docHeight=k.height();f.docWidth=k.width()};var h=function(){var l=j.scrollTop();var m=f.docHeight-f.winHeight;var n=f.docWidth-f.winWidth;f.scrollTop=Math.max(0,Math.min(m,l));f.scrollLeft=Math.max(0,Math.min(n,j.scrollLeft()));f.overScroll=Math.max(l-m,Math.min(l,0))};j.on("resize.px.parallax load.px.parallax",function(){i();f.isFresh=false;f.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){h();f.requestRender()});i();h();this.isReady=true},configure:function(h){if(typeof h=="object"){delete h.refresh;delete h.render;e.extend(this.prototype,h)}},refresh:function(){e.each(this.sliders,function(){this.refresh()});this.isFresh=true},render:function(){this.isFresh||this.refresh();e.each(this.sliders,function(){this.render()})},requestRender:function(){var h=this;if(!this.isBusy){this.isBusy=true;d.requestAnimationFrame(function(){h.render();h.isBusy=false})}},destroy:function(j){var h,k=e(j).data("px.parallax");k.$mirror.remove();for(h=0;h<this.sliders.length;h+=1){if(this.sliders[h]==k){this.sliders.splice(h,1)}}e(j).data("px.parallax",false);if(this.sliders.length===0){e(d).off("scroll.px.parallax resize.px.parallax load.px.parallax");this.isReady=false;f.isSetup=false}}});function c(h){return this.each(function(){var j=e(this);var i=typeof h=="object"&&h;if(this==d||this==a||j.is("body")){f.configure(i)}else{if(!j.data("px.parallax")){i=e.extend({},j.data(),i);j.data("px.parallax",new f(this,i))}else{if(typeof h=="object"){e.extend(j.data("px.parallax"),i)}}}if(typeof h=="string"){if(h=="destroy"){f.destroy(this)}else{f[h]()}}})}var b=e.fn.parallax;e.fn.parallax=c;e.fn.parallax.Constructor=f;e.fn.parallax.noConflict=function(){e.fn.parallax=b;return this};e(a).on("ready.px.parallax.data-api",function(){e('[data-parallax="scroll"]').parallax()})}(jQuery,window,document));