module.exports = {
    babelrc: false, // 不要使用任何外部的.babelrc配置文件，从而避免配置冲突
    ignore: ['/node_modules/'], // 指定了 Babel 应该忽略的文件路径
    presets: [
        ['@babel/preset-env', // 根据你的目标环境（比如特定版本的浏览器或Node.js）自动决定哪些 JavaScript 新特性需要被转换，哪些可以保留。
            {
                loose: true, // 启用“宽松”模式，生成的代码会更简洁、更快
                modules: false  //阻止 Babel 将 ES6 模块语法转换为其他模块类型（如 CommonJS），这里会交由 Rollup 来处理
            }
        ]
    ],
    plugins: [
        [
            '@babel/plugin-transform-react-jsx', // 转换 JSX 语法（通常用于 React）
            {
                runtime: 'automatic', // 自动导入必要的 JSX 转换而不需要手动导入 React
            },
        ],
        [
            '@babel/plugin-transform-typescript', // 添加了对 TypeScript 的支持
            {
                isTSX: true, //指定插件应该支持 TSX 文件
            }],
    ],
}

