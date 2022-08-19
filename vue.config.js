const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 写了这句，我们可以这样写代码 import Vue from 'vue'
        'vue$': 'vue/dist/vue.runtime.esm.js',
        // 写了这句，我们可以这样写代码 import api from '@/api/api.js'，省去到处找路径定位到src的麻烦
        '@': path.resolve(__dirname, './examples'),
        'UI': path.resolve(__dirname, './packages/components'),
      },
      // 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
      // 我们在引入文件时可以这样写 import api from '@/api/api'。
      extensions: ['*', '.js', '.vue'],
    }
  }
})
