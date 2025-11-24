import express from "express";
const app = express();

// 添加日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
async function ipinfo(ip) {
    let d = await fetch(`https://ipinfo.io/${ip||''}/json`)
    return await d.json()
}
// 添加根路由处理
app.get("/",async (req, res) => {
  let d=await ipinfo()
  res.json({ message: "Hello from Express on Node Functions!",d ,eo:req.eo});
});

// 导出处理函数
export default app;
