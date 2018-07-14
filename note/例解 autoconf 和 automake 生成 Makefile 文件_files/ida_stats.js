if(!window.console){window.console={log:function(){},error:function(){},warn:function(){}}}var topIdaStatsLoaded;try{topIdaStatsLoaded=top.isIdaStatsLoaded}catch(error){topIdaStatsLoaded=!!window.isIdaStatsLoaded}window.dlversion="$Id: ida_stats.js 19119 2018-06-11 19:48:09Z jleon@us.ibm.com $";window.scriptStartTime=window.scriptStartTime||window.performance.now();window.loadingTime=window.loadingTime||new Date().getTime();window.digitalData=window.digitalData||{};window._appInfo=window._appInfo||{};
window._dl=window._dl||{};_dl.fn=_dl.fn||{};_dl.ddo=window.digitalData;_appInfo.dbdmDryRun=location.search.match(/dbdm[dD]ry[rR]un=([^#&]+)/)?true:false;window.idaPageIsSPA=_appInfo.idaPageIsSPA||window.idaPageIsSPA||false;_appInfo.dbdmLibrary="1";_appInfo.dbdmLibraryName="ida_stats.js";if(!!topIdaStatsLoaded){if(!!window.isIdaStatsLoaded){throw new Error("+++ DBDM-ERROR > "+_appInfo.dbdmLibraryName+": Another version of the DBDM library has been loaded.")}window.isIdaStatsLoadedTop=true}window.isIdaStatsLoaded=true;
_appInfo.dbdmOff=_appInfo.dbdmOff||(typeof(window.ida_eluminate_enabled)!=="undefined"&&!window.ida_eluminate_enabled)||(typeof(window.tealium_enabled)!=="undefined"&&!window.tealium_enabled)||(location.search.match(/dbdm[oO]ff=([^#&]+)/)?true:false)||false;_dl.fn.log=_dl.fn.log||{init:function(){_dl.fn.log.logFile=_dl.fn.log.logFile||[];_dl.fn.log.isLogEnabled=((document.cookie.indexOf("dldb=true")>=0)?true:((document.cookie.indexOf("utagdb=true")>=0)?true:false))},add:function(e,d){try{d={};if(typeof(e)==="object"){for(c in e){if(typeof(e[c])!=="function"){if(e[c] instanceof Array){d[c]=e[c].slice(0)
}else{d[c]=e[c]}}}_dl.fn.log.logFile.push(d)}else{d=e;if(typeof(e)!=="object"){_dl.fn.log.logFile.push(d)}}if(_dl.fn.log.isLogEnabled){try{console.log(d)}catch(f){}}if(d.indexOf("DBDM-ERROR")>-1){console.error(d)}else{if(d.indexOf("DBDM-WARNING")>-1){console.warn(d)}}}catch(f){}},show:function(){try{_dl.fn.log.logFile.forEach(function(b){console.log(b)})}catch(a){}}};(function(){var b=["cmCreatePageviewTag","cmCreateProductviewTag","cmCreateShopAction5Tag","cmDisplayShops","cmCreateShopAction9Tag","cmCreateOrderTag","cmCreateRegistrationTag","cmCreateElementTag","cmCreateConversionEventTag","cmCreateManualPageviewTag","cmCreateManualLinkClickTag","cmCreateManualImpressionTag","cmCreateCustomTag","cmSetupOther","cmSetCurrencyCode","cmDisplayShop9s","cmDisplayShop5s","cmRetrieveUserID","ibmStats.event","createPageviewTagForSPA"];
window.ghostQueue=[];(function g(){if(!e()){for(var h=0;h<b.length;h++){d(b[h])}a()}})();function e(){for(var h=0;h<b.length;h++){if(b[h].indexOf(".")===-1){if(typeof(window[b[h]])!=="function"||window[b[h]].isGhost){return false}}else{if(typeof(window[b[h].split(".")[0]])!=="undefined"){if(typeof(window[b[h].split(".")[0]][b[h].split(".")[1]])!=="function"||window[b[h].split(".")[0]][b[h].split(".")[1]].isGhost){return false}}else{return false}}}return true}function d(h){if(h.indexOf(".")===-1){window[h]=function(){window.ghostQueue.push({functionName:h,args:arguments})
};window[h].isGhost=true}else{window[h.split(".")[0]]=window[h.split(".")[0]]||{};window[h.split(".")[0]][h.split(".")[1]]=function(){window.ghostQueue.push({functionName:h,args:arguments})};window[h.split(".")[0]][h.split(".")[1]].isGhost=true}}function a(){setTimeout(function(){if(e()){f()}else{a()}},50)}function f(){_dl.fn.log.add("dbdm > ghostfunction: Executing "+window.ghostQueue.length+" queued commands from ghostQueue.");for(var h=0;h<window.ghostQueue.length;h++){if(window.ghostQueue[h].functionName.indexOf(".")===-1){window[window.ghostQueue[h].functionName].apply(this,window.ghostQueue[h].args)
}else{window[window.ghostQueue[h].functionName.split(".")[0]][window.ghostQueue[h].functionName.split(".")[1]].apply(this,window.ghostQueue[h].args)}}}})();if(!!window.isIdaStatsLoadedTop){throw new Error("+++ DBDM-ERROR > "+_appInfo.dbdmLibraryName+": Another version of the DBDM library has been loaded in Top Frame.")}digitalData.event=[];digitalData.content=digitalData.content||{};digitalData.page=digitalData.page||{};digitalData.user=digitalData.user||{};digitalData.util=digitalData.util||{};digitalData.content.drivers=digitalData.content.drivers||{};
digitalData.page.attributes=digitalData.page.attributes||{};digitalData.page.category=digitalData.page.category||{};digitalData.page.pageInfo=digitalData.page.pageInfo||{};digitalData.page.session=digitalData.page.session||{};digitalData.user.gdpr=digitalData.user.gdpr||{};digitalData.user.profile={};digitalData.user.segment={};digitalData.user.userInfo=digitalData.user.userInfo||{};digitalData.util.cp=digitalData.util.cp||{};digitalData.util.meta=digitalData.util.meta||{};digitalData.util.qp=digitalData.util.qp||{};
digitalData.util.referrer=digitalData.util.referrer||{};digitalData.user.profile.ng=digitalData.user.profile.ng||{};digitalData.user.segment.ibmer=digitalData.user.segment.ibmer||{};digitalData.page.category.ibm=digitalData.page.category.ibm||{};digitalData.page.pageInfo.analytics=digitalData.page.pageInfo.analytics||{};digitalData.page.pageInfo.convertro=digitalData.page.pageInfo.convertro||{};digitalData.page.pageInfo.coremetrics=digitalData.page.pageInfo.coremetrics||{};digitalData.page.pageInfo.demandbase=digitalData.page.pageInfo.demandbase||{};
digitalData.page.pageInfo.hotjar=digitalData.page.pageInfo.hotjar||{};digitalData.page.pageInfo.ibm=digitalData.page.pageInfo.ibm||{};digitalData.page.pageInfo.lotame=digitalData.page.pageInfo.lotame||{};digitalData.page.pageInfo.metrics=digitalData.page.pageInfo.metrics||{};digitalData.page.pageInfo.nps=digitalData.page.pageInfo.nps||{};digitalData.page.pageInfo.optimizely=digitalData.page.pageInfo.optimizely||{};digitalData.page.pageInfo.segment=digitalData.page.pageInfo.segment||{};digitalData.page.pageInfo.tealium=digitalData.page.pageInfo.tealium||{};
digitalData.page.pageInfo.trustarc=digitalData.page.pageInfo.trustarc||{};digitalData.page.pageInfo.urx=digitalData.page.pageInfo.urx||{};_dl.fn.loadScript=_dl.fn.loadScript||function(i,h,j){try{var e=document,l=h||"javascript",k=e.createElement("script");k.src=i;k.type="application/"+l;k.async=true;var f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(k,f);k.onload=function(){if(typeof(j)==="function"){j.call()}}}catch(g){_dl.fn.log.add("+++DBDM-ERROR > loadScript: "+g)}};_dl.fn.storage=_dl.fn.storage||{b64:{encode:function(b){return btoa(encodeURIComponent(b).replace(/%([0-9A-F]{2})/g,function a(d,e){return String.fromCharCode("0x"+e)
}))},decode:function(a){return decodeURIComponent(atob(a).split("").map(function(b){return"%"+("00"+b.charCodeAt(0).toString(16)).slice(-2)}).join(""))}},save:function(f,h,b,i){var a=true,d="sessionStorage";if(typeof(f)!=="undefined"&&typeof(h)!=="undefined"){var g={expires:0,isExpired:false,data:h};if(!!i&&typeof(i)==="number"){g.expires=new Date().getTime()+i*1000}if(typeof(b)==="string"&&b.toLowerCase()==="local"){d="localStorage"}try{window[d].setItem(_dl.fn.storage.b64.encode(f),_dl.fn.storage.b64.encode(JSON.stringify(g)))
}catch(e){a=false}}else{a=false}return a},load:function(f,b){var a=null,d="sessionStorage",e=new Date().getTime();if(typeof(b)==="string"&&b.toLowerCase()==="local"){d="localStorage"}var g=window[d].getItem(_dl.fn.storage.b64.encode(f));if(g!==null){a=JSON.parse(_dl.fn.storage.b64.decode(g));a.isExpired=a.expires===0?false:e>a.expires?true:false}return a},remove:function(d,a){var b="sessionStorage";if(typeof(a)==="string"&&a.toLowerCase()==="local"){b="localStorage"}window[b].removeItem(_dl.fn.storage.b64.encode(d))
}};_dl.fn.userIpData=_dl.fn.userIpData||{CONFIG:{ran:false,finished:false,url:"https://api.www.s81c.com/webmaster/dbip/?callback=",serviceCallback:"_dl.fn.userIpData.callback",data_items:"country",callbacks:[],storage:"local",storage_key:"userIpData",lifespan:3600*24*3,timeout:2000},EU_COUNTRY_LIST:"at,be,bg,cy,cz,de,dk,ee,el,es,fi,fr,gb,gr,hr,hu,ie,it,lt,lu,lv,mt,nl,pl,pt,ro,se,si,sk,uk",setUserIpDataToDdo:function(a){if(!!window._dl&&!!_dl.ddo&&!!_dl.ddo.user){_dl.ddo.user.gdpr=a;if(!!_dl.ddo.user.userInfo){_dl.ddo.user.userInfo.registry_country_code=_dl.ddo.user.userInfo.registry_country_code||a.country
}}else{if(!!window.dl&&!!dl.ddo&&!!dl.ddo.user){dl.ddo.user.gdpr=a;if(!!dl.ddo.user.userInfo){dl.ddo.user.userInfo.registry_country_code=dl.ddo.user.userInfo.registry_country_code||a.country}}else{if(!!window.digitalData&&!!digitalData.user){digitalData.user.gdpr=a;if(!!digitalData.user.userInfo){digitalData.user.userInfo.registry_country_code=digitalData.user.userInfo.registry_country_code||a.country}}}}},callback:function(b){window.digitalData=_dl.ddo;var a={};clearTimeout(_dl.fn.userIpData.CONFIG.runTimeout);
_dl.fn.log.add("dbdm > userIpData: Received data from Akamai");_dl.fn.userIpData.CONFIG.data_items.split(",").forEach(function(d){if(typeof(b[d])!=="undefined"&&b[d]!=="n/a"&&b[d]!==""&&b[d]!==null){a[d]=b[d]}});if(!!a.country){if(a.country==="it"||a.country==="si"){a.country="fr"}a.isCountryMemberOfEU=_dl.fn.userIpData.EU_COUNTRY_LIST.split(",").includes(a.country)?true:false;_dl.fn.storage.save(_dl.fn.userIpData.CONFIG.storage_key,a,_dl.fn.userIpData.CONFIG.storage,_dl.fn.userIpData.CONFIG.lifespan);
_dl.fn.userIpData.setUserIpDataToDdo(a);_dl.fn.userIpData.CONFIG.finished=true;_dl.fn.userIpData.CONFIG.callbacks.forEach(function(d){if(typeof(d)==="function"){_dl.fn.log.add("dbdm > userIpData: Executing callback: "+d.name);d.call()}})}},getUserIpData:function(){var a=null;var b=_dl.fn.storage.load(_dl.fn.userIpData.CONFIG.storage_key,_dl.fn.userIpData.CONFIG.storage);if(!!b&&!b.isExpired){a=b.data}return a},getCountry:function(){var a=null;var b=_dl.fn.storage.load(_dl.fn.userIpData.CONFIG.storage_key,_dl.fn.userIpData.CONFIG.storage);
if(!!b&&!b.isExpired){a=b.data.country}return a},isCountryMemberOfEU:function(){var a=null;var b=_dl.fn.storage.load(_dl.fn.userIpData.CONFIG.storage_key,_dl.fn.userIpData.CONFIG.storage);if(!!b&&!b.isExpired){a=b.data.isCountryMemberOfEU}return a},init:function(a,d){var b=null;_dl.fn.log.add("dbdm > userIpData: Initializing");if(!!a){if(a instanceof Array){_dl.fn.userIpData.CONFIG.callbacks=a}else{if(a instanceof Function){_dl.fn.userIpData.CONFIG.callbacks.push(a)}}}b=_dl.fn.userIpData.getUserIpData();
if(!!b&&b.country!=="it"&&b.country!=="si"){_dl.fn.userIpData.setUserIpDataToDdo(b);_dl.fn.userIpData.CONFIG.ran=true;_dl.fn.userIpData.CONFIG.finished=true;if(!!d){_dl.fn.userIpData.CONFIG.callbacks.forEach(function(e){if(typeof(e)==="function"){_dl.fn.log.add("dbdm > userIpData: Executing callback: "+e.name);e.call()}})}}else{_dl.fn.log.add("dbdm > userIpData: Calling Akamai service");_dl.fn.loadScript(_dl.fn.userIpData.CONFIG.url+_dl.fn.userIpData.CONFIG.serviceCallback);_dl.fn.userIpData.CONFIG.ran=true
}return b}};_dl.fn.gdpr=_dl.fn.gdpr||{CONFIG:{demandbase:["2:"],hotjar:["1:","2:"],lotame:["2:"],optimizely:["2:"],segment:["1:","2:"],universalprofile:["2:"]},getUserConsentChoice:function(){var a="";if(window.document.cookie!==""){a=document.cookie.replace(/(?:(?:^|.*;\s*)notice_preferences\s*\=\s*([^;]*).*$)|^.*$/,"$1")}return(a!=="")?a:null},checkConsentForTag:function(b){var d=false;var a=_dl.fn.gdpr.getUserConsentChoice();if(!!a){if(!!_dl.fn.gdpr.CONFIG[b]&&_dl.fn.gdpr.CONFIG[b].includes(a)){d=true
}}else{if(!_dl.fn.userIpData.isCountryMemberOfEU()){d=true}else{d=null}}return d}};_dl.fn.page=_dl.fn.page||{getDestination:function(){var a={};if(!!window.location){a=window.location;a.topLevelDomain=location.hostname.split(".").splice(-2,2).join(".")||""}return a},getReferrer:function(){try{var b={};if(!!window.document&&!!document.referrer){var d=document.createElement("a");d.href=document.referrer;d.href=d.href;b.hash=d.hash;b.host=d.host;b.hostname=d.hostname;b.href=d.href;b.origin=d.origin;
b.pathname=d.pathname;b.port=d.port;b.protocol=d.protocol;b.search=d.search;b.topLevelDomain=b.hostname.split(".").splice(-2,2).join(".")||""}return b}catch(a){_dl.fn.log.add("+++DBDM-ERROR > page > getReferrer: "+a)}},setCookie:function(d,f,g){try{var e="";if(g){var b=new Date();b.setTime(b.getTime()+(g*24*60*60*1000));e=";expires="+b.toUTCString()}if(!!_dl.ddo.page.pageInfo.destinationDomain&&_dl.ddo.page.pageInfo.destinationDomain!==document.domain){document.cookie=d+"="+f+e+";domain=."+_dl.ddo.page.pageInfo.destinationDomain+";path=/"
}else{document.cookie=d+"="+f+e+";domain="+document.domain+";path=/"}}catch(a){_dl.fn.log.add("+++DBDM-ERROR > page > setCookie: "+a)}},getCookie:function(d){try{var b=document.cookie.match(new RegExp(d+"=([^;]+)"));if(b){return b[1]}}catch(a){_dl.fn.log.add("+++DBDM-ERROR > page > getCookie: "+a)}},deleteCookie:function(b){try{if(!!_dl.ddo.page.pageInfo.destinationDomain){document.cookie=b+"=;domain=."+_dl.ddo.page.pageInfo.destinationDomain+";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"}document.cookie=b+"=;domain="+document.domain+";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
}catch(a){_dl.fn.log.add("+++DBDM-ERROR > page > deleteCookie: "+a)}}};_dl.fn.cookieSync=_dl.fn.cookieSync||{CONFIG:{ran:false,url:"https://cookie-sync.mybluemix.net/cookie/notice-prefs?",url_eu:"https://cookie-sync.eu-gb.mybluemix.net/cookie/notice-prefs?",serviceCallback:"callback=_dl.fn.cookieSync.callback",notice_preferences_values:{"0:":"0:","1:":"0,1:","2:":"0,1,2:"},storage:"session",storage_key:"cookieSync",lifespan:3600*3},saveCookie:function(b,e){if(!!b&&!!e){var a=_dl.fn.cookieSync.CONFIG.url+b+"="+e,d=(Math.floor(Math.random()*11111111))+new Date().getTime();
a+="&rnd="+d.toString();_dl.fn.log.add("dbdm > cookieSync: Sending cookie "+b+" to server, value: "+e);_dl.fn.loadScript(a);_dl.fn.storage.save(_dl.fn.cookieSync.CONFIG.storage_key,e,_dl.fn.cookieSync.CONFIG.storage,_dl.fn.cookieSync.CONFIG.lifespan)}},callback:function(d){var e=decodeURIComponent(d);_dl.fn.storage.save(_dl.fn.cookieSync.CONFIG.storage_key,e,_dl.fn.cookieSync.CONFIG.storage,_dl.fn.cookieSync.CONFIG.lifespan);if(!!e&&e!="undefined"&&!!_dl.fn.cookieSync.CONFIG.notice_preferences_values[e]&&_dl.fn.gdpr.getUserConsentChoice()!=e){var a=_dl.fn.cookieSync.CONFIG.notice_preferences_values[e];
_dl.fn.log.add("dbdm > cookieSync: Receiving and setting notice_preferences to : "+e);_dl.fn.page.setCookie("notice_preferences",e,396);_dl.fn.page.setCookie("notice_gdpr_prefs",a,396);if(!!window.truste&&!!truste.eu&&!!truste.eu.bindMap){truste.eu.bindMap.prefCookie=a.split(":")[0];_dl.fn.log.add("dbdm > cookieSync: Setting truste.eu.bindMap.prefCookie value: "+truste.eu.bindMap.prefCookie)}var b={type:"element",primaryCategory:"COOKIE-CONSENT",eventName:"COOKIE-SYNC",eventCategoryGroup:(!!typeof(_dl.ddo.user.gdpr.isCountryMemberOfEU)!=="undefined"?_dl.ddo.user.gdpr.isCountryMemberOfEU.toString():""),executionPath:_dl.ddo.user.gdpr.country,eventCallBackCode:e,};
if(!!window.ibmStats&&!!ibmStats.event&&!_appInfo.dbdmDryRun){ibmStats.event(b)}}else{_dl.fn.log.add("dbdm > cookieSync: No cookies on server or already set: "+e)}},getCookies:function(){_dl.fn.log.add("dbdm > cookieSync: Retrieving cookies from server");_dl.fn.loadScript(_dl.fn.cookieSync.CONFIG.url+_dl.fn.cookieSync.CONFIG.serviceCallback)},isCookieSyncNeeded:function(d){d=d||false;var a=false,b=_dl.fn.page.getReferrer(),f=_dl.fn.page.getDestination();if((!!b.topLevelDomain&&!!f.topLevelDomain&&b.topLevelDomain!==f.topLevelDomain)||!b.topLevelDomain){var e=_dl.fn.storage.load(_dl.fn.cookieSync.CONFIG.storage_key,_dl.fn.cookieSync.CONFIG.storage);
if((!!e&&e.isExpired)||!e||d){a=true}}return a},init:function(){_dl.fn.cookieSync.CONFIG.url=(_dl.fn.userIpData.isCountryMemberOfEU()?_dl.fn.cookieSync.CONFIG.url_eu:_dl.fn.cookieSync.CONFIG.url);if(!_dl.fn.cookieSync.CONFIG.ran&&_dl.fn.cookieSync.isCookieSyncNeeded()){_dl.fn.cookieSync.CONFIG.ran=true;_dl.fn.cookieSync.getCookies()}}};_dl.fn.tealium={CONFIG:{ran:false,url:"//tags.tiqcdn.com/utag/ibm/web/prod/utag.js",},load:function(){window.digitalData=_dl.ddo;if(!_dl.fn.tealium.CONFIG.ran){_dl.fn.tealium.CONFIG.ran=true;
_dl.fn.log.add("dbdm > tealium: Loading Tealium iQ");_dl.fn.loadScript(_dl.fn.tealium.CONFIG.url)}}};window.v16elu={evhndlr:true,utilstatsHelper:function(a){ibmStats.event(a)},};window.pageViewAttributes="";window.ibmweb=window.ibmweb||{};ibmweb.eluminate={utilstatsHelper:function(a){ibmStats.event(a)},};(function(){window.loadingTime=new Date().getTime();_dl.fn.log.init();_dl.fn.log.add("dbdm > "+_appInfo.dbdmLibraryName+": Start execution.");if(!_appInfo.dbdmOff){_dl.fn.log.add("dbdm > "+_appInfo.dbdmLibraryName+": Retrieving userIpData");
var a=_dl.fn.page.getDestination();if(!!a.topLevelDomain){_dl.ddo.page.pageInfo.destinationDomain=a.topLevelDomain}if(!!_dl.fn.userIpData.CONFIG.ran&&!!_dl.fn.userIpData.CONFIG.finished){_dl.fn.log.add("dbdm > "+_appInfo.dbdmLibraryName+": Other userIpData ran already and available in browser storage");var b=_dl.fn.userIpData.getUserIpData();if(typeof(b)!=="undefined"&&b!==null){_dl.fn.userIpData.setUserIpDataToDdo(b)}_dl.fn.cookieSync.init();_dl.fn.tealium.load()}else{if(!_dl.fn.userIpData.CONFIG.ran&&!!_dl.fn.userIpData.init([_dl.fn.cookieSync.init,_dl.fn.tealium.load])){_dl.fn.log.add("dbdm > "+_appInfo.dbdmLibraryName+": userIpData available in browser storage");
_dl.fn.cookieSync.init();_dl.fn.tealium.load()}}if(_dl.fn.userIpData.CONFIG.ran&&!_dl.fn.userIpData.CONFIG.finished){_dl.fn.userIpData.CONFIG.runTimeout=setTimeout(function(){_dl.fn.log.add("+++DBDM-WARNING > "+_appInfo.dbdmLibraryName+": userIpData timed out, continue...");_dl.fn.cookieSync.init();_dl.fn.tealium.load()},_dl.fn.userIpData.CONFIG.timeout)}if(!!_dl.fn.gdpr.CONFIG){_dl.fn.gdpr.CONFIG.medallia=["1:","2:"]}}else{_dl.fn.log.add("dbdm > "+_appInfo.dbdmLibraryName+": Forced exit, dbdmOff is set.")
}})();