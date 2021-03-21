const path = require('path')
const WebpackDeployPlugin = require('webpack-deploy-plugin')
const WebpackAliyunOSS = require('webpack-aliyun-oss')
const OUTPUT_DIR = 'dist'
const argv = process.argv

const isPublishNormal = process.env.NODE_ENV === 'production' && argv.includes('--publish') && !argv.includes('--oss')
const isPublishOSS = process.env.NODE_ENV === 'production' && argv.includes('--publish') && argv.includes('--oss')
const isBuildNormal = process.env.NODE_ENV === 'production' && !argv.includes('--publish') && !argv.includes('--oss')
const isBuildOSS = process.env.NODE_ENV === 'production' && !argv.includes('--publish') && argv.includes('--oss')

function createWebpackPlugins() {
  let basePlugins = []
  if (isPublishOSS) {
    // 发布到oss的策略
    basePlugins.push(
      new WebpackDeployPlugin({
        assetsPath: path.resolve(`./${ OUTPUT_DIR }/index.html`),
        host: process.env.VUE_APP_REMOTE_HOST,
        port: process.env.VUE_APP_REMOTE_PORT,
        username: process.env.VUE_APP_REMOTE_USER,
        password: process.env.VUE_APP_REMOTE_PASS,
        targetPath: process.env.VUE_APP_REMOTE_PATH
      }),
      new WebpackAliyunOSS({
        from: [
          `./${ OUTPUT_DIR }/**`,
          `!./${ OUTPUT_DIR }/**/*.html`
        ],
        dist: process.env.VUE_APP_OSS_PATH,
        region: process.env.VUE_APP_OSS_REGION,
        accessKeyId: process.env.VUE_APP_OSS_KEY,
        accessKeySecret: process.env.VUE_APP_OSS_SECRET,
        bucket: process.env.VUE_APP_OSS_BUCKET,
        setOssPath(filePath) {
          return filePath.substring(filePath.indexOf(OUTPUT_DIR) + OUTPUT_DIR.length)
        }
      })
    )
  } else if (isPublishNormal) {
    // 发布到企业服务器的策略
    basePlugins.push(
      new WebpackDeployPlugin({
        assetsPath: path.resolve(`./${ OUTPUT_DIR }/`),
        host: process.env.VUE_APP_REMOTE_HOST,
        port: process.env.VUE_APP_REMOTE_PORT,
        username: process.env.VUE_APP_REMOTE_USER,
        password: process.env.VUE_APP_REMOTE_PASS,
        targetPath: process.env.VUE_APP_REMOTE_PATH
      })
    )
  }
  return basePlugins
}

function createWebpackPublicPath() {
  if (isPublishOSS || isBuildOSS) {
    //发布到oss和普通构建oss的策略
    const { length } = process.env.VUE_APP_OSS_PATH
    const ossDir = process.env.VUE_APP_OSS_PATH.charAt(length - 1) === '/'
      ? process.env.VUE_APP_OSS_PATH.substring(0, length - 1)
      : process.env.VUE_APP_OSS_PATH
    return `https://${ process.env.VUE_APP_OSS_BUCKET }.${ process.env.VUE_APP_OSS_REGION }.aliyuncs.com${ ossDir }`
  } else {
    //其他与oss无关的策略
    return './'
  }
}

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: OUTPUT_DIR,
  publicPath: createWebpackPublicPath(),
  transpileDependencies: [
    'lbd-wx-sdk',
    'lbd-oss-sdk',
  ],
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    allowedHosts: [
      process.env.VUE_APP_DOMAIN
    ],
    overlay: {
      warnings: false,
      errors: true
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/less/variable.less')
      ]
    }
  },
  configureWebpack: {
    name: process.env.VUE_APP_NAME,
    plugins: createWebpackPlugins()
  }
}
