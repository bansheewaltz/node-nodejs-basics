import { createReadStream } from "node:fs";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const readStream = createReadStream(filepath);
    readStream.pipe(process.stdout);
};

await read();
