
$(function() {

	$('#get').on('click', function() {
		$.get('/get/getData/search', {}, function(data) {
			console.log(data)
		})
	})

	$('#post').on('click', function() {
		$.post('/post/postData', {a:123, b:2345, c:111}, function(data) {
			console.log(data)
		})
	})

	$('#setCookie').on('click', function() {
		$.post('/post/setCookie', '', function(data) {
			console.log(data)
		})
	})

	$('#delCookie').on('click', function() {
		$.post('/post/delCookie', '', function(data) {
			console.log(data)
		})
	})

	$('#setSession').on('click', function() {
		$.post('/post/setSession', '', function(data) {
			console.log(data)
		})
	})

	$('#getSession').on('click', function() {
		$.post('/post/getSession', '', function(data) {
			console.log(data)
		})
	})
})