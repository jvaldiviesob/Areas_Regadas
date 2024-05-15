
var firstYear = require('users/corfobbppciren2023/firstYear:0.firstYear.js'),
    lista_SHACS = require('users/corfobbppciren2023/Areas_Regadas:-1.lista_SHACS.js');

var SHAC = lista_SHACS.SHAC_62,
    ruta ='projects/ee-corfobbppciren2023/assets/SHACS_Coquimbo/'+SHAC,
    firstYear = ee.Number(firstYear.firstYear),
    firstYearsubtractone = firstYear.subtract(1),
    table1=ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Maipo_Desembocadura'),
    table2=ee.FeatureCollection(ruta),
    table3=ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_1_Maipo_Desembocadura_con_Clase_25porciento_ptos14797_2015_20216');

// Set Dates - based on irrigation season
var start = ee.String(ee.Number(firstYearsubtractone)).cat('-09-01'),
    end = ee.String(ee.Number(firstYear)).cat('-05-31');

exports.firstYear = firstYear;
exports.firstYearsubtractone = firstYearsubtractone;
exports.region_entrenamiento = table1;
exports.region_destino = table2;
exports.trainingGcp = table3;
exports.pixeles = 100; // pixeles denoise
exports.escala = 10; // escala output
exports.season = ee.Filter.date(start,end);
exports.cuenca ='SHAC_'+SHAC;
