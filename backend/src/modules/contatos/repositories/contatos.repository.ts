/* eslint-disable prettier/prettier */
import { CreateContatoDto } from '../dto/create-contato.dto';
import { UpdateContatoDto } from '../dto/update-contato.dto';
import { Contato } from '../entities/contato.entity';

export abstract class ContatosRepository {
  abstract create(data: CreateContatoDto): Promise<Contato> | Contato;
  abstract findAll(): Promise<Contato[]> | Contato[];
  abstract findOne(id: string): Promise<Contato> | Contato;
  abstract update(id: string, data:UpdateContatoDto): Promise<Contato> | Contato;
  abstract delete(id: string): Promise<void> | void;
}
