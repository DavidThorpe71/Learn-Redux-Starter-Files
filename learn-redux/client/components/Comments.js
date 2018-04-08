import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map((comment, i) => <Comment key={i} comment={comment} {...this.props} />)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments;