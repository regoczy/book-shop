import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from '../data/components/page-not-found.component';
import { VolumeSearchComponent } from '../data/components/volume-search.component';
import { VolumeCardComponent } from '../data/components/volume-card.components';
 
const appRoutes: Routes = [
    {
        path: "",
        component: VolumeSearchComponent
    },
    {
        path: 'volume/:id',
        component: VolumeCardComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}