import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Tonality} from '../data/tonality';

@Injectable()
export class TonalityService {

    constructor(private httpClient: HttpClient)  {}

    getTonalities()  {
        const urlRequest = `${environment.apiUrl}/tonalities`;
        return this.httpClient.get<Tonality[]>(urlRequest);
    }

}
