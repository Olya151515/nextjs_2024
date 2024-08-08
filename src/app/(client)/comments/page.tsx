import React from 'react';
import {commentsService} from "@/services/api.service";
import CommentsComponent from "@/components/comments/CommentsComponent";

const Page = async () => {
    let comments = await commentsService.getAllComments();
    return (
        <div>
           <CommentsComponent comments={comments}/>
        </div>
    );
};

export default Page;