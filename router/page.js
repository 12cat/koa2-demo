
/**
 * 配置子路由	页面
 */

const Router = require('koa-router')

let page = new Router()

page.get('/page1', async ctx => {
		ctx.body = 'Index Page1'
	})
	.get('/page2', async ctx => {
		ctx.type = 'html';
		ctx.body = '<a href="/">Index Page2</a>';
	})
	.get('/page3', async ctx => {
		let title = 'hello dull'
		await ctx.render('page', {title})
	})

module.exports = page