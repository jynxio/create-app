import fs from 'fs-extra';
import path from 'node:path';


const baseDir = path.resolve(); // 根目录
const distDir = path.resolve(baseDir, './dist'); // 目标目录

await fs.ensureDir(distDir);

const files = await fs.readdir(baseDir);

for (const file of files) {
    if (!/^template-/.test(file)) continue;

    const originDir = path.resolve(baseDir, `./${ file }`);
    const targetDir = path.resolve(baseDir, `./dist/${ file }`);

    await fs.copy(originDir, targetDir);
}
