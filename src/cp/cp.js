import { fork } from "node:child_process";
import { join } from "node:path";
import * as utils from "../utils/utils.js";

const __dirname = utils.fileURLToDirname(import.meta.url);
const childScript = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    fork(childScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 5, 1, 3, 123]);
