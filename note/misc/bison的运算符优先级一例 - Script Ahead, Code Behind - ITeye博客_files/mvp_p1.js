var mediav=window.mediav||{};var mvproduct=window.mvproduct||{};(function(){mvproduct.makep1=function(data,width,height,config,mvas,mvtjs,mvax){var pubid=(mvas!=null)?mvas:(Math.random()).toString().slice(2),num=data.length,css,html,groupInfo,outerDiv="outerdiv_"+Math.floor(Math.random()*100+1)+"_"+mvas,stopFlag=(window["mvext_"+mvas]&&window["mvext_"+mvas].framing&&(window["mvext_"+mvas].framing==1))?1:0,adx=(mvax!=null)?mvax:0,clickUrl="";if(adx=="max"){var lsid="s6a9c455f9f"}else{var lsid="s18bc455e9e"}var defaultProducts=[{desc:"自动煎饼机",price:9.9,pid:77880,curl:"https://www.so.com/s?src=lm&q=自动煎饼机&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t019317e0acbd737ade.jpg"},{desc:"装修木工材料",price:9.9,pid:43191,curl:"https://www.so.com/s?src=lm&q=装修木工材料&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t0122f0b93972a6bc0f.jpg"},{desc:"中式汉堡加盟",price:9.9,pid:135574,curl:"https://www.so.com/s?src=lm&q=中式汉堡加盟&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t0189f67f5463d09001.jpg"},{desc:"男夹克外套",price:9.9,pid:2498,curl:"https://www.so.com/s?src=lm&q=男夹克外套&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01ce75e956bb149df2.jpg"},{desc:"真皮羽绒服男",price:9.9,pid:51050,curl:"https://www.so.com/s?src=lm&q=真皮羽绒服男&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t015071b45efd17d54d.jpg"},{desc:"长款羽绒服女",price:9.9,pid:72736,curl:"https://www.so.com/s?src=lm&q=长款羽绒服女&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01299fa1715e5cd975.jpg"},{desc:"麻辣烫加盟",price:9.9,pid:344,curl:"https://www.so.com/s?src=lm&q=麻辣烫加盟&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01219c36703396719a.jpg"},{desc:"羊绒外套女短款",price:9.9,pid:23881,curl:"https://www.so.com/s?src=lm&q=羊绒外套女短款&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t017107cbf43748a786.jpg"},{desc:"羊绒大衣",price:9.9,pid:13339,curl:"https://www.so.com/s?src=lm&q=羊绒大衣&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t012a3cd0b331450b17.jpg"},{desc:"雪纺长袖上衣",price:9.9,pid:132893,curl:"https://www.so.com/s?src=lm&q=雪纺长袖上衣&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01fdd119350ee10a1d.jpg"},{desc:"双面羊绒大衣女",price:9.9,pid:24423,curl:"https://www.so.com/s?src=lm&q=双面羊绒大衣女&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01770b3c946b201e9f.jpg"},{desc:"一鸣真鲜奶吧",price:9.9,pid:138894,curl:"https://www.so.com/s?src=lm&q=一鸣真鲜奶吧&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01460baa18a3930b9f.jpg"},{desc:"轻薄羽绒服女",price:9.9,pid:46034,curl:"https://www.so.com/s?src=lm&q=轻薄羽绒服女&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01f04b296010cd9edd.jpg"},{desc:"皮毛一体皮衣",price:9.9,pid:97089,curl:"https://www.so.com/s?src=lm&q=皮毛一体皮衣&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01ea3bf45c2da0cfca.jpg"},{desc:"欧普集成吊顶",price:9.9,pid:13129,curl:"https://www.so.com/s?src=lm&q=欧普集成吊顶&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/277_198_100/t019dcf86859bc75371.jpg"},{desc:"女羽绒服短款新",price:9.9,pid:125634,curl:"https://www.so.com/s?src=lm&q=女羽绒服短款新&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01826bc848dc2cafcd.jpg"},{desc:"女毛呢外套",price:9.9,pid:5408,curl:"https://www.so.com/s?src=lm&q=女毛呢外套&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t017b5404f3b267caf6.jpg"},{desc:"农村致富好项目",price:9.9,pid:25701,curl:"https://www.so.com/s?src=lm&q=农村致富好项目&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t01f25c1cf21430d750.jpg"},{desc:"耐克夹克外套男",price:9.9,pid:60368,curl:"https://www.so.com/s?src=lm&q=耐克夹克外套男&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t0109f854bb18519faa.jpg"},{desc:"美国房产投资",price:9.9,pid:1058,curl:"https://www.so.com/s?src=lm&q=美国房产投资&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t0175b627880ae2fdfc.jpg"},{desc:"玛瑙手镯的鉴别",price:9.9,pid:147618,curl:"https://www.so.com/s?src=lm&q=玛瑙手镯的鉴别&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t0186af5c33f2886dce.jpg"},{desc:"老年代步车",price:9.9,pid:139820,curl:"https://www.so.com/s?src=lm&q=老年代步车&lm_extend=ctype:7&ls="+lsid,img:"http://p0.qhimg.com/dmsmty/280_200_100/t016e1aa6a1edaea75e.jpg"}];var today=new Date();var date=today.getDate();var month=today.getMonth()+1;var year=today.getFullYear();var remoteDefaultProducts={url:"https://s3m.mediav.com/datashare/dormer.js?t="+year+month+date,callbackName:"get360mvDormerAd",appendCallbackName:false};window.handlers=window.handlers||{};window.handlers[pubid]=function(remoteData){if(remoteData){var allData=[];for(var property in remoteData){if(remoteData.hasOwnProperty(property)){for(var j=0;j<remoteData[property].length;j++){remoteData[property][j].imgw="160";remoteData[property][j].imgh="160";allData.push(remoteData[property][j])}}}}else{allData=defaultProducts}data.ads=data.ads.sort(function(a,b){return a.slot-b.slot}).concat(util.shuffle(allData));renderProducts()};util.getJSONP(remoteDefaultProducts.url,remoteDefaultProducts.callbackName,function(remoteData){for(var property in window.handlers){if(window.handlers.hasOwnProperty(property)){window.handlers[property](remoteData);delete window.handlers[property]}}},remoteDefaultProducts.appendCallbackName);if(mediav.ad&&mediav.ad.status[pubid]=="stop"){return}function renderProducts(){config.slogan&&(config.slogan=util.transferNCR(config.slogan));css=layout.buildCss(outerDiv,width,height,config);layout.appendStyle(css,"mvCss_"+outerDiv);impurl=data.impurl;data=util.transferNCR(data.ads);layout.changeData(data,config);config.curl=clickUrl||"javascript:void(0);";html=layout.buildHtml(mvas,outerDiv,width,height,data);if(config.entity=="dsp"){layout.write(mvas,html,mvtjs)}else{var productroot=util.G("mvdiv_"+pubid);if(productroot){productroot.innerHTML=html;productroot.style.display="block"}else{layout.write(mvas,html,mvtjs)}}new Slider(outerDiv,layout.blockWidth,stopFlag).start();util.monitorClick(outerDiv,clickUrl,width,height);util.trackClick(outerDiv,data);if(impurl!=undefined){util.trackImp(outerDiv,data,impurl)}}};mvproduct.makep1.version="1.0.3";function Slider(root,blockWidth,stopFlag){var root=this.root=util.G(root);this.slider=util.getByClass("mv_info_list",root)[0];this.infoItem=util.getByClass("mv_info_item",root);this.item=util.getByClass("mv_item",root);this.timeout=5000;this.duration=(stopFlag==1)?30000:0;this.pointer=0;this.scrollNum=0;this.direction="top";this.blockWidth=blockWidth||0;this.addMouseEvent();this.invoke(0)}Slider.prototype={constructor:Slider,start:function(){var self=this;this.intervalId=setInterval(function(){self.next()},this.timeout)},stop:function(){clearInterval(this.intervalId)},invoke:function(n){this.reset();if(this.item[n]){this.pointer=n||0;this.animateIn(n)}},next:function(){if(this.pointer>=this.item.length-1){this.pointer=-1}this.invoke(this.pointer+1);this.scrollNum+=1},addMouseEvent:function(){var i,len,b,item,bDelay,_this,iDelay,recommend,self=this;this.priceMask=util.getByClass("mv_price",this.root),this.infoMask=util.getByClass("mv_item_mask",this.root);this.imgArea=util.getByClass("mv_imgArea",this.root);this.mvBorder=util.getByClass("mv_border",this.root)[0];this.mvSlider=util.getByClass("mv_slider",this.root)[0];this.mvItemLinks=util.getByClass("mv_itemLink",this.root)||[];util.addEvent(this.mvBorder,"click",function(){util.open("http://wan.spro.so.com/")});util.addEvent(this.mvSlider,"click",function(){util.open("http://wan.spro.so.com/")});for(var i=0,len=this.mvItemLinks.length;i<len;i++){util.addEvent(this.mvItemLinks[i],"click",function(event){window.event?window.event.cancelBubble=true:event.stopPropagation()})}for(i=0,len=this.item.length;i<len;i+=1){item=this.item[i];item.index=i;if(item){item.onmouseover=function(e){_this=this;if(self.checkHover(e,this)){self.stop();self.invoke(_this.index);if(self.slider&&self.infoItem[_this.index]){self.infoItem[_this.index].style.display="block"}}};item.onmouseout=function(e){if(self.checkHover(e,this)){if(!self.slider){}self.start()}}}}if(this.slider){this.slider.onmouseover=function(e){if(self.checkHover(e,this)){self.stop()}};this.slider.onmouseout=function(e){if(self.checkHover(e,this)){self.animateDown();self.start()}}}},reset:function(){var i,s,b,len=this.item.length;for(i=0;i<len;i+=1){if(this.infoMask[i]&&this.priceMask[i]){this.infoMask[i].style.display="none";this.priceMask[i].style.display="block";util.removeClass(this.priceMask[i],"active");util.removeClass(this.imgArea[i],"active")}s=this.infoItem[i];s&&(s.style.display="none")}},animateIn:function(index){if(this.priceMask[index]&&this.infoMask[index]){util.addClass(this.priceMask[index],"active");util.addClass(this.imgArea[index],"active")}},animateOut:function(index){if(this.priceMask[index]&&this.infoMask[index]){this.infoMask[index].style.display="none";util.removeClass(this.priceMask[index],"active");util.removeClass(this.imgArea[index],"active")}},checkHover:function(e,target){if(this.getEvent(e).type=="mouseover"){return !this.contains(target,this.getEvent(e).relatedTarget||this.getEvent(e).fromElement)&&!((this.getEvent(e).relatedTarget||this.getEvent(e).fromElement)===target)}else{return !this.contains(target,this.getEvent(e).relatedTarget||this.getEvent(e).toElement)&&!((this.getEvent(e).relatedTarget||this.getEvent(e).toElement)===target)}},getEvent:function(e){return e||window.event},contains:function(parentNode,childNode){if(parentNode.contains){return parentNode!=childNode&&parentNode.contains(childNode)}else{return !!(parentNode.compareDocumentPosition(childNode)&16)}},animateDown:function(){var startVal,sobj={},aobj={},self=this;if(this.animateLoading||!this.slider){return}this.animateLoading=true;sobj[this.direction]=startVal=parseInt(this.slider.style[this.direction])||0;if(startVal==0){startVal=this.blockWidth}aobj[this.direction]=-startVal;this.animate(this.slider,sobj,aobj,200,this.easeOut,function(){self.animateLoading=false})},animate:function(o,start,alter,dur,fx,callback){var fx=fx||this.easeOut;var curTime=0;var t=setInterval(function(){curTime+=40;for(var i in start){o.style[i]=fx(start[i],alter[i],curTime,dur)+"px"}if(curTime>=dur){clearInterval(t);if(callback){callback()}}},40);return function(){clearInterval(t)}},easeOut:function(start,alter,curTime,dur){var progress=curTime/dur;return Math.ceil(start-(Math.pow(progress,2)-2*progress)*alter)}};var layout={changeData:function(data,config){var w=this.pimgSize?this.pimgSize.width:1,h=this.pimgSize?this.pimgSize.height:1,bw=this.pimgSize?this.pimgSize.bWidth:1,bh=this.pimgSize?this.pimgSize.bHeight:1,isRmb=!config.currencySymbol||config.currencySymbol=="\uffe5",i,pn,bn,tmp;for(i=0;i<data.length;i++){if(config.imgflag&&(config.imgflag==1)){data[i].timg=data[i].pimg||data[i].timg}data[i].timg=data[i].timg||"http://material.mediav.com/product/images/1x1.gif";data[i].pn=data[i].desc;data[i].timg=data[i].img;data[i].curl=data[i].curl1||data[i].curl;data[i].cpurl=data[i].cpurl1||data[i].cpurl||"javascript:void(0)";if(data[i]["price"]){data[i]["price"]=util.fixPrice(data[i]["price"],isRmb)}if(data[i]["pn"]&&this.pnLength){pn=String(data[i]["pn"]);data[i]["opn"]=pn;data[i]["pn"]=util.getFixedText(pn,this.pnLength,"...")}if(!(data[i]["width"]&&data[i]["height"])){data[i]["width"]=160;data[i]["height"]=160}tmp=this.pimgResize(data[i],w,h);data[i]["swidth"]=tmp.width;data[i]["sheight"]=tmp.height;tmp=this.pimgResize(data[i],bw,bh);data[i]["bwidth"]=tmp.width;data[i]["bheight"]=tmp.height}return data},pimgResize:function(data,width,height){var ow=parseInt(data.width),oh=parseInt(data.height),w,h;if(!(ow&&oh)){w=width;h=height}else{if(ow/oh>width/height){w=width;h=parseInt(oh/ow*w)}else{h=height;w=parseInt(ow/oh*h)}}return{width:w,height:h}},template:function(html,data,type){var html=String(html),replacer="";return html.replace(/#\{(.+?)\}/g,function(match,key){var keys=type?key:key.split("_");try{if(type){replacer=isNaN(data[keys])?data[keys]:data[keys]+"px"}else{replacer=data[keys[0]][keys[1]]}if("[object Function]"===Object.prototype.toString.call(replacer)){replacer=replacer(key)}}catch(e){}return("undefined"===typeof replacer?"":replacer)})},write:function(mvas,html,js){var newTag=document.getElementById("mvdiv_"+mvas+"_holder");if(!newTag){var newTag=document.createElement("div")}var s=document.getElementsByTagName("script"),len=s.length,writeFlag=false,c,i;newTag.id="mvdiv_"+mvas+"_holder";newTag.innerHTML=html;for(i=0;i<len;i++){if(s[i].src&&s[i].src==js){c=s[i];c.parentNode.insertBefore(newTag,c);writeFlag=true;break}}if(!writeFlag){document.body.appendChild(newTag)}},appendStyle:function(style,cssID){var cssNode=document.createElement("style"),cssTextNode;cssNode.type="text/css";cssNode.rel="stylesheet";cssNode.id=cssID;document.getElementsByTagName("head")[0].appendChild(cssNode);if(cssNode.styleSheet){cssNode.styleSheet.cssText=style}else{cssTextNode=document.createTextNode(style);cssNode.appendChild(cssTextNode)}},buildHtml:function(tid,outerDiv,width,height,data){var h=[],s="";this.data=data;if(!this.verifyWH(this.type,width,height)){return"尺寸不合法"}h.push('<div id="banner_'+tid+'" style="position:relative;width:'+width+"px;height:"+height+'px;">');h.push('<div id="'+outerDiv+'">');h.push('<div class="mv_border"></div>');h.push('<div class="mv_header"><div><span>今日推荐</span></div></div>');h.push('<div class="mv_outer">');h.push('<div class="mv_content">');h.push("<ul>");h.push(this.buildItem(data.length));h.push("</ul>");h.push("</div>");h.push("</div>");h.push("</div>");h.push("</div>");return this.template(h.join(""),data)},buildInfoList:function(start,len){var h=[],len=Math.min(this.displayNum,len)||0,currencySymbol=this.config.currencySymbol||"\uffe5",i,j;return h.join("")},buildItem:function(len){var h=[],tmp,len=len||0;tmp=this.buildItemHtml(0,Math.min(this.displayNum,len));h.push('<li class="mv_slider">');h.push(tmp);h.push("</li>");return h.join("")},buildItemHtml:function(start,len){var h=[],currencySymbol=this.config.currencySymbol||"\uffe5",i,j,index,recommend,showVt=this.config.showvt||0,slogan=(this.config.slogan||"");for(i=start,j=i+len;i<j;i++){var isLeft=0;if(i%2===0){isLeft=1}h.push('<a class="mv_itemLink '+(isLeft===1?"mv_left":"")+'" href="#{'+i+'_curl}" title="#{'+i+'_opn}" target="_blank">');h.push('<div class="mv_item">');h.push('<div class="mv_imgArea">');h.push('<div class="mv_itemImg">');h.push('<span></span><img id="#{'+i+'_slot}" class="#{'+i+'_slot}" style="width:#{'+i+"_swidth}px;height:#{"+i+'_sheight}px;" src="#{'+i+'_timg}"/>');h.push("</div>");h.push('<div class="mv_price_mask"><div class="mv_price">#{'+i+'_pn}</div><div class="mv_price_txt">'+currencySymbol+"#{"+i+"_price}</div></div>");h.push('<div class="mv_item_mask">');h.push('<div class="mv_itemBg"></div>');h.push('<div class="mv_slogan">'+slogan+"</div>");h.push("</div>");h.push("</div></div></a>")}return h.join("")},buildCss:function(tid,width,height,config){var css=[],type=this.type=this.getLayoutType(width,height),i,defaults={bgColor:"#FFFFFF",bdColor:"#eee",bdWidthSize:"2",priceColor:"#fff",fontFamily:"SimSun",sloganColor:"#e4393c",secFrameBgColor:"#E4393C",descColor:"#FFFFFF",itemBdColor:"#eee"},tempData=this.createCssConfig(width,height,config.bdWidthSize||defaults.bdWidthSize),boldStyle={priceBold:"bold",descBold:"bold",sloganBold:"bold"},boldName={"0":"normal","1":"bold"};this.config=config||{};for(i in defaults){tempData[i]=config[i]||defaults[i]}for(var i in boldStyle){tempData[i]=boldName[config[i]]||boldStyle[i]}this.pimgSize={width:tempData.imgW,height:tempData.imgH,bWidth:tempData.bimgW,bHeight:tempData.bimgH};this.displayNum=tempData.displayNum;if(type=="s"){maskUrl="http://material.mediav.com/product/images/mask_112x112.png";this.config.slogan=this.config.slogan&&util.getFixedText(this.config.slogan,6,"")}else{maskUrl="http://material.mediav.com/product/images/mask_86x86.png";this.config.slogan=this.config.slogan&&util.getFixedText(this.config.slogan,5,"")}if(!tempData){return""}this.fixQuirks(tempData);css.push("#"+tid+"{position:relative;font-size:12px;margin:0;padding:0;display:block;float:none;-webkit-text-size-adjust:none;border-spacing:0px;}");css.push("#"+tid+" *{background:none;margin:0;padding:0;}");css.push("#"+tid+" div{display:block;float:none;}");css.push("#"+tid+" a{text-decoration:none;cursor:pointer;display:block;}");css.push("#"+tid+" a{outline:none;blr:expression(this.onFocus=this.blur());}");css.push("#"+tid+" a:focus {outline:none;}");css.push("#"+tid+" img{border:none;display:inline;}");css.push("#"+tid+" ul{list-style:none;}");css.push("#"+tid+" div:after{display:none;}");css.push("#"+tid+" div:before{display:none;}");css.push("#"+tid+"{width:#{z1};height:#{z2};background-color:#{bgColor};border:#{a3} solid #{bdColor};font-family:#{fontFamily}}");css.push("#"+tid+" .mv_content, #"+tid+" .mv_outer{width:#{d1};height:#{d2};position:relative;overflow:hidden;display:inline-block;*display: inline;*zoom:1;}");css.push("#"+tid+" .mv_border{cursor:pointer;width:#{e5};height:#{e6};position:absolute;left:0px;top:0px;border:#{a4} solid #{bdColor};}");css.push("#"+tid+" .mv_header{float:left;font-size:#{y3};width:#{y1};height:#{y2};display:inline-block;*display: inline;*zoom:1;background-color:#7cbc32;text-align:center;color:#fff;}");css.push("#"+tid+" .mv_header div{margin-top:#{y5};margin-right:#{y4};width:100%;height:100%;text-align: center;display: table;vertical-align: middle;}");css.push("#"+tid+" .mv_header span{width:100%;height:100%;}");if(type=="h"){css.push("#"+tid+" .mv_header{writing-mode: tb-rl;-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;*writing-mode: tb-rl;}")}css.push("#"+tid+" .mv_slider{cursor:pointer;width:#{e1};height:#{e2};margin:#{e3} #{e4};}");css.push("#"+tid+" .mv_itemLink{padding:#{f3} #{f4} #{f5} #{f6};display:block;float:left;}");css.push("#"+tid+" .mv_itemLink.mv_left{padding-right:#{f7};}");css.push("#"+tid+" .mv_item{width:#{f1};height:#{f2};}");css.push("#"+tid+" .mv_imgArea{background-color:#fff;border:#{g3} solid #{itemBdColor};width:#{g1};height:#{g2};position:relative;overflow:hidden;}");css.push("#"+tid+" .mv_itemImg{width:#{h1};height:#{h2};display:table-cell;vertical-align:middle;text-align:center;overflow:hidden;}");css.push("#"+tid+" .mv_itemImg span{vertical-align:middle;*display:inline-block;*height:100%;}");css.push("#"+tid+" .mv_itemImg img{vertical-align:middle;}");css.push("#"+tid+" .mv_price {width:#{i1};height:#{i2};line-height:#{i2};bottom: 0px;left: 0px;background-color:#fff;color:#000;text-align: center;position: absolute;}");css.push("#"+tid+" .mv_price.active {color: #44b04e;}");css.push("#"+tid+" .mv_imgArea.active {border-color: #44b04e;}");css.push("#"+tid+" .mv_price_txt {display:none;background-color:#7cbc32;height:#{i9};line-height:#{i9};bottom:#{i2};right:0px;font-size:#{i6};color:#{priceColor};font-weight:#{priceBold};font-family:Arial;position: absolute;text-align: center;border-radius:#{i7};padding-left:#{i7};padding-right:#{i7};");css.push("#"+tid+" .mv_item_mask {display: none;}");css.push("#"+tid+" .mv_itemBg {width:#{l1};height:#{l2};left:#{l3};top:#{l4};position: absolute;background: url("+maskUrl+") no-repeat scroll 0 0 transparent;}");css.push("#"+tid+" .mv_slogan {width:#{m1};height:#{m2};line-height:#{m3};color:#{sloganColor};font-weight:#{sloganBold};font-size: 12px;text-align:center;position:absolute;left:0px;top:0px;}");css.push("#"+tid+" .mv_info_list{width:#{n1};height:#{n2};border:#{n3} solid #{secFrameBgColor};position: absolute;left:0px;top:0px;}");css.push("#"+tid+" .mv_info_item{display:none;}");css.push("#"+tid+" .mv_info_item a {display: block;}");css.push("#"+tid+" .mv_pic_area{width:#{o1};height:#{o2};overflow:hidden;position:relative;}");css.push("#"+tid+" .mv_pic_bg{width:#{o1};height:#{o2};background-color:#FFFFFF;}");css.push("#"+tid+" .mv_pic_content{width:#{p1};height:#{p2};position:absolute;top:#{p3};left:#{p4};z-index:10;}");css.push("#"+tid+" .mv_pic{width:#{p1};height:#{p2};overflow:hidden;display:table-cell;vertical-align:middle;text-align:center;}");css.push("#"+tid+" .mv_pic span{vertical-align:middle;*display:inline-block;*height:100%;}");css.push("#"+tid+" .mv_pic img{vertical-align:middle;}");css.push("#"+tid+" .mv_info_price_mask{width:#{p1};height:22px;position:absolute;left:0px;bottom:0px;background-color:#fff;opacity: 0.8;filter: alpha(opacity=80);}");css.push("#"+tid+" .mv_info_price_txt{width:#{p1};font-size:16px;height:22px;line-height:22px;text-align:center;color:#{priceColor};font-family:Arial;font-weight:#{priceBold};position:absolute;left:0px;bottom:0px;}");css.push("#"+tid+" .mv_descArea{width:#{q1};height:#{q2};line-height:#{q5};padding:#{q3} #{q4};background-color:#{secFrameBgColor};color:#{descColor};text-align:left;overflow:hidden;}");css.push("#"+tid+" .mv_info_desc {font-weight:#{descBold};font-size:14px;height:#{q2};overflow:hidden;word-break:break-all;}");return this.template(css.join(""),tempData,true)},createCssConfig:function(width,height,bdWidth){var cf={},opt,tmpW,tmpH;cf.a3=0,cf.a4=bdWidth||0;cf.z1=cf.a1=cf.d1=width-2*cf.a3,cf.z2=cf.a2=cf.d2=this.blockWidth=height-2*cf.a3;cf.a5=cf.a6=0;cf.y3=0;cf.y4=0;cf.y5=0;switch(this.type){case"h":cf.a5=Math.floor(width*0.0625)>30?Math.floor(width*0.0625):30;cf.y3=cf.a5/30*9;cf.y4=(cf.a5-cf.y3)/2/1.1;break;case"ss":case"s":break;case"v":cf.a6=Math.floor(height*0.1)>30?Math.floor(height*0.1):30;cf.y3=cf.a6/30*9;cf.y5=(cf.a6-cf.y3)/2/1.1;break}cf.y3=Math.floor(width)<90||Math.floor(height)<90?12:cf.y3;if(cf.a5===0&&cf.a6===0){cf.y1=0;cf.y2=0}else{if(cf.a5!==0){cf.y1=cf.a5;cf.y2=height}else{if(cf.a6!==0){cf.y1=width;cf.y2=cf.a6}}}cf.a1=cf.d1=cf.a1-cf.a5,cf.a2=cf.d2=this.blockWidth=cf.a2-cf.a6;cf.e1=cf.d1,cf.e2=cf.d2,cf.e3=cf.e4=0;cf.e5=(width)-2*cf.a4;cf.e6=(height)-2*cf.a4;opt=this.getOptimumItem(this.type,cf.a1,cf.a2);if(!opt){return false}this.setPnLength(opt);cf.f1=cf.f2=opt;cf.f3=cf.f4=0;if(this.type=="h"){cf.f4=6}cf.dh=cf.xNum=Math.floor((width-cf.a5)/(cf.f1+2*cf.f4)),cf.dv=cf.yNum=Math.floor((height-cf.a6)/(cf.f2+2*cf.f3)),cf.displayNum=cf.dh*cf.dv;if(cf.dh&&cf.dv){tmpW=(cf.f1+2*cf.f4)*cf.dh,tmpH=(cf.f2+2*cf.f3)*cf.dv,cf.f6=cf.f4+=Math.floor(((cf.e1-tmpW)/cf.dh)/2);cf.f5=cf.f3+=Math.floor(((cf.e2-tmpH)/cf.dv)/2);if(this.type=="s"){if((width-cf.a5)>(height-cf.a6)){cf.f5=cf.e2-tmpH}else{if((width-cf.a5)==(height-cf.a6)){cf.f6=cf.f4=0;cf.f7=cf.e1-tmpW}else{cf.f6=cf.f4=0;cf.f7=cf.e1-tmpW}}}}cf.g3=2,cf.g1=cf.f1-2*cf.g3,cf.g2=cf.f2-2*cf.g3;cf.h1=cf.imgW=cf.g1,cf.h2=cf.imgH=cf.g2;cf.i1=cf.h1,cf.i2=cf.i3=18,cf.i4=cf.i5=0,cf.i6=12;cf.i9=Math.floor(cf.i6*1.2);cf.i7=Math.floor(cf.i2/5);cf.l1=cf.h1,cf.l2=cf.h2,cf.l3=cf.l4=0;cf.m1=cf.g1,cf.m2=cf.m3=cf.g2;cf.n3=2,cf.n1=cf.d1-2*cf.n3,cf.n2=cf.d2-2*cf.n3;cf.o1=cf.n1,cf.q2=Math.floor(cf.n2*0.25),cf.o2=cf.n2-cf.q2;cf.p1=Math.min(cf.o1,cf.o2);cf.p1=cf.p2=cf.bimgW=cf.bimgH=Math.floor(cf.p1*0.9);cf.p3=Math.floor((cf.o2-cf.p2)/2);cf.p4=Math.floor((cf.o1-cf.p1)/2);cf.q3=5,cf.q4=10,cf.q2=cf.q2-2*cf.q3,cf.q1=cf.o1-2*cf.q4;if((cf.q2>28)){cf.q5=Math.floor(cf.q2/2)}else{cf.q3=2,cf.q4=2,cf.q2=cf.q5=cf.q2+6,cf.q1=cf.o1-2*cf.q4}return cf},getLayoutType:function(width,height){var rate=width/height,m;if(rate>1.5){return"h"}else{if(rate<=1.5&&rate>=0.5){m=Math.min(width,height);if(m<150&&m>=90){return"ss"}return"s"}else{if(rate<0.5){return"v"}}}},verifyWH:function(type,width,height){if(width>1000||height>600){return false}switch(type){case"h":if(width<60||height<60){return false}return true;break;case"s":case"ss":if(width<60||height<60){return false}return true;break;case"v":if(width<60||height<60){return false}return true;break;default:return false;break}},getOptimumItem:function(type,width,height){switch(type){case"h":return parseInt(height);break;case"ss":return parseInt(Math.min(width,height));break;case"v":return parseInt(Math.min(width,height));break;case"s":if(width>height){return Math.floor((height*0.993)/2)}else{return Math.floor((width*0.993)/2)}break;default:break}},setPnLength:function(opt){if(opt){if(opt<=100){this.pnLength=7}else{if(opt<=150){this.pnLength=8}else{if(opt<=200){this.pnLength=13}else{if(opt<=250){this.pnLength=19}else{if(opt<=300){this.pnLength=13}else{if(opt<=350){this.pnLength=17}else{if(opt<=400){this.pnLength=32}else{this.pnLength=36}}}}}}}}},viewType:{0:"\u731C\u4F60\u559C\u6B22",1:"\u5173\u6CE8",3:"\u63A8\u8350",4:"\u63A8\u8350",6:"\u70ED\u5356",7:"\u5173\u6CE8"},fixQuirks:function(data){if(document.compatMode=="BackCompat"&&util.browser.ie&&(util.browser.ie<9||document.documentMode<9)){data.a1+=2*data.a3;data.a2+=2*data.a3;data.g1+=2*data.g3;data.g2+=2*data.g3;data.n1+=2*data.n3;data.n2+=2*data.n3;data.q1+=2*data.q4;data.q2+=2*data.q3}}};var util={G:function(id){return document.getElementById(id)},parse:function(str){if(!window.JSON){return eval("("+str+")")}else{return JSON.parse(str)}},stringify:function(obj){if(window.JSON){return JSON.stringify(obj)}var t=typeof(obj);if(t!="object"||obj===null){if(t=="string"){obj='"'+obj+'"'}return String(obj)}else{var n,v,json=[],arr=(obj&&obj.constructor==Array);var self=arguments.callee;for(n in obj){v=obj[n];t=typeof(v);if(obj.hasOwnProperty(n)){if(t=="string"){v='"'+v+'"'}else{if(t=="object"&&v!==null){v=self(v)}}json.push((arr?"":'"'+n+'":')+String(v))}}return(arr?"[":"{")+String(json)+(arr?"]":"}")}},getByClass:function(className,context){context=context||document;if(context.getElementsByClassName){return context.getElementsByClassName(className)}else{var nodes=[];var tags=context.getElementsByTagName("*");for(var i=0,len=tags.length;i<len;i++){if(this.hasClass(tags[i],className)){nodes.push(tags[i])}}return nodes}},hasClass:function(node,className){var names=node.className.split(/\s+/);for(var i=0,len=names.length;i<len;i++){if(names[i]==className){return true}}return false},addClass:function(el,name){if(!this.hasClass(el,name)){el.className+=(el.className?" ":"")+name}},removeClass:function(el,name){if(this.hasClass(el,name)){el.className=el.className.replace(new RegExp("(\\s|^)"+name+"(\\s|$)")," ").replace(/^\s+|\s+$/g,"")}},getJSONP:function(url,callbackName,callback,appendCallbackName){var script=document.createElement("script");window[callbackName]=callback;if(appendCallbackName){script.src=url+callbackName}else{script.src=url}script.onload=script.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){document.getElementsByTagName("head")[0].removeChild(script);script=null}};document.getElementsByTagName("head")[0].appendChild(script)},browser:(function(){var uaMatch=navigator.userAgent.toLowerCase().match(/msie ([\w.]+)/);return{ie:uaMatch&&uaMatch[1]}})(),trim:function(str){return str.replace(/(^\s*)|(\s*$)/g,"")},getFixedText:function(text,max,suffix){var textArr=text.split(""),preLength=0,rate=0.6,preText="",len=textArr.length;if(len>0){for(var i=0;i<len;i++){preLength+=/[\x20-\x7E]/i.test(textArr[i])?rate:1;if(preLength>max){if(suffix){preText=preText.slice(0,-1)+suffix}return preText}else{preText+=textArr[i]}}}return preText},transferNCR:function(data){if(Object.prototype.toString.apply(data)==="[object Array]"){for(var j=0;j<data.length;j++){for(var i in data[j]){if(Object.prototype.toString.apply(data[j][i])==="[object Array]"){data[j][i]=this.transferNCRStr(util.stringify(data[j][i]))}else{if(data[j][i]&&data[j][i].length>0&&!/url/.test(i)){data[j][i]=this.transferNCRStr(data[j][i])}}}}}else{data=this.transferNCRStr(data)}return data},transferNCRStr:function(str){return str},trimText:function(str){str=str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|，|、]/g,"");return str},fixPrice:function(text,isRmb){text+="";if(text.length>6&&!(text.length===7&&text.indexOf(".")>-1)){text=""+parseInt(text);if(text.length>6){text=text.slice(0,-4);if(isRmb){text+="\u4e07"}else{text=(parseInt(text)/100).toFixed(2)+"M"}}}return text},monitorClick:function(bid,clickUrl,width,height){var el=util.G(bid);function onClick(e){var pos=util.getMousePosition(e,el),url=util.combineHeatmapUrl(clickUrl);url+="&wh="+width+"x"+height+"&x="+pos.left+"&y="+pos.top;util.request(url);return true}if(el.addEventListener){el.addEventListener("click",onClick,false)}else{el.attachEvent("onclick",onClick)}},addEvent:function(element,type,fn){element.addEventListener?element.addEventListener(type,fn,false):element.attachEvent("on"+type,fn);return null},removeEvent:function(element,type,fn){element.removeEventListener?element.removeEventListener(type,fn,false):element.detachEvent("on"+type,fn);return null},open:function(url){var oldLink=document.getElementById("OPEN_NEW_WINDOW");oldLink&&oldLink.parentNode.removeChild(oldLink);var a=document.createElement("a");a.setAttribute("href",url);a.setAttribute("target","_blank");a.setAttribute("id","OPEN_NEW_WINDOW");document.body.appendChild(a);a.click()},trackClick:function(bid,data){var el=util.G(bid);var aImg=el.getElementsByTagName("img");function onClick(data){var data=data;var that=this;return function(){var id=that.id||this.id;id=parseInt(id);for(var i in data){if(id===parseInt(data[i].slot)){var aUrl=data[i].clktk;break}}if(typeof aUrl!==typeof undefined&&aUrl!==false){var clktk=util.parse(aUrl);for(var i=0;i<clktk.length;i++){util.request(clktk[i])}}return true}}for(var i=0;i<aImg.length;i++){aImg[i].onclick=onClick(data)}},trackImp:function(bid,data,impurl){var el=util.G(bid);var aImg=el.getElementsByTagName("img");function onLoad(data){var data=data;var that=this;return function(){var id=that.id||this.id;id=parseInt(id);for(var i in data){if(id===parseInt(data[i].slot)){var imptk=data[i].imptk;break}}if(typeof imptk!==typeof undefined&&imptk!==false){var imptk=util.parse(imptk);for(var i=0;i<imptk.length;i++){util.request(imptk[i])}}}}var impArg=[];for(var j=0;j<aImg.length;j++){var id=parseInt(aImg[j].id);for(var k in data){if(id===parseInt(data[k].slot)){impArg.push(data[k].imparg);break}}aImg[j].onload=onLoad(data)}if(impArg.length>0){impArg=impArg.join(".");var url=impurl+impArg;util.request(url)}},getMousePosition:function(e,el){var pos,x,y,docEl=document.documentElement,body=document.body;x=e.pageX||e.clientX+(docEl&&docEl.scrollLeft||body&&body.scrollLeft||0);y=e.pageY||e.clientY+(docEl&&docEl.scrollTop||body&&body.scrollTop||0);pos=this.getOffset(el);return{top:Math.round(y-pos.top),left:x-pos.left}},getOffset:function(el){var docElem=document.documentElement,body=document.body,box={top:0,left:0};if(typeof el.getBoundingClientRect!==undefined){box=el.getBoundingClientRect()}return{top:box.top+(window.pageYOffset||docElem.scrollTop||body.scrollTop),left:box.left+(window.pageXOffset||docElem.scrollLeft||body.scrollLeft)}},combineHeatmapUrl:function(clickUrl){var prefix="http://view.mediav.com/v?type=12&db=mediav",oimpid=this.getQueryString(clickUrl,"oimpid")||this.getQueryString(clickUrl,"impid"),pub=this.getQueryString(clickUrl,"pub"),cus=this.getQueryString(clickUrl,"cus");return prefix+"&impid="+oimpid+"&pub="+pub+"&cus="+cus},getQueryString:function(url,name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=url.substr(1).match(reg);if(r!=null){return unescape(r[2])}return null},request:function(url){var img=document.createElement("img");img.src=url;img.style.display="none";document.body.appendChild(img);setTimeout(function(){document.body.removeChild(img)},1000)},shuffle:function(a){var j,x,i;for(i=a.length;i;i--){j=Math.floor(Math.random()*i);x=a[i-1];a[i-1]=a[j];a[j]=x}return a}}})();