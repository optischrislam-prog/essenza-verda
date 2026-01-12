// 注入 TypeScript 支持
require('ts-node').register({ transpileOnly: true });

// 尝试加载后端入口
try {
    const app = require('../server/index.ts');
    module.exports = app;
} catch (error) {
    console.error('加载后端入口失败:', error);
    module.exports = (req, res) => {
        res.status(500).json({ error: 'Server Start Error', details: error.message });
    };
}
