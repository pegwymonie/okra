import DataService from "./DataService";

let data = [
    {
        heading: "Feature 1",
        path: "Feature_1",
        content: "Big and Strong"
    },
    {
        heading: "Feature 2",
        path: "Feature_2",
        content: "Quick and Precise"
    }
];
let FeatureDataService = new DataService(data);
export default FeatureDataService;