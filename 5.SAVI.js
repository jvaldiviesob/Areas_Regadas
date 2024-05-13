
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    NDVI = require('users/corfobbppciren2023/Areas_Regadas:4.NDVI.js');
    
var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearsubtractone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearsubtractone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// SAVI 
function getSAVI(image){
    var SAVI = image.expression(
        '(NIR - RED) / (NIR + RED + L)*(1+L)', {
            'NIR': image.select('B8'),
            'RED': image.select('B4'),
            'L':0.428
        }).rename("SAVI");

    image = image.addBands(SAVI);

    return(image);
}
// using monthly mean reflectance
var savi_region_destino_Sep = NDVI.sentinel2_region_destino_sep.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviSep');
var savi_region_destino_Oct = NDVI.sentinel2_region_destino_oct.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviOct');
var savi_region_destino_Nov = NDVI.sentinel2_region_destino_nov.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviNov');
var savi_region_destino_Dec = NDVI.sentinel2_region_destino_dec.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviDec');
var savi_region_destino_Jan = NDVI.sentinel2_region_destino_jan.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviJan');
var savi_region_destino_Feb = NDVI.sentinel2_region_destino_feb.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviFeb');
var savi_region_destino_Mar = NDVI.sentinel2_region_destino_mar.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviMar');
var savi_region_destino_Apr = NDVI.sentinel2_region_destino_apr.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviApr');
var savi_region_destino_May = NDVI.sentinel2_region_destino_may.map(getSAVI).mean().clip(region_destino).select('SAVI').rename('saviMay');

var savi_region_destino = savi_region_destino_Sep
                 .addBands(savi_region_destino_Oct)
                 .addBands(savi_region_destino_Nov)
                 .addBands(savi_region_destino_Dec)
                 .addBands(savi_region_destino_Jan)
                 .addBands(savi_region_destino_Feb)
                 .addBands(savi_region_destino_Mar)
                 .addBands(savi_region_destino_Apr)
                 .addBands(savi_region_destino_May);
                 
//SAVI Maipo
// using monthly mean reflectance
var savi_region_entrenamiento_Sep = NDVI.sentinel2_region_entrenamiento_sep.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviSep');
var savi_region_entrenamiento_Oct = NDVI.sentinel2_region_entrenamiento_oct.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviOct');
var savi_region_entrenamiento_Nov = NDVI.sentinel2_region_entrenamiento_nov.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviNov');
var savi_region_entrenamiento_Dec = NDVI.sentinel2_region_entrenamiento_dec.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviDec');
var savi_region_entrenamiento_Jan = NDVI.sentinel2_region_entrenamiento_jan.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviJan');
var savi_region_entrenamiento_Feb = NDVI.sentinel2_region_entrenamiento_feb.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviFeb');
var savi_region_entrenamiento_Mar = NDVI.sentinel2_region_entrenamiento_mar.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviMar');
var savi_region_entrenamiento_Apr = NDVI.sentinel2_region_entrenamiento_apr.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviApr');
var savi_region_entrenamiento_May = NDVI.sentinel2_region_entrenamiento_may.map(getSAVI).mean().clip(region_entrenamiento).select('SAVI').rename('saviMay');

var savi_region_entrenamiento = savi_region_entrenamiento_Sep
                 .addBands(savi_region_entrenamiento_Oct)
                 .addBands(savi_region_entrenamiento_Nov)
                 .addBands(savi_region_entrenamiento_Dec)
                 .addBands(savi_region_entrenamiento_Jan)
                 .addBands(savi_region_entrenamiento_Feb)
                 .addBands(savi_region_entrenamiento_Mar)
                 .addBands(savi_region_entrenamiento_Apr)
                 .addBands(savi_region_entrenamiento_May);
                 
//Map.addLayer(savi_region_entrenamiento_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

//Map.addLayer(savi_region_destino_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

exports.savi_region_destino = savi_region_destino;
exports.savi_region_entrenamiento = savi_region_entrenamiento;

//Map.setCenter(-70.95, -30.7, 9);

//Map.addLayer(region_destino)
//Map.addLayer(region_entrenamiento)

//Map.addLayer(savi_region_destino_Sep, {min:0,max:1});
//Map.addLayer(savi_region_entrenamiento_Dec, {min:0,max:1});
//Map.setCenter(-70.95, -30.7, 9);
