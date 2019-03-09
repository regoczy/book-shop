import { VolumeService } from './../../services/volume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Volume } from 'src/app/models/volume.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'volume',
  template: `
    <h1>{{volume.title}}<h1>
  `,
  styles: [`
    
  `]
})
export class VolumeComponent implements OnInit {

    @Input() volume: Volume;
    
    constructor(private route: ActivatedRoute,
                private volumeSer: VolumeService) {

    }

    ngOnInit() {
        if (typeof this.volume == "undefined") {
            this.route.params.subscribe(params => {
                let id: string = params['id'];
                this.volumeSer.getVolume(id, this.setVolume.bind(this));
            })
        }
    }

    private setVolume(value: Volume) {
        this.volume = value;
        console.log(this.volume);
    }
}