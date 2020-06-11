import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from './discord/discord.module';
import { CommandsModule } from './commands/commands.module';
import { TriggeredEventsModule } from './triggered-events/triggered-events.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { MemeHouse } from './models/meme-house.entity';
import { MemeLordPost } from './models/meme-lord-post.entity';
import { ShitPost } from './models/shit-post.entity';
import { SortingHatUser } from './models/sorting-hat-user.entity';
import { Point } from './models/point.entity';

@Module({
    imports: [
        ConfigModule.forRoot(),
        DiscordModule,
        CommandsModule,
        TriggeredEventsModule,
        UtilitiesModule,
        TypeOrmModule.forFeature([ShitPost, MemeLordPost, MemeHouse, Point, SortingHatUser]),
        TypeOrmModule.forRoot()
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: []
})
export class AppModule {}