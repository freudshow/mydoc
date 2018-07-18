




$(function(){
    $("#joingroupbtn").click(function(){
        url = "/j/group/" + $(this).attr("name") + "/join";
        $.post_withck(url, {},
            function(sjson){
                var ret = eval("(" + sjson + ")");
                $("#joingroupbtn").hide();
                if (ret.result=="toomany"){
                    $("#replysect").html('<p class="attn" align="right">你已经加入了500个小组，无法再加入更多小组。</p>');
                }else{
                    $("#replysect").html('<br/><h2>你现在加入了这个小组，可以发表回应　· · · · · ·　</h2><div class="txd"><form name="comment_form" method="post" action="add_comment"><textarea name="rv_comment" rows="8" cols="54"></textarea><br/><input type="hidden" name="start" value="0"/><span class="bn-flat-hot rr"><input type="submit" value="发送"/></span><span><label class="pl share-label share-shuo"><input type="checkbox" name="sync_to_mb"/>转发到广播 </label> </span></form></div>');
                }
            });
        return false;
    });

    $("body").delegate(".topic-doc", 'mouseenter mouseleave', function (e) {
        var target = $('.topic-report a');
        switch (e.type) {
        case "mouseenter":
            target.show();
            break;
        case "mouseleave":
            target.hide();
            break;
        }
    });

    $(".topic-reply li").bind('mouseenter mouseleave click', function (e) {
        var comment_user_id = $(this).find(".operation_div").attr("id"),
        can_delete = 0,
        can_report = 0;
        switch (e.type) {
        case "mouseenter":
            $(this).find(".operation-more").show();
            break;
        case "mouseleave":
            $(this).find(".operation-more").hide();
            break;
        case "click":
            tar = $(e.target);
            if (tar.hasClass("lnk-report")) {
                e.preventDefault();
                var TXT_CFM_WARN = "确定要举报这条垃圾广告吗？",
                    id = tar.data("id"),
                    type = tar.data("type");

                var result = confirm(TXT_CFM_WARN);

                if (result) {
                    $.post_withck(
                        "/j/misc/report_ad",
                        {
                            id: id,
                            type: type
                        }
                    );
                }
            }
            break;
        }
    });


    $('body').delegate('.reply-comment .lnk-close', 'click', function(e){
      e.preventDefault();
      $(this).parent().remove();
    });

});

;
        $(".cmt-img img").bind("click",function(){var t=$(this);t.attr("raw-style")?(t.attr("style",t.attr("raw-style")),t.removeAttr("raw-style"),t.parent().removeClass("cmt-img-large")):(t.attr("raw-style",t.attr("style")),t.removeAttr("style"),t.parent().addClass("cmt-img-large"))});;
        !function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}({10:function(t,e,n){"use strict";function o(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1],void 0!==t&&null!=t){if(!(this instanceof o))return new o(t);t.getAttribute("data-inited")||(this.options={el:t,container:t.parentNode,prefetch:Boolean(t.getAttribute("prefetch")),previewUrl:t.getAttribute("src"),originUrl:t.getAttribute("data-original-url")},this._fetchUrl=this.options.originUrl,this.init())}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),a=function(t){return t&&t.__esModule?t:{default:t}}(i);o.prototype.prefetch=function(t){if(t&&this.options.prefetch){var e=document.createElement("link");e.rel="prefetch",e.href=t;var n=document.getElementsByTagName("link")[0];n.parentNode.insertBefore(e,n)}},o.prototype.play=function(){this.options.el.src=this._fetchUrl,this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block"},o.prototype.reload=function(){this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block";var t=this.options.originUrl,e="_r="+Math.random();this._fetchUrl=t.indexOf("?")+1?t+"&"+e:t+"?"+e,this.play()},o.prototype.loaded=function(t){var e=this.options,t=e.el,n=e.container;t.src===this._fetchUrl&&(this._buttonPlay_click.remove(),this._buttonReload_click.remove(),this._img_load_error.remove(),this._img_load.remove(),n.removeChild(this._panel))},o.prototype.notFound=function(){var t=this.options,e=t.el,n=t.previewUrl;e.src=n,this._buttonPlay.style.display="none",this._buttonReload.style.display="block",this._loading.style.display="none"},o.prototype.init=function(){var t=this,e=this.options,n=e.el,o=e.container,i=(e.originUrl,this._panel=document.createElement("div"));i.className="image-gif-panel",i.innerHTML='\n    <div class="image-gif-panel-inner">\n      <a href="javascript:;" class="image-gif-button-play">GIF</a>\n      <a href="javascript:;" class="image-gif-button-reload" style="display: none">重新加载</a>\n      <span class="image-gif-loading" style="display: none;">加载中</span>\n    </div>\n  ',o.appendChild(i),this._buttonPlay=i.getElementsByClassName("image-gif-button-play")[0],this._buttonReload=i.getElementsByClassName("image-gif-button-reload")[0],this._loading=i.getElementsByClassName("image-gif-loading")[0],this.prefetch(this._fetchUrl);var r=function(e){return function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e.call(t,n.target||n.srcElement,n.loaded?n.loaded/n.total:-1)}};this._buttonPlay_click=(0,a.default)(this._buttonPlay,"click",r(this.play)),this._buttonReload_click=(0,a.default)(this._buttonReload,"click",r(this.reload)),this._img_load=(0,a.default)(n,"load",r(this.loaded)),this._img_load_error=(0,a.default)(n,"error",r(this.notFound)),n.setAttribute("data-inited",!0)},e.default=o},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0}},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n.n(o),a=n(26);n.n(a),window._IMAGE_GIF_RENDER=i.a},26:function(t,e){},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=i.default},8:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(){a=[];for(var t,e=document.querySelectorAll("img[data-render-type=gif]"),n=0;t=e[n];)a.push((0,c.default)(t)),n++;if("object"===(void 0===r?"undefined":l(r))&&"preloadNum"in r)for(var o=r.preloadNum;o--;)a[o]&&a[o].play()}Object.defineProperty(e,"__esModule",{value:!0});var a,r,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=n(9),u=o(s),d=n(10),c=o(d);e.default=function(t){r=t,(0,u.default)(i)}},9:function(t,e){t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}}});
        !function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,r){"use strict";function n(t){return null!==t&&"object"===(void 0===t?"undefined":o(t))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n},,function(t,e,r){function n(){}function o(t){if(!m(t))return t;var e=[];for(var r in t)i(e,r,t[r]);return e.join("&")}function i(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){i(t,e,r)});else if(m(r))for(var n in r)i(t,e+"["+n+"]",r[n]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function s(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)e=o[i],r=e.indexOf("="),-1==r?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}function a(t){for(var e,r,n,o,i=t.split(/\r?\n/),s={},a=0,u=i.length;a<u;++a)r=i[a],-1!==(e=r.indexOf(":"))&&(n=r.slice(0,e).toLowerCase(),o=w(r.slice(e+1)),s[n]=o);return s}function u(t){return/[\/+]json\b/.test(t)}function l(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function c(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var n;try{r._isResponseOK(e)||(n=new Error(e.statusText||"Unsuccessful HTTP response"))}catch(t){n=t}n?(n.original=t,n.response=e,n.status=e.status,r.callback(n,e)):r.callback(null,e)})}function p(t,e,r){var n=v("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}var h,f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"!=typeof window?h=window:"undefined"!=typeof self?h=self:(console.warn("Using browser-only version of superagent in non-browser environment"),h=this);var d=r(13),y=r(14),m=r(2),_=r(15),b=r(17),v=e=t.exports=function(t,r){return"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r)};e.Request=c,v.getXHR=function(){if(!(!h.XMLHttpRequest||h.location&&"file:"==h.location.protocol&&h.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var w="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=o,v.parseString=s,v.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},_(l.prototype),l.prototype._parseBody=function(t){var e=v.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=v.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},v.Response=l,d(c.prototype),y(c.prototype),c.prototype.type=function(t){return this.set("Content-Type",v.types[t]||t),this},c.prototype.accept=function(t){return this.set("Accept",v.types[t]||t),this},c.prototype.auth=function(t,e,r){1===arguments.length&&(e=""),"object"===(void 0===e?"undefined":f(e))&&null!==e&&(r=e,e=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});var n=function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(t,e,r,n)},c.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},c.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},c.prototype._getFormData=function(){return this._formData||(this._formData=new h.FormData),this._formData},c.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},c.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},c.prototype.buffer=c.prototype.ca=c.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},c.prototype.pipe=c.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},c.prototype._isHost=function(t){return t&&"object"===(void 0===t?"undefined":f(t))&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},c.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||n,this._finalizeQueryString(),this._end()},c.prototype._end=function(){var t=this,e=this.xhr=v.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var n;try{n=e.status}catch(t){n=0}if(!n){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var n=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=n.bind(null,"download"),e.upload&&(e.upload.onprogress=n.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var o=this._header["content-type"],i=this._serializer||v.serialize[o?o.split(";")[0]:""];!i&&u(o)&&(i=v.serialize["application/json"]),i&&(r=i(r))}for(var s in this.header)null!=this.header[s]&&this.header.hasOwnProperty(s)&&e.setRequestHeader(s,this.header[s]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},v.agent=function(){return new b},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){b.prototype[t.toLowerCase()]=function(e,r){var n=new v.Request(t,e);return this._setDefaults(n),r&&n.end(r),n}}),b.prototype.del=b.prototype.delete,v.get=function(t,e,r){var n=v("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},v.head=function(t,e,r){var n=v("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},v.options=function(t,e,r){var n=v("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},v.del=p,v.delete=p,v.patch=function(t,e,r){var n=v("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},v.post=function(t,e,r){var n=v("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},v.put=function(t,e,r){var n=v("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},function(t,e,r){"use strict";r.d(e,"l",function(){return n}),r.d(e,"i",function(){return o}),r.d(e,"j",function(){return i}),r.d(e,"g",function(){return s}),r.d(e,"k",function(){return a}),r.d(e,"m",function(){return u}),r.d(e,"h",function(){return l}),r.d(e,"d",function(){return c}),r.d(e,"e",function(){return p}),r.d(e,"b",function(){return h}),r.d(e,"c",function(){return f}),r.d(e,"f",function(){return d}),r.d(e,"a",function(){return y});var n="/j/group/topic/add_photo",o="/j/group/topic/preview",i="/j/group/topic/publish",s="/j/group/topic/fetch_photo",a="//www.douban.com/j/note/get_subject_info",u="//www.douban.com/j/note/get_video_info",l="https://m.douban.com/rexxar/api/v2/ceorl/poll",c=70,p=0,h="photo_url",f=window._UPLOAD_FILENAME||"image_file",d=window._POST_PARAMS&&_POST_PARAMS.siteCookie,y=function(t){var e=t+"=",r=document.cookie.split(";"),n=void 0,o=void 0;for(n=0;n<r.length;n++){for(o=r[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length).replace(/\"/g,"")}return null}("ck")},,,,,,,function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){f.a.get(m.h+"/"+t).query({ck:m.a}).withCredentials().then(function(t){t&&t.body&&e&&e(t.body)})}function a(t){return function(e){function r(t){n(this,r);var i=o(this,e.call(this,t));return i.state={data:t.data,group:t.group},i}return i(r,e),r.prototype.votePost=function(t){var e=this,r=this.state.data.id;f.a.post(m.h+"/"+r+"/vote").query({ck:m.a}).type("form").send({option_ids:t.join(",")}).withCredentials().then(function(t){t&&t.body&&e.setState({data:t.body})})},r.prototype.handleVoteOption=function(t){this.state.group.is_member?this.votePost(t):window._JOIN_POPUP_DIALOG()},r.prototype.render=function(){var e=this.state,r=e.data,n=e.group;return r?c.a.createElement("div",null,n.is_member?null:c.a.createElement("div",{className:"poll-warn"},"加入 ",n.title," 小组即可投票"),c.a.createElement(t,{data:r,voteOption:this.handleVoteOption.bind(this)})):null},r}(l.Component)}function u(t){var e=document.querySelectorAll("[data-entity-type=poll]");Array.prototype.slice.call(e).forEach(function(e){var r=e.getAttribute("data-id");r=parseInt(r);var n=e.querySelectorAll("[data-reactroot]");"number"==typeof r&&0===n.length&&s(r,function(n){var o=a(y.a);Object(p.render)(c.a.createElement(o,{id:r,data:n,group:t}),e)})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var l=r(0),c=r.n(l),p=r(1),h=(r.n(p),r(4)),f=r.n(h),d=r(18),y=r.n(d),m=r(5),_=r(20);r.n(_),window._POLL_RENDER=u},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){"use strict";function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(2);t.exports=n,n.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},n.prototype.parse=function(t){return this._parser=t,this},n.prototype.responseType=function(t){return this._responseType=t,this},n.prototype.serialize=function(t){return this._serializer=t,this},n.prototype.timeout=function(t){if(!t||"object"!==(void 0===t?"undefined":i(t)))return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},n.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var a=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];n.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!=e.status)return!0;if(t){if(t.code&&~a.indexOf(t.code))return!0;if(t.timeout&&"ECONNABORTED"==t.code)return!0;if(t.crossDomain)return!0}return!1},n.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},n.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.use=function(t){return t(this),this},n.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},n.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},n.prototype.get=function(t){return this._header[t.toLowerCase()]},n.prototype.getHeader=n.prototype.get,n.prototype.set=function(t,e){if(s(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},n.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},n.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),s(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)this.field(t,e[n]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},n.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype._auth=function(t,e,r,n){switch(r.type){case"basic":this.set("Authorization","Basic "+n(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},n.prototype.withCredentials=function(t){return void 0==t&&(t=!0),this._withCredentials=t,this},n.prototype.redirects=function(t){return this._maxRedirects=t,this},n.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},n.prototype.send=function(t){var e=s(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&s(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},n.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},n.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},n.prototype._appendQueryString=function(){console.trace("Unsupported")},n.prototype._timeoutError=function(t,e,r){if(!this._aborted){var n=new Error(t+e+"ms exceeded");n.timeout=e,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.abort(),this.callback(n)}},n.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(t,e,r){"use strict";function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}var i=r(16);t.exports=n,n.prototype.get=function(t){return this.header[t.toLowerCase()]},n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{t.link&&(this.links=i.parseLinks(t.link))}catch(t){}},n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},function(t,e,r){"use strict";e.type=function(t){return t.split(/ *; */).shift()},e.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})},e.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),n=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=n,t},{})},e.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&delete t.cookie,t}},function(t,e){function r(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){r.prototype[t]=function(){return this._defaults.push({fn:t,arguments:arguments}),this}}),r.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},t.exports=r},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":s(e))&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":s(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(0),l=function(t){return t&&t.__esModule?t:{default:t}}(u),c=r(19),p=function(t){function e(){n(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={selected:[]},t}return i(e,t),a(e,[{key:"handleOptionChange",value:function(t){var e=t.target;if("radio"===e.type)this.setState({selected:[e.value]});else{var r=this.state.selected,n=this.props.data.vote_limit,o=r.slice();o.indexOf(e.value)>-1?o=o.filter(function(t){return t!==e.value}):o.push(e.value),o.length<=n&&this.setState({selected:o})}}},{key:"handleSubmit",value:function(t){t.preventDefault(),0!==this.state.selected.length&&this.props.voteOption(this.state.selected)}},{key:"render",value:function(){var t=this,e=this.state.selected,r=this.props.data,n=r.title,o=r.vote_limit,i=r.voted_user_count,s=r.expire_time,a=r.options,u=1===o?"单选":"最多选"+o+"项",p=a.some(function(t){return!0===t.is_voted}),h=void 0,f=void 0,d=Date.now();s?(f=new Date(s.replace(/-/g,"/")).getTime(),h=f<=d):h=!1;var y=p||0===e.length||h;return l.default.createElement("div",{className:"poll-wrapper"},l.default.createElement("div",{className:"poll-title"},l.default.createElement("span",null,n,"（",u,"）")),l.default.createElement("div",{className:"poll-meta"},l.default.createElement("span",null,i,"人参与"),!h&&s?l.default.createElement("span",{className:"poll-expire-time"}," · 距离结束还有 ",(0,c.timeBetween)(f,d)):null),l.default.createElement("div",{className:"poll-content"},l.default.createElement("form",{className:"poll-options",onSubmit:this.handleSubmit.bind(this)},a.map(function(r){var n=i?Math.round(100*r.voted_user_count/i):0;return p||h?l.default.createElement("div",{key:r.id,className:"poll-chart"},l.default.createElement("span",{className:"poll-option"},r.title,l.default.createElement("span",{className:"poll-option-voted-count"},r.voted_user_count,"（",n,"%）")),l.default.createElement("span",{className:(0,c.cls)("poll-bar",r.is_voted&&"poll-bar-voted")},l.default.createElement("span",{className:"poll-bar-active",style:{width:n+"%"}}))):l.default.createElement("label",{key:r.id,className:"poll-label"},l.default.createElement("span",{className:(0,c.cls)("poll-checkbox",e.indexOf(r.id)>-1&&"poll-checkbox-checked")},l.default.createElement("input",{type:1===o?"radio":"checkbox",name:"input-"+r.id,value:r.id,checked:e.indexOf(r.id)>-1,onChange:t.handleOptionChange.bind(t)})),l.default.createElement("span",{className:"poll-option"},r.title))}),l.default.createElement("div",{className:"poll-vote"},l.default.createElement("button",{className:(0,c.cls)("poll-btn",y&&"poll-btn-disabled"),disabled:y,type:"submit"},p?"已投票":h?"已结束":"投票"),p||h?null:l.default.createElement("div",{className:"poll-tip"},"投票后可查看结果")))))}}]),e}(u.Component);e.default=p},function(t,e,r){"use strict";function n(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter(function(t){return"string"==typeof t}).join(" ")}function o(t,e){var r=t-e;r/=1e3;var n=Math.floor(r%60);r/=60;var o=Math.floor(r%60);r/=60;var i=Math.floor(r%24),s=Math.floor(r/24),a="";return s>0?a=s+"天"+i+"时"+o+"分":i>0?a=i+"时"+o+"分":o>0?a=o+"分"+n+"秒":n>0&&(a=n+"秒"),a}Object.defineProperty(e,"__esModule",{value:!0}),e.cls=n,e.timeBetween=o},function(t,e){}]);

        $(window).bind('load', function(){
            if ('_IMAGE_GIF_RENDER' in window) {
              window._IMAGE_GIF_RENDER({
                preloadNum: 3
              });
            }
            if ('_POLL_RENDER' in window) {
                var group = {
                    is_member: "False" === "True",
                    title: "彼得•德鲁克(Peter Drucker)"
                }
                window._POLL_RENDER(group)
            }
        });
    ;
    "use strict";$(function(){function t(t,e){var a=t.text(),c=a?parseInt(a):0;c+=e,c>0?t.text(c):0===c&&t.text("")}var e="https://m.douban.com/rexxar/api/v2/";$(".react-btn").bind("click",function(a){var c=$(this),r=c.find(".react-text"),n=c.find(".react-num"),i=c.data(),d=void 0;d=0===i.reaction_type?1:0;var o={reaction_type:d,ck:get_cookie("ck")},s=""+e+i.type+"/"+i.object_id+"/react";$.ajax({type:"post",url:s,data:o,traditional:!0,beforeSend:function(t){t.withCredentials=!0},xhrFields:{withCredentials:!0},success:function(e){c.data("reaction_type",e.reaction_type),1===e.reaction_type?(t(n,1),r.text("已赞"),c.removeClass("react-add").addClass("react-cancel")):(t(n,-1),r.text("赞"),c.removeClass("react-cancel").addClass("react-add"))}})})});
    "use strict";function show_doulist_remind(){var e="         <div id='doulist-new-function-remind'>             <div class='title'>“喜欢”升级啦</div>             <div class='desc'>觉得内容不错，点个赞吧；</br>想Mark，收藏到豆列是最好的选择</div>             <button class='i_know'>我知道了</button>         </div>     ",o=document.createElement("DIV");o.innerHTML=e,o=o.firstElementChild;var t=document.querySelector(".action-react");if(t){t.style.position="relative",t.appendChild(o);var i=document.querySelector(".i_know");i.addEventListener("click",close_doulist_remind)}}function close_doulist_remind(){var e=document.getElementById("doulist-new-function-remind");e&&e.remove()}!function(){localStorage&&localStorage.getItem("douban-fav-remind")||get_cookie&&get_cookie("douban-fav-remind")||(show_doulist_remind(),localStorage&&localStorage.setItem("douban-fav-remind","1"),set_cookie&&set_cookie({"douban-fav-remind":1},36500,"douban.com","/"))}();
;
var dialogJoinGroup = $(".dialog_join_group");
window._JOIN_POPUP_DIALOG = function() {
    dialogJoinGroup.css('display', 'block');
}
$(".join_group_cancel, .join_group_close").bind('click', function(e) {
    dialogJoinGroup.css('display', 'none');
})
;
    $('.img-uploader-wrapper').bind('click', function(e){
        $(this).find('.img-upload-input').click();
    })
    $('.img-upload-input').bind('click', function(e){
        e.stopPropagation();
    });
    $('.img-upload-input').bind('change', function(){
        if(!this.files.length) return;
        if(!window.FileReader) return;
        var reader = new FileReader();
        var that = this;
        $(this).parent().addClass('added');
        reader.onload = function(){
            $(that).parent().prepend('<img class="img-preview" src="' + reader.result + '">')
        }
        reader.readAsDataURL(this.files[0]);
    })
    $('.remove-img').bind('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().find('.img-preview').remove();
        $(this).parent().find('.img-upload-input').val('');
        $(this).parent().removeClass('added');
    })
;

;(function() {
  var mask;
  var popup;
  var current = '';
  var init_popup = function() {
    mask = $('<div class="popup-reg-mask"></div>').appendTo('body');
    mask.css('height', $(document).height());
    popup = $('#g-popup-reg');
    popup.find('.lnk-close').click(function(e) {
        e.preventDefault();
        popup.hide();
        mask.hide();
    });

    if ($.browser.msie && ($.browser.version|0) === 6) {
        var win = $(window).scroll((function() {
            var timer;
            var doc = document.body;
            return function() {
                if (timer) {
                    window.clearTimeout(timer);
                }
                timer = window.setTimeout(function() {
                    popup.css({
                      top: (doc.scrollTop + win.height()/2 - popup.height()/2) + 'px'
                    });
                }, 20);
            };
        })()).trigger('scroll');
    }
  };

  var show_popup = function() {
    if (popup) {
      popup.show();
      mask.show();
    } else {
      $('#g-popup-reg').show();
      init_popup();
    }
  };

  Douban.init_show_register = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'register') {
        popup.find('iframe').attr('src', reg_url);
      }
      current = 'register';
    });
  };

  Douban.init_show_login = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'login') {
        popup.find('iframe').attr('src', login_url);
      }
      current = 'login';
    });
  };
})();

$(function() {
  var $landingBar = $('#landing-bar');
  var popup_mark = 'g_reg';
  // 有些页面会自动弹注册框
  if (
  'selenium_main_app_window' === window.name ||
  window.POPUP_REG && !window.name) {
      $('#landing-bar').show();
      $('#wrapper').addClass('landing');
  }
  $landingBar.delegate('a', 'click', function(e) {
      // 第三方登录不处理，其他隐藏landing bar
      if ($(this).parent().is('.item')) {
          return;
      }

      e.preventDefault();
      $landingBar.hide();
      if (window.POPUP_REG) {
        window.name = window.name || popup_mark;
      }
  });
});
