import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private httpClient: HttpClient) {}

  get(endpoint: string) {
    const apiUrl = `${environment.api_url}${endpoint}`;

    return this.httpClient.get(apiUrl).pipe();
  }

  post(endpoint: string, payload: any) {
    const apiUrl = `${environment.api_url}${endpoint}`;

    return this.httpClient.post(apiUrl, payload, { observe: 'response' }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }
}
