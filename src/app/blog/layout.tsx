const BlogLayout = ({children}: {
    children: React.ReactNode;
  }) => {
    return(
        <div>
            <h2>This is blog layout</h2>
            {children}
        </div>
    )
}

export default BlogLayout