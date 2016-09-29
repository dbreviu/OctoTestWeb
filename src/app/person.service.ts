import { Injectable } from '@angular/core';
import { Person } from './Person';
import { PEOPLE } from './mock-people';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class PersonService {

constructor(private jsonp: Jsonp) {}
  search (term: string) {

    let personUrl = "http://danboctotestdev.azurewebsites.net/api/person"

    let params = new URLSearchParams('name=' + term);
    
    return this.jsonp.get(personUrl,{search:params})
    .map(res=><Person[]>res.json()[1])
  }

  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }
} 