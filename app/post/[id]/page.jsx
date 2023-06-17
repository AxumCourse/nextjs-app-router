import React from "react";

export default async function PostDetail({ params: { id } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // 取消下行的注释，制造一个错误
  // const res = await fetch(`https://jsonplaceholder.typicode1.com/posts/${id}`);
  const post = await res.json();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
