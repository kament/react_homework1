import React from 'react'
import BlogPreview from './blog-preview'

export default ({blogs}) => (
    <ul>
        {blogs.map((blog, index) => (<BlogPreview title={blog.title} key={blog.id} />))}
    </ul>
);