import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  telefone: string;
  data: string;

  constructor() {
    this.id = randomUUID();
  }
}
