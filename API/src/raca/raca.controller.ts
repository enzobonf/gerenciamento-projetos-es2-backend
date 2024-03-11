import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
} from '@nestjs/common';
import { RacaService } from './raca.service';
import { CreateRacaDto } from './dto/create-raca.dto';
import { UpdateRacaDto } from './dto/update-raca.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Raça')
@Controller('raca')
@UseGuards(AuthGuard())
export class RacaController {
	constructor(private readonly racaService: RacaService) {}

	/* @Post()
  create(@Body() createRacaDto: CreateRacaDto) {
    return this.racaService.create(createRacaDto);
  }*/

	@Get()
	findAll() {
		return this.racaService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.racaService.findOne(+id);
	}
	/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRacaDto: UpdateRacaDto) {
    return this.racaService.update(+id, updateRacaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.racaService.remove(+id);
  }*/
}
