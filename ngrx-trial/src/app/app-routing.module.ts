import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { BlogComponent } from './blog/blog.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "counter", component: CounterDisplayComponent, canActivate:[authGuard]},
  {path: "blog", component: BlogComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
