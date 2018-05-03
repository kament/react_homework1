import React from 'react'
import BlogPreview from './blog-preview'

export default ({blogs}) => (
    <ul>
        {blogs.map((blog, index) => (<BlogPreview header={blog.header} key={blog.id} />))}
    </ul>
);