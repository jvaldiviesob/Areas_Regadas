
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    maskS2clouds = require('users/corfobbppciren2023/Areas_Regadas_Auxiliares:maskS2clouds.js'),
    NDVI = require('users/corfobbppciren2023/Areas_Regadas:4.NDVI.js');
    
var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearsubtractone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearsubtractone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// NDRE (Normalized Difference Red Edge)
var getNDRE = function(image) {
  var ndre = image.normalizedDifference(['B8', 'B5']).rename('NDRE');
  return image.addBands(ndre);
};

// using monthly mean reflectance
var ndre_region_destino_Sep = NDVI.sentinel2_region_destino_sep.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreSep');
var ndre_region_destino_Oct = NDVI.sentinel2_region_destino_oct.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreOct');
var ndre_region_destino_Nov = NDVI.sentinel2_region_destino_nov.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreNov');
var ndre_region_destino_Dec = NDVI.sentinel2_region_destino_dec.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreDec');
var ndre_region_destino_Jan = NDVI.sentinel2_region_destino_jan.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreJan');
var ndre_region_destino_Feb = NDVI.sentinel2_region_destino_feb.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreFeb');
var ndre_region_destino_Mar = NDVI.sentinel2_region_destino_mar.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreMar');
var ndre_region_destino_Apr = NDVI.sentinel2_region_destino_apr.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreApr');
var ndre_region_destino_May = NDVI.sentinel2_region_destino_may.map(getNDRE).mean().clip(region_destino).select('NDRE').rename('ndreMay');

var ndre_region_destino = ndre_region_destino_Sep
                 .addBands(ndre_region_destino_Oct)
                 .addBands(ndre_region_destino_Nov)
                 .addBands(ndre_region_destino_Dec)
                 .addBands(ndre_region_destino_Jan)
                 .addBands(ndre_region_destino_Feb)
                 .addBands(ndre_region_destino_Mar)
                 .addBands(ndre_region_destino_Apr)
                 .addBands(ndre_region_destino_May);
                 
//NDRE

var ndre_region_entrenamiento_Sep = NDVI.sentinel2_region_entrenamiento_sep.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreSep');
var ndre_region_entrenamiento_Oct = NDVI.sentinel2_region_entrenamiento_oct.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreOct');
var ndre_region_entrenamiento_Nov = NDVI.sentinel2_region_entrenamiento_nov.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreNov');
var ndre_region_entrenamiento_Dec = NDVI.sentinel2_region_entrenamiento_dec.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreDec');
var ndre_region_entrenamiento_Jan = NDVI.sentinel2_region_entrenamiento_jan.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreJan');
var ndre_region_entrenamiento_Feb = NDVI.sentinel2_region_entrenamiento_feb.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreFeb');
var ndre_region_entrenamiento_Mar = NDVI.sentinel2_region_entrenamiento_mar.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreMar');
var ndre_region_entrenamiento_Apr = NDVI.sentinel2_region_entrenamiento_apr.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreApr');
var ndre_region_entrenamiento_May = NDVI.sentinel2_region_entrenamiento_may.map(getNDRE).mean().clip(region_entrenamiento).select('NDRE').rename('ndreMay');

var ndre_region_entrenamiento = ndre_region_entrenamiento_Sep
                 .addBands(ndre_region_entrenamiento_Oct)
                 .addBands(ndre_region_entrenamiento_Nov)
                 .addBands(ndre_region_entrenamiento_Dec)
                 .addBands(ndre_region_entrenamiento_Jan)
                 .addBands(ndre_region_entrenamiento_Feb)
                 .addBands(ndre_region_entrenamiento_Mar)
                 .addBands(ndre_region_entrenamiento_Apr)
                 .addBands(ndre_region_entrenamiento_May);

//Map.addLayer(ndre_region_entrenamiento_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

//Map.addLayer(ndre_region_destino_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

exports.ndre_region_destino = ndre_region_destino;
exports.ndre_region_entrenamiento = ndre_region_entrenamiento;

//Map.setCenter(-70.95, -30.7, 9);

//Map.addLayer(region_destino)
//Map.addLayer(region_entrenamiento)

//Map.addLayer(ndre_region_destino_Sep, {min:0,max:1});
//Map.addLayer(ndre_region_entrenamiento_Dec, {min:0,max:1});
//Map.setCenter(-70.95, -30.7, 9);
