class StyleObserver {
    /**
     * 
     * @param {ol.layer.Vector} layer 
     */
    constructor(layer) {
        this.layer = layer;
        this.color = 'blue'
        this.initialize();
    }

    initialize() {
        this.setStyle();
    }

    setStyle() {
        this.layer.setStyle((feature) => this.styleFunction(feature));
    }

    styleFunction(feature) {
        console.log(this.color);
        return new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                    color: this.color
                }),
                stroke: new ol.style.Stroke({
                    color: 'white',
                    width: 3
                })
            })
        })
    }

    update(val) {
        this.color = val;
        this.setStyle();
    }
}