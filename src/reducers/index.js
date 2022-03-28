import { combineReducers } from "redux";

import projects from './projects';
import selectedProject from "./selectedProject";

export default combineReducers({ projects, selectedProject });