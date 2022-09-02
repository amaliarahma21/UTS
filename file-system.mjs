import fs from "fs";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.txt", "Hello World");