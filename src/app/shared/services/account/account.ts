import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Account {
  constructor(private api: Api) {}

  getRestaurants() {

    return this.api.get('restaurants/').pipe(
      map((response) => {
        if (response) {
          console.log(response);
        } else {
          console.log('error');
        }
      })
    );
  }
}
