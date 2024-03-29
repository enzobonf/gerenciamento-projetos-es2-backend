import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
	Put,
	UseGuards,
} from '@nestjs/common';
import { TimeService } from './time.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Time')
@Controller('time')
@UseGuards(AuthGuard())
@UsePipes(ValidationPipe)
export class TimeController {
	constructor(private readonly timeService: TimeService) {}

	@Post()
	create(@Body() createTimeDto: CreateTimeDto) {
		return this.timeService.create(createTimeDto);
	}

	@Get()
	findAll() {
		return this.timeService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.timeService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTimeDto: UpdateTimeDto) {
		return this.timeService.update(+id, updateTimeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.timeService.remove(+id);
	}
}
