"use strict";define(function(){return{inRange:function(e,n){return Number(e)>.7*Number(n)&&Number(e)<1.3*Number(n)},millis:function(){return(new Date).getTime()},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}}});