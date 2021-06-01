import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { User } from '../data/user';
import {Specs} from '../data/specs';
import {Sheet} from '../data/sheet';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';

@Injectable()
export class UserService {

  token: string;

  constructor(
      private httpClient: HttpClient,
      private authService: NbAuthService,
  )  {
    this.authService.onTokenChange().subscribe((jwttoken: NbAuthJWTToken) => {
      this.token = jwttoken.getValue();
    });
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
    const headers = new HttpHeaders().set('Authorization', this.token);
    return this.httpClient.get(urlRequest, {headers: headers, responseType: 'text'});
  }



}

