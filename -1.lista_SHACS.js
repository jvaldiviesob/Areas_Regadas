
var nombre_SHAC = ['Acuifero_3_Panquehue', //0
                   'Acuifero_4_Catemu', //1
                   'Acuifero_5_Llay_Llay', //2
                   'Acuifero_6_Nogales_Hijuelas', //3
                   'Acuifero_7_Quillota', //4
                   'Acuifero_8_Aconcagua_desembocadura', //5
                   'Acuifero_9_Limache', //6
                   'Algarrobo', //7
                   'Altos_de_Rapel', //8
                   'Concon', //9
                   'Curauma', //10
                   'Dunas_de_Quintero', //11
                   'El_Tabo', //12
                   'Esterlo_Los_Molles', //13
                   'Estero_Cachagua', //14
                   'Estero_Cartagena', //15
                   'Estero_Casablanca_Desembocadura', //16
                   'Estero_Catapilco', //17
                   'Estero_El_Membrillo_AR', //18
                   'Estero_El_Pangal', //19
                   'Estero_El_Rosario_Costeras_V', //20
                   'Estero_El_Sauce', //21
                   'Estero_Guaquen', //22
                   'Estero_La_Canela', //23
                   'Estero_Laguna_Verde', //24
                   'Estero_Las_Salinas_Sur', //25
                   'Estero_Mantagua', //26
                   'Estero_Papudo', //27
                   'Estero_Pucalan', //28
                   'Estero_Puchuncavi', //29
                   'Estero_San_Jeronimo', //30
                   'Estero_San_Jose', //31
                   'Estero_Vina_del_Mar', //32
                   'Horcon', //33
                   'La_Laguna_Catapilco', //34
                   'La_Vinilla_Casablanca', //35
                   'Lo_Orozco', //36
                   'Lo_Ovalle', //37
                   'Los_Perales', //38
                   'Maipo_Desembocadura', //39
                   'Maitenlahue', //40
                   'Melipilla', //41
                   'Puangue_Alto_dividido_parte_0', //42
                   'Puangue_Alto_dividido_parte_1', // 43
                   'Puangue_Alto_dividido_parte_2', // 44
                   'Punta_Gallo', //45
                   'Punta_Pichicuy', //46
                   'Quintay', //47
                   'Rio_Rapel_bajo_junta_Estero_Rosario', //48
                   'Roca_Playas_Los_Molles', //49
                   'Rocas_de_Santo_Domingo', //50
                   'Rocas_El_Caracol', //51
                   'Rocas_Pichidangui', //52
                   'Rocas_Punta_Curaumilla', //53
                   'Rocas_Punta_La_Ligua', //54
                   'Rocas_Punta_Panul', //55
                   'Rocas_Zapallar', //56
                   'Sector_1_Rio_Pedernal', //57
                   'Sector_10_Rio_Petorca_Oriente', //58
                   'Sector_11_Rio_La_Ligua_Costa', //59
                   'Sector_12_Estero_Patagua', //60
                   'Sector_2_Estero_Las_Palmas', //61
                   'Sector_3_Rio_del_Sobrante', //62
                   'Sector_4_Rio_Petorca_Poniente', //63
                   'Sector_5_Estero_Alicahue', //64
                   'Sector_6_Rio_La_Ligua_Oriente', //65
                   'Sector_7_Rio_La_Ligua_Cabildo', //66
                   'Sector_8_Rio_La_Ligua_Pueblo', //67
                   'Sector_9_Los_Angeles', //68
                   'Sector_Renaca', //69
                   'Sector_San_Antonio', //70
                   'Sector_Valparaiso', //71
                   'SHAC_sin_nombre', //72
                   'Yali_Bajo_El_Prado_dividido_parte_0', //73
                   'Yali_Bajo_El_Prado_dividido_parte_1', //74
                   'Yali_Bajo_El_Prado_dividido_parte_2', //75
                   'Acuifero_1_San_Felipe_dividido_parte_0', //76
                   'Acuifero_1_San_Felipe_dividido_parte_1', //77
                   'Acuifero_1_San_Felipe_dividido_parte_2', //78
                   'Acuifero_1_San_Felipe_dividido_parte_3', //79
                   'Acuifero_1_San_Felipe_dividido_parte_4', //80
                   'Acuifero_1_San_Felipe_dividido_parte_5', //81
                   'Acuifero_2_Putaendo', //82
                   ]; 

var n = nombre_SHAC.length-1;
var sequence = [];

for (var i = 0; i <= n; i++) {
  sequence.push(i);
}

exports.nombre_SHAC = nombre_SHAC;
exports.sequence_ = sequence;
exports.tipo_SHAC = [ '4', //0
                      '4', //1
                      '4', //2
                      '4', //3
                      '4', //4
                      '1', //5
                      '4', //6
                      '1', //7
                      '1', //8
                      '1', //9
                      '2', //10
                      '1', //11
                      '1', //12
                      '2', //13
                      '1', //14
                      '1', //15
                      '3', //16
                      '1', //17
                      '2', //18
                      '1', //19
                      '3', //20
                      '2', //21
                      '4', //22
                      '1', //23
                      '1', //24
                      '2', //25
                      '4', //26
                      '2', //27
                      '4', //28
                      '1', //29
                      '1', //30
                      '1', //31
                      '2', //32
                      '1', //33
                      '1', //34
                      '3', //35
                      '4', //36
                      '3', //37
                      '4', //38
                      '1', //39
                      '1', //40
                      '3', //41
                      '4', //42
                      '4', //43
                      '4', //44
                      '2', //45
                      '1', //46
                      '2', //47
                      '2', //48
                      '1', //49
                      '2', //50
                      '1', //51
                      '1', //52
                      '1', //53
                      '2', //54
                      '1', //55
                      '2', //56
                      '6', //57
                      '4', //58
                      '1', //59
                      '4', //60
                      '4', //61
                      '6', //62
                      '2', //63
                      '6', //64
                      '4', //65
                      '4', //66
                      '4', //67
                      '4', //68
                      '1', //69
                      '1', //70
                      '2', //71
                      '1', //72
                      '1', //73
                      '1', //74
                      '1', //75
                      '6', //76
                      '6', //77
                      '6', //78
                      '6', //79
                      '6', //80
                      '6', //81
                      '4', //82
                      ]; 

