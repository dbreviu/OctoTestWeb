import { Injectable } from '@angular/core';
import { Person } from './Person';
import { PEOPLE } from './mock-people';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class PersonService {

constructor(private http: Http) {}
  search (term: string) {

    let personUrl = "http://danboctotestdev.azurewebsites.net/api/person"

    let params = new URLSearchParams('name=' + term);
    
    return this.http.get(personUrl,{search:params})
    .map(res=><Person[]>res.json()[1])
  }

  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }
} 