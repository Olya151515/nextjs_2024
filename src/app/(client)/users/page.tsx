import React from 'react';
import {userService} from "@/services/api.service";
import {IUser} from "@/models/user/IUser";
import UsersComponent from "@/components/users/UsersComponent";

const Page = async () => {
    let users = await userService.getAllUsers();
    console.log(users);
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default Page;