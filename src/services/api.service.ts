import {IUser} from "@/models/user/IUser";
import {IPost} from "@/models/post/IPost";
import {IComment} from "@/models/comment/IComment";

const userService ={
    getAllUsers: async ():Promise<IUser[]>  =>{
     let users:IUser[] =  await fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json());
     return users;
    },

}
const postsService = {
    getAllPosts : async ():Promise<IPost[]> =>{
       let posts:IPost[] =  await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
       return posts;
    },
    getPostByUserId :async (userId:string):Promise<IPost[]> =>{
        let posts:IPost[] =  await fetch('https://jsonplaceholder.typicode.com/users/'+userId+'/posts')
            .then(value => value.json());
        return posts;
    }
}
const commentsService = {
    getAllComments: async ():Promise<IComment[]>  =>{
       let comments:IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json());
       return comments
    },
    getCommentSByPostId:async (postId:string):Promise<IComment[]> =>{
        let comments:IComment[] = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments')
            .then(value => value.json());
        return comments;
    }

}

export {
    userService,
    postsService,
    commentsService
}