var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                interactive: true,
    title: 'Departamentos<br />\
    <img src="styles/legend/Departamentos_1_0.png" /> 17 - 47<br />\
    <img src="styles/legend/Departamentos_1_1.png" /> 47 - 174<br />\
    <img src="styles/legend/Departamentos_1_2.png" /> 174 - 302<br />\
    <img src="styles/legend/Departamentos_1_3.png" /> 302 - 522<br />\
    <img src="styles/legend/Departamentos_1_4.png" /> 522 - 2709<br />\
    <img src="styles/legend/Departamentos_1_5.png" /> 2709 - 70883<br />'
        });
var format_Cuerposdeagua_2 = new ol.format.GeoJSON();
var features_Cuerposdeagua_2 = format_Cuerposdeagua_2.readFeatures(json_Cuerposdeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerposdeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerposdeagua_2.addFeatures(features_Cuerposdeagua_2);
var lyr_Cuerposdeagua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerposdeagua_2, 
                style: style_Cuerposdeagua_2,
                interactive: true,
                title: '<img src="styles/legend/Cuerposdeagua_2.png" /> Cuerpos de agua'
            });
var format_Ferrocarril_3 = new ol.format.GeoJSON();
var features_Ferrocarril_3 = format_Ferrocarril_3.readFeatures(json_Ferrocarril_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarril_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_3.addFeatures(features_Ferrocarril_3);
var lyr_Ferrocarril_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ferrocarril_3, 
                style: style_Ferrocarril_3,
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_3.png" /> Ferrocarril'
            });
var format_Rios_4 = new ol.format.GeoJSON();
var features_Rios_4 = format_Rios_4.readFeatures(json_Rios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_4.addFeatures(features_Rios_4);
var lyr_Rios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_4, 
                style: style_Rios_4,
                interactive: true,
                title: '<img src="styles/legend/Rios_4.png" /> Rios'
            });
var format_RedVial_5 = new ol.format.GeoJSON();
var features_RedVial_5 = format_RedVial_5.readFeatures(json_RedVial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_5.addFeatures(features_RedVial_5);
var lyr_RedVial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_5, 
                style: style_RedVial_5,
                interactive: true,
                title: '<img src="styles/legend/RedVial_5.png" /> Red Vial'
            });
var format_Lima_capital_6 = new ol.format.GeoJSON();
var features_Lima_capital_6 = format_Lima_capital_6.readFeatures(json_Lima_capital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lima_capital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lima_capital_6.addFeatures(features_Lima_capital_6);
var lyr_Lima_capital_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lima_capital_6, 
                style: style_Lima_capital_6,
                interactive: true,
                title: '<img src="styles/legend/Lima_capital_6.png" /> Lima_capital'
            });
var format_Puertos_7 = new ol.format.GeoJSON();
var features_Puertos_7 = format_Puertos_7.readFeatures(json_Puertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puertos_7.addFeatures(features_Puertos_7);
var lyr_Puertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puertos_7, 
                style: style_Puertos_7,
                interactive: true,
                title: '<img src="styles/legend/Puertos_7.png" /> Puertos'
            });
var format_Aeropuertos_8 = new ol.format.GeoJSON();
var features_Aeropuertos_8 = format_Aeropuertos_8.readFeatures(json_Aeropuertos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_8.addFeatures(features_Aeropuertos_8);
var lyr_Aeropuertos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_8, 
                style: style_Aeropuertos_8,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_8.png" /> Aeropuertos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Cuerposdeagua_2.setVisible(true);lyr_Ferrocarril_3.setVisible(true);lyr_Rios_4.setVisible(true);lyr_RedVial_5.setVisible(true);lyr_Lima_capital_6.setVisible(true);lyr_Puertos_7.setVisible(true);lyr_Aeropuertos_8.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_Departamentos_1,lyr_Cuerposdeagua_2,lyr_Ferrocarril_3,lyr_Rios_4,lyr_RedVial_5,lyr_Lima_capital_6,lyr_Puertos_7,lyr_Aeropuertos_8];
lyr_Departamentos_1.set('fieldAliases', {'DEPTOS': 'DEPTOS', 'area': 'area', 'densidad': 'densidad', });
lyr_Cuerposdeagua_2.set('fieldAliases', {'gid': 'gid', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'id': 'id', 'nombreofic': 'nombreofic', 'ubigeo': 'ubigeo', 'nombrecuer': 'nombrecuer', 'codala': 'codala', 'ala': 'ala', 'codaaa': 'codaaa', 'aaa': 'aaa', 'coordiller': 'coordiller', 'fechaimage': 'fechaimage', 'fuente': 'fuente', 'codigouh': 'codigouh', 'nombre': 'nombre', 'area': 'area', });
lyr_Ferrocarril_3.set('fieldAliases', {'LINEA': 'LINEA', 'SUBNOMLIN': 'SUBNOMLIN', 'TRAMO': 'TRAMO', 'CODDPTO': 'CODDPTO', 'LONGKM': 'LONGKM', 'TROCHA': 'TROCHA', 'ELECTRIFIC': 'ELECTRIFIC', 'TITULAR': 'TITULAR', 'ADMINIST': 'ADMINIST', 'TIPCONT': 'TIPCONT', 'OPERADOR': 'OPERADOR', 'ESTFUN': 'ESTFUN', });
lyr_Rios_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_RedVial_5.set('fieldAliases', {'CÓDIGO': 'CÓDIGO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_Lima_capital_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'poblacion total': 'poblacion total', 'año fundacion': 'año fundacion', 'idioma oficial': 'idioma oficial', 'moneda': 'moneda', });
lyr_Puertos_7.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'TIPPUERT': 'TIPPUERT', 'LABEL': 'LABEL', 'CODDPTO': 'CODDPTO', 'REGPROP': 'REGPROP', 'ADMINIST': 'ADMINIST', 'ESTOPER': 'ESTOPER', 'USOFUN': 'USOFUN', 'AMBITO': 'AMBITO', 'TRAFICO': 'TRAFICO', 'ALCANCE': 'ALCANCE', });
lyr_Aeropuertos_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_AERODR': 'COD_AERODR', 'DPTO': 'DPTO', 'TIPOS': 'TIPOS', 'LABEL': 'LABEL', 'LATITUD': 'LATITUD', 'LONG': 'LONG', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'USO': 'USO', 'JERARQUIA': 'JERARQUIA', 'TIPO': 'TIPO', 'ESCALA': 'ESCALA', 'CATEGORIA': 'CATEGORIA', 'N_DESIGNAD': 'N_DESIGNAD', 'RESO_DIREC': 'RESO_DIREC', 'CLV_REF': 'CLV_REF', 'ELEV__PIES': 'ELEV__PIES', 'TEMP_REF_T': 'TEMP_REF_T', 'ORIENT_MAG': 'ORIENT_MAG', 'DIMENS_MT_': 'DIMENS_MT_', 'SUPERFICIE': 'SUPERFICIE', 'RESIS_PAV': 'RESIS_PAV', 'TIP_AERONV': 'TIP_AERONV', 'VRAEM': 'VRAEM', 'ESTAFUN_17': 'ESTAFUN_17', 'ADMIN_17': 'ADMIN_17', 'TITUL_17': 'TITUL_17', });
lyr_Departamentos_1.set('fieldImages', {'DEPTOS': 'TextEdit', 'area': 'TextEdit', 'densidad': 'Range', });
lyr_Cuerposdeagua_2.set('fieldImages', {'gid': 'Hidden', 'name': 'Hidden', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudemo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'draworder': 'Hidden', 'icon': 'Hidden', 'id': 'Hidden', 'nombreofic': 'Hidden', 'ubigeo': 'Hidden', 'nombrecuer': 'Hidden', 'codala': 'Hidden', 'ala': 'Hidden', 'codaaa': 'Hidden', 'aaa': 'Hidden', 'coordiller': 'Hidden', 'fechaimage': 'Hidden', 'fuente': 'Hidden', 'codigouh': 'Hidden', 'nombre': 'TextEdit', 'area': 'Hidden', });
lyr_Ferrocarril_3.set('fieldImages', {'LINEA': 'TextEdit', 'SUBNOMLIN': 'Hidden', 'TRAMO': 'TextEdit', 'CODDPTO': 'Hidden', 'LONGKM': 'Hidden', 'TROCHA': 'Hidden', 'ELECTRIFIC': 'Hidden', 'TITULAR': 'Hidden', 'ADMINIST': 'Hidden', 'TIPCONT': 'Hidden', 'OPERADOR': 'TextEdit', 'ESTFUN': 'Hidden', });
lyr_Rios_4.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_RedVial_5.set('fieldImages', {'CÓDIGO': '', 'TIPO': '', 'NOMBRE': '', });
lyr_Lima_capital_6.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'poblacion total': 'Range', 'año fundacion': 'DateTime', 'idioma oficial': 'TextEdit', 'moneda': 'TextEdit', });
lyr_Puertos_7.set('fieldImages', {'ID': 'Hidden', 'NOMBRE': 'TextEdit', 'TIPPUERT': 'Hidden', 'LABEL': 'Hidden', 'CODDPTO': 'Hidden', 'REGPROP': 'Hidden', 'ADMINIST': 'Hidden', 'ESTOPER': 'Hidden', 'USOFUN': 'Hidden', 'AMBITO': 'TextEdit', 'TRAFICO': 'TextEdit', 'ALCANCE': 'Hidden', });
lyr_Aeropuertos_8.set('fieldImages', {'OBJECTID': 'Hidden', 'COD_AERODR': 'Hidden', 'DPTO': 'Hidden', 'TIPOS': 'Hidden', 'LABEL': 'Hidden', 'LATITUD': 'Hidden', 'LONG': 'Hidden', 'DEPARTAMEN': 'Hidden', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'Hidden', 'USO': 'TextEdit', 'JERARQUIA': 'Hidden', 'TIPO': 'Hidden', 'ESCALA': 'TextEdit', 'CATEGORIA': 'Hidden', 'N_DESIGNAD': 'Hidden', 'RESO_DIREC': 'Hidden', 'CLV_REF': 'Hidden', 'ELEV__PIES': 'Hidden', 'TEMP_REF_T': 'Hidden', 'ORIENT_MAG': 'Hidden', 'DIMENS_MT_': 'Hidden', 'SUPERFICIE': 'Hidden', 'RESIS_PAV': 'Hidden', 'TIP_AERONV': 'Hidden', 'VRAEM': 'Hidden', 'ESTAFUN_17': 'Hidden', 'ADMIN_17': 'Hidden', 'TITUL_17': 'Hidden', });
lyr_Departamentos_1.set('fieldLabels', {'DEPTOS': 'inline label', 'area': 'inline label', 'densidad': 'inline label', });
lyr_Cuerposdeagua_2.set('fieldLabels', {'nombre': 'inline label', });
lyr_Ferrocarril_3.set('fieldLabels', {'LINEA': 'inline label', 'TRAMO': 'inline label', 'OPERADOR': 'inline label', });
lyr_Rios_4.set('fieldLabels', {'NOMBRE': 'inline label', });
lyr_RedVial_5.set('fieldLabels', {'CÓDIGO': 'inline label', 'TIPO': 'inline label', 'NOMBRE': 'inline label', });
lyr_Lima_capital_6.set('fieldLabels', {'poblacion total': 'inline label', 'año fundacion': 'inline label', 'idioma oficial': 'inline label', 'moneda': 'inline label', });
lyr_Puertos_7.set('fieldLabels', {'NOMBRE': 'inline label', 'AMBITO': 'inline label', 'TRAFICO': 'inline label', });
lyr_Aeropuertos_8.set('fieldLabels', {'PROVINCIA': 'inline label', 'USO': 'inline label', 'ESCALA': 'inline label', });
lyr_Aeropuertos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});