const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router')

let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
    ctx.body = 'get/'
})
// 子路由1
home.get('/api/', async ( ctx )=>{
    ctx.body = 'get/api/'
})

// 子路由2
let page = new Router()
page.post('/', async ( ctx )=>{
    ctx.body = 'post/'
})
page.post('/api/', async ( ctx )=>{
    ctx.body = 'post/api/'
})
// 装载所有子路由
let router = new Router()
router.use('/get', home.routes(), home.allowedMethods())
router.use('/post', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
//
//
// app.use( async ( ctx  ) => {
//     let url = ctx.url;
//     let require = ctx.request;
//     let req_query = require.query;
//     let req_querystring = require.querystring;
//
//     let ctx_query = ctx.query;
//     let ctx_querystring = ctx.querystring;
//
//     ctx.body = {
//         url,
//         req_query,
//         req_querystring,
//
//         ctx_query,
//         ctx_querystring
//     }
// } )
app.listen(3000);
console.log('服务器已启动 localhost:3000')
