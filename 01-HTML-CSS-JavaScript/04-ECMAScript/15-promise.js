// Promise 的含义

const promise = new Promise(function (resolve, reject) {
    // 如果异步操作成功
    if (true) {
        resolve(value);
    } else {
        reject(error);
    }
})
    .then()
    .catch()
    .finally()

// const p = Promise.all([p1, p2, p3]);
// const p = Promise.race([p1, p2, p3]);
// Promise.allSettled()
// Promise.any()
// Promise.resolve()
// Promise.reject()
// Promise.try()