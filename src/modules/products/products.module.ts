import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./entities/product-entity";
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
