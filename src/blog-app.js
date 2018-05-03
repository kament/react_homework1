import React from 'react';
import BlogsList from './blogs-list';

export default class BlogApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                { id: 1, header: 'Post 1', text: 'Text 1', autor: 'Kamen' },
                { id: 2, header: 'Post 2', text: 'Text 2', autor: 'Kamen' },
                { id: 3, header: 'Post 3', text: 'Text 3', autor: 'Kamen' },
                { id: 4, header: 'Post 4', text: 'Text 4', autor: 'Kamen' },
                { id: 5, header: 'Post 5', text: 'Text 5', autor: 'Kamen' },
            ]
        };
    }

    render() {
        return (
            <div>
                <BlogsList blogs={this.state.blogs} />
            </div>
        );
    };
}
