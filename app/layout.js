import "./globals.css";

export const metadata = {
  title: "AXUM.RS - Next.js的App路由",
  description: "AXUM中文网为你提供Next.js的App路由教程",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
