import {catRead} from "./commands/cat.js";
import {addFile} from "./commands/add.js";
import {addMkDir} from "./commands/mkdir.js";
import {rename} from "./commands/rn.js";
import {copy} from "./commands/cp.js";
import {move} from "./commands/mv.js";
import {remove} from "./commands/rm.js";


export class FileOperations {
   cat(workPathDir, pathToFile) {
        return catRead(workPathDir, pathToFile);
    }

    add(workPathDir, args) {
       return addFile(workPathDir, args);
    }

    mkdir(workPathDir, args) {
        return addMkDir(workPathDir, args);
    }

    rn(workPathDir, args) {
        return rename(workPathDir, args);
    }

    cp(workPathDir, args) {
        return copy(workPathDir, args);
    }

    mv(workPathDir, args) {
        return move(workPathDir, args);
    }

    rm(workPathDir, args) {
        return remove(workPathDir, args);
    }
}