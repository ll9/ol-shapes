/** 
 * @typedef {Object} Observer 
 * @property {function(string): void} update
 */

class StyleObservable {
    constructor() {
        this.color = 'blue';
        this.radius = 5;
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

    notifyAllObservers() {
        for(let observer of this.observers) {
            observer.update({color: this.color, radius: this.radius});
        }
    }
}