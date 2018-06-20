
/**
 * 配置子路由
 */

const Router = require('koa-router')

let get = new Router()

get.get('/', async ctx => {
		let title = 'hello dull'
		await ctx.render('index', {title})
	})

module.exports = get