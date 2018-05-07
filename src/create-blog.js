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
            status: 'active',
            addTagValue: ''
        };
    }

    handleStatusChange = (changed) => {
        this.setState({
            status: changed.target.value
        })
    };

    handleTitleChange = (changed) => {
        this.setState({
            title: changed.target.value
        })
    }

    handleAutorChange = (changed) => {
        this.setState({
            autor: changed.target.value
        })
    }

    handleTextChange = (changed) => {
        this.setState({
            text: changed.target.value
        })
    }

    onAddTagButtonClicked = (changed) => {
        let tag = changed.target.value;
        let tags = this.state.tags.map(x => x);

        if (tag.length > 1 && tag[tag.length - 1] === '#'){
            tags.push(this.state.addTagValue);
            tag = '';
        }
        
        this.setState({
            tags: tags,
            addTagValue: tag
        })
    }

    handleUrlChange = (changed) => {
        this.setState({
            url: changed.target.value
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.onCreateBlog(e, this.state)}>
                <div>
                    <label htmlFor="title">Blog title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input type="text" name="autor" value={this.state.autor} onChange={this.handleAutorChange} />
                </div>
                <div>
                    <label htmlFor="text">Text of the blog post</label>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleTextChange} />
                </div>
                <div>
                    <label htmlFor="tags">Tags</label>
                    <span>{this.state.tags.map((t) => '#' + t + ' ')}</span>
                    <input type="text" name="addTagValue" value={this.state.addTagValue} onChange={this.onAddTagButtonClicked} />
                </div>
                <div>
                    <label htmlFor="url">Image url</label>
                    <input type="text" name="url" value={this.state.url} onChange={this.handleUrlChange} />
                </div>
                <div>
                    <label htmlFor="title">Status</label>
                    <input type="radio" name="status" value="active" checked={this.state.status === 'active'} onChange={this.handleStatusChange} />
                    <input type="radio" name="status" value="inactive" checked={this.state.status === 'inactive'} onChange={this.handleStatusChange} />
                </div>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        );
    };
};