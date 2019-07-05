import DataService from "./DataService";
import AttributeLayout from "../layouts/AttributeLayout";
import {Melee} from "./SkillData";
import {bash} from "./ActionData";

export let strength = {
    title: "Strength",
    path: "Strength",
    layout: AttributeLayout,
    content: {
        heading: "Strength",
        descriptions: {
            flavor: "Flavor",
            mechanics: "Mechanical"
        },
        skills: () => [Melee],
        actions: () => [bash]
    }
};
export let dexterity = {
    title: "Dexterity",
    path: "Dexterity",
    layout: AttributeLayout,
    content: {
        heading: "Dexterity",
        descriptions: {
            romance: "",
            mechanics: ""
        },
        skills: [],
        actions: []
    }
};

let data = [ strength, dexterity];


let AttributeDataService = new DataService(data);
export default AttributeDataService