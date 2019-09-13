module.exports = {
  scopes: ['middlewares', 'config', 'git', 'ui'],

  members: ['Idan Loo <im@siwei.lu>', 'Kommit Tool <kommit@siwei.lu>'],

  hooks: {
    async before(ctx, next) {
      console.log(ctx)
      return next()
    },
  },
}