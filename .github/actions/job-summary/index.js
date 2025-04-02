import * as core from "@actions/core";
import { promises } from "fs";

try {
    const filepath = core.getInput("filepath");
    const heading = core.getInput("heading");

    const fileContents = await promises.readFile(filepath);

    await core.summary
        .addRaw(`<details><summary>${heading}</summary>`, true)
        .addEOL()
        .addRaw(fileContents, true)
        .addEOL()
        .addRaw("</details>", true)
        .write();
} catch (error) {
  core.setFailed(error.message);
}