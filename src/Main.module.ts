import { Module } from "@nestjs/common";
import { AppModule } from "./domains/app/app.module";
import { BrandModule } from "./domains/brand/Brand.module";
import { UserModule } from "./domains/user/user.module";

@Module({
    imports:[AppModule, UserModule, BrandModule]
})
export class MainModule {}