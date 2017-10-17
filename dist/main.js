"use strict";define(["HubLink","Easy","PropertiesPanel","RIB"],function(e,t,o,i){function s(){var e=[],t=!0,o=!1,i=void 0;try{for(var s,n=this.codeList[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var r=s.value;r.message&&0!==r.message.code&&e.push(r.name.toLowerCase())}}catch(e){o=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw i}}return e}function n(e,t){var o=-1;return e.some(function(e,i){if(e.index==t)return o=i,!0}),o}function r(e){l.call(this);var t=this;t.codeList.splice(n(t.codeList,$(e).attr("data-index")),1),m.call(this)}function a(e){e.removeClass("green").removeClass("yellow").addClass("red").transition("set looping").transition("flash","1000ms")}function c(e){var t=n(this.codeList,$(e).attr("data-index")),o=this.codeList[t].DOM.find("i.record"),i=this,s=0!==this.codeList[t].code;this.codeList[t].recording?(this.codeList[t].recording=!1,b(o,s)):(this.codeList.forEach(function(e,t){i.codeList[t].recording=!1,b(i.codeList[t].DOM.find("i.record"),0!==i.codeList[t].code)}),this.codeList[t].recording=!0,this.codeList[t].code=0,a(o),o.popup({content:"Waiting an IR signal...",position:"left center"}),o.popup("show"))}function l(){var e=this;this.myPropertiesWindow.find(".record-row").each(function(t){var o=n(e.codeList,$(this).attr("data-index"));e.codeList[o].name=$(this).find("input").val()})}function d(){l.call(this),this.codeList.push({name:"IR-"+(this.codeList.length+1),index:this.codeList.length,code:0}),m.call(this)}function h(){u.call(this,!0),console.log("Sending: ",this.controller._lastEvent),console.log("TO BE IMPLEMENTED!")}function u(e){var t=this.modalWindow.find(".checkbox").hasClass("checked");this.controller._rememberNext=t,this.controller._canSend=!0===e}function f(){if(this.modalWindow&&this.controller._lastEvent){if(this.controller._rememberNext)return void(this.controller._canSend&&h.call(this));this.modalWindow.modal({inverted:!0,transition:"scale",onApprove:h.bind(this),onDeny:u.bind(this)}).modal("show")}}function m(){var e=this;t.clearCustomSettingsPanel(),this.myPropertiesWindow=$(this.propTemplate({codes:this.codeList,basePath:this.basePath})),this.modalWindow=$(this.myPropertiesWindow[0]),this.myPropertiesWindow.find("#btAdd").click(d.bind(this)),this.myPropertiesWindow.find("#btDelete").click(function(){r.call(e,this)}),this.myPropertiesWindow.find("#btRecord").click(function(){c.call(e,this)}),this.myPropertiesWindow.find("#senddata-btn").click(function(){var t={to:"alex.agudelo@djenie.com",text:"["+e.lastRawData.toString()+"]",subject:"IR: Protocol not implemented"};$.ajax({type:"POST",crossDomain:!0,url:"http://replicatorcloud.na-inter.net/emailsender/send/",xhrFields:{withCredentials:!1},data:t,success:function(e){console.log("email sent to: ",t)},error:function(e,t,o){console.log("error sending email: ",o)}})}),t.displayCustomSettings(this.myPropertiesWindow),this.modalWindow.modal("hide"),this.myPropertiesWindow.find(".record-row").each(function(t){var o=n(e.codeList,$(this).attr("data-index"));e.codeList[o].DOM=$(this);var i=0!==e.codeList[o].code;b(e.codeList[o].DOM.find("i.record"),i),e.codeList[o].recording&&a(e.codeList[o].DOM.find("i.record"))})}function g(e){var t=this;return this.codeList.some(function(o,i){if(o.recording){var s=t.controller.Decoder.analyse(e.message.raw);if(s){o.recording=!1;var n=o.DOM.find("i.record");return b(n,!0),o.message=s,o.message.raw=e.message.raw,t.lastRawData=e.message.raw,n.popup("destroy"),"RAW"===s.type&&(t.controller._lastEvent=e.message,console.warn("This protocol is not yet implemented: ",e.message.raw),f.call(t)),!0}}})}function p(e){this.processData(e);var o=!0,i=!1,s=void 0;try{for(var n,r=this.getInputs()[Symbol.iterator]();!(o=(n=r.next()).done);o=!0){var a=n.value;e.hasOwnProperty(a)||(e[a.toLowerCase()]=!1)}}catch(e){i=!0,s=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw s}}t.showDataFeed(this),this.dispatchDataFeed(e)}function v(e){var t=this,o=t.controller.Decoder.analyse(e.raw);if(o){var i=!0,s=!1,n=void 0;try{for(var r,a=this.codeList[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var c=r.value;if(e.code)c.message.code==e.code&&(e[c.name.toLowerCase()]=!0);else if(e.raw&&e.raw.length>2&&c.message){var l=t.controller.Decoder.compareCodes(o,c.message);if(l){var d=l.repeat||1;return function t(){d-- >0&&(e[c.name.toLowerCase()]=!0,p.call(this,e),setTimeout(t.bind(this),l.timeout||100))}.call(this)}}}}catch(e){s=!0,n=e}finally{try{!i&&a.return&&a.return()}finally{if(s)throw n}}}}var w=["CODE"],y=["SEND_RAW"],L={};L.getActions=function(){return y.concat(s.call(this))},L.getDefaultAction=function(){var e=s.call(this);return e.length>0&&e[0]},L.getInputs=function(){var e=s.call(this);return w.concat(e)},L.getDefaultInput=function(){var e=s.call(this);return e.length>0&&e[0]},L.onBeforeSave=function(){return{codeList:this.codeList}},L.onLoad=function(){var e=this;this.addSubscription("block:change",function(t){0!==t.message.code&&(g.call(e,t),v.call(e,t.message))}),require.config({baseUrl:e.basePath+"libs/",catchError:!0});var t=e.basePath+"libs/";require([t+"buffer.js"],function(e){Buffer=e.Buffer,console.log("Buffer lib loaded! ")}),require([t+"protocol-decoder.js"],function(t){e.controller.Decoder=t,e.controller.Decoder.controller=e,console.log("Decoder lib loaded! ")}),this.loadTemplate("properties.html").then(function(t){e.propTemplate=t}),this.storedSettings&&this.storedSettings.codeList?this.codeList=this.storedSettings.codeList:this.codeList=[],this.lastRawData="",L.hasMissingProperties.call(this)?this.displayState("warning","Add some IR code..."):this.clearState()},L.hasMissingProperties=function(){return 0===this.codeList.length},L.onCancelProperties=function(){console.log("Cancelling Properties")},L.onSaveProperties=function(e){l.call(this),console.log("Saving settings: ",e),e.Custom=this._tmpCustomObj,this.settings=e,this.saveSettings().catch(function(e){e.errorCode?alert("Error (make me a nice alert please): ",e.message):console.log(e)}),t.showDataFeed(this),L.hasMissingProperties.call(this)?this.displayState("warning","Add some IR code..."):this.clearState()},L.onClick=function(){var e=this;o.loading("Loading settings..."),this.loadSettings(function(o){console.log("Settings: ",o),o.EventMode={property:"EventMode",items:[{name:"Always",value:0,selected:0===o.EventMode},{name:"Never",value:1,selected:1===o.EventMode}]},e._tmpCustomObj=$.extend(!0,{},o.Custom),o.Custom={},t.showBaseSettings(e,o),m.call(e),t.openCustomSettingsAccordion()})},L.onExecute=function(e){console.log("Execute: ",e);var t=!0,o=!1,i=void 0;try{for(var s,n=this.codeList[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var r=s.value;if(r.name.toLowerCase()==e.action){console.log("Sending item.format: ",r.format,"; Item.message: ",r.message),this.APICall("transmitData",[r.format,r.message]).then(function(e){console.log("Transmission OK?: ",e)}).catch(function(e){console.error("Error transmitting: ",e)});break}}}catch(e){o=!0,i=e}finally{try{!t&&n.return&&n.return()}finally{if(o)throw i}}},L.onNewData=function(e){console.log("New data: ",e)};var b=function(e,t){e.removeClass("red").transition("remove looping"),t?e.addClass("green"):e.addClass("yellow")};return L});