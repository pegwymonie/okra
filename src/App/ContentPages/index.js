import AttributeDataService from "./data/AttributeData";
import SkillDataService from "./data/SkillData";
import FeatureDataService from "./data/FeatureData";

export let AttributeContent = {
    name: "Attributes",
    dataSource: AttributeDataService
};

export let SkillContent = {
    name: "Skill",
    dataSource: SkillDataService
};


export let FeatureContent = {
    name: "Features",
    dataSource: FeatureDataService
};

export const ContentPages = [AttributeContent, SkillContent, FeatureContent];