export default class DataService {
    constructor(data){
        this._data = data;
    }

    getRouteInformation(){
        return this._data.map(it => ({heading: it.heading, path: it.path}))
    }

    getByPath(path){
        return this._data.find(it => it.path === path)
    }
}