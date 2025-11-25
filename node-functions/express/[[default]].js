import express from "express";
const app = express();

// 添加日志中间件
app.use(async (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
async function ipinfo(ip) {
    let d = await fetch(`https://ipinfo.io/${ip||''}/json?token=c4d56ffce02403`)
    return await d.json()
}
// 添加根路由处理
app.get("/",async (req, res) => {
  res.json({ message: "Functions!"});
});

// 导出处理函数
export default app;
