import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// 1. 注册 TypeScript 环境
register('ts-node/esm', pathToFileURL('./'));

// 2. 指向我们刚刚确认的真实入口：server/_core/index.ts
import app from '../server/_core/index.ts';

export default app;
