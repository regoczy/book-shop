import { ApiService } from './../services/api.service';
import { VolumeDataService } from './../services/volume-data.service';
import { VolumeService } from './../services/volume.service';
import { PageNotFoundComponent } from './../data/components/page-not-found.component';
import { MaterialModule } from './material.module';
import { VolumeSearchComponent } from '../data/components/volume-search.component';
import { VolumeComponent } from '../data/components/volume.components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    VolumeComponent,
    VolumeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    ApiService,
    VolumeService,
    VolumeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
