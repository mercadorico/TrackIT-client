import { combineReducers } from "redux";

import projects from './projects';
import selectedProject from "./selectedProject";
import bugs from './bugs';
import selectedBug from "./selectedbug";
import auth from "./auth";
import authErrorMessage from "./authErrorMessage";

export default combineReducers({ projects, selectedProject, bugs, selectedBug, auth, authErrorMessage });