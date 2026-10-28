const fs = require("fs");
const path = require("path");

const dest = path.resolve("dist");
const skip = new Set(["node_modules", ".git", "dist", "scripts"]);

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest);
console.log("preparando dist");

for (const name of fs.readdirSync(".")) {
  if (skip.has(name) || name.startsWith(".")) continue;
  fs.cpSync(path.resolve(name), path.join(dest, name), { recursive: true });
}
