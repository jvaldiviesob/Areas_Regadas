
var coleccion_imagenes_geometria=require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js');

var region_destino = coleccion_imagenes_geometria.region_destino,
    region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento,
    season = coleccion_imagenes_geometria.season,
    firstYearaddone = ee.String(ee.Number(coleccion_imagenes_geometria.firstYearaddone)),
    firstYear = ee.String(ee.Number(coleccion_imagenes_geometria.firstYear));

// Sentinel 1 
var wrapper = require('users/corfobbppciren2023/Areas_Regadas_Auxiliares:wrapper.js'),
    helper = require('users/corfobbppciren2023/Areas_Regadas_Auxiliares:utilities.js');

//---------------------------------------------------------------------------//
// DEFINE PARAMETERS
//---------------------------------------------------------------------------//

var parameter_region_destino = {//1. Data Selection
              START_DATE: ee.String(ee.Number(coleccion_imagenes_geometria.firstYear)).cat("-09-01"),
              STOP_DATE: ee.String(ee.Number(coleccion_imagenes_geometria.firstYearaddone)).cat("-05-31"),
              POLARIZATION:'VVVH',
              ORBIT : 'DESCENDING',
              GEOMETRY: coleccion_imagenes_geometria.region_destino,  
              //2. Additional Border noise correction
              APPLY_ADDITIONAL_BORDER_NOISE_CORRECTION: true,
              //3.Speckle filter
              APPLY_SPECKLE_FILTERING: true,
              SPECKLE_FILTER_FRAMEWORK: 'MONO',
              SPECKLE_FILTER: 'REFINED LEE',
              SPECKLE_FILTER_KERNEL_SIZE: 5,
              SPECKLE_FILTER_NR_OF_IMAGES: 10,
              //4. Radiometric terrain normalization
              APPLY_TERRAIN_FLATTENING: true,
              DEM: ee.Image('USGS/SRTMGL1_003'),
              TERRAIN_FLATTENING_MODEL: 'VOLUME',
              TERRAIN_FLATTENING_ADDITIONAL_LAYOVER_SHADOW_BUFFER: 0,
              //5. Output
              FORMAT : 'DB',
              CLIP_TO_ROI: false,
              SAVE_ASSETS: false
} 

var parameter_region_entrenamiento = {//1. Data Selection
              START_DATE: ee.String(ee.Number(coleccion_imagenes_geometria.firstYear)).cat("-09-01"),
              STOP_DATE: ee.String(ee.Number(coleccion_imagenes_geometria.firstYearaddone)).cat("-05-31"),
              POLARIZATION:'VVVH',
              ORBIT : 'DESCENDING',
              GEOMETRY: coleccion_imagenes_geometria.region_entrenamiento,  
              //2. Additional Border noise correction
              APPLY_ADDITIONAL_BORDER_NOISE_CORRECTION: true,
              //3.Speckle filter
              APPLY_SPECKLE_FILTERING: true,
              SPECKLE_FILTER_FRAMEWORK: 'MONO',
              SPECKLE_FILTER: 'REFINED LEE',
              SPECKLE_FILTER_KERNEL_SIZE: 5,
              SPECKLE_FILTER_NR_OF_IMAGES: 10,
              //4. Radiometric terrain normalization
              APPLY_TERRAIN_FLATTENING: true,
              DEM: ee.Image('USGS/SRTMGL1_003'),
              TERRAIN_FLATTENING_MODEL: 'VOLUME',
              TERRAIN_FLATTENING_ADDITIONAL_LAYOVER_SHADOW_BUFFER: 0,
              //5. Output
              FORMAT : 'DB',
              CLIP_TO_ROI: false,
              SAVE_ASSETS: false
} 

//Preprocess the S1 collection
var s1_preprocces_region_destino = wrapper.s1_preproc(parameter_region_destino);

var s1_preprocces_region_entrenamiento = wrapper.s1_preproc(parameter_region_entrenamiento);

//print('s1_preprocces',s1_preprocces_region_destino)

//print('s1_preprocces_maipo',s1_preprocces_region_entrenamiento)

var s1_region_destino = s1_preprocces_region_destino[0]
s1_preprocces_region_destino = s1_preprocces_region_destino[1]

var s1_region_entrenamiento = s1_preprocces_region_entrenamiento[0]
s1_preprocces_region_entrenamiento = s1_preprocces_region_entrenamiento[1]

// Season Mean 
var s1mean_region_destino = s1_region_destino.mean().select(["VV","VH"]);

var s1mean_region_entrenamiento = s1_region_entrenamiento.mean().select(["VV","VH"]);

//print('s1mean_region_destino',s1mean_region_destino)

//print('s1mean_region_entrenamiento',s1mean_region_entrenamiento)

// Monthly 

var s1_region_destino_Sep = ee.Image(s1_region_destino.filterDate(firstYear.cat('-09-01'),firstYear.cat('-09-30')).mean()).select(["VV","VH"],["VVsep","VHsep"]),
    s1_region_destino_Oct = ee.Image(s1_region_destino.filterDate(firstYear.cat('-10-01'),firstYear.cat('-10-31')).mean()).select(["VV","VH"],["VVoct","VHoct"]),
    s1_region_destino_Nov = ee.Image(s1_region_destino.filterDate(firstYear.cat('-11-01'),firstYear.cat('-11-30')).mean()).select(["VV","VH"],["VVnov","VHnov"]),
    s1_region_destino_Dec = ee.Image(s1_region_destino.filterDate(firstYear.cat('-12-01'),firstYear.cat('-12-31')).mean()).select(["VV","VH"],["VVdec","VHdec"]),
    s1_region_destino_Jan = ee.Image(s1_region_destino.filterDate(firstYearaddone.cat('-01-01'),firstYearaddone.cat('-01-31')).mean()).select(["VV","VH"],["VVjan","VHjan"]),
    s1_region_destino_Feb = ee.Image(s1_region_destino.filterDate(firstYearaddone.cat('-02-01'),firstYearaddone.cat('-02-28')).mean()).select(["VV","VH"],["VVfeb","VHfeb"]),
    s1_region_destino_Mar = ee.Image(s1_region_destino.filterDate(firstYearaddone.cat('-03-01'),firstYearaddone.cat('-03-31')).mean()).select(["VV","VH"],["VVmar","VHmar"]),
    s1_region_destino_Apr = ee.Image(s1_region_destino.filterDate(firstYearaddone.cat('-04-01'),firstYearaddone.cat('-04-30')).mean()).select(["VV","VH"],["VVapr","VHapr"]),
    s1_region_destino_May = ee.Image(s1_region_destino.filterDate(firstYearaddone.cat('-05-01'),firstYearaddone.cat('-05-31')).mean()).select(["VV","VH"],["VVmay","VHmay"]);

var s1_region_entrenamiento_Sep = ee.Image(s1_region_entrenamiento.filterDate(firstYear.cat('-09-01'),firstYear.cat('-09-30')).mean()).select(["VV","VH"],["VVsep","VHsep"]),
    s1_region_entrenamiento_Oct = ee.Image(s1_region_entrenamiento.filterDate(firstYear.cat('-10-01'),firstYear.cat('-10-31')).mean()).select(["VV","VH"],["VVoct","VHoct"]),
    s1_region_entrenamiento_Nov = ee.Image(s1_region_entrenamiento.filterDate(firstYear.cat('-11-01'),firstYear.cat('-11-30')).mean()).select(["VV","VH"],["VVnov","VHnov"]),
    s1_region_entrenamiento_Dec = ee.Image(s1_region_entrenamiento.filterDate(firstYear.cat('-12-01'),firstYear.cat('-12-31')).mean()).select(["VV","VH"],["VVdec","VHdec"]),
    s1_region_entrenamiento_Jan = ee.Image(s1_region_entrenamiento.filterDate(firstYearaddone.cat('-01-01'),firstYearaddone.cat('-01-31')).mean()).select(["VV","VH"],["VVjan","VHjan"]),
    s1_region_entrenamiento_Feb = ee.Image(s1_region_entrenamiento.filterDate(firstYearaddone.cat('-02-01'),firstYearaddone.cat('-02-28')).mean()).select(["VV","VH"],["VVfeb","VHfeb"]),
    s1_region_entrenamiento_Mar = ee.Image(s1_region_entrenamiento.filterDate(firstYearaddone.cat('-03-01'),firstYearaddone.cat('-03-31')).mean()).select(["VV","VH"],["VVmar","VHmar"]),
    s1_region_entrenamiento_Apr = ee.Image(s1_region_entrenamiento.filterDate(firstYearaddone.cat('-04-01'),firstYearaddone.cat('-04-30')).mean()).select(["VV","VH"],["VVapr","VHapr"]),
    s1_region_entrenamiento_May = ee.Image(s1_region_entrenamiento.filterDate(firstYearaddone.cat('-05-01'),firstYearaddone.cat('-05-31')).mean()).select(["VV","VH"],["VVmay","VHmay"]);

var s1monthly_region_destino = s1_region_destino_Sep
                 .addBands(s1_region_destino_Oct)
                 .addBands(s1_region_destino_Nov)
                 .addBands(s1_region_destino_Dec)
                 .addBands(s1_region_destino_Jan)
                 .addBands(s1_region_destino_Feb)
                 .addBands(s1_region_destino_Mar)
                 .addBands(s1_region_destino_Apr)
                 .addBands(s1_region_destino_May);
                 
var s1monthly_region_entrenamiento = s1_region_entrenamiento_Sep
                 .addBands(s1_region_entrenamiento_Oct)
                 .addBands(s1_region_entrenamiento_Nov)
                 .addBands(s1_region_entrenamiento_Dec)
                 .addBands(s1_region_entrenamiento_Jan)
                 .addBands(s1_region_entrenamiento_Feb)
                 .addBands(s1_region_entrenamiento_Mar)
                 .addBands(s1_region_entrenamiento_Apr)
                 .addBands(s1_region_entrenamiento_May);

exports.s1mean_region_destino = s1mean_region_destino;
exports.s1mean_region_entrenamiento = s1mean_region_entrenamiento;
exports.s1monthly_region_destino = s1monthly_region_destino;
exports.s1monthly_region_entrenamiento = s1monthly_region_entrenamiento;
