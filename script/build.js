const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const copy = require('copy')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
  // 构建全量压缩包
  let building = ora('building...')
  building.start()
  rm(path.resolve(rootPath, 'build', `${pkg.name}.min.js`), err => {
    if (err) throw (err)
    webpack(config, function (err, stats) {
      if (err) throw (err)
      building.stop()
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
      resolve()
      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
})