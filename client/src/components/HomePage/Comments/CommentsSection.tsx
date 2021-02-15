import React from 'react';

import { CommentsComponent, Comment } from './CommentsSection.styles';

const arr = new Array(4).fill('Some random comment');

class CommentsSection extends React.Component {
    render() {
        return (
            <CommentsComponent>
                {arr.map(comment => {
                    return <Comment>{comment}</Comment> 
                })}
            </CommentsComponent>
        )
    }
}

export default CommentsSection;