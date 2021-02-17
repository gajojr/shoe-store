import React from 'react';
import axios from 'axios';

import { Wrapper, CommentsComponent, Comment, GiConverseShoeStyled } from './CommentsSection.styles';

interface CommentType {
    creator: String
    body: String
}
class CommentsSection extends React.Component <any, any> {
    constructor(props: Object) {
        super(props);
        this.state = {comments: [], creators: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/comments')
            .then(response => {
                const comments: String[] = [];
                const creators: String[] = [];
                response.data.comments.map((comment: CommentType) => {
                    comments.push(comment.body);
                    creators.push(comment.creator);
                });
                this.setState({ comments, creators })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Wrapper>
                <CommentsComponent>
                    {this.state.comments.map((comment: string, idx: number) => {
                        return <Comment key={idx}>
                            {comment}
                            <br/>
                            - {this.state.creators[idx].substring(0, this.state.creators[idx].indexOf('@'))}
                            <GiConverseShoeStyled size={40}/>
                            </Comment> 
                    })}
                </CommentsComponent>
            </Wrapper>
        )
    }
}

export default CommentsSection;