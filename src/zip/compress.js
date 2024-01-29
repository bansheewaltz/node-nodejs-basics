import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { join } from "node:path";
import { createGzip } from "node:zlib";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const srcFilepath = join(__dirname, "files", "fileToCompress.txt");
const dstFilepath = join(__dirname, "files", "archive.gz");


const compress = async () => {
    const zipStream = createGzip();
    const srcFilestream = createReadStream(srcFilepath);
    const dstFilestream = createWriteStream(dstFilepath);

    pipeline(srcFilestream, zipStream, dstFilestream, err => {
        if (err) console.error(err);
    });
};

await compress();
