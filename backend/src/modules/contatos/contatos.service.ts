import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { ContatosRepository } from './repositories/contatos.repository';

@Injectable()
export class ContatosService {
  constructor(private contatoRepository: ContatosRepository) {}
  async create(createContatoDto: CreateContatoDto) {
    const contato = await this.contatoRepository.create(createContatoDto);
    return contato;
  }

  async findAll() {
    const contato = await this.contatoRepository.findAll();
    return contato;
  }

  async findOne(id: string) {
    const contato = await this.contatoRepository.findOne(id);
    return contato;
  }

  async update(id: string, updateContatoDto: UpdateContatoDto) {
    const contato = await this.contatoRepository.update(id, updateContatoDto);
    return contato;
  }

  async remove(id: string) {
    await this.contatoRepository.delete(id);
    return;
  }
}
