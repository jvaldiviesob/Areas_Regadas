
var firstYearjs = require('users/corfobbppciren2023/firstYear:0.firstYear.js'),
    lista_SHACS = require('users/corfobbppciren2023/Areas_Regadas:-1.lista_SHACS.js');

var indice = lista_SHACS.sequence_[81]; //Editar

//print("Indice", indice);
//print("SHAC", lista_SHACS.nombre_SHAC[indice]);
//print("Tipo de SHAC", lista_SHACS.tipo_SHAC[indice]);

var SHAC = lista_SHACS.nombre_SHAC[indice],
    ruta ='projects/ee-corfobbppciren2023/assets/SHACS/'+SHAC,
    firstYear = ee.Number(firstYearjs.firstYear),
    firstYearaddone = firstYear.add(1),
    table2 = ee.FeatureCollection(ruta),
    sequence_ = lista_SHACS.sequence_;

//print("firstYear.firstYear",firstYearjs.firstYear);

if (lista_SHACS.tipo_SHAC[indice]=='1'){
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Maipo_Desembocadura'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_1_Maipo_Desembocadura_con_Clase_ptos14797_'+firstYearjs.firstYear);
}
  else if (lista_SHACS.tipo_SHAC[indice]=='2') {
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Sector_4_Rio_Petorca_Poniente'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_2_Sector_4_Rio_Petorca_Poniente_con_Clase_28porciento_ptos20000_'+firstYearjs.firstYear);
}
  else if (lista_SHACS.tipo_SHAC[indice]=='3') {
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/La_Vinilla_Casablanca'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_3_La_Vinilla_Casablanca_con_Clase_25porciento_ptos21474_'+firstYearjs.firstYear);
} 
  else if (lista_SHACS.tipo_SHAC[indice]=='4') {
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Acuifero_4_Catemu'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_4_Catemu_con_Clase_25porciento_ptos20000_'+firstYearjs.firstYear);
} 
  else if (lista_SHACS.tipo_SHAC[indice]=='5') {
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Acuifero_1_San_Felipe'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_6_Acuifero_1_San_Felipe_con_Clase_25porciento_ptos20000_'+firstYearjs.firstYear);
} 
  else if (lista_SHACS.tipo_SHAC[indice]=='6') {
  var  table1 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/SHACS/Acuifero_1_San_Felipe'),
       table3 = ee.FeatureCollection('projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento/puntos_SHACS_6_Acuifero_1_San_Felipe_con_Clase_25porciento_ptos20000_'+firstYearjs.firstYear);
}

//Map.addLayer()

// Set Dates - based on irrigation season
var start = ee.String(ee.Number(firstYear)).cat('-09-01'),
    end = ee.String(ee.Number(firstYear).add(1)).cat('-05-31');


exports.firstYear = firstYear;
exports.firstYearaddone = firstYearaddone;
exports.region_entrenamiento = table1;
exports.region_destino = table2;
exports.trainingGcp = table3;
exports.pixeles = 50; // pixeles denoise
exports.escala = 30; // escala output
exports.season = ee.Filter.date(start,end);
exports.cuenca ='SHAC_'+SHAC;
