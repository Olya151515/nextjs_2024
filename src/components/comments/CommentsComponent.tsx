import React, {FC} from 'react';
import {IComment} from "@/models/comment/IComment";
import CommentComponent from "@/components/comments/CommentComponent";

type IProps ={
    comments:IComment[]
}

const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment =><CommentComponent comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;