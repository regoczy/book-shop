import { VolumeService } from './../../services/volume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Volume } from 'src/app/models/volume.model';

@Component({
  selector: 'volume-search',
  template: `
    <mat-form-field>
        <input matInput placeholder="Keyword..."
            [(ngModel)]="query"
            (keyup.enter)="search()">
    </mat-form-field>
    <button mat-button (click)="search()">Search!</button>
    <mat-grid-list cols="4">
        <volume
            *ngFor="let volume of volumes">
        </volume>
    </mat-grid-list>
  `,
  styles: [`
    
  `]
})
export class VolumeSearchComponent implements OnInit {

    query: string;
    volumes: Volume[]
    
    constructor(private volumeSer: VolumeService) {

    }

    ngOnInit() {
        
    }

    private search() {
        this.volumeSer.getVolumes(this.query, (volumes) => {
            this.volumes = volumes})
    }

}