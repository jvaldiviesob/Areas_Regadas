
var coleccion_imagenes_geometria = require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    sentinel_2 = require('users/corfobbppciren2023/Areas_Regadas:2.sentinel_2.js'),
    sentinel_1 = require('users/corfobbppciren2023/Areas_Regadas:3.sentinel_1.js'),
    NDVI = require('users/corfobbppciren2023/Areas_Regadas:4.NDVI.js'),
    SAVI = require('users/corfobbppciren2023/Areas_Regadas:5.SAVI.js'),
    NDRE = require('users/corfobbppciren2023/Areas_Regadas:6.NDRE.js'),
    NDWI = require('users/corfobbppciren2023/Areas_Regadas:7.NDWI.js'),
    EVI = require('users/corfobbppciren2023/Areas_Regadas:8.EVI.js'),
    auxiliary_data = require('users/corfobbppciren2023/Areas_Regadas:9.auxiliary_data.js');

var region_destino = coleccion_imagenes_geometria.region_destino;
var region_entrenamiento = coleccion_imagenes_geometria.region_entrenamiento;
var season = coleccion_imagenes_geometria.season;

// Composite 
var composite_region_destino = ee.Image.cat([(sentinel_2.s2median_region_destino),(sentinel_1.s1mean_region_destino),(sentinel_1.s1monthly_region_destino),(NDVI.ndvi_region_destino),(SAVI.savi_region_destino),(NDRE.ndre_region_destino),(NDWI.ndwi_region_destino),(EVI.evi_region_destino),(auxiliary_data.slope_),(auxiliary_data.precipitation)]),
    composite_region_entrenamiento = ee.Image.cat([(sentinel_2.s2median_region_entrenamiento),(sentinel_1.s1mean_region_entrenamiento),(sentinel_1.s1monthly_region_entrenamiento),(NDVI.ndvi_region_entrenamiento),(SAVI.savi_region_entrenamiento),(NDRE.ndre_region_entrenamiento),(NDWI.ndwi_region_entrenamiento),(EVI.evi_region_entrenamiento),(auxiliary_data.slope_),(auxiliary_data.precipitation)]),
    sentinel_vi_region_destino = composite_region_destino.clip(region_destino),
    sentinel_vi_region_entrenamiento = composite_region_entrenamiento.clip(region_entrenamiento);

// Train the classifier 
// This property the table stores the land cover labels.
var bands = ['B2','B3','B4','B5','B6','B7','B8','B8A','B11','B12','VV','VH',
          'VVsep','VVoct','VVnov','VVdec','VVjan','VVfeb','VVmar','VVapr','VVmay',
          'VHsep','VHoct','VHnov','VHdec','VHjan','VHfeb','VHmar','VHapr','VHmay',
          'ndviSep','ndviOct','ndviNov','ndviDec','ndviJan','ndviFeb','ndviMar','ndviApr','ndviMay',
          'saviSep','saviOct','saviNov','saviDec','saviJan','saviFeb','saviMar','saviApr','saviMay',
          'ndreSep','ndreOct','ndreNov','ndreDec','ndreJan','ndreFeb','ndreMar','ndreApr','ndreMay',
          'ndwiSep','ndwiOct','ndwiNov','ndwiDec','ndwiJan','ndwiFeb','ndwiMar','ndwiApr','ndwiMay',
          'eviSep','eviOct','eviNov','eviDec','eviJan','eviFeb','eviMar','eviApr','eviMay',
          'slope','precipitation'],
    label = 'Clase';

// Overlay the points on the imagery to get training.
var sample = sentinel_vi_region_entrenamiento.sampleRegions(
    {'collection': ee.FeatureCollection(coleccion_imagenes_geometria.trainingGcp), 'properties': [label], 'scale': 50}
);

//print(sample.first());

//print(sample.size().getInfo())

// Añadir una columna de números aleatorios a la colección
var sample = sample.randomColumn('random');

// Especificar la fracción de la colección que deseas seleccionar
var fraction = 0.6;

// Filtrar la colección para obtener una submuestra
var sample = sample.filter(ee.Filter.lt('random', fraction));

//print(sample.first());

//print(sample.size().getInfo())

//print('sentinel_vi_region_destino',sentinel_vi_region_destino);
//print('sentinel_vi_region_destino',sentinel_vi_region_destino);
//print('sentinel_vi_region_destino_size',sentinel_vi_region_destino.select(['B2']));
//print('sentinel_vi_region_entrenamiento_size',sentinel_vi_region_entrenamiento.select(['B2']));
//print('region_destino',region_destino);
//print('region_entrenamiento',region_entrenamiento);
//print('coleccion_imagenes_geometria.trainingGcp',coleccion_imagenes_geometria.trainingGcp.first());
//print('sample.first()',sample.first());


exports.sample_ = sample;
exports.label = label;
exports.bands = bands;
exports.sentinel_vi_region_destino = sentinel_vi_region_destino;
