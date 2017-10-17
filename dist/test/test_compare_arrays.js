"use strict";var assert=require("assert"),requirejs=require("requirejs");requirejs.config({baseUrl:__dirname+"/../libs/",catchError:!0});var Decoder=requirejs("protocol-decoder");describe("IR.Decoder",function(){it("Compares the same buffer twice (Volume Up)",function(e){var r=["4345","4345","395","395","395","395","395","395","395","395","395","1185","395","1185","395","395","395","395","395","1185","395","1185","395","1185","395","1185","395","395","395","395","395","395","395","395","395","4345","395","395","395","395","395","395","395","395","395","1185","395","1185","395","1185","395","395","395","1185","395","1185","395","1185","395","395","395","395","395","395","395","395","395","1185","395","395","395","395","395","395","395","1185","395","54905","4345","4345","395","395","395","395","395","395","395","395","395","1185","395","1185","395","395","395","395","395","1185","395","1185","395","1185","395","1185","395","395","395","395","395","395","395","395","395","4345","395","395","395","395","395","395","395","395","395","1185","395","1185","395","1185","395","395","395","1185","395","1185","395","1185","395","395","395","395","395","395","395","395","395","1185","395","395","395","395","395","395","395","1185","395","54905","4345","4345","395","395","395","395","395","395","395","395","395","1185","395","1185","395","395","395","395","395","1185","395","1185","395","1185","395","1185","395","395","395","395","395","395","395","395","395","4345"];assert.equal(!0,Decoder.compareRawArrays(r,r)),e()}),it("Compares multiple buffers of the same button (Channel +)",function(e){var r=["4080","4080","510","1530","510","1530","510","1530","510","510","510","510","510","510","510","510","510","510","510","1530","510","1530","510","1530","510","510","510","510","510","510","510","510","510","510","510","510","510","1530","510","510","510","510","510","1530","510","510","510","510","510","510","510","1530","510","510","510","1530","510","1530","510","510","510","1530","510","1530","510","1530","510","46410","4080","4080","510","1530","510","1530","510","1530","510","510","510","510","510","510","510","510","510","510","510","1530","510","1530","510","1530","510","510","510","510","510","510","510","510","510","510","510","510","510","1530","510","510","510","510","510","1530","510","510","510","510","510","510","510","1530","510","510","510","1530","510","1530","510","510","510","1530","510","1530","510","1530","510"],a=["4008","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","1503","501","501","501","501","501","501","501","1503","501","501","501","1503","501","1503","501","501","501","1503","501","1503","501","1503","501","46593","4008","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","1503","501","501","501","501","501","501","501","1503","501","501","501","1503","501","1503","501","501","501","1503","501","1503","501","1503","501"],o=["4473","3976","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","497","497","1491","497","497","497","497","497","497","497","1491","497","497","497","1491","497","1491","497","497","497","1491","497","1491","497","1491","497","46221","4473","3976","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","497","497","1491","497","497","497","497","497","497","497","1491","497","497","497","1491","497","1491","497","497","497","1491","497","1491","497","1491","497"];assert.equal(!0,Decoder.compareRawArrays(r,a)),assert.equal(!0,Decoder.compareRawArrays(r,o)),e()}),it("Compares multiple buffers of the same button (Button 1)",function(e){var r=["4248","4248","531","1593","531","1593","531","1593","531","531","531","531","531","531","531","531","531","531","531","1593","531","1593","531","1593","531","531","531","531","531","531","531","531","531","531","531","531","531","531","531","1593","531","531","531","531","531","531","531","531","531","531","531","1593","531","1593","531","531","531","1593","531","1593","531","1593","531","1593","531","1593","531","46728","4248","4248","531","1593","531","1593","531","1593","531","531","531","531","531","531","531","531","531","531","531","1593","531","1593","531","1593","531","531","531","531","531","531","531","531","531","531","531","531","531","531","531","1593","531","531","531","531","531","531","531","531","531","531","531","1593","531","1593","531","531","531","1593","531","1593","531","1593","531","1593","531","1593","531"],a=["4184","4184","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","523","523","1569","523","1569","523","1569","523","1569","523","1569","523","46547","4184","4184","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","523","523","1569","523","1569","523","1569","523","1569","523","1569","523"],o=["4509","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","501","501","1503","501","1503","501","1503","501","1503","501","1503","501","46593","4008","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","501","501","1503","501","1503","501","1503","501","1503","501","1503","501"];assert.equal(!0,Decoder.compareRawArrays(r,a)),assert.equal(!0,Decoder.compareRawArrays(r,o)),e()}),it("Compares multiple buffers of the same button (Power Button)",function(e){powerButton_data1=["4184","4184","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","1569","523","1569","523","1569","523","1569","523","1569","523","1569","523","46547","4184","4184","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","1569","523","1569","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","523","523","523","523","523","523","523","523","523","523","1569","523","523","523","1569","523","1569","523","1569","523","1569","523","1569","523","1569","523"],powerButton_data2=["4008","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","1503","501","1503","501","1503","501","1503","501","1503","501","1503","501","46593","4008","4008","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","1503","501","1503","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","501","501","501","501","501","501","501","501","501","501","1503","501","501","501","1503","501","1503","501","1503","501","1503","501","1503","501","1503","501"],powerButton_data3=["4473","3976","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","1491","497","1491","497","1491","497","1491","497","1491","497","1491","497","46718","3976","4473","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","1491","497","1491","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","497","497","497","497","497","497","497","497","497","497","1491","497","497","497","1491","497","1491","497","1491","497","1491","497","1491","497","1491","497"],assert.equal(!0,Decoder.compareRawArrays(powerButton_data1,powerButton_data2)),assert.equal(!0,Decoder.compareRawArrays(powerButton_data1,powerButton_data3)),e()}),it("Compares the buttons 1 & 2 against each other of an Universal remote control in DVD Settings",function(e){var r=["2485","710","355","710","355","355","355","355","1065","1065","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","84490","2485","710","355","710","355","355","355","355","1065","1065","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","84490","2485","710","355","710","355","355","355","355","1065","1065","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710"],a=["2430","810","405","810","405","405","405","405","1215","1215","405","405","405","405","405","405","405","405","810","810","405","405","405","405","405","405","405","405","405","405","405","405","405","405","405","405","810","84645","2430","810","405","810","405","405","405","405","1215","1215","405","405","405","405","405","405","405","405","810","810","405","405","405","405","405","405","405","405","405","405","405","405","405","405","405","405","810"],o=["2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355","84135","2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355","84135","2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355"],s=["2457","702","351","702","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","351","351","351","351","351","702","702","351","84240","2457","702","351","702","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","351","351","351","351","351","702","702","351","84240","2457","702","351","702","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","351","351","351","351","351","702","702","351","84240","2457","702","351","702","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","351","351","351","351","351","702","702","351","84240","2457","702","351","702","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","702","702","351","351","351","351","351","351","351","351","351","351"],t=["2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355","84135","2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355","84135","2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355","84135","2485","710","355","710","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","710","710","355","355","355","355","355","355","355","355","355","355","355","355","355","355","710","710","355"];assert.equal(Decoder.compareRawArrays(r,a),!0),assert.equal(Decoder.compareRawArrays(o,s),!0),assert.equal(Decoder.compareRawArrays(s,t),!0),assert.equal(Decoder.compareRawArrays(o,t),!0),assert.equal(Decoder.compareRawArrays(r,o),!1),assert.equal(Decoder.compareRawArrays(r,s),!1),assert.equal(Decoder.compareRawArrays(r,t),!1),assert.equal(Decoder.compareRawArrays(a,o),!1),assert.equal(Decoder.compareRawArrays(a,s),!1),assert.equal(Decoder.compareRawArrays(a,t),!1),e()}),it("Verifies the APPLE Protocol",function(e){var r=["154","330","1067","286","253","374","143","440","154","682","77","462","187","352","165","308","11","2420","209","847","143","2134","385","1837","187","2244","55","1100","143","1804","231","1958","121","2068","462","1771","385","1848","209","1980","143","1045","143","913","187","913","385","759","187","2002","209","880","462","1771","440","1771","440","693","209","869","440","671","484","649","473","682","385","649","462","649","440","462","11","55","1793","319","803","429","638","484","1782","132","1529","2222","341","792","2332","462"],a=["9010","4240","530","530","530","1590","530","1590","530","1590","530","530","530","1590","530","1590","530","1590","530","1590","530","1590","530","1590","530","530","530","530","530","530","530","530","530","1590","530","530","530","1590","530","1590","530","530","530","530","530","530","530","530","530","530","530"],o=["2940","1404","552","564","552","1656","576","1644","576","1644","588","528","600","1620","552","2592","12","1296","576","1644","576","1656","540","1644","564","552","576","540","564","552","564","552","564","1656","540","576","540","1668","564","1644","564","564","552","564","552","576","552","564","552","564","552","564","564","540","552","1668","564","564","564","1632","552","564","552","564","588","1644","588","540","2976","2232","588"],s=["5904","328","2624","4592","492","492","328","1640","164","1968","164","1804","328","492","164","1968","328","1640","328","1640","492","1804","328","1640","328","1640","328","656","328","492","164","820","328","492","328","1804","328","492","328","1640","328","1640","328","656","328","492","328","656","328","492","492","492","492","492","328","492","492","1476","492","492","328","1640","492","492","492","492","164","1968","328","40508","8856","2296","328"],t=["2964","1368","588","540","564","1644","588","456","12","288","564","564","588","1632","564","1644","564","1656","564","1632","588","1632","552","1668","588","528","552","540","600","540","540","576","576","1620","576","540","576","1644","576","1644","576","492","624","492","576","540","612","528","588","528","564","564","564","540","564","1608","600","540","564","1608","564","540","600","528","552","1656","624","528","2940","2208","564"];assert.equal(Decoder.compareRawArrays(r,a),!0),assert.equal(Decoder.compareRawArrays(a,o),!0),assert.equal(Decoder.compareRawArrays(r,s),!0),assert.equal(Decoder.compareRawArrays(r,t),!0)})});