import fs from "fs-extra";
import path from "node:path";
import chalk from "chalk";
import input from "@inquirer/input";
import select from "@inquirer/select";
import createRandomString from "./createRandomString.js";
import color from "./color.js";
import names from "./names.js";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";

(async () => {
    console.log("\n");
    console.log(chalk(createTag(" init ") + chalk.hex(color.grey)(" - @jynxio/create-app -")));
    console.log();

    const templateName = await queryTemplateName();
    const folderName = await queryfolderName();

    console.log();

    try {
        await cloneProject(templateName, folderName);

        console.log(chalk(createTag(" done ") + chalk.hex(color.grey)(" - @jynxio/create-app -")));
        console.log();
        console.log(
            chalk(createTag(" next ") + chalk.hex(color.grey)(" Run these command to start:")),
        );
        console.log(chalk.hex(color.grey)(`       1. cd ./${folderName}`));
        console.log(chalk.hex(color.grey)("       2. npm install"));
        console.log(chalk.hex(color.grey)("       3. npm dev"));
    } catch {
        console.log(
            chalk(
                createTag(" bomb ") + createErrMsg(" Failed! Issues occurred during creation..."),
            ),
        );
    }

    console.log("\n");

    async function queryTemplateName() {
        const leadingSpace = " ".repeat(7);
        const choices = names.map((name) => ({ name: leadingSpace + name, value: name }));

        return await select({
            choices,
            message: "Select a template:",
            theme: {
                prefix: createTag(" tmpl "),
                style: {
                    help: () => "",
                    message: (text: string) => text,
                    answer: (text: string) => ` ${text.trim()}`,
                    highlight: (text: string) => {
                        const lang = text.trim() as (typeof names)[number];
                        const newText = `${leadingSpace}* ${lang}`;

                        return chalk.hex(color[lang])(newText);
                    },
                },
                icon: { cursor: "" },
            },
        });
    }

    async function queryfolderName() {
        let folderName = "";

        for (;;) {
            console.log();
            folderName = await input({
                message: "Enter a file name: ",
                default: createRandomString(),
                theme: {
                    prefix: createTag(" name "),
                    style: {
                        message: (text: string) => text,
                        answer: (text: string) => {
                            const folderName = text;

                            // Check: is folderName empty?
                            const isEmpty = folderName === "";

                            if (isEmpty) return createErrMsg("your input is empty");

                            // Check: is folderName exist?
                            const isExist = isFolderExist(path.join(cwd(), folderName));

                            if (isExist)
                                return createErrMsg(`your input ("${folderName}") already exists`);

                            // Correct!
                            return text;
                        },
                        defaultAnswer: (text: string) => chalk.hex(color.grey)(text),
                    },
                },
            });

            if (folderName === "") continue;
            if (isFolderExist(path.join(cwd(), folderName))) continue;

            break;
        }

        return folderName;
    }

    async function cloneProject(templateName: string, folderName: string) {
        const projectPath = path.join(cwd(), folderName);
        const templatePath = path.join(
            path.dirname(path.dirname(fileURLToPath(import.meta.url))),
            `template-${templateName}`,
        );

        await fs.copy(templatePath, projectPath);
    }
})();

function isFolderExist(path: string) {
    try {
        const stats = fs.statSync(path);
        return stats.isDirectory();
    } catch {
        return false;
    }
}

function createTag(text: string) {
    return chalk.hex(color.black).bgHex(color.green)(text);
}

function createErrMsg(text: string) {
    return chalk.hex(color.red)(text);
}
