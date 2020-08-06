import { Student } from "src/domains/student/student.model";

const student1 = new Student();
student1.id = 1
student1.name = "Aluno 1"

const student2 = new Student();
student2.id = 2
student2.name = "Aluno 2"

export const students = [student1, student2]