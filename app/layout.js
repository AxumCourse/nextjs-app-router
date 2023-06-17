import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "AXUM.RS - Next.js的App路由",
  description: "AXUM中文网为你提供Next.js的App路由教程",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            background: "#ecfeff",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
          }}
        >
          <Link href="/">首页</Link>
          <Link href="/post">博客</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
