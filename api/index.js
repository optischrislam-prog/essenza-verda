const register = require('ts-node').register;
register({ transpileOnly: true });

module.exports = require('../server/index.ts');
