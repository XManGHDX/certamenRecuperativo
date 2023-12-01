import { Controller, Get } from '@nestjs/common';
import { Farmacia } from './model/farmacia';
import { FarmaciasService } from './services/farmacias.service';

@Controller()
export class AppController {
  constructor(private readonly farmaciasService: FarmaciasService) {}

  @Get("/farmacias")
  getFarmacias(): Promise<Farmacia[]> {
    return this.farmaciasService.getFarmacias();
}
}
