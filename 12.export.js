
var coleccion_imagenes_geometria = require('users/corfobbppciren2023/Areas_Regadas:1.coleccion_imagenes_geometria.js'),
    RandomForest = require('users/corfobbppciren2023/Areas_Regadas:11.RandomForest.js');

//Export
var description='Area_Regada_'+coleccion_imagenes_geometria.cuenca;

Export.table.toDrive({
  collection: RandomForest.RFvector,
  description: description,
  fileFormat: 'SHP',
  folder: 'Areas Regadas Coquimbo'
});
