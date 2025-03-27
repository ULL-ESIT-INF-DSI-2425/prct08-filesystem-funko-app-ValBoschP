import { access, mkdir, watch, rename } from "fs/promises";
import { cp } from "fs/promises";

function watchMonitor(dirPath: string, dirVersion: string) {
  try {
    access(dirPath);
    console.log(`${dirPath} exists`);
  } catch {
    console.log(`${dirPath} does not exist`);
    return;
  }

  try {
    access(dirVersion);
  } catch {
    console.log(`Versions dir created: ${dirVersion}`);
    mkdir(dirVersion);
  };
  watch(dirPath);
    if (filename) {
      console.log(`${filename} was modified on ${dirPath}.`);
      commit(filename.toString(), dirVersion);
    } else {
      console.log(`Filename not provided`);
    }
  }

function commit(fileName: string, dirVersion: string) {
  const copyFile = `${fileName}.timestamp.bak`;
  console.log(`${fileName} will copy on ${dirVersion} with the name: ${copyFile}`);
  console.log(`COPYING: ${dirVersion}/${fileName}`);
  console.log(`COPIED ON: ${dirVersion}/${copyFile}`);

  try {
     cp(`${dirVersion}/${fileName}`, `${dirVersion}`);
     rename(`${dirVersion}/${fileName}`, `${dirVersion}/${copyFile}`)
  } catch (error) {
    console.error(`Error copying file: ${error}`);
  }
}

watchMonitor("./src/modificacion/cositas", "./src/modificacion/versions");
