import { Brand } from "src/domains/brand/Brand.model";

const proenem = new Brand();
proenem.id = 1;
proenem.name = "ProENEM";

const promilitares = new Brand();
promilitares.id = 2;
promilitares.name = "ProMilitares";

export const brands = [proenem, promilitares];
