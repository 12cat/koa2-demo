
/**
 * 配置子路由	get请求
 */

const Router = require('koa-router')
const urllib = require('urllib')

let get = new Router()

get .get('/getData', async ctx => {
		let url = ctx.url
		let query = ctx.query
		let queryStr = ctx.querystring
		// let query = ctx.request.query
		// let queryStr = ctx.request.querystring

		ctx.body = {url, query, queryStr}
	})
	.get('/getData/:id/:name', async ctx => {
		let id = ctx.params.id
		let name = ctx.params.name
		ctx.body = {id, name}
	})
	.get('/getData/jump', async ctx => {
		ctx.redirect('/');
	})
	.get('/getData/search', async ctx => {
		let url = 'http://api.biyao.com/cms/home/show.do'
		let [pageSize, pageIndex, platform] = [10, 1, 2]

		const req = await urllib.request(
			`${url}?pageSize=${pageSize}&pageIndex=${pageIndex}&platform=${platform}`,
			{dataType:'json'}
		)
		ctx.body = req
	})

module.exports = get