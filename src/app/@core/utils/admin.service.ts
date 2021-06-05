import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Log} from '../data/log';
import {Page} from '../data/page';

@Injectable()
export class AdminService {

    constructor(private httpClient: HttpClient)  {}

    getLogs(index: number, size: number, ascendent?: boolean)  {
        let urlRequest = `${environment.apiUrl}/api/admin/logs?`;
        if (index !== undefined) urlRequest += `index=${index}&`;
        if (size !== undefined) urlRequest += `size=${size}&`;
        if (ascendent !== undefined) urlRequest += `ascendent=${ascendent}&`;
        return this.httpClient.get<Page<Log>>(urlRequest);
    }

}
