// async 函数
// 含义
// 基本用法
// 语法
// async 函数的实现原理
// 与其他异步处理方法的比较
// 实例：按顺序完成异步操作
// 顶层 await

async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
}
