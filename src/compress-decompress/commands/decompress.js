import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";
import path from "node:path";
import {createReadStream, createWriteStream} from "node:fs";
import {createBrotliDecompress} from "node:zlib";
import {pipeline} from "node:stream/promises";

export async function deCompressFile(workPathDir, args) {
    printEmptyLine();

    const sourceFilePath = resolvePath(workPathDir, args[0]);
    await fs.access(sourceFilePath);

    const destinationPath = resolvePath(workPathDir, args[1]);
    let targetPath;

    const stat = await fs.stat(destinationPath);
    if (stat.isDirectory()) {
        const srcBase = path.basename(sourceFilePath);
        const withoutBr = srcBase.endsWith(".br")
            ? srcBase.slice(0, -3)
            : srcBase;
        targetPath = path.join(destinationPath, withoutBr);
    } else {
        targetPath = destinationPath;
    }

    const readStream = createReadStream(sourceFilePath);
    const brotliDecompress = createBrotliDecompress();
    const writeStream = createWriteStream(targetPath);


    await pipeline(readStream, brotliDecompress, writeStream);

    console.log(`File ${sourceFilePath} was decompressed to ${targetPath}`);
}