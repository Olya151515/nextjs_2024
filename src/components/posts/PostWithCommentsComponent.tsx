import React, {FC} from 'react';
import {IPost} from "@/models/post/IPost";
import {IComment} from "@/models/comment/IComment";
import CommentComponent from "@/components/comments/CommentComponent";
type IProps ={
    post:IPost,
    comments:IComment[]
}

const PostWithCommentsComponent:FC<IProps> = ({comments,post}) => {
    return (
        <div>
            post id:{post.id} <br/>
            post title: {post.title} <br/>
            user id: {post.userId} <br/>
            body: {post.body} <br/>
            <br/>
            comments:
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default PostWithCommentsComponent;