import { ProductsService } from "./products.service";
import { Products } from "./entities/product-entity";
import { createProductDTO } from "./dto/create-dto";
import { updateProductDTO } from "./dto/update-dto";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getAll(): Promise<Products[]>;
    create(createProductDTO: createProductDTO): Promise<any>;
    getOne(id: string): Promise<Products[]>;
    update(id: string, updateProductDTO: updateProductDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
