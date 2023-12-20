import fs from "fs-extra";
import prompts from "prompts";
import path from "node:path";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";

(async function () {
  /**
   * 输入项目名称
   */
  let projectName: string;

  while (true) {
    const response = await prompts({
      type: "text",
      name: "value",
      message: "请输入项目名称:",
    });

    //
    if (!response.value) {
      console.log("错误: 项目名称为空");

      continue;
    }

    //
    const isExist = await fs.pathExists(path.join(cwd(), response.value));

    if (isExist) {
      console.log("错误：项目名称已被占用");

      continue;
    }

    //
    projectName = response.value;

    break;
  }

  /**
   * 选择项目模板
   */
  const response = await prompts({
    type: "select",
    name: "value",
    message: "请选择项目模板",
    choices: [
      { title: "Vue", value: "vue" },
      { title: "React", value: "react" },
      { title: "Solid", value: "solid" },
    ],
  });
  const templateName: string = response.value;

  /**
   * 克隆项目模板
   */
  const projectPath = path.join(cwd(), projectName);
  const templatePath = path.join(
    path.dirname(path.dirname(fileURLToPath(import.meta.url))),
    `template-${templateName}-ts`
  );

  try {
    await fs.copy(templatePath, projectPath);
    console.log("创建成功");
  } catch (error) {
    console.error("创建失败：", error);
  }
})();
