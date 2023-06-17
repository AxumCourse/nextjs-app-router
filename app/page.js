import { IPClient, IPServer } from "@/components/Ip";
import Link from "next/link";

export default function Home({ searchParams }) {
  const isClientStr = searchParams.client || "";
  const isClient = isClientStr === "1";
  // 取消下一行注释，制造一个错误
  // throw "哎呀，搞出错了";
  return (
    <>
      {isClient ? <IPClient /> : <IPServer />}

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">服务端组件</Link>
        <Link href="/?client=1">客户端组件</Link>
      </div>
    </>
  );
}
