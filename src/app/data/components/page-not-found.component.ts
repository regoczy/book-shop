import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
    <h1>Where are you?</h1>
    <a routerLink="/" routerLinkActive="active">Get back to the Dashboard!</a>
  `,
  styles: [`
    
  `]
})
export class PageNotFoundComponent {

    constructor() {

    }

}