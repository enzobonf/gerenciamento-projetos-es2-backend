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
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Gênero')
@Controller('genero')
@UseGuards(AuthGuard())
export class GeneroController {
	constructor(private readonly generoService: GeneroService) {}
	/*
  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }*/

	@Get()
	findAll() {
		return this.generoService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.generoService.findOne(+id);
	}
	/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.remove(+id);
  }*/
}
