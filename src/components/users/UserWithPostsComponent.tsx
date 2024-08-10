import React, {FC} from 'react';
import {IUser} from "@/models/user/IUser";
import {IPost} from "@/models/post/IPost";
import PostComponent from "@/components/posts/PostComponent";
type IProps = {
    user:IUser,
    posts:IPost[]
}

const UserWithPostsComponent:FC<IProps> = ({user,posts}) => {
    return (
        <div>
            Info about user: <br/>
            id:{user.id} <br/>
            Name:{user.name} <br/>
            UserNAme:{user.username} <br/>
            Email:{user.email} <br/>
            <br/>
            Posts: <br/>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserWithPostsComponent;