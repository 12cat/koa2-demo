/**
 * es6 promise
 */
new Promise(function (resolve, reject) {
	var timeOut = Math.random() *2
	console.log('start new Promise()', ', timeOut: '+ timeOut)
	setTimeout(function () {
		if (timeOut < 1) {
			resolve('ok')
		} else {
			reject('error')
		}
	}, timeOut * 1000)
}).then(function (reason) {
	console.log('then:'+ reason)
}).catch(function (reason) {
	console.log('catch:'+ reason)
})


/**
 * obj1.then(obj2).then(obj3).then(obj4).catch(errFun)
 */
function action1 (num) {
	return new Promise(function (resolve, reject) {
		console.log('action1:', num +'x'+ num)
		setTimeout(reject, 500, num*num)
	})
}
function action2 (num) {
	return new Promise(function (resolve, reject) {
		console.log('action2:', num +'+'+ num)
		setTimeout(resolve, 500, num+num)
	})
}
var p = new Promise(function (resolve, reject) {
	console.log('start……')
	resolve(123)
})
p.then(action1)
	.then(action2)
	.then(function (result) {
		console.log('num:', result)
	})
	.catch(function (result) {
		console.log('error')
	})


/**
 * Promise.all()
 * 同时获取两个结果
 */
var p1 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
	console.log(results); // 获得一个Array: ['P1', 'P2']
});


/**
 * Promise.race()
 * 获取最先返回的结果（包括resolve, reject）
 */
var p1 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
	console.log(result); // 'P1'
});