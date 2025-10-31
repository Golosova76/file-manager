import {printEmptyLine, resolvePath} from "../utils/helpers.js";
import { createReadStream } from "node:fs";
import {pipeline} from "node:stream/promises";
import { stdout } from 'node:process';
import { createHash } from 'node:crypto';

export async function calculateHash(workPathDir, args) {
    printEmptyLine();

    try {
        const filePath = resolvePath(workPathDir, args[0]);

        const readStream = createReadStream(filePath);
        const hash = createHash('sha256');

        await pipeline(readStream, hash);

        stdout.write(hash.digest('hex') + '\n');
    } catch (error) {
        console.error('Operation failed:', error.code, error.message);
    }
}