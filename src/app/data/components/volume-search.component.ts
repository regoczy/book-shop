import { VolumeService } from './../../services/volume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Volume } from 'src/app/models/volume.model';

@Component({
  selector: 'volume-search',
  template: `
    <div fxLayout="column" fxLayoutAlign="center">
        <div fxLayoutAlign="center center" style="height: 200px;">
            <search-field (search)="handleSearch($event)"></search-field>
        </div>
        <div fxLayout="row wrap" fxLayoutAlign="space-around start" fxLayoutGap="16px grid" fxFlexFill>
            <volume-card
                *ngFor="let volume of volumes"
                [volume]="volume">
            </volume-card>
        </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class VolumeSearchComponent implements OnInit {

    volumes: Volume[] = [];
    
    constructor(private volumeSer: VolumeService) {

    }

    ngOnInit() {
        
    }

    private handleSearch(search: { isMulti: boolean, query: string }) {
        if (search.isMulti) {
            this.volumes = [];
            let queries: string[] = search.query.split(",").map(str => str = str.trim());
            queries.forEach(query => {
                this.volumeSer.getVolumes(query, this.addVolumes.bind(this));
            });
        } else {
            this.volumeSer.getVolumes(search.query, this.setVolumes.bind(this));
        }
    }

    private setVolumes(value: Volume[]) {
        this.volumes = value;
    }

    private addVolumes(values: Volume[]) {
        this.volumes = this.volumes.concat(values);
    }
}