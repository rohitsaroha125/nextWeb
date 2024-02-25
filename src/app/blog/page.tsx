import Image from 'next/image'
import styles from './Blog.module.css'
import BlogData from '@/components/BlogData'
import dynamic from 'next/dynamic'
import Link from 'next/link'

interface BlogPost{
  id: number,
  userId: number,
  title: string,
  body: string
}

const getData = async function(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {next: {revalidate: 3600}})
  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

const Blog = async function() {

  const posts = await getData()
  console.log('posts are ', posts.length)

  return (
    <div className={styles.blogPage}>
      <h1>Blog Page</h1>
      <div className="grid grid-cols-4">
            {
                posts.map((blog: BlogPost) => {
                    return <div key={blog.id} className="p-4">
                        <h1 className="text-2xl font-bold text-white">{blog.title}</h1> 
                        <p className="text-white">{blog.body}</p>
                        <Link href={`/blog/${blog.id}`} className='text-white underline mt-4'>Read More</Link>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Blog