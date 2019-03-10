import { VolumeService } from '../../services/volume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Volume } from 'src/app/models/volume.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'volume-card',
  template: `
    <mat-card class="volume-card">
        <mat-card-header>
        <div mat-card-avatar class="volume-thumbnail"
            [style.background-image]="'url(' + volume.imageLinks.thumbnail + ')'"></div>
            <mat-card-title>{{volume.title}}</mat-card-title>
            <mat-card-subtitle *ngIf="isAuthorsSet()">
                {{getAuthorsString()}}
            </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content *ngIf="isDescrSet()">
            <p>
            {{getFormatedDescr()}}
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-button>ADD TO CART</button>
        </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .volume-card {
        max-width: 300px;
    }

    .volume-thumbnail {
        background-size: cover;
        height: 50px;
        width: 50px;
      }
  `]
})
export class VolumeCardComponent implements OnInit {

    @Input() volume: Volume;
    
    constructor(private route: ActivatedRoute,
                private volumeSer: VolumeService) {

    }

    ngOnInit() {
        if (typeof this.volume == "undefined" && this.route.component == VolumeCardComponent) {
            this.route.params.subscribe(params => {
                let id: string = params['id'];
                this.volumeSer.getVolume(id, this.setVolume.bind(this));
            })
        }
    }

    private setVolume(value: Volume) {
        this.volume = value;
    }

    private getAuthorsString(): string {
        return this.volume.authors.join("; ");
    }

    /*
    Reduces to 300 character
    Removes the last word chunk
    Adds "...";
    */
    private getFormatedDescr(): string {
        if (this.volume.descr.length > 300) {
            let formated = this.volume.descr.substring(0, 200);
            formated = formated.substring(0, formated.lastIndexOf(" "));
            formated += "...";
            return formated;
        } else {
            return this.volume.descr;
        }
    }

    private isAuthorsSet(): boolean {
        return typeof this.volume.authors != "undefined";
    }

    private isDescrSet(): boolean {
        return typeof this.volume.descr != "undefined";
    }
}