
var coleccion_imagenes_geometria = require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    composite_train = require('users/corfobbppciren2023/Areas_Regadas:10.composite_train.js');

/**************************************************************************************************************************************
 CLASSIFICATION & ACCURACY
  Random Forest (RF) 

***************************************************************************************************************************************/


// RF Classification 
var RF_classifier = ee.Classifier.smileRandomForest(500, 5, 1, 0.85, null, 0).train(composite_train.sample_, composite_train.label, composite_train.bands);
//var RF_classifier = ee.Classifier.smileRandomForest(200, 5, 1, 0.85, null, 0).train(sample, label, bands);
// Get information about the trained classifier.
//print('RF_Explanation', RF_classifier.explain());

// Classify the image with the same bands used for training.
var RF = composite_train.sentinel_vi_region_destino.classify(RF_classifier);

//var mask = ee.Image().toByte().paint(table5, 1)

// Compute connectivity of pixels to eliminate those connected to 8 or fewer neighbours
// This operation reduces noise 

//Máscara

//var mascara = ndviApr_maipo.select('ndviApr').subtract(ndviMay_maipo.select('ndviMay')).gt(0);
//var mascara = ndviApr_maipo.select('ndviApr').lt(0.7)
var connections = RF.connectedPixelCount(coleccion_imagenes_geometria.pixeles);    
//var RF = RF.updateMask(connections.gte(pixeles)).updateMask(mascara);
var RF = RF.updateMask(connections.gte(coleccion_imagenes_geometria.pixeles));
var RF = RF.addBands(RF.select(['classification']));
//var RF = RF.resample('bilinear').reproject({
//  crs: RF.projection(), // Mantener la proyección original
//  scale: escala*5 // Nueva escala deseada
//});

var RFvector = RF.reduceToVectors({
  geometry: coleccion_imagenes_geometria.region_destino,
  crs: 'EPSG:4326',
  scale: coleccion_imagenes_geometria.escala,
  geometryType: 'polygon',
  eightConnected: false,
  labelProperty: 'value',
  maxPixels: 1e13,
  reducer: ee.Reducer.mean()
});

exports.RFvector = RFvector;
