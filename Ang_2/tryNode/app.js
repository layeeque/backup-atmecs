var promise = new Promise(function (resolve, reject) {
    console.log("start")
    resolve(2)
})
promise
    .then(function first(a) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { console.log("1"); resolve(1) }, 5000);
        })
    })
    .then(function second(b) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { console.log("2"); resolve(true) }, 5000);
        })
    })
    .then(function third(c) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { console.log("3"); resolve(3) }, 5000);
        })
    })
    .then(function () {
        console.log("end")
    })










