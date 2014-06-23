window._pa = window._pa || {};
_pa.segments = [{"name":"All visitors","id":522915,"regex":".*"},{"name":"Signups","id":523034,"regex":"dashboard\\/store\\/.*\\/welcome"},{"name":"Visitors to dashboard","id":1432574,"regex":"/dashboard/.*/?([?#].*)*$"}];
_pa.conversions = [{"name":"Store Sign Up","id":"57645","regex":"dashboard\\/store\\/.*\\/welcome"},{"name":"Open one of the promoted apps","id":"158299","regex":".*dashboard.*/app/(voicebox|a3j-product-upsell|abandoned-carts).*"}];
_pa.conversionEvents = [];
_pa.segmentEvents = [{"name":"loopia","id":762812}];
_pa.rtbId = '354';
!function(){function e(e,t,p){a(e,t,p),n(e,t)}function a(e,a,n){if(null==n||isNaN(n))var t=_pa.pixelHost+"seg?t=2&add="+e;else var t=_pa.pixelHost+"seg?t=2&add="+e+":"+n;_pa.createImageTag("segments",e,t,a)}function n(e,a){var n=_pa.paRtbHost+"seg/?add="+e;_pa.productId&&(n+=":"+encodeURIComponent(_pa.productId)),r?_pa.createImageTag("paRtbSegments",e,n,a):i.push({id:e,name:a})}function t(){if(r=!0,0!==i.length){for(var e=[],a=[],n=0;n<i.length;n++){var t=i[n],p=t.id,o=t.name;_pa.productId&&(p+=":"+encodeURIComponent(_pa.productId)),e.push(p),a.push(o)}var p=e.join(","),o=a.join(","),d=_pa.paRtbHost+"seg/?add="+p;_pa.createImageTag("paRtbSegments",p,d,o)}}function p(e,a,n,t){n=n||_pa.orderId,t=t||_pa.revenue;var p="";n&&""!==n&&(n=n.toString().replace(/@.*/,"@"),p+="&order_id="+encodeURIComponent(n)),t&&""!==t&&(p+="&value="+encodeURIComponent(t)),p+="&other="+function(){for(var e="",a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=0;16>n;n++){var t=Math.floor(Math.random()*a.length);e+=a.charAt(t)}return e}();var o=_pa.pixelHost+"px?t=2&id="+e+p,r=_pa.paRtbHost+"px/?id="+e+p;_pa.rtbId&&(r+="&a_id="+_pa.rtbId),_pa.createImageTag("conversions",e,o,a),_pa.createImageTag("paRtbConversions",e,r,a)}function o(e){for(var a=e.shift(),n=a.split("."),t=_pa,p=0;p<n.length;p++)t=t[n[p]];var o=t.apply(_pa,e),r=_pa.callbacks[a];if("undefined"!=typeof r)for(var p=0;p<r.length;p++)r[p].apply(_pa,e);return o}_pa.head=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];var r=!1,i=[];_pa.init=function(){_pa.fired={segments:[],conversions:[]},_pa.url=document.location.href,_pa.pixelHost=("https:"===document.location.protocol?"https://secure":"http://ib")+".adnxs.com/",_pa.paRtbHost=("https:"===document.location.protocol?"https://":"http://")+"pixel.prfct.co/",_pa.callbacks={}},_pa.addFired=function(e,a){"undefined"==typeof _pa.fired[e]&&(_pa.fired[e]=[]),_pa.fired[e].push(a)},_pa.detect=function(){for(var a=0;a<_pa.segments.length;a++){var n=_pa.segments[a];_pa.url.match(new RegExp(n.regex,"i"))&&e(n.id,n.name)}for(var a=0;a<_pa.conversions.length;a++){var t=_pa.conversions[a];_pa.url.match(new RegExp(t.regex,"i"))&&p(t.id,t.name)}},_pa.track=function(e,a){a="undefined"!=typeof a?a:{};var n=_pa.trackSegments(e,a),t=_pa.trackConversions(e,a);return n||t},_pa.trackSegments=function(a,n){for(var t=!1,p=0;p<_pa.segmentEvents.length;p++){var o=_pa.segmentEvents[p];o.name===a&&(t=!0,e(o.id,o.name,n.segment_value))}return t},_pa.trackConversions=function(e,a){for(var n=!1,t=0;t<_pa.conversionEvents.length;t++){var o=_pa.conversionEvents[t];o.name===e&&(n=!0,p(o.id,o.name,a.orderId,a.revenue))}return n},_pa.trackProduct=function(e){_pa.productId=e;for(var a=_pa.fired.segments,t={},p=0;p<a.length;p++){var o=a[p],r=o.id;t[r]=!0}for(var i in t)n(i,"product refire")},_pa.fireLoadEvents=function(){if("undefined"!=typeof _pa.onLoadEvent)if("function"==typeof _pa.onLoadEvent)_pa.onLoadEvent();else if("string"==typeof _pa.onLoadEvent)for(var e=_pa.onLoadEvent.split(","),a=0;a<e.length;a++){var n=e[a];_pa.track(n)}},_pa.createImageTag=function(e,a,n,t){var p=document.createElement("img");p.src=n,p.width=1,p.height=1,p.border=0,_pa.head.appendChild(p),_pa.addFired(e,{id:a,name:t,tag:p})},_pa.start=function(){_pa.fireLoadEvents(),_pa.detect(),_pa.initQ(),t()},_pa.initQ=function(){if("undefined"!=typeof window._pq)for(var e=0;e<_pq.length;e++){var a=_pq[e];o(a)}window._pq={push:function(e){return o(e)}}},_pa.addListener=function(e,a){"undefined"==typeof _pa.callbacks[e]&&(_pa.callbacks[e]=[]),_pa.callbacks[e].push(a)},_pa.removeListener=function(e,a){for(var n=_pa.callbacks[e],t=n.length;t--;)n[t]===a&&n.splice(t,1)},_pa.init()}();	(function() {
	_pa.partner_tags = {"pa_rtb":true};
	function createPartnerTags(partner_tags){
		if (partner_tags.canned_banners != null){
			loadCannedBanners(partner_tags.canned_banners);
		}
	}
	
	
	
	
	
	
	createPartnerTags(_pa.partner_tags);
})();

_pa.start();
