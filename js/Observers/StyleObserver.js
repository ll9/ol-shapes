class StyleObserver {
    /**
     * 
     * @param {ol.layer.Vector} layer 
     */
    constructor(layer) {
        this.layer = layer;
        this.color = 'blue'
        this.radius = 25;
        this.form = 'marker';
        this.strokeWidth = 3;
        this.strokeColor = 'white';
        this.initialize();
    }

    initialize() {
        this.setStyle();
    }

    setStyle() {
        this.layer.setStyle((feature) => this.styleFunction(feature));
    }

    styleFunction(feature) {
        console.log(this.form);
        return new ol.style.Style({
            image: new ol.style.FontSymbol({
                form: this.form,
                radius: this.radius,
                fill: new ol.style.Fill({
                    color: this.color
                }),
                stroke: new ol.style.Stroke({
                    color: this.strokeColor,
                    width: this.strokeWidth
                })
            }),
            fill: new ol.style.Fill({
                color: this.color
            }),
            stroke: new ol.style.Stroke({
                color: this.strokeColor,
                width: this.strokeWidth
            })
        })
    }

    update(val) {
        this.color = val.color;
        this.radius = val.radius;
        this.form = val.form;
        this.strokeColor = val.strokeColor;
        this.strokeWidth = val.strokeWidth;
        this.setStyle();
    }
}