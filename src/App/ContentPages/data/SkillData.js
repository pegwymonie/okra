import DataService from "./DataService";

let data = [
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