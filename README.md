# Areas_Regadas

Scripts para calcular la superficie efectivamente regada en _Google Earth Engine_ utilizando los datos de entrenamiento (Feature Collection) alojados en:
__'projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento_Coquimbo/Puntos_Guatulame_25porciento_26516puntos_EPSG4326'__

Geometría (SHAC) de entrenamiento alojada en _Google Earth Engine_:
__'projects/ee-corfobbppciren2023/assets/SHACS_Coquimbo/Guatulame'__

Geometría (SHAC) en la que calcular la superficie resultante alojada en _Google Earth Engine_:
__'projects/ee-corfobbppciren2023/assets/SHACS_Coquimbo/'+SHAC__, 
donde __SHAC__ corresponde a un elemento del script __-1.lista_SHACS.js__.

Incluye _require_ al script __firstYear.js__ alojado en _Google Earth Engine_ (__'users/corfobbppciren2023/firstYear:0.firstYear.js'__) y en el repositorio __firstYear__ de esta cuenta.

Vector resultante se aloja en _Google Drive_, carpeta __'Areas Regadas Coquimbo'__.

Utilizar también los scripts auxiliares del repositorio __Areas_Regadas_Auxiliares__: __border_noise_correction.js__, __maskS2clouds.js__, __speckle_filter.js__, __terrain_flattening.js__, __utilities.js__ y __wrapper.js__.

Basado en el repositorio:
__https://github.com/Yilkalg3/Irrigated-Area-Mapping__

Script auxiliares provienen del repositorio:
__https://github.com/adugnag/gee_s1_ard__
