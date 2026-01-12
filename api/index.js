import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

// 1. 注册 TypeScript 支持
register('ts-node/esm', pathToFileURL('./'));

// 2. 动态定位 server/index.ts 的绝对路径
const serverPath = join(process.cwd(), 'server', 'index.ts');

// 3. 导入并导出
import app from serverPath;
export default app;
