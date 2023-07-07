import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ContatosModule } from './modules/contatos/contatos.module';

@Module({
  imports: [UsersModule, ContatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
