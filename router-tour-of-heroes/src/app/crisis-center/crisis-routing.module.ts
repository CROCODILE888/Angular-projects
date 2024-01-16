import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

const crisiCenterRoutes: Routes = [
  {path: 'crisis-center', component: CrisisCenterComponent, children: [
    {path: '', component: CrisisListComponent, children: [
      {path: ':id', component: CrisisDetailComponent},{path: '', component: CrisisHomeComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(crisiCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
