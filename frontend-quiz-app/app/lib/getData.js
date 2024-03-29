import { promises as fs } from "fs";
import path from "path";

export default async function getData() {
  const file = await fs.readFile(
    path.resolve(process.cwd(), "app", "lib", "data.json"),
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
