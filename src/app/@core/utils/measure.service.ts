import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Measure} from '../data/measure';

@Injectable()
export class MeasureService {

    constructor(private httpClient: HttpClient)  {}

    getMeasures()  {
        const urlRequest = `${environment.apiUrl}/measures`;
        return this.httpClient.get<Measure[]>(urlRequest);
    }

}
