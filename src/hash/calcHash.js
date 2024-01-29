import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const filepath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const content = await readFile(filepath);
    const hash = createHash("sha256").update(content).digest("hex");
    console.log(hash);
};

await calculateHash();
