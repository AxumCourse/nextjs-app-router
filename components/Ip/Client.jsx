"use client";

import React, { useEffect, useState } from "react";

export default function IPClient() {
  const [ip, setIp] = useState("正在获取");
  useEffect(() => {
    fetch("https://httpbin.org/ip")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.origin);
      })
      .catch((e) => {
        console.log(e);
        setIp(`获取失败，请重试`);
      });
  }, []);
  return <div>客户端组件获取到的IP：{ip}</div>;
}
