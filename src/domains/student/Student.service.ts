import { Injectable } from "@nestjs/common";
import { students } from "src/data/Student.data";
import { AbstractService } from "src/helpers/services/Abstract.service";
import { Student } from "./student.model";

@Injectable()
export class StudentService extends AbstractService<Student> {
    constructor() {
        super(students);

        // super.data = students;
    }

    getByName(nameStudent: string): Student | undefined {
        return students.find(students => students.name === nameStudent)
    }
}