import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { User } from '../data/user';
import {Specs} from '../data/specs';
import {Sheet} from '../data/sheet';

@Injectable()
export class UserService {

  constructor(
      private httpClient: HttpClient,
  )  {

  }

  getDetails(id:  number ) {
      const urlRequest = `${environment.apiUrl}/users/${id}/details`;
      return this.httpClient.get<User>(urlRequest);
  }

  postSheetRequest(specs: Specs, userId: number) {
    const urlRequest = `${environment.apiUrl}/users/${userId}/request`;
    return this.httpClient.post<Sheet>(urlRequest, specs);
  }

  generateToken(duration: number, userId: number) {
    const urlRequest = `${environment.apiUrl}/users/${userId}/token`;
    return this.httpClient.get<string>(urlRequest);
  }



}

