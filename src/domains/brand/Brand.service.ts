import { Injectable } from "@nestjs/common";
import { brands } from "src/data/Brand.data";
import { Brand } from "./Brand.model";

@Injectable()
export class BrandService { 
    getAll(): Brand[] { 
        return brands;
    }

    getById(idBrand: number): Brand | undefined { 
        return brands.find(brand => brand.id === idBrand);
    }
}