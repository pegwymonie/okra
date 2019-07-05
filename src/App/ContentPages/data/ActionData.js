import DataService from "./DataService";

export let bash = {
    title: "#!/bin/bash",
    path: ""
};

let data = [bash];

let ActionDataService = new DataService(data);
export default ActionDataService;