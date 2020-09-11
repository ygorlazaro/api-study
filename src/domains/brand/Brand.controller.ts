import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Brand } from "./Brand.model";
import { BrandService } from "./Brand.service";

@Controller("brand")
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @Get()
    getAll(): Brand[] {
        return this.brandService.getAll();
    }

    @Get(":id")
    getById(@Param("id") id: string): Brand {
        const idBrand = parseInt(id, 10);
        const brand = this.brandService.getById(idBrand);

        if (brand === undefined) {
            throw new NotFoundException("A marca não foi encontrada");
        }

        return brand;
    }
}
