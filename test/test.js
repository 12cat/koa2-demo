'use static';

function takeLongTime(n) {
	return new Promise(resolve => {
		setTimeout(() => resolve(n + 200), n);
	});
}

function step1(n) {
	console.log(`step1 with ${n}`);
	return takeLongTime(n);
}

function step2(n) {
	console.log(`step2 with ${n}`);
	return takeLongTime(n);
}

function step3(n) {
	console.log(`step3 with ${n}`);
	return takeLongTime(n);
}

async function run() {
	console.log("running");
	const time1 = 300;
	const time2 = await step1(time1);
	const time3 = await step2(time2);
	const result = await step3(time3);
	console.log(`result is ${result}`);
	console.log("runed");
}

run();

// function run() {
// 	console.log("running");
// 	const time1 = 300;
// 	step1(time1)
// 		.then(time2 => step2(time2))
// 		.then(time3 => step3(time3))
// 		.then(result => {
// 			console.log(`result is ${result}`);
// 			console.log("runed");
// 		});
// }

// run();