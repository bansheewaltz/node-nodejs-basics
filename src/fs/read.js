import { readFile } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "./utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    try {
        const content = await readFile(filepath);
        console.log(content.toString());
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await read();
