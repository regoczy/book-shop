import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { VolumeData } from '../data/volume.data';
import { Observable } from 'rxjs';
import { VolumeSearchResultData } from '../data/volume-search-result.data';

@Injectable()
export class VolumeDataService {

    constructor(private api: ApiService) {}

    private resourcePath = "/volumes"

    public getVolumeData(id: string): Observable<VolumeData> {
        return this.api.get<VolumeData>(this.resourcePath + "/" + id);
    }

    public getVolumeDataArray(parameters: string): Observable<VolumeSearchResultData> {
        return this.api.get<VolumeSearchResultData>(this.resourcePath + "/q?=" + parameters)
    }
}