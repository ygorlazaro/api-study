import { Injectable } from "@nestjs/common";
import { Student } from "./student.model";
import { students } from "src/data/Student.data";


@Injectable()
export class StudentService{
    getAll(): Student[]{
        return students;
    }

    getById(idStudent: number): Student | undefined{ //Brand?:
        return students.find(student => student.id === idStudent)
    }

    getByName(nameStudent: string): Student | undefined{
        return students.find(students => students.name === nameStudent)
    }
}