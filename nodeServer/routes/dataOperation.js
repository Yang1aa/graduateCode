const router = require('koa-router')()
const { query } = require('./../config/dbPool');
const { QUERY_SQL, INSERT_SQL, UPDATE_SQL, DELETE_SQL } = require('./../config/dbSQL');

//查询
// 测试时可简单创建 string: name, number: id, 自增主键id
router.get('/search', async ctx => {
    const data = await query(QUERY_SQL);
    ctx.body = {
        data,
    };
});

// 插入
router.post('/save', async ctx => {
    const res = ctx.request.body;
    const { username = '', realname = '', password = '' } = res;
    if (username && realname) {
        const queryData = {
            username,
            realname,
            password,
        };
        const data = await query(INSERT_SQL, queryData);
        if (data && data.status && data.status === 200) {
            ctx.body = {
                status: 200,
                msg: "操作成功",
            };
        } else {
            ctx.body = data;
        }
    }
});

//更新
router.post('/update', async ctx => {
    const res = ctx.request.body;
    const { username = '', id = 1 } = res;
    if (username && id) {
        const queryData = [username, id];
        const data = await query(UPDATE_SQL, queryData);
        if (data && data.status && data.status === 200) {
            ctx.body = {
                status: 200,
                msg: "操作成功",
            };
        } else {
            ctx.body = data;
        }
    }
});

//根据主键id 删除
router.del('/delete', async ctx => {
    const res = ctx.request.body;
    const { id } = res;
    if (id) {
        const queryData = [id];
        const data = await query(DELETE_SQL, queryData);
        if (data && data.status && data.status === 200) {
            ctx.body = {
                status: 200,
                msg: "操作成功",
            };
        } else {
            ctx.body = data;
        }
    }
});

module.exports = router;