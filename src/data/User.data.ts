import { Brand } from "src/domains/brand/Brand.model";
import { User } from "src/domains/user/user.model";
import { Student } from "src/domains/student/student.model";

const proenem = new Brand();
proenem.id = 1;
proenem.name = "ProENEM";

const promilitares = new Brand();
promilitares.id = 2;
promilitares.name = "ProMilitares";

const student1 = new Student();
student1.id = 1
student1.name = "Aluno 1"

const student2 = new Student();
student2.id = 2
student2.name = "Aluno 2"

const user1 = new User();
user1.id = 1;
user1.name = "Ygor";
user1.brand = proenem;
user1.student = student1

const user2 = new User();
user2.id = 2;
user2.name = "Maurício"
user2.brand = promilitares;
user2.student = student2


const user3 = new User();
user3.id = 3;
user3.name = "Sem Nada"

export const users: User[] = [
    user1,
    user2,
    user3
]
