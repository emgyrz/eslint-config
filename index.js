
module.exports = {
  extends: [
    './rules/base',
    './rules/spacing'
  ].map(require.resolve)
}
