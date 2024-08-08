import React, {FC} from 'react';
import {IUser} from "@/models/user/IUser";

type IProps ={
    user:IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            userID:{user.id} -username:{user.username}
        </div>
    );
};

export default UserComponent;