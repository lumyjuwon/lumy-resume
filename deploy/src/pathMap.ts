import { promises as fs } from "fs";
import path from "path";

export const PathMap = {
  root: path.resolve(__dirname, "../../"),
  userPath: path.resolve(__dirname, "../../user"),
  clientPath: path.resolve(__dirname, "../../client"),
};

export async function validatePathMap() {
  const pathKeys = Object.keys(PathMap);

  for (const pathKey of pathKeys) {
    await fs.access(PathMap[pathKey as keyof typeof PathMap]);
  }
}
