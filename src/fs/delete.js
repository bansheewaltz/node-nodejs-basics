import { rm } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await rm(filepath);
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await remove();
