//import { useState } from "react";
//let react = require('react');
var useState = React.useState;

const data = [
    { Id: 1, Author: 'Daniel Lo Nigro', Text: 'Hello ReactJS.NET World!' },
    { Id: 2, Author: 'Pete Hunt', Text: 'This is one comment' },
    { Id: 3, Author: 'Jordan Walke', Text: 'This is *another* comment' },
];

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                {this.props.children}
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                {
                    this.props.data.map(comment => (
                        <Comment author={comment.Author} key={comment.Id}>
                            {comment.Text}
                        </Comment>
                    ))
                }
            </div>
        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <>
                <input type="text" value={this.props.newComment} onChange={e => this.props.setNewComment(e.target.value)} />
                <input type="text" value={this.props.newAuthor} onChange={e => this.props.setNewAuthor(e.target.value)}  />
                <button onClick={this.props.handleComments}></button>
            </>
        );
    }
}

function CommentBox(props) {
    let [comments, setComments] = useState(props.data);
    let [newComment, setNewComment] = useState("");
    let [newAuthor, setNewAuthor] = useState("");

    let handleComments = (e) => {
        setComments([...comments, { Id: 1, Author: newAuthor, Text: newComment }]);
        console.log(comments);
    };

    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={comments} />
            <CommentForm newComment={newComment} setNewComment={setNewComment} newAuthor={newAuthor} setNewAuthor={setNewAuthor} handleComments={handleComments} />
        </div>
    );
}

ReactDOM.render(<CommentBox data={data}/>, document.getElementById('content'));