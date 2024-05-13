
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js');

var season = coleccion_imagenes_geometria.season;

// Auxillary Data
var dem = ee.Image("NASA/NASADEM_HGT/001").select('elevation'),
    slope = ee.Terrain.slope(dem),
    dataset = ee.ImageCollection('UCSB-CHG/CHIRPS/PENTAD').filter(season),
    precipitation = dataset.select('precipitation').mean();

exports.dem = dem;
exports.slope_ = slope;
exports.dataset = dataset;
exports.precipitation = precipitation;
