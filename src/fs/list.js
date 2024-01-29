import { readdir } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "./utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const targetDir = join(__dirname, "files");

const list = async () => {
    try {
        const content = await readdir(targetDir);
        console.log(content);
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await list();
