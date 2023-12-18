import inquirer from 'inquirer';

async function createProject() {
  // 提示用户选择一个框架
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Which framework do you want to use?',
      choices: ['vue', 'solid', 'react'],
    },
  ]);

  // 基于用户选择处理模板
  switch (answers.framework) {
    case 'vue':
      console.log('You have selected Vue. Setting up Vue template...');
      // 这里添加处理 Vue 模板的逻辑
      break;
    case 'solid':
      console.log('You have selected Solid. Setting up Solid template...');
      // 处理 Solid 模板的逻辑
      break;
    case 'react':
      console.log('You have selected React. Setting up React template...');
      // 处理 React 模板的逻辑
      break;
    default:
      console.log('Invalid choice.');
      break;
  }
}

createProject();
