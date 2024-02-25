import Image from "next/image";

const getData = async function (slug: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPost = async function ({ params }: { params: any }) {
  const { slug } = params;

  const postData = await getData(slug);

  console.log('postdata is ', postData)

  return (
    <>
      <p className="text-white">Blog Post Page</p>
      <h1 className="text-white">{postData.title}</h1>
      <p className="text-white">{postData.body}</p>
    </>
  );
};

export default BlogPost;
