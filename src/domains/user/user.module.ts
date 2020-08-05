import { Module } from "@nestjs/common";
import { BrandModule } from "../brand/Brand.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [BrandModule]
})
export class UserModule { }