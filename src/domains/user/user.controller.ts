import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Brand } from "../brand/Brand.model";
import { BrandService } from "../brand/Brand.service";
import { Student } from "../student/student.model";
import { StudentService } from "../student/Student.service";
import { User } from "./user.model";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly brandService: BrandService,
        private readonly studentService: StudentService
    ) {

    }

    @Get()
    getAll(): User[] {
        return this.userService.getUsers();
    }

    @Get(':id')
    getById(@Param('id') id: string): User {
        const idUser = parseInt(id, 10);
        const user = this.userService.getById(idUser);

        if (user === undefined) {
            throw new NotFoundException("O usuário informado não existe");
        }

        return user;
    }

    @Get(':id/brand')
    getNameById(@Param('id') id: string): Brand {
        const idUser = parseInt(id, 10);
        const user = this.userService.getById(idUser);

        if (user === undefined) {
            throw new NotFoundException("O usuário informado não existe");
        }

        const brand = this.brandService.getById(user.brand?.id)

        if (brand === undefined) {
            throw new NotFoundException("O usuário não tem uma marca informada");
        }

        return brand;
    }

    @Get(':id/Student')
    getStudentById(@Param('id') id: string): Student {
        // const idUser = parseInt(id,10);
        const user = this.getById(id);

        console.log(typeof user.student?.id)

        const student = this.studentService.getById(user.student?.id)

        if (student === undefined) {
            throw new NotFoundException("Este usuário não é um estudante.")
        }

        return student;
    }
}