import { Component, OnInit } from '@angular/core';

import { Person } from './Person';
import './rxjs-operators';
import {PersonService } from './person.service';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonService]
})
export class AppComponent {
 //people: Person[];
 constructor(private personService: PersonService) { }
 private searchTermStream = new Subject<string>();

 search(term:string) {
   if(term.length > 0)
   {
   this.searchTermStream.next(term);
   }
   else
   {
     this.searchTermStream.next("fsdlksdflk")
   }
 }

 people = this.searchTermStream.debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.personService.search(term));
    
/*
 getPeople():void{
   this.personService.getPeople().then(people=>this.people=people);
 }

 ngOnInit():void{
   this.getPeople();
 }*/

    }


