import React from 'react';
import {userService} from "@/services/api.service";
import {IUser} from "@/models/user/IUser";

const Page = () => {
    let users = userService.getAllUsers();
    console.log(users);
    return (
        <div>
            {

            }
        </div>
    );
};

export default Page;