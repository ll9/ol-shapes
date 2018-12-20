/** 
 * @typedef {Object} Observer 
 * @property {function(string): void} update
 */

class StyleObservable {
    constructor() {
        this.state = 'marker';
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

    setState(newState) {
        this.state = newState;
        this.notifyAllObservers();
    }

    notifyAllObservers() {
        for(let observer of this.observers) {
            observer.update(this.state);
        }
    }
}