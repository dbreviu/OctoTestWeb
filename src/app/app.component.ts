import { Component, OnInit } from '@angular/core';

import { Person } from './Person';
import './rxjs-operators';
import {PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonService]
})
export class AppComponent {
 people: Person[];
 constructor(private personService: PersonService) { }
 
 getPeople():void{
   this.personService.getPeople().then(people=>this.people=people);
 }

 ngOnInit():void{
   this.getPeople();
 }

    }


