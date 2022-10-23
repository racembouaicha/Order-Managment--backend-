import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class OrderDto {
 
  @IsString()
  @IsNotEmpty()
  public cards: Array<String>;


 

 

 
}