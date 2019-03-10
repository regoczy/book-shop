import { ApiService } from './../services/api.service';
import { VolumeDataService } from './../services/volume-data.service';
import { VolumeService } from './../services/volume.service';
import { PageNotFoundComponent } from './../data/components/page-not-found.component';
import { MaterialModule } from './material.module';
import { VolumeSearchComponent } from '../data/components/volume-search.component';
import { VolumeCardComponent } from '../data/components/volume-card.components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from '../app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFieldComponent } from '../data/components/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SearchFieldComponent,
    VolumeCardComponent,
    VolumeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
