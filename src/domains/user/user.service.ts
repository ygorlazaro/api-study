import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
const user1 = new User();
user1.id = 1;
user1.name = "Ygor";

const user2 = new User();
user2.id = 2;
user2.name = "Maurício"

const users: User[] = [
    user1,
    user2
]

@Injectable()
export class UserService {
    getUsers(): User[] {
        return users;
    }
}