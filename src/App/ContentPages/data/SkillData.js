import DataService from "./DataService";
import {Body} from "./AttributeData";
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
        attributes: () => [Body]
    }
};


let data = [
    Melee
];
let SkillDataService = new DataService(data);
export default SkillDataService;