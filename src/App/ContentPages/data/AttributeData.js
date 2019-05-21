let data = [
    {
        heading: "Strength",
        path: "Strength",
        content: "Big and Strong"
    },
    {
        heading: "Dexterity",
        path: "Dexterity",
        content: "Quick and Precise"
    }
    ];

class DataService {
    getData(){
        return data;
    }

    getPaths(){
        return data.map(it => it.path)
    }

    getAttributeByPath(path){
        return data.find(it => it.path === path)
    }
}
let AttributeDataService = new DataService();
export default AttributeDataService