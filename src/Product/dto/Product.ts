import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProductDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public name: string;

  // Gets only validated if it's part of the request's body
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public content: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public price: string;

 
}