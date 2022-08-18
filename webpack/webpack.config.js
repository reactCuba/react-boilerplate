<<<<<<< HEAD
const {merge} = require('webpack-merge');
const commonconfig = require('./webpack.common.js')
module.exports = (envVars) => {
  const {env} = envVars;
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonconfig, envConfig)
  return config
}
