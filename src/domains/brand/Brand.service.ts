import { Injectable } from "@nestjs/common";
import { brands } from "src/data/Brand.data";
import { AbstractService } from "src/helpers/services/Abstract.service";
import { Brand } from "./Brand.model";

@Injectable()
export class BrandService extends AbstractService<Brand> {
    constructor() {
        super(brands);
    }
}
