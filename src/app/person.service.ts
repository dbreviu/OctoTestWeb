import { Injectable } from '@angular/core';
import { Person } from './Person';
import { PEOPLE } from './mock-people';
@Injectable()
export class PersonService {
  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }
} 