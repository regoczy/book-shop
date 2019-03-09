import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VolumeDataService } from './volume-data.service';
import { VolumeData } from '../data/volume.data';
import { Volume } from '../models/volume.model';
import { VolumeSearchResultData } from '../data/volume-search-result.data';

@Injectable()
export class VolumeService {

    constructor(private volumeDataSer: VolumeDataService) { }

    public getVolume(id: string, callback: (any) => any) {
        this.volumeDataSer.getVolumeData(id).subscribe(
            (data: VolumeData) => callback(this.getVolumeFromData(data))
        );
    }

    public getVolumeFromData(data: VolumeData): Volume {
        return new Volume(
            data.id,
            data.volumeInfo.title,
            data.volumeInfo.authors,
            data.volumeInfo.description
        );
    }

    public getVolumeArrayFromData(data: VolumeSearchResultData): Volume[] {
        return data.items.map(this.getVolumeFromData.bind(this));
    }

}