import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import {printEmptyLine, resolvePath} from "../../utils/helpers.js";

export async function catRead(workPathDir, pathToFile) {
    printEmptyLine();

    const fullPath = resolvePath(workPathDir, pathToFile);
    const readStream = createReadStream(fullPath, {encoding: 'utf-8'});

    await pipeline(readStream, process.stdout, { end: false });

    printEmptyLine();
}