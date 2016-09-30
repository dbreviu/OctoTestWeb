import { Injectable } from '@angular/core';
import { Person } from './Person';
import { PEOPLE } from './mock-people';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class PersonService {

constructor(private http: Http) {}
  search (term: string) {


    let personUrl = "http://danboctotestdev.azurewebsites.net/api/person"

    let params = new URLSearchParams()
    params.set('name',term);
    

   return this.http.get(personUrl,{search:params})
     .map(response => response.json());
    //  .map(response => response.json().data);

  }
/*
  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }*/
} 