import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const FS_ERROR_MESSAGE = "FS operation failed";
export const fileURLToDirname = url => dirname(fileURLToPath(url));
