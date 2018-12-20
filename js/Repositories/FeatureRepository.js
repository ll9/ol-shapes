class FeatureRepository {
    /**
     * 
     * @param {ol.Map} map 
     */
    constructor(map) {
        this.map = map;
        this.vectorSource = new ol.source.Vector();
        this.vectorLayer = new ol.layer.Vector({source: this.vectorSource});
        this.initialize();
    }

    initialize() {
        this.map.addLayer(this.vectorLayer);
    }

    /**
     * 
     * @param {ol.Feature} feature 
     */
    addFeature(feature) {
        this.vectorSource.addFeature(feature);
    }
}