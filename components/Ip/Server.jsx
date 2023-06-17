export default async function IPServer() {
  let ip = "正在获取";
  try {
    const res = await fetch("https://httpbin.org/ip");
    const data = await res.json();
    ip = data.origin;
  } catch (e) {
    ip = "发生错误，请重试";
  }
  return <div>服务端组件获取到的IP：{ip}</div>;
}
