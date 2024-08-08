import React from 'react';
import PostsComponent from "@/components/posts/PostsComponent";
import {postsService} from "@/services/api.service";

const Page = async () => {
    let posts = await postsService.getAllPosts();
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default Page;