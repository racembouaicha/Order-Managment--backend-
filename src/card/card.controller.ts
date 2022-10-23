import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CardDto } from './dtos/Card';


@Controller('card')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @ApiTags('card')
    @Post('/card/create')
    create(@Body() createCardDto: CardDto) {
        return this.cardService.create(createCardDto);
      }
}
