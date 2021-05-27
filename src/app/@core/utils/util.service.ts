import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Instrumento } from '../data/instrumento';
import {Measure} from '../data/measure';
import {Tonality} from '../data/tonality';

@Injectable()
export class UtilService {

  constructor(private httpClient: HttpClient)  {}

  getAvailableInstruments()  {
      const urlRequest = `${environment.apiUrl}/util/available-instruments`;
      return this.httpClient.get<Instrumento[]>(urlRequest);
  }

  getAvailableMeasures()  {
    const urlRequest = `${environment.apiUrl}/util/available-measures`;
    return this.httpClient.get<Measure[]>(urlRequest);
  }

  getAvailableTonalities()  {
    const urlRequest = `${environment.apiUrl}/util/available-tonalities`;
    return this.httpClient.get<Tonality[]>(urlRequest);
  }




}
