(function(e){function t(t){for(var a,c,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={"app~d0ae3f07":0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;r.push([0,"chunk-vendors~6b4a2b08","chunk-vendors~5ea1a303","chunk-vendors~05146026","chunk-vendors~519c10bf","chunk-vendors~2a42e354","chunk-vendors~7e5e8261","chunk-vendors~7d359b94","chunk-vendors~f63129db","chunk-vendors~fdc6512a"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0402":function(e,t,n){},2113:function(e,t,n){"use strict";n("a62e")},"23ea":function(e,t,n){},"2aa6":function(e,t,n){"use strict";n("0402")},"91c3":function(e,t,n){},a62e:function(e,t,n){},b2c2:function(e,t,n){"use strict";n("91c3")},cd49:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=n("cf05"),r=n.n(o);const c=Object(a["f"])("img",{src:r.a,alt:"logo",class:"logo"},null,-1);function i(e,t){const n=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(n),c],64)}n("d5b0");var s=n("6b0d"),u=n.n(s);const l={},d=u()(l,[["render",i]]);var p=d,b=n("6605");function f(e,t,n,o,r,c){var i=Object(a["A"])("MapView"),s=Object(a["A"])("MyLocationBtn"),u=Object(a["A"])("SearchBar"),l=Object(a["A"])("TripDetails");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(i),Object(a["h"])(s),Object(a["h"])(u),Object(a["h"])(l)],64)}var v=n("5502"),m=function(){var e=Object(v["b"])();return{map:Object(a["b"])((function(){return e.state.map.map})),distance:Object(a["b"])((function(){return e.state.map.distance})),duration:Object(a["b"])((function(){return e.state.map.duration})),getMapReady:Object(a["b"])((function(){return e.getters["map/getMapReady"]})),getRouteBetweenPoints:function(t,n){return e.dispatch("map/getRouteBetweenPoints",{start:t,end:n})},setMap:function(t){return e.commit("map/setMap",t)},setPlaceMarkers:function(t){return e.commit("map/setPlaceMarkers",t)}}},j=function(){var e=Object(v["b"])();return Object(a["r"])((function(){e.getters["places/getUserLocationIsReady"]||e.dispatch("places/getInitialLocation")})),{isLoading:Object(a["b"])((function(){return e.state.places.isLoading})),userLocation:Object(a["b"])((function(){return e.state.places.userLocation})),isLoadingPlaces:Object(a["b"])((function(){return e.state.places.isLoadingPlaces})),places:Object(a["b"])((function(){return e.state.places.places})),getUserLocationIsReady:Object(a["b"])((function(){return e.getters["places/getUserLocationIsReady"]})),searchPlacesByTerm:function(t){return void 0===t&&(t=""),e.dispatch("places/searchPlacesByTerm",t)}}},g=function(e){return Object(a["w"])("data-v-e7b649d6"),e=e(),Object(a["u"])(),e},O={key:0,class:"loading-map d-flex justify-content-center align-items-center"},h=g((function(){return Object(a["f"])("div",{class:"text-center"},[Object(a["f"])("h3",null,"Espere por favor"),Object(a["f"])("span",null,"Localizando...")],-1)})),y=[h],L={ref:"mapElement",class:"map-container"};function w(e,t,n,o,r,c){return Object(a["t"])(),Object(a["e"])(a["a"],null,[e.getUserLocationIsReady?Object(a["d"])("",!0):(Object(a["t"])(),Object(a["e"])("div",O,y)),Object(a["I"])(Object(a["f"])("div",L,null,512),[[a["G"],e.getUserLocationIsReady]])],64)}var P=n("9ab4"),k=n("e192"),R=n.n(k),M=Object(a["i"])({name:"MapView",setup:function(){var e=this,t=j(),n=t.getUserLocationIsReady,o=t.userLocation,r=m().setMap,c=Object(a["y"])(),i=function(){return Object(P["a"])(e,void 0,void 0,(function(){var e,t;return Object(P["b"])(this,(function(n){switch(n.label){case 0:if(!c.value)throw new Error("No HTMLDivElement");if(!o.value)throw new Error("No UserLocation");return[4,Promise.resolve()];case 1:return n.sent(),e=new R.a.Map({container:c.value,style:"mapbox://styles/mapbox/light-v10",center:o.value,zoom:15}),t=(new R.a.Popup).setLngLat(o.value).setHTML("<h6>Estoy aquí</h6><p>CABA, Argentina</p>"),(new R.a.Marker).setLngLat(o.value).setPopup(t).addTo(e),r(e),[2]}}))}))};return Object(a["r"])((function(){n.value&&i()})),Object(a["H"])(n,(function(e){n.value&&i()})),{getUserLocationIsReady:n,mapElement:c}}});n("dd2d");const I=u()(M,[["render",w],["__scopeId","data-v-e7b649d6"]]);var T=I;function x(e,t,n,o,r,c){return e.showButton?(Object(a["t"])(),Object(a["e"])("button",{key:0,class:"btn btn-primary",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToMyLocation&&e.goToMyLocation.apply(e,t)})},"Mi Ubicación")):Object(a["d"])("",!0)}var S=Object(a["i"])({name:"MyLocationBtn",setup:function(){var e=m(),t=e.map,n=e.getMapReady,o=j(),r=o.userLocation,c=o.getUserLocationIsReady;return{showButton:Object(a["b"])((function(){return c.value&&n.value})),goToMyLocation:function(){var e;null===(e=t.value)||void 0===e||e.flyTo({center:r.value,zoom:14})}}}});n("2113");const _=u()(S,[["render",x],["__scopeId","data-v-14a5a84b"]]);var B=_,E={class:"container"};function C(e,t,n,o,r,c){var i=Object(a["A"])("SearchResults");return Object(a["t"])(),Object(a["e"])("div",E,[Object(a["I"])(Object(a["f"])("input",{type:"text",placeholder:"Buscar lugares...",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchTerm=t})},null,512),[[a["F"],e.searchTerm]]),Object(a["h"])(i)])}var U=function(e){return Object(a["w"])("data-v-1d19947e"),e=e(),Object(a["u"])(),e},D={key:0,class:"alert alert-primary text-center"},z=U((function(){return Object(a["f"])("h5",null,"Cargando",-1)})),J=U((function(){return Object(a["f"])("span",null,"Espere por favor...",-1)})),V=[z,J],A={key:1,class:"list-group mt-3"},H=["onClick"],N={align:"right"},F=["onClick"];function W(e,t,n,o,r,c){return e.isLoadingPlaces?(Object(a["t"])(),Object(a["e"])("div",D,V)):e.places.length>0?(Object(a["t"])(),Object(a["e"])("ul",A,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(e.places,(function(t){return Object(a["t"])(),Object(a["e"])("li",{class:Object(a["o"])(["list-group-item list-group-item-action",{active:t.id===e.activePlace}]),onClick:function(n){return e.goToPlace(t)},key:t.id},[Object(a["f"])("h5",null,Object(a["D"])(t.text),1),Object(a["f"])("p",null,Object(a["D"])(t.place_name),1),Object(a["f"])("div",N,[Object(a["f"])("button",{class:Object(a["o"])(["btn btn-outline-primary btn-sm",t.id===e.activePlace?"btn-outline-light":"btn-outline-primary"]),onClick:Object(a["J"])((function(n){return e.traceRoute(t)}),["self"])},"Trazar Ruta",10,F)])],10,H)})),128))])):Object(a["d"])("",!0)}var Y=Object(a["i"])({name:"SearchResults",setup:function(){var e=j(),t=e.isLoadingPlaces,n=e.places,o=e.userLocation,r=m(),c=r.map,i=r.setPlaceMarkers,s=r.getRouteBetweenPoints,u=Object(a["y"])("");return Object(a["H"])(n,(function(e){u.value="",i(e)})),{activePlace:u,isLoadingPlaces:t,places:n,goToPlace:function(e){var t;u.value=e.id;var n=e.center,a=n[0],o=n[1];null===(t=c.value)||void 0===t||t.flyTo({center:[a,o],zoom:14})},traceRoute:function(e){if(o.value){var t=o.value,n=t[0],a=t[1],r=e.center,c=r[0],i=r[1],u=[n,a],l=[c,i];s(u,l)}}}}});n("ef19");const Z=u()(Y,[["render",W],["__scopeId","data-v-1d19947e"]]);var G=Z,K=Object(a["i"])({name:"SearchBar",components:{SearchResults:G},setup:function(){var e=j().searchPlacesByTerm,t=Object(a["y"])(),n=Object(a["y"])("");return{debouncedValue:n,searchTerm:Object(a["b"])({get:function(){return n.value},set:function(a){t.value&&clearTimeout(t.value),t.value=setTimeout((function(){n.value=a,e(a)}),750)}}),searchPlacesByTerm:e}}});n("b2c2");const X=u()(K,[["render",C],["__scopeId","data-v-44857f23"]]);var q=X,Q={key:0,class:"container column bg-primary"},$={class:"col text-white"},ee={class:"col text-white"};function te(e,t,n,o,r,c){return e.distance&&e.duration?(Object(a["t"])(),Object(a["e"])("div",Q,[Object(a["f"])("div",$,[Object(a["g"])("Distancia: "),Object(a["f"])("strong",null,Object(a["D"])(e.distance)+" kms",1)]),Object(a["f"])("div",ee,[Object(a["g"])("Duración: "),Object(a["f"])("strong",null,Object(a["D"])(e.duration)+" mins",1)])])):Object(a["d"])("",!0)}var ne=Object(a["i"])({name:"TripDetails",setup:function(){var e=m(),t=e.distance,n=e.duration;return{distance:t,duration:n}}});n("2aa6");const ae=u()(ne,[["render",te],["__scopeId","data-v-09335b00"]]);var oe=ae,re=Object(a["i"])({name:"HomeView",components:{MapView:T,MyLocationBtn:B,SearchBar:q,TripDetails:oe},setup:function(){j()}});const ce=u()(re,[["render",f]]);var ie=ce,se=[{path:"/",name:"HomeView",component:ie}],ue=Object(b["a"])({history:Object(b["b"])(),routes:se}),le=ue;function de(){return{map:void 0,markers:[],distance:void 0,duration:void 0}}var pe=de,be=n("cee4"),fe=be["a"].create({baseURL:"https://api.mapbox.com/directions/v5/mapbox/driving",params:{access_token:"pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw",alternatives:!1,geometries:"geojson",overview:"simplified",steps:!1}}),ve=fe,me=be["a"].create({baseURL:"https://api.mapbox.com/geocoding/v5/mapbox.places",params:{access_token:"pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw",language:"es",limit:5}}),je=me,ge={getRouteBetweenPoints:function(e,t){var n=e.commit,a=t.start,o=t.end;return Object(P["a"])(this,void 0,void 0,(function(){var e,t,r,c,i;return Object(P["b"])(this,(function(s){switch(s.label){case 0:return[4,ve.get(a.join(",")+";"+o.join(","))];case 1:return e=s.sent(),t=e.data.routes[0],r=t.distance,c=t.duration,i=t.geometry,n("setDistanceDuration",{distance:r,duration:c}),n("setRoutePolyline",i.coordinates),[2]}}))}))}},Oe=ge,he={getMapReady:function(e){return!!e.map}},ye=he,Le={setMap:function(e,t){e.map=t},setDistanceDuration:function(e,t){var n=t.distance,a=t.duration;e.distance=Math.round(n/1e3*100)/100,e.duration=Math.floor(a/60)},setPlaceMarkers:function(e,t){if(e.markers.forEach((function(e){return e.remove()})),e.markers=[],e.map){for(var n=0,a=t;n<a.length;n++){var o=a[n],r=o.center,c=r[0],i=r[1],s=(new R.a.Popup).setLngLat([c,i]).setHTML("<h6>"+o.text+"</h6><p>"+o.place_name+"</p>"),u=(new R.a.Marker).setLngLat([c,i]).setPopup(s).addTo(e.map);e.markers.push(u)}e.map.getLayer("RouteString")&&(e.map.removeLayer("RouteString"),e.map.removeSource("RouteString"),e.distance=void 0,e.duration=void 0)}},setRoutePolyline:function(e,t){for(var n,a,o,r,c,i,s=t[0],u=new R.a.LngLatBounds([s[0],s[1]],[s[0],s[1]]),l=0,d=t;l<d.length;l++){var p=d[l];u.extend([p[0],p[1]])}null===(n=e.map)||void 0===n||n.fitBounds(u,{padding:200});var b={type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}]}};(null===(a=e.map)||void 0===a?void 0:a.getLayer("RouteString"))&&(null===(o=e.map)||void 0===o||o.removeLayer("RouteString"),null===(r=e.map)||void 0===r||r.removeSource("RouteString")),null===(c=e.map)||void 0===c||c.addSource("RouteString",b),null===(i=e.map)||void 0===i||i.addLayer({id:"RouteString",type:"line",source:"RouteString",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"black","line-width":3}})}},we=Le,Pe={namespaced:!0,actions:Oe,getters:ye,mutations:we,state:pe},ke=Pe;function Re(){return{isLoading:!0,userLocation:void 0,isLoadingPlaces:!1,places:[]}}var Me=Re,Ie={getInitialLocation:function(e){var t=e.commit;navigator.geolocation.getCurrentPosition((function(e){t("setCurrentPosition",e.coords)}),(function(e){throw console.error(e),new Error("No geolocation.")}))},searchPlacesByTerm:function(e,t){var n,a=e.commit,o=e.state;return Object(P["a"])(this,void 0,Promise,(function(){var e;return Object(P["b"])(this,(function(r){switch(r.label){case 0:if(0===t.length)return a("setPlaces",[]),[2,[]];if(!o.userLocation)throw new Error("No hay ubicación del usuario.");return a("setIsLoadingPlaces",!0),[4,je.get("/"+t+".json",{params:{proximity:null===(n=o.userLocation)||void 0===n?void 0:n.join(",")}})];case 1:return e=r.sent(),a("setPlaces",e.data.features),[2,e.data.features]}}))}))}},Te=Ie,xe={getUserLocationIsReady:function(e){return!!e.userLocation}},Se=xe,_e={setCurrentPosition:function(e,t){e.userLocation=[t.longitude,t.latitude],e.isLoading=!1},setIsLoadingPlaces:function(e,t){e.isLoadingPlaces=t},setPlaces:function(e,t){e.places=t,e.isLoadingPlaces=!1}},Be=_e,Ee={namespaced:!0,actions:Te,getters:Se,mutations:Be,state:Me},Ce=Ee,Ue=Object(v["a"])({modules:{map:ke,places:Ce}});if(R.a.accessToken="pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw",!navigator.geolocation)throw alert("Tu navegador no soporta Geolocation"),new Error("Tu navegador no soporta Geolocation");Object(a["c"])(p).use(Ue).use(le).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d5b0:function(e,t,n){"use strict";n("23ea")},dd2d:function(e,t,n){"use strict";n("f292")},e763:function(e,t,n){},ef19:function(e,t,n){"use strict";n("e763")},f292:function(e,t,n){}});
//# sourceMappingURL=app~d0ae3f07.2884ce0f.js.map