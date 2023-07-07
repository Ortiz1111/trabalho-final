/* eslint-disable prettier/prettier */
import { CreateContatoDto } from "../../dto/create-contato.dto";
import { UpdateContatoDto } from "../../dto/update-contato.dto";
import { Contato } from "../../entities/contato.entity";
import { ContatosRepository } from "../contatos.repository";

export class ContatosInMemoryRepository implements ContatosRepository {
    private database: Contato[] = [];
    create(data: CreateContatoDto): Promise<Contato> | Contato {
        const newContato = new Contato();
        Object.assign(newContato,{
            ...data,
        });
        this.database.push(newContato);
        return newContato
    }
    findAll(): Contato[] | Promise<Contato[]> {
        return this.database
      }
      findOne(id: string): Contato | Promise<Contato> {
        const user = this.database.find((user)=> user.id == id)
        return user
      }
      update(id: string, data: UpdateContatoDto): Contato | Promise<Contato> {
        const userIndex = this.database.findIndex((user)=> user.id == id)
        this.database[userIndex]={
          ...this.database[userIndex],
          ...data
        }
        return this.database[userIndex]
      }
      delete(id: string): void | Promise<void> {
        const userIndex = this.database.findIndex((user)=> user.id == id)
        this.database.splice(userIndex, 1)
      }
}