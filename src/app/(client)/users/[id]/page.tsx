import React from 'react';
import {postsService, userService} from "@/services/api.service";
import PostComponent from "@/components/posts/PostComponent";

const Page =async ({params:{id}}) => {
    let user = await userService.getUserById(id);
    let posts = await postsService.getPostByUserId(id);
    return (
        <div>
            id:{user.id} <br/>
            Name:{user.name} <br/>
            UserNAme:{user.username} <br/>
            Email:{user.email} <br/>
            Posts: <br/>
            {
                posts.map(post =><PostComponent post={post}/>)
            }
        </div>
    );
};

export default Page;