
var coleccion_imagenes_geometria  = require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    sentinel_2  = require('users/corfobbppciren2023/Areas_Regadas:2.sentinel_2.js'),
    maskS2clouds = require('users/corfobbppciren2023/Areas_Regadas_Auxiliares:maskS2clouds.js');

var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearsubtractone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearsubtractone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// NDVI Function 
var getNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};

// Septiembre 
var sentinel2_region_destino_sep = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYearsubtractone.cat('-09-01'),firstYearsubtractone.cat('-09-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_destino_Sep = sentinel2_region_destino_sep.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviSep');

// Octubre 
var sentinel2_region_destino_oct = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYearsubtractone.cat('-10-01'),firstYearsubtractone.cat('-10-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Oct = sentinel2_region_destino_oct.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviOct');

// November 
var sentinel2_region_destino_nov = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYearsubtractone.cat('-11-01'),firstYearsubtractone.cat('-11-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Nov = sentinel2_region_destino_nov.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviNov');

// December 
var sentinel2_region_destino_dec = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYearsubtractone.cat('-12-01'),firstYearsubtractone.cat('-12-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Dec = sentinel2_region_destino_dec.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviDec');

// January 
var sentinel2_region_destino_jan = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYear.cat('-01-01'),firstYear.cat('-01-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Jan = sentinel2_region_destino_jan.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviJan');

// February 
var sentinel2_region_destino_feb = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYear.cat('-02-01'),firstYear.cat('-02-28'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Feb = sentinel2_region_destino_feb.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviFeb');

// March 
var sentinel2_region_destino_mar = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYear.cat('-03-01'),firstYear.cat('-03-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Mar = sentinel2_region_destino_mar.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviMar');

// April 
var sentinel2_region_destino_apr = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYear.cat('-04-01'),firstYear.cat('-04-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_Apr = sentinel2_region_destino_apr.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviApr');

// May 
var sentinel2_region_destino_may = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_destino)
    .filterDate(firstYear.cat('-05-01'),firstYear.cat('-05-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds.maskS2clouds);

var ndvi_region_destino_May = sentinel2_region_destino_may.map(getNDVI).mean().clip(region_destino).select('NDVI').rename('ndviMay');

// Stack NDVI Monthly 
var ndvi_region_destino = ndvi_region_destino_Sep
                 .addBands(ndvi_region_destino_Oct)
                 .addBands(ndvi_region_destino_Nov)
                 .addBands(ndvi_region_destino_Dec)
                 .addBands(ndvi_region_destino_Jan)
                 .addBands(ndvi_region_destino_Feb)
                 .addBands(ndvi_region_destino_Mar)
                 .addBands(ndvi_region_destino_Apr)
                 .addBands(ndvi_region_destino_May);


//NDVI Region entrenamiento

// Septiembre 
var sentinel2_region_entrenamiento_sep = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
      .filterDate(firstYearsubtractone.cat('-09-01'),firstYearsubtractone.cat('-09-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Sep = sentinel2_region_entrenamiento_sep.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviSep');  

// Octubre 
var sentinel2_region_entrenamiento_oct = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
      .filterDate(firstYearsubtractone.cat('-10-01'),firstYearsubtractone.cat('-10-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Oct = sentinel2_region_entrenamiento_oct.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviOct');

// November 
var sentinel2_region_entrenamiento_nov = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYearsubtractone.cat('-11-01'),firstYearsubtractone.cat('-11-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Nov = sentinel2_region_entrenamiento_nov.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviNov');

// December 
var sentinel2_region_entrenamiento_dec = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYearsubtractone.cat('-12-01'),firstYearsubtractone.cat('-12-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Dec = sentinel2_region_entrenamiento_dec.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviDec');

// January 
var sentinel2_region_entrenamiento_jan = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYear.cat('-01-01'),firstYear.cat('-01-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Jan = sentinel2_region_entrenamiento_jan.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviJan');

// February 
var sentinel2_region_entrenamiento_feb = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYear.cat('-02-01'),firstYear.cat('-02-28'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Feb = sentinel2_region_entrenamiento_feb.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviFeb');

// March 
var sentinel2_region_entrenamiento_mar = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYear.cat('-03-01'),firstYear.cat('-03-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Mar = sentinel2_region_entrenamiento_mar.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviMar');

// April 
var sentinel2_region_entrenamiento_apr = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYear.cat('-04-01'),firstYear.cat('-04-30'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_Apr = sentinel2_region_entrenamiento_apr.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviApr');

// May 
var sentinel2_region_entrenamiento_may = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region_entrenamiento)
    .filterDate(firstYear.cat('-05-01'),firstYear.cat('-05-31'))
    //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));
    .map(maskS2clouds.maskS2clouds);
    
var ndvi_region_entrenamiento_May = sentinel2_region_entrenamiento_may.map(getNDVI).mean().clip(region_entrenamiento).select('NDVI').rename('ndviMay');

// Stack NDVI Monthly 
var ndvi_region_entrenamiento = ndvi_region_entrenamiento_Sep
                 .addBands(ndvi_region_entrenamiento_Oct)
                 .addBands(ndvi_region_entrenamiento_Nov)
                 .addBands(ndvi_region_entrenamiento_Dec)
                 .addBands(ndvi_region_entrenamiento_Jan)
                 .addBands(ndvi_region_entrenamiento_Feb)
                 .addBands(ndvi_region_entrenamiento_Mar)
                 .addBands(ndvi_region_entrenamiento_Apr)
                 .addBands(ndvi_region_entrenamiento_May);
                 
//Map.addLayer(ndvi_region_entrenamiento_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

//Map.addLayer(ndvi_region_destino_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});
                 
exports.sentinel2_region_destino_sep = sentinel2_region_destino_sep;
exports.sentinel2_region_destino_oct = sentinel2_region_destino_oct;
exports.sentinel2_region_destino_nov = sentinel2_region_destino_nov;
exports.sentinel2_region_destino_dec = sentinel2_region_destino_dec;
exports.sentinel2_region_destino_jan = sentinel2_region_destino_jan;
exports.sentinel2_region_destino_feb = sentinel2_region_destino_feb;
exports.sentinel2_region_destino_mar = sentinel2_region_destino_mar;
exports.sentinel2_region_destino_apr = sentinel2_region_destino_apr;
exports.sentinel2_region_destino_may = sentinel2_region_destino_may;
exports.sentinel2_region_entrenamiento_sep = sentinel2_region_entrenamiento_sep;
exports.sentinel2_region_entrenamiento_oct = sentinel2_region_entrenamiento_oct;
exports.sentinel2_region_entrenamiento_nov = sentinel2_region_entrenamiento_nov;
exports.sentinel2_region_entrenamiento_dec = sentinel2_region_entrenamiento_dec;
exports.sentinel2_region_entrenamiento_jan = sentinel2_region_entrenamiento_jan;
exports.sentinel2_region_entrenamiento_feb = sentinel2_region_entrenamiento_feb;
exports.sentinel2_region_entrenamiento_mar = sentinel2_region_entrenamiento_mar;
exports.sentinel2_region_entrenamiento_apr = sentinel2_region_entrenamiento_apr;
exports.sentinel2_region_entrenamiento_may = sentinel2_region_entrenamiento_may;
exports.ndvi_region_destino = ndvi_region_destino;
exports.ndvi_region_entrenamiento = ndvi_region_entrenamiento;

//Map.addLayer(ndvi_region_destino_Sep, {min:0,max:1});
//Map.addLayer(ndvi_region_entrenamiento_Dec, {min:0,max:1});
//Map.setCenter(-70.95, -30.7, 9);

//Map.addLayer(region_destino)//
//Map.addLayer(region_entrenamiento)




