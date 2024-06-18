
var firstYear = require('users/corfobbppciren2023/firstYear:0.firstYear.js'),
    coleccion_imagenes_geometria = require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    RandomForest = require('users/corfobbppciren2023/Areas_Regadas:11.RandomForest.js'),
    lista_SHACS = require('users/corfobbppciren2023/Areas_Regadas:-1.lista_SHACS.js');

//var var_indice = lista_SHACS.sequence_;

// Almacenar la variable en un diccionario
//var variablesCompartidas = ee.Dictionary({'indice': var_indice});

// Exportar el diccionario como una propiedad de la imagen de Earth Engine
//var imagenConVariables = ee.Image().set(variablesCompartidas);

// Exportar la imagen con las variables como una imagen a Google Drive
//Export.image.toDrive({
//  image: imagenConVariables,
//  description: 'imagen_con_variables',
//});

//print(imagenConVariables)

//var imagenConVariables = ee.Image('users/corfobbppciren2023/imagen_con_variables');

//Export

// Define los metadatos
var metadata = {
    "Nombre": firstYear.firstYear +'_'+firstYear.firstYearaddone+'_'+coleccion_imagenes_geometria.cuenca,
    "Año de creación": "2024",
    "Temporada": firstYear.firstYear +'-'+firstYear.firstYearaddone,
    "Escala": "10 m",
    "Descripcion": "Superficie efectivamente regada para SHAC "+coleccion_imagenes_geometria.cuenca
};

// Ingresa los metadatos en la FeatureCollection
var RFvector = RandomForest.RFvector.set(metadata);

// Imprime la FeatureCollection con los metadatos
//print(RFvector);

var description=firstYear.firstYear +'_'+firstYear.firstYearaddone+'_'+coleccion_imagenes_geometria.cuenca;

Export.table.toDrive({
  collection: RFvector,
  description: description,
  fileFormat: 'SHP',
  folder: 'Superficie efectivamente regada',
});

Export.table.toAsset({
  collection: RFvector,
  description: description,
  assetId: description
});





