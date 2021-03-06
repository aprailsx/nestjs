import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { Repository } from 'typeorm';
import { ideaDTO } from './idea.dto';

@Injectable()
export class IdeaService {

    constructor(
        @InjectRepository(IdeaEntity) 
        private ideaRepository: Repository<IdeaEntity>
    ){}

    async showAll(){
        return await this.ideaRepository.find();
    }

    async create(data: ideaDTO){
        const idea = await this.ideaRepository.create(data);
        await this.ideaRepository.save(data);
        return idea;
    }

    async read(id: string){
        return await this.ideaRepository.findOne({where: {id} });
    }

    async update(id: string, data: Partial<ideaDTO>){
        await this.ideaRepository.update({id}, data);
        return await this.ideaRepository.findOne({id});
    }

    async destroy(id: string){
        await this.ideaRepository.delete({id});
        return {deleted: true};
    }


}
