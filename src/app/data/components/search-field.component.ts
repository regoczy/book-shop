import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-field',
  template: `
    <div class="search-field" fxLayout="row" fxLayoutAlign="space-around center">
        <mat-slide-toggle
            color="primary"
            matTooltip="Multi Search"
            [checked]="isMulti"
            (change)="isMulti = $event.checked">
        </mat-slide-toggle>
        <mat-form-field fxFlex="65">
            <input matInput
                placeholder="Keyword..."
                [(ngModel)]="query"
                (keyup.enter)="emitSearch()">
                <mat-hint align="end" *ngIf="isHintNeeded()">Use commas to seperate keywords for Multi Search.</mat-hint>
        </mat-form-field>
        <button mat-icon-button
                color="primary"
                (click)="emitSearch()">
            <mat-icon>search</mat-icon>
        </button>
    </div>
  `,
  styles: [`
    .search-field {
        border-radius: 50px;
        width: 500px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        padding: 5px;
    }

    .search-cont {
        width: 40px;
        height: 40px;
    }
  `]
})
export class SearchFieldComponent implements OnInit {

    isMulti: boolean = false;
    query: string = "";

    @Output() search: EventEmitter<{isMulti: boolean, query: string}> = new EventEmitter();
    
    constructor() {

    }

    ngOnInit() {
        
    }

    private emitSearch() {
        this.search.emit({
            isMulti: this.isMulti,
            query: this.query
        });
    }

    private isHintNeeded(): boolean {
        console.log()
        return (this.isMulti && !this.query.includes(","));
    }

}