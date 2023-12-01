import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Farmacia } from 'src/model/farmacia';

@Injectable()
export class FarmaciasService {
    constructor(private readonly configService:ConfigService){}
    async getFarmacias(): Promise<Farmacia[]>{
        let url:string = this.configService.get<string>("ENDPOINT_FARMACIAS");
     
        let res = await axios.get(url);

        let farmacias= res.data;


        return farmacias.map(p=>{
            return {nombreFarmacia: p.local_nombre, comuna: p.comuna_nombre, horaApertura: p.funcionamiento_hora_apertura, horaCierre: p.funcionamiento_hora_cierre, telefono:p.local_telefono};
        })

    }
}

