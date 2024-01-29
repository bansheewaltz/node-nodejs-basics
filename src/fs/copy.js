import { cp } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const srcDir = join(__dirname, "files");
const dstDir = join(__dirname, "files_copy");

const copy = async () => {
    try {
        var options = { errorOnExist: true, force: false, recursive: true };
        await cp(srcDir, dstDir, options);
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await copy();
