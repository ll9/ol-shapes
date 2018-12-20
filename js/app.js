/// <reference path="../node_modules/@types/openlayers/index.d.ts" />

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([10, 50]),
        zoom: 4
    })
});
var repo = new FeatureRepository(map);
var styleObservable = new StyleObservable();
var styleObserver = new StyleObserver(repo.vectorLayer);

function onStyleChanged(val) {
    styleObservable.setState(val);
}

function startup() {
    styleObservable.register(styleObserver);

    repo.addFeature(new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([10, 50]))));
}
startup();