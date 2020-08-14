import { Injectable } from "@nestjs/common";
import { students } from "src/data/Student.data";
import { Student } from "./student.model";


@Injectable()
export class StudentService {
    getAll(): Student[] {
        return students;
    }

    getById(idStudent?: number): Student | undefined { //Brand?:
        if (idStudent === undefined) {
            return undefined;
        }

        return students.find(student => student.id === idStudent)
    }

    getByName(nameStudent: string): Student | undefined {
        return students.find(students => students.name === nameStudent)
    }
}