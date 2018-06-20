
/**
 * 配置子路由	post请求
 */

const Router = require('koa-router')

let post = new Router()

post.post('/postData', async ctx => {
		let postData = ctx.request.body
		ctx.body = {ctx, postData}
	})
	.post('/setCookie', async ctx => {
		ctx.cookies.set(
			'cid', 'hello cookie',
			{
				domain: 'localhost',	// 域名
				path: '/',				// 路径
				maxAge: 10*60*1000,		// 有效时长
				expires: new Date('2028-03-27'),	// 失效时间
				httpOnly: false,		// 是否只用于http请求
				overwrite: false		// 是否可重写
			}
		)
		ctx.body = 'cookie is ok'
	})
	.post('/delCookie', async ctx => {
		let cid = ctx.cookies.get('cid')
		ctx.cookies.set(
			'cid', '',
			{
				domain: 'localhost',	// 域名
				path: '/',				// 路径
				maxAge: 0,				// 有效时长
				expires: new Date()		// 失效时间
			}
		)
		ctx.body = `cid is ${cid}, cid is clear`
	})
	.post('/setSession', async ctx => {
		ctx.session = {user_id:Math.random().toString(36).substr(2), count:0}
		ctx.body = ctx.session
	})
	.post('/getSession', async ctx => {
		ctx.session.count++
		ctx.body = ctx.session
	})

module.exports = post