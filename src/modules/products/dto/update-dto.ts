import { ApiProperty } from "@nestjs/swagger";

export class updateProductDTO {
  @ApiProperty({
    description: "updated product name",
    example: "Banana",
  })
  name: string;

  @ApiProperty({
    description: "updated product description",
    example: "The biggest banana in the Africa",
  })
  description: string;

  @ApiProperty({ default: 0, description: "updated product price", example: "25" })
  price: number;

}