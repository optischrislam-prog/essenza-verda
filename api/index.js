import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

// 1. 注册 TypeScript 环境
register('ts-node/esm', pathToFileURL('./'));

// 2. 使用绝对路径动态定位心脏文件
// process.cwd() 会指向 Vercel 部署任务的根目录
const heartPath = pathToFileURL(join(process.cwd(), 'server', '_core', 'index.ts')).href;

// 3. 动态导入
const mod = await import(heartPath);
export default mod.default || mod;
