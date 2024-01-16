import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisHomeComponent,
    CrisisListComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule,
    FormsModule
  ]
})
export class CrisisModule { }
