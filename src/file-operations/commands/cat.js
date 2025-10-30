import { createReadStream } from 'node:fs';
import os from 'node:os';
import { pipeline } from 'node:stream/promises';
import {resolvePath} from "../../utils/helpers.js";

export async function catRead(workPathDir, pathToFile) {
    process.stdout.write(os.EOL);

    const fullPath = resolvePath(workPathDir, pathToFile);
    const readStream = createReadStream(fullPath, {encoding: 'utf-8'});

    await pipeline(readStream, process.stdout, { end: false });

    process.stdout.write(os.EOL);
}