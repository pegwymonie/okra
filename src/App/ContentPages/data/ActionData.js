import DataService from "./DataService";
import AttributeLayout from "../layouts/AttributeLayout";
import {Melee} from "./SkillData";
import {Body} from "./AttributeData";

export let Bash = {
    title: "Bash",
    path: "Bash",
    layout: AttributeLayout,
    content: {
        heading: "Bash",
        descriptions: {
            flavor: "Flavor",
            mechanics: "Mechanical"
        },
        skills: () => [Melee],
        attributes: () => [Body]
    }
};

let ActionDataService = new DataService([Bash]);
export default ActionDataService;