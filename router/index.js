
/**
 * 整合所有子路由
 * 配置一级路由
 */

const Router = require('koa-router')
const home = require('./home')
const page = require('./page')
const post = require('./post')
const get = require('./get')

let router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/post', post.routes(), post.allowedMethods())
router.use('/get', get.routes(), get.allowedMethods())

module.exports = router