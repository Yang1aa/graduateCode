const router = require('koa-router')()
const { query } = require('../config/dbPool');
const { QUERY_SQL, INSERT_SQL, UPDATE_SQL, DELETE_SQL, QUERY_SQL_INVENTORY } = require('../config/dbSQL');

router.get('/inventory', async (ctx, next) => {
  const data = await query(QUERY_SQL_INVENTORY);
  ctx.body = data
})

router.get('/stores', async (ctx, next) => {
  const data = await query(QUERY_SQL);
  ctx.body = data
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
