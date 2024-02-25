"use client"
import { useState, useEffect } from "react"

interface BlogPost{
    id: number,
    userId: number,
    title: string,
    body: string
}

const BlogData = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => setBlogData(data))
            .catch((err) => console.log('Error is ', err))
    }, [])

    console.log("Blog Card check")

    return(
        <div className="grid grid-cols-4">
            {
                blogData.map((blog: BlogPost) => {
                    return <div key={blog.id} className="p-4">
                        <h1 className="text-2xl font-bold text-white">{blog.title}</h1> 
                        <p className="text-white">{blog.body}</p>
                    </div>
                })
            }
        </div>
    )
}

export default BlogData