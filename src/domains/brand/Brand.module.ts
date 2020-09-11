import { Module } from "@nestjs/common";
import { BrandController } from "./Brand.controller";
import { BrandService } from "./Brand.service";

@Module({
    controllers: [BrandController],
    providers: [BrandService],
    exports: [BrandService]
})
export class BrandModule {}
