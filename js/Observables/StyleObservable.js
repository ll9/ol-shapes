/** 
 * @typedef {Object} Observer 
 * @property {function(string): void} update
 */

class StyleObservable {
    constructor() {
        this.color = 'blue';
        this.radius = 25;
        this.form = 'marker';
        this.strokeWidth = 3;
        this.strokeColor = 'white';
        /** @type {Observer[]} */
        this.observers = [];
    }

    /**
     * 
     * @param {Observer} observer 
     */
    register(observer) {
        this.observers.push(observer);
    }

    setColor(color) {
        this.color = color;
        this.notifyAllObservers();
    }

    setRadius(radius) {
        this.radius = radius;
        this.notifyAllObservers();
    }

    setForm(form) {
        this.form = form;
        this.notifyAllObservers();
    }

    setStrokeColor(color) {
        this.strokeColor = color;
        this.notifyAllObservers();
    }

    setStrokeWidth(width) {
        this.strokeWidth = width;
        this.notifyAllObservers();
    }

    notifyAllObservers() {
        for (let observer of this.observers) {
            observer.update({
                color: this.color,
                radius: this.radius,
                form: this.form,
                strokeColor: this.strokeColor,
                strokeWidth: this.strokeWidth
            });
        }
    }
}