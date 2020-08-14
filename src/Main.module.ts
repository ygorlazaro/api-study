import { Module } from "@nestjs/common";
import { AppModule } from "./domains/app/app.module";
import { BrandModule } from "./domains/brand/Brand.module";
import { UserModule } from "./domains/user/user.module";
import { StudentModule } from "./domains/student/Student.module";

@Module({
    imports: [AppModule, UserModule, BrandModule, StudentModule]
})
export class MainModule {}
