import { combineReducers } from "redux";

import projects from './projects';
import selectedProject from "./selectedProject";
import bugs from './bugs';
import selectedBug from "./selectedbug";

export default combineReducers({ projects, selectedProject, bugs, selectedBug });