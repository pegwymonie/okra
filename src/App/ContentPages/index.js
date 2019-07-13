import AttributeDataService from "./data/AttributeData";
import SkillDataService from "./data/SkillData";
import FeatureDataService from "./data/FeatureData";
import ActionDataService from "./data/ActionData";

export let AttributeContent = {
    name: "Attributes",
    dataSource: AttributeDataService
};

export let SkillContent = {
    name: "Skills",
    dataSource: SkillDataService
};

export let ActionContent = {
    name: "Actions",
    dataSource: ActionDataService
};

export let FeatureContent = {
    name: "Features",
    dataSource: FeatureDataService
};

export const ContentPages = [AttributeContent, SkillContent, FeatureContent];