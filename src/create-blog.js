import React from 'react';

export default class CreateBlog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: Date.now(),
            title: '',
            autor: '',
            text: '',
            tags: [],
            url: '',
            status: 'active'
        };
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.onCreateBlog(e, this.state)}>
                <div>
                    <label htmlFor="title">Blog title</label>
                    <input type="text" name="title"/>
                </div>
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input type="text" name="autor"/>
                </div>
                <div>
                    <label htmlFor="text">Text of the blog post</label>
                    <input type="text" name="text"/>
                </div>
                <div>
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags"/>
                </div>
                <div>
                    <label htmlFor="url">Image url</label>
                    <input type="text" name="url"/>
                </div>
                <div>
                    <label htmlFor="title">Status</label>
                    <input type="radio" name="status" value="active" checked />
                    <input type="radio" name="status" value="inactive" />
                </div>
                <div>
                    <input type="submit" value="Create"/>
                </div>
            </form>
        );
    };
};