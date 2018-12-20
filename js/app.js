/// <reference path="../node_modules/@types/openlayers/index.d.ts" />


const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
    })
});
function startup() {
    var repo = new FeatureRepository(map);

    repo.addFeature(new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([10, 50]))));
}
startup();