import DataService from "./DataService";

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


let AttributeDataService = new DataService(data);
export default AttributeDataService