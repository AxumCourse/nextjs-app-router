import Link from "next/link";

export default async function PostList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // 取消下行的注释，制造一个错误
  // const res = await fetch("https://jsonplaceholder.typicode1.com/posts");
  const postList = await res.json();

  return (
    <>
      <ul>
        {postList.map((p) => (
          <li key={p.id}>
            <Link href={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
