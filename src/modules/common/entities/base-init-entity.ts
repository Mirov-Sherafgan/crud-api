import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export class BaseUnit {
  // -------------------------------------------------------------------------
  // Columns
  // -------------------------------------------------------------------------

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ type: "timestamptz" })
  createdDate: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updatedDate: Date;
}
