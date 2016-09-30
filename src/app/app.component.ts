import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { Person } from './Person';
import './rxjs-operators';
import {PersonService } from './person.service';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'scale(0)'})),
    transition('void => *', [
      style({transform: 'scale(0)'}),
      animate(300, keyframes([
        style({opacity: 0, transform: 'scale(0)', offset: 0}),
        style({opacity: 1, transform: 'scale(1.3)',  offset: 0.7}),
        style({opacity: 1, transform: 'scale(1)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateY(100%)',     offset: 0}),
        style({opacity: .5, transform: 'translateY(150px)', offset: 0.4}),
        style({opacity: .2, transform: 'translateY(300px)',  offset: 1.0})
       /* style({opacity: 1, transform: 'scale(1)', offset: 0}),
        style({opacity: .5, transform: 'scale(.5)',  offset: 0.3}),
        style({opacity: 0, transform: 'scale(0)',     offset: 1.0})*/
      ]))
    ])
  ])
],
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


