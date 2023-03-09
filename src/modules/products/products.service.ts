import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./entities/product-entity";
import { Repository } from "typeorm";
import { ApiTags } from "@nestjs/swagger";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productService: Repository<Products>,
  ) {
  }

  getAll() {
    return this.productService.find();
  }

  createProduct(product: any) {
    return this.productService.save(product);
  }

  getById(id: string) {
    return this.productService.findBy({ id });
  }

  updateProduct(id, product) {
    return this.productService.update(id, product);
  }

  deleteProduct(id) {
    return this.productService.delete(id);
  }
}
