import React from "react";
import Link from 'next/link'




export default function Routes({ post }) {
  return (
    <div className=" bg-yellow-300 h-screen w-full">
      routes
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>

      <div className=" border-4 w-20  bg-white">
        <Link   href="/">ATRAS</Link>
        </div>
    </div>
  );
}



export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    // Get the paths we want to pre-render based on posts
    //next pre renderiza cada id q le pasamos,crea los archivos
    const paths = posts.map(({ id }) => ({
      params: { id: `${id}` },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

