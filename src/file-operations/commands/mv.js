import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import {copy} from "./cp.js";
import {remove} from "./rm.js";

export async function move(workPathDir, args) {
    printEmptyLine();

    await copy(workPathDir, args);
    await remove(workPathDir, args);

    console.log(`File ${args[0]} was moved to ${args[1]}`);

    printEmptyLine();
}