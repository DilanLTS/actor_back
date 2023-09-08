import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.actorService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findActorById(@Param('id',ParseIntPipe) id:number){
      return this.actorService.findActorById(id)
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateActorById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateActorDto>) {
      return this.actorService.updateActorById(id, updateData);
  }

  @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.actorService.deleteById(id);
    }
}
