import { Injectable } from "@nestjs/common";
import { users } from "src/data/User.data";
import { IUserName } from "./IUserName";
import { User } from "./user.model";

@Injectable()
export class UserService {
    getUsers(): User[] {
        return users;
    }

    getById(idUser: number): User | undefined { 
        return users.find(user => user.id === idUser);
    }

    getNameById(idUser: number): IUserName | undefined { 
        const user = users.find(user => user.id === idUser);

        if (user === undefined){
            return undefined;
        }

        return {
            name: user.name
        }
    }
}