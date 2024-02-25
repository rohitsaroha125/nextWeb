import Image from 'next/image'
import styles from './Blog.module.css'
import BlogData from '@/components/BlogData'
import dynamic from 'next/dynamic'

const BlogDataNoSSSR = dynamic(() => import("@/components/BlogData/index"), {ssr: false})

export default function Blog() {

  console.log("Blog Page check")

  return (
    <div className={styles.blogPage}>
      <h1>Blog Page</h1>
      <BlogDataNoSSSR />
    </div>
  )
}
