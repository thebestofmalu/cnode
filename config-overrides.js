
//自动引入配置相关的antd.css样式
const { override, fixBabelImports,addWebpackPlugin } = require("customize-cra");
const AntdDayjsWebpackPlugin  =require('antd-dayjs-webpack-plugin');
  module.exports = override(
      fixBabelImports('import',{
          libraryName:'antd',
          libraryDirectory:'es',
          style:"css",
      }),
      addWebpackPlugin(new AntdDayjsWebpackPlugin())
  );

  