
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    maskS2clouds = require('users/corfobbppciren2023/Areas_Regadas_Auxiliares:maskS2clouds.js');

var region_destino = coleccion_imagenes_geometria.region_destino;
var region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento;
var season = coleccion_imagenes_geometria.season;

// Sentinel 2

var sentinel2_region_destino = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterBounds(region_destino)
                  .filter(season)
                  // Pre-filter to get less cloudy granules.
                  //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
                  .map(maskS2clouds.maskS2clouds)
                  .select('B2','B3','B4','B5','B6','B7','B8','B8A','B9','B11','B12');

var sentinel2_region_entrenamiento = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterBounds(region_entrenamiento)
                  .filter(season)
                  // Pre-filter to get less cloudy granules.
                  //.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
                  .map(maskS2clouds.maskS2clouds)
                  .select('B2','B3','B4','B5','B6','B7','B8','B8A','B9','B11','B12');
// Median image
var s2median_region_destino = ee.Image(sentinel2_region_destino.median()).clip(region_destino),
    s2median_region_entrenamiento = ee.Image(sentinel2_region_entrenamiento.median()).clip(region_entrenamiento);

exports.s2median_region_destino = s2median_region_destino;
exports.s2median_region_entrenamiento = s2median_region_entrenamiento;
