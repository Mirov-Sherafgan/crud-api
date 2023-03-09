import { Products } from "./entities/product-entity";
import { Repository } from "typeorm";
export declare class ProductsService {
    private readonly productService;
    constructor(productService: Repository<Products>);
    getAll(): Promise<Products[]>;
    createProduct(product: any): Promise<any>;
    getById(id: string): Promise<Products[]>;
    updateProduct(id: any, product: any): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: any): Promise<import("typeorm").DeleteResult>;
}
