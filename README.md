# Areas_Regadas

Scripts para calcular la superficie efectivamente regada utilizando los datos de entrenamiento (Feature Collection) alojados en _Google Earth Engine_:
__'projects/ee-corfobbppciren2023/assets/Puntos_entrenamiento_Coquimbo/Puntos_Guatulame_25porciento_26516puntos_EPSG4326'__

Geometría (SHAC) de entrenamiento alojada en _Google Earth Engine_:
'projects/ee-corfobbppciren2023/assets/SHACS_Coquimbo/Guatulame'

Geometría (SHAC) en la que calcular la superficie resultante alojada en _Google Earth Engine_:
__'projects/ee-corfobbppciren2023/assets/SHACS_Coquimbo/'+SHAC__, 
donde __SHAC__ corresponde a un elemento del script __-1.lista_SHACS.js__.

Incluye _require_ al script __firstYear.js__ alojado en _Google Earth Engine_ (__'users/corfobbppciren2023/firstYear:0.firstYear.js'__) y en el repositorio __firstYear__ de esta cuenta. 
