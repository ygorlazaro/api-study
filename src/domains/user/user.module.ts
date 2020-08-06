import { Module } from "@nestjs/common";
import { BrandModule } from "../brand/Brand.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { StudentModule } from "../student/Student.module";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [BrandModule, StudentModule]
})
export class UserModule { }