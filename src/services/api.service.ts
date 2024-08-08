import {IUser} from "@/models/user/IUser";
import {IPost} from "@/models/post/IPost";
import {IComment} from "@/models/comment/IComment";

const userService ={
    getAllUsers: async () =>{
     let users =  await fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json());

     return users;
    }
}
const postsService = {
    getAllPosts : async ():Promise<IPost[]> =>{
       return  await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
    }
}
const commentsService = {
    getAllComments: async ():Promise<IComment[]>  =>{
       return  await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json());
    }
}

export {
    userService,
    postsService,
    commentsService
}