import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "./utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fresh.txt");

const create = async () => {
    try {
        await writeFile(filepath, "I am fresh and young", { flag: "wx" });
    } catch {
        throw new Error(utils.FS_ERROR_MESSAGE);
    }
};

await create();
