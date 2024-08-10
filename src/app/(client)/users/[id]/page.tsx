import React from 'react';
import {postsService} from "@/services/api.service";
import PostComponent from "@/components/posts/PostComponent";
import UserWithPostsComponent from "@/components/users/UserWithPostsComponent";

const Page = async ({searchParams}):any => {
    let user  = JSON.parse(searchParams.data);
    let posts = await postsService.getPostByUserId(user.id);
    return (
        <div>
            <UserWithPostsComponent user={user} posts={posts}/>
        </div>
    );
};

export default Page;