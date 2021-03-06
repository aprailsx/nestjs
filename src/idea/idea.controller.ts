import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { ideaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService){}

    @Get()
    showAllIdeas(){
        return this.ideaService.showAll();
    }

    @Post()
    createIdeas(@Body() data: ideaDTO){
        return this.ideaService.create(data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string){
        return this.ideaService.read(id);
    }

    @Put(':id')
    updateIdea(@Param('id') id: string, @Body() data: Partial<ideaDTO>){
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string){
        return this.ideaService.destroy(id);
    }
}
