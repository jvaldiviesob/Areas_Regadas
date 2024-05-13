
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    NDVI = require('users/corfobbppciren2023/Areas_Regadas:4.NDVI.js');
    
var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearsubtractone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearsubtractone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// NDWI (Normalized Difference Wetness Index)
var getNDWI = function(image) {
  var ndwi = image.normalizedDifference(['B3', 'B8']).rename('NDWI');
  return image.addBands(ndwi);
};

// using monthly mean reflectance
var ndwi_region_destino_Sep = NDVI.sentinel2_region_destino_sep.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiSep');
var ndwi_region_destino_Oct = NDVI.sentinel2_region_destino_oct.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiOct');
var ndwi_region_destino_Nov = NDVI.sentinel2_region_destino_nov.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiNov');
var ndwi_region_destino_Dec = NDVI.sentinel2_region_destino_dec.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiDec');
var ndwi_region_destino_Jan = NDVI.sentinel2_region_destino_jan.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiJan');
var ndwi_region_destino_Feb = NDVI.sentinel2_region_destino_feb.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiFeb');
var ndwi_region_destino_Mar = NDVI.sentinel2_region_destino_mar.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiMar');
var ndwi_region_destino_Apr = NDVI.sentinel2_region_destino_apr.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiApr');
var ndwi_region_destino_May = NDVI.sentinel2_region_destino_may.map(getNDWI).mean().clip(region_destino).select('NDWI').rename('ndwiMay');

var ndwi_region_destino = ndwi_region_destino_Sep
                 .addBands(ndwi_region_destino_Oct)
                 .addBands(ndwi_region_destino_Nov)
                 .addBands(ndwi_region_destino_Dec)
                 .addBands(ndwi_region_destino_Jan)
                 .addBands(ndwi_region_destino_Feb)
                 .addBands(ndwi_region_destino_Mar)
                 .addBands(ndwi_region_destino_Apr)
                 .addBands(ndwi_region_destino_May);
                 
// Maipo
var ndwi_region_entrenamiento_Sep = NDVI.sentinel2_region_entrenamiento_sep.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiSep');
var ndwi_region_entrenamiento_Oct = NDVI.sentinel2_region_entrenamiento_oct.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiOct');
var ndwi_region_entrenamiento_Nov = NDVI.sentinel2_region_entrenamiento_nov.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiNov');
var ndwi_region_entrenamiento_Dec = NDVI.sentinel2_region_entrenamiento_dec.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiDec');
var ndwi_region_entrenamiento_Jan = NDVI.sentinel2_region_entrenamiento_jan.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiJan');
var ndwi_region_entrenamiento_Feb = NDVI.sentinel2_region_entrenamiento_feb.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiFeb');
var ndwi_region_entrenamiento_Mar = NDVI.sentinel2_region_entrenamiento_mar.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiMar');
var ndwi_region_entrenamiento_Apr = NDVI.sentinel2_region_entrenamiento_apr.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiApr');
var ndwi_region_entrenamiento_May = NDVI.sentinel2_region_entrenamiento_may.map(getNDWI).mean().clip(region_entrenamiento).select('NDWI').rename('ndwiMay');

var ndwi_region_entrenamiento = ndwi_region_entrenamiento_Sep
                 .addBands(ndwi_region_entrenamiento_Oct)
                 .addBands(ndwi_region_entrenamiento_Nov)
                 .addBands(ndwi_region_entrenamiento_Dec)
                 .addBands(ndwi_region_entrenamiento_Jan)
                 .addBands(ndwi_region_entrenamiento_Feb)
                 .addBands(ndwi_region_entrenamiento_Mar)
                 .addBands(ndwi_region_entrenamiento_Apr)
                 .addBands(ndwi_region_entrenamiento_May);
                 
//Map.addLayer(ndwi_region_entrenamiento_Mar,{
//  min: -1,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

//Map.addLayer(ndwi_region_destino_Mar,{
//  min: -1,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

exports.ndwi_region_destino = ndwi_region_destino;
exports.ndwi_region_entrenamiento = ndwi_region_entrenamiento;

//Map.addLayer(ndwi_region_entrenamiento_Dec,{min: -1,  max:1},'Entrenamiento')
//Map.addLayer(ndwi_region_destino_Dec,{min: -1,  max:1},'Destino')

//Map.addLayer(ndwi_region_destino_Sep, {min:-1,max:1});
//Map.addLayer(ndwi_region_entrenamiento_Dec, {min:-1,max:1});
//Map.setCenter(-70.95, -30.7, 9);
