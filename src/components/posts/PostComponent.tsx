import React, {FC} from 'react';
import {IPost} from "@/models/post/IPost";
import Link from "next/link";
import {stringify} from "node:querystring";

type IProps ={
    post:IPost
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            PostID:{post.id} <br/>
            Title:{post.title}  
            <Link href={
                {
                    pathname: '/posts/comments',
                    query:{data:JSON.stringify(post)}
                }
                }>comments</Link>
            <hr/>
        </div>
    );
};

export default PostComponent;