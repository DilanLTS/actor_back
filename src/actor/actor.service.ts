import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorService {
  constructor(
    @Inject('ACTOR_REPOSITORY')
    private actorRepository: Repository<Actor>

  ) { }

  async findAll(): Promise<Actor[]> {
    return this.actorRepository.find();
  }

  create(personType_dto: CreateActorDto): Promise<CreateActorDto> {
    return this.actorRepository.save(personType_dto);
  }

  findActorById(id: number) {
    return this.actorRepository.findOneBy({ actor_id: id })
  }

  async updateById(id: number, updateData: UpdateActorDto): Promise<Actor> {
    const actor = await this.actorRepository.findOneBy({ actor_id: id });
    if (!actor) {
      throw new NotFoundException('Actor not found');
    }
    const updatedActor = Object.assign(actor, updateData);
    return this.actorRepository.save(updatedActor);
  }

  async updateActorById(id: number, updateData: Partial<UpdateActorDto>): Promise<Actor> {
    const actor = await this.actorRepository.findOneBy({ actor_id: id });
    if (!actor) {
      throw new NotFoundException('Actor not found');
    }
    const updatedActor = Object.assign(actor, updateData);
    return this.actorRepository.save(updatedActor);
  }

  async deleteById(id: number): Promise<void> {
    const actor = await this.actorRepository.findOneBy({ actor_id: id });
    if (!actor) {
      throw new NotFoundException('Actor not found!');
    }
    await this.actorRepository.delete(id);
  }
}
