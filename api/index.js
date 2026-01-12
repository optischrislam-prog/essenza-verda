import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// 1. 注册 TypeScript 运行环境，适配你项目的 ES Module 模式
register('ts-node/esm', pathToFileURL('./'));

// 2. 导入并导出你真正的后端入口
import app from '../server/index.ts';
export default app;
