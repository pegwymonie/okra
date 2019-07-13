import DataService from "./DataService";
import AttributeLayout from "../layouts/AttributeLayout";
import {Melee} from "./SkillData";
import {Bash} from "./ActionData";

const Agile = {
    title: "Agile",

}
export const Body = {
    title: "Body",
    path: "Body",
    layout: AttributeLayout,
    content: {
        heading: "Body",
        descriptions: {
            flavor: "Flavor",
            mechanics: "Mechanical"
        },
        states: () => ["Agile", "Balanced", "Strong"],
        skills: () => [Melee],
        actions: () => [Bash]
    }
};

export const Mind = {
    title: "Mind",
    path: "Mind",
    layout: AttributeLayout,
    content: {
        heading: "Mind",
        descriptions: {
            romance: "",
            mechanics: ""
        },
        states: () => ["Intuitive", "Balanced", "Intelligent"],
        skills: () => [],
        actions: () => []
    }
};

export const Soul = {
    title: "Soul",
    path: "Soul",
    layout: AttributeLayout,
    content: {
        heading: "Soul",
        descriptions: {
            romance: "",
            mechanics: ""
        },
        states: () => ["Resilient", "Balanced", "Powerful"],
        skills: () => [],
        actions: () => []
    }
};


export default new DataService([ Body, Mind, Soul]);