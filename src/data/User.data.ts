import { Brand } from "src/domains/brand/Brand.model";
import { User } from "src/domains/user/user.model";

const proenem = new Brand();
proenem.id = 1;
proenem.name = "ProENEM";

const promilitares = new Brand();
promilitares.id = 2;
promilitares.name = "ProMilitares";

const user1 = new User();
user1.id = 1;
user1.name = "Ygor";
user1.brand = proenem;

const user2 = new User();
user2.id = 2;
user2.name = "Maurício"
user2.brand = promilitares;


const user3 = new User();
user3.id = 3;
user3.name = "Sem Brand"

export const users: User[] = [
    user1,
    user2,
    user3
]
