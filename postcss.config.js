module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      // 根节点的 fontSize 值
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root']
    }
  }
}
