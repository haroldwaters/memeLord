import * as Canvas from 'canvas';
import { Module, OnModuleInit } from '@nestjs/common';
import { PingService } from './ping/ping.service';
import { RollDiceService } from './roll-dice/roll-dice.service';
import { PutOnHatService } from './put-on-hat/put-on-hat.service';
import { ListHousesService } from './list-houses/list-houses.service';
import { DrakeService } from './drake/drake.service';
import { TheGangService } from './the-gang/the-gang.service';

@Module({
    providers: [PingService, RollDiceService, PutOnHatService, ListHousesService, DrakeService, TheGangService]
})
export class CommandsModule implements OnModuleInit {
    onModuleInit() {
        Canvas.registerFont('./fonts/textile-regular/Textile Regular.ttf', {
            family: 'Textile Regular'
        });
    }
}
