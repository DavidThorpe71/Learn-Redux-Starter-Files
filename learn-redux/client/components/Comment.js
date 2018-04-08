import React, { Component } from 'react';

class Comment extends Component {

    handleClick = (e) => {
        const { postId, index } = this.props.params;
        this.props.removeComment(postId, index);
    }

    render() {
        return (
            <div className="comment">
                <p>
                    <strong>{this.props.comment.user}</strong>
                    {this.props.comment.text}
                    <button
                        className="remove-comment"
                        onClick={this.handleClick}
                    >
                        &times;
                </button>
                </p>
            </div>
        )
    }
}

export default Comment;