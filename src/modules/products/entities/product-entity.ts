import { BaseUnit } from "../../common/entities/base-init-entity";
import { Column, Entity } from "typeorm";

@Entity("product")
export class Products extends BaseUnit {
  @Column({ unique: true, length: 60 })
  name: string;

  @Column({ default: 0, type: "integer" })
  price: number;

  @Column({ default: "", length: 512 })
  description?: string;

}