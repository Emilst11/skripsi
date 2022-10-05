import { combineReducers } from "redux";
import logs from "./logs";
import profile from "./profile";
import records from "./record";

export default combineReducers({
    logs,
    profile,
    records
})