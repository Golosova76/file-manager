import {catRead} from "./commands/cat.js";
import {addFile} from "./commands/add.js";


export class FileOperations {
   cat(workPathDir, pathToFile) {
        return catRead(workPathDir, pathToFile);
    }

    add(workPathDir, args) {
       return addFile(workPathDir, args);
    }
}