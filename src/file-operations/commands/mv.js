import {copy} from "./cp.js";
import {remove} from "./rm.js";

export async function move(workPathDir, args) {
    await copy(workPathDir, args);
    await remove(workPathDir, args);
}