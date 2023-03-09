import { ApiProperty } from "@nestjs/swagger";

export class createProductDTO {
  @ApiProperty({
    description: "Product name",
    example: "Apple",
  })
  name: string;

  @ApiProperty({
    description: "Product description",
    example: "Very delicious apple",
  })
  description: string;

  @ApiProperty({ default: 0, description: "Product price", example: "10" })
  price: number;
}
