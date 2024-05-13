
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    NDVI = require('users/corfobbppciren2023/Areas_Regadas:4.NDVI.js');
    
var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearsubtractone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearsubtractone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// SAVI 
function getEVI(image){
    var EVI = image.expression(
        '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
            'NIR': image.select('B8'),
            'RED': image.select('B4'),
            'BLUE': image.select('B2')
        }).rename("EVI");
 
    image = image.addBands(EVI);
 
    return(image);
}
// using monthly mean reflectance
var evi_region_destino_Sep = NDVI.sentinel2_region_destino_sep.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviSep');
var evi_region_destino_Oct = NDVI.sentinel2_region_destino_oct.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviOct');
var evi_region_destino_Nov = NDVI.sentinel2_region_destino_nov.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviNov');
var evi_region_destino_Dec = NDVI.sentinel2_region_destino_dec.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviDec');
var evi_region_destino_Jan = NDVI.sentinel2_region_destino_jan.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviJan');
var evi_region_destino_Feb = NDVI.sentinel2_region_destino_feb.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviFeb');
var evi_region_destino_Mar = NDVI.sentinel2_region_destino_mar.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviMar');
var evi_region_destino_Apr = NDVI.sentinel2_region_destino_apr.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviApr');
var evi_region_destino_May = NDVI.sentinel2_region_destino_may.map(getEVI).mean().clip(region_destino).select('EVI').rename('eviMay');

var evi_region_destino = evi_region_destino_Sep
                 .addBands(evi_region_destino_Oct)
                 .addBands(evi_region_destino_Nov)
                 .addBands(evi_region_destino_Dec)
                 .addBands(evi_region_destino_Jan)
                 .addBands(evi_region_destino_Feb)
                 .addBands(evi_region_destino_Mar)
                 .addBands(evi_region_destino_Apr)
                 .addBands(evi_region_destino_May);
                 
//SAVI Maipo
// using monthly mean reflectance
var evi_region_entrenamiento_Sep = NDVI.sentinel2_region_entrenamiento_sep.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviSep');
var evi_region_entrenamiento_Oct = NDVI.sentinel2_region_entrenamiento_oct.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviOct');
var evi_region_entrenamiento_Nov = NDVI.sentinel2_region_entrenamiento_nov.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviNov');
var evi_region_entrenamiento_Dec = NDVI.sentinel2_region_entrenamiento_dec.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviDec');
var evi_region_entrenamiento_Jan = NDVI.sentinel2_region_entrenamiento_jan.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviJan');
var evi_region_entrenamiento_Feb = NDVI.sentinel2_region_entrenamiento_feb.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviFeb');
var evi_region_entrenamiento_Mar = NDVI.sentinel2_region_entrenamiento_mar.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviMar');
var evi_region_entrenamiento_Apr = NDVI.sentinel2_region_entrenamiento_apr.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviApr');
var evi_region_entrenamiento_May = NDVI.sentinel2_region_entrenamiento_may.map(getEVI).mean().clip(region_entrenamiento).select('EVI').rename('eviMay');

var evi_region_entrenamiento = evi_region_entrenamiento_Sep
                 .addBands(evi_region_entrenamiento_Oct)
                 .addBands(evi_region_entrenamiento_Nov)
                 .addBands(evi_region_entrenamiento_Dec)
                 .addBands(evi_region_entrenamiento_Jan)
                 .addBands(evi_region_entrenamiento_Feb)
                 .addBands(evi_region_entrenamiento_Mar)
                 .addBands(evi_region_entrenamiento_Apr)
                 .addBands(evi_region_entrenamiento_May);
                 
//Map.addLayer(evi_region_entrenamiento_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

//Map.addLayer(evi_region_destino_Mar,{
//  min: 0,
//  max: 1,
//  palette: ['blue', 'yellow', 'green']
//});

exports.evi_region_destino = evi_region_destino;
exports.evi_region_entrenamiento = evi_region_entrenamiento;

//Map.setCenter(-70.95, -30.7, 9);

//Map.addLayer(region_destino);
//Map.addLayer(region_entrenamiento)

//Map.addLayer(evi_region_destino_Dec, {min:0,max:1});
//Map.addLayer(evi_region_entrenamiento_Dec, {min:0,max:1});
//Map.setCenter(-70.95, -30.7, 9);
