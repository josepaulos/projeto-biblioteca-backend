// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ReservationsModule } from './reservations/reservations.module'; 
import { User } from './users/user.entity';
import { Book } from './books/book.entity';
import { Reservation } from './reservations/reservation.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',
      database: 'biblioteca',
      entities: [User, Book, Reservation],
      synchronize: true,
    }),
    UsersModule,
    BooksModule,
    ReservationsModule, 
  ],
})
export class AppModule {}