import AttributeDataService from "./data/AttributeData";
import SkillDataService from "./data/SkillData";
import FeatureDataService from "./data/FeatureData";
import Data from "./Data";

export const ContentPages = [
    {
        name: "Attributes",
        component: Data,
        dataSource: AttributeDataService
    },
    {
        name: "Skill",
        component: Data,
        dataSource: SkillDataService
    },
    {
        name: "Features",
        component: Data,
        dataSource: FeatureDataService
    }];
