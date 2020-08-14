import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { Student } from "./student.model";
import { StudentService } from "./Student.service";

@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getAll(): Student[] {
        return this.studentService.getAll();
    }

    @Get(":id")
    getById(@Param("id") id: string): Student {
        const idStudent = parseInt(id, 10);
        const student = this.studentService.getById(idStudent);

        if (student === undefined) {
            throw new NotFoundException("Estudante não encontrado");
        }

        return student;
    }

    @Get(":name")
    getByName(@Param("name") name: string): Student {
        const nameStudent = "name";
        const student = this.studentService.getByName(nameStudent);

        if (student === undefined) {
            throw new NotFoundException("Nome inválido");
        }

        return student;
    }
}
