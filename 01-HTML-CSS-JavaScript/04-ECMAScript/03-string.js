// 字符串
// 1. 字符串 Unicode 表示法
console.log("\u0061") // a
// 2. 字符串的遍历器接口
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// 3. 直接输入 U+2028 和 U+2029

// 4. JSON.stringify() 的改造

// 5. 模板字符串

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
// 它可以当作普通字符串使用，
// 也可以用来定义多行字符串，
// 或者在字符串中嵌入变量。

// 6. 实例：模板编译

let template = `<ul>
    <% for(let i=0;i<data.supplies.length;i++){ %>
        <li><%= data.supplies[i] %></li>
    <% } %>
</ul>`

// 7. 标签模板

// 8. 模板字符串的限制