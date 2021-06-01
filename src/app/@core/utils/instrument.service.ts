import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Instrumento} from '../data/instrumento';

@Injectable()
export class InstrumentService {

    constructor(private httpClient: HttpClient)  {}

    getInstruments()  {
        const urlRequest = `${environment.apiUrl}/instruments`;
        return this.httpClient.get<Instrumento[]>(urlRequest);
    }

}
