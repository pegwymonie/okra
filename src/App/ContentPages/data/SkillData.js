import DataService from "./DataService";
import {strength} from "./AttributeData";
import SkillLayout from "../layouts/SkillLayout";

export let Melee = {
    title: "Melee",
    path: "Melee",
    layout: SkillLayout,
    content: {
        heading: "Melee",
        descriptions: {
            flavor: "Flavor",
            mechanics: "Mechanical"
        },
        attributes: () => [strength],
    }
};


let data = [
    Melee,
    {
        heading: "Skill 1",
        path: "Skill_1",
        content: "Big and Strong"
    },
    {
        heading: "Skill 2",
        path: "Skill_2",
        content: "Quick and Precise"
    }
];
let SkillDataService = new DataService(data);
export default SkillDataService;