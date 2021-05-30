import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Sheet, SheetPage} from '../data/sheet';

@Injectable()
export class SheetService {

    constructor(
        private httpClient: HttpClient,
    ) {

    }

    getSheets(text: string) {
      let urlRequest = `${environment.apiUrl}/sheets`;
      if (text !== undefined) urlRequest += '?text=' + text;
      return this.httpClient.get<Sheet[]>(urlRequest);
    }

    getSheetPage(page: number, size: number, text: string) {
        const urlRequest = `${environment.apiUrl}/sheets/pages?page=${page}&number=${size}&text=${text}`;
        return this.httpClient.get<SheetPage>(urlRequest);
    }

  downloadSheetXML(id: number) {
      const urlRequest = `${environment.apiUrl}/sheets/${id}/download/xml`;
      return this.httpClient.get(urlRequest);
  }

  getSheetXML(id: number) {
      const urlRequest = `${environment.apiUrl}/sheets/${id}`;
      return this.httpClient.get(urlRequest, { responseType: 'text' });
  }

  deleteSheet(id: number) {
    const urlRequest = `${environment.apiUrl}/sheets/${id}`;
    return this.httpClient.delete(urlRequest, { responseType: 'text'});
  }

  retry(id: number) {
      const urlRequest = `${environment.apiUrl}/sheets/${id}/retry`;
      return this.httpClient.get(urlRequest, { responseType: 'text'});
  }



}
