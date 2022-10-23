import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CardDto {
 
  @IsString()
  @IsNotEmpty()
  public Productid: number;


  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public numbreProduct: number;

 

 
}