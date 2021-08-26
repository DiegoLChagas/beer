import { Beer } from './beer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {  
      
        constructor( private HttpClient: HttpClient) { }
      
        getBeer(){
          return this.HttpClient.get<Beer[]>(`https://api.punkapi.com/v2/beers`);
        }
      }


