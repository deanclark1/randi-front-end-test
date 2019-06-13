import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class DataProviderService {

  constructor(
    private http: HttpClient
  ) { }
login(credentials){
  return this.http.post('https://randi-api-test.herokuapp.com/api/v1/login/', JSON.stringify(credentials), {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).pipe(
    map(response => response)
  )


}
}
