import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Products } from "./entities/product-entity";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { createProductDTO } from "./dto/create-dto";
import { updateProductDTO } from "./dto/update-dto";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll(): Promise<Products[]> {
    return this.productService.getAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: "The product has been successfully created.",
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDTO: createProductDTO) {
    return this.productService.createProduct(createProductDTO);
  }

  @Get(":id")
  getOne(@Param("id") id: string) {
    console.log(id);
    return this.productService.getById(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateProductDTO: updateProductDTO) {
    return this.productService.updateProduct(id, updateProductDTO);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.productService.deleteProduct(id);
  }
}
