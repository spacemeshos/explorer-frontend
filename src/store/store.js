import {makeAutoObservable, observable} from 'mobx';

class Store {
    constructor() {
        this.networks = ['1'];
        makeAutoObservable(this, {
            networks: observable.ref,
        })
    }
}

const store = new Store();

export default store;