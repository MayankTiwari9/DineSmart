import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private httpClient: HttpClient) {}

  get(endpoint: string) {
    const apiUrl = environment.api_url;

    return this.httpClient.get(`${apiUrl}${endpoint}`).pipe();
  }
}
