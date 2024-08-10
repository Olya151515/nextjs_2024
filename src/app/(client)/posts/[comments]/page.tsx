import React from 'react';
import {commentsService} from "@/services/api.service";
import CommentComponent from "@/components/comments/CommentComponent";
import PostWithCommentsComponent from "@/components/posts/PostWithCommentsComponent";

const Page = async ({searchParams}): any => {
    let post = JSON.parse(searchParams.data);
    let comments = await commentsService.getCommentSByPostId(post.id);
    return (
        <div>
            <PostWithCommentsComponent post={post} comments={comments}/>

        </div>
    );
};

export default Page;