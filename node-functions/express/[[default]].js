import express from "express";
const app = express();

// 添加日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
async function ipinfo(ip) {
    let d = await fetch(`https://ipinfo.io/${ip||''}/json?token=c4d56ffce02403`)
    return await d.json()
}
// 添加根路由处理
app.get("/",async (req, res) => {
  let ip=/\d+\.\d+\.\d+\.\d+/.exec(req.url)
  if(!ip)ip=/[\w:]{8,}/.exec(req.url)
  if(ip)ip=ip[0]
  else ip=req.ip
  let d=await ipinfo(ip)
  res.json({ message: "Hello from Express on Node Functions!",ip,d ,headers:req.headers});
});

// 导出处理函数
export default app;
