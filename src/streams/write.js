import { createWriteStream } from "node:fs";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const writeStream = createWriteStream(filepath);
    process.stdin.pipe(writeStream);
};

await write();
