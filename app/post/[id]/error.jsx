"use client"; // Error 必须是客户端组件

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // 打印日志
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>××博客详情×× 出错了</h2>
      <button
        onClick={
          // 重试
          () => reset()
        }
      >
        重试
      </button>
    </div>
  );
}
