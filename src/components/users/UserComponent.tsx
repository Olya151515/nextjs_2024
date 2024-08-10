import React, {FC} from 'react';
import {IUser} from "@/models/user/IUser";
import Link from "next/link";

type IProps ={
    user:IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            userID:{user.id} -username:{user.username} <Link href={
            {
                pathname: '/users/'+user.id,
                query:{data:JSON.stringify(user)}
            }
            }>details</Link>
        </div>
    );
};

export default UserComponent;