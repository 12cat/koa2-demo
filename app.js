'use strict'

const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const Static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const router = require('./router')

const app = new Koa()

// koa-bodyparser@3，用于获取post请求参数
app.use(bodyParser())

// 静态文件
app.use(Static(path.join(__dirname, './static')))
// 模版引擎
app.use(views(path.join(__dirname, './view'), {extension: 'pug'}))

// session
app.use(session({
	key: 'SESSION_ID',
	cookie: {
		maxAge: 24*360*1000,	// cookie有效时长
		expires: '',			// cookie失效时间
		path: '/',				// 写cookie所在的路径
		domain: 'localhost',	// 写cookie所在的域名
		httpOnly: false,		// 是否只用于http请求中获取
		overwrite: false		// 是否允许重写
	}
}))

// 路由配置
app .use(router.routes())
	.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('[demo] start-quick is starting at port 3000')
})