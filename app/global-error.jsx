"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>[global-error] 出错啦！</h2>
        <div>{error.toString()}</div>
        <button onClick={() => reset()}>重试</button>
      </body>
    </html>
  );
}
