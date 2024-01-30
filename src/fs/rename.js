import { rename as fsrename } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const srcFilepath = join(__dirname, "files", "wrongFilename.txt");
const dstFilepath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
    try {
        await fsrename(srcFilepath, dstFilepath);
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await rename();
