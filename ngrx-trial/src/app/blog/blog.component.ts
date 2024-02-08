import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../shared/store/Blog/Blog.model';
import { getBlog } from '../shared/store/Blog/Blog.selector';
import { AppStateModel } from '../shared/store/Global/App.model';

@Component({
  selector: 'app-blog',
  template: `
    <h1>Technology blogs</h1>

    <mat-card *ngFor="let item of blogList">
      <mat-card-header>
        <h1>{{item.title}}</h1>
      </mat-card-header>
      <mat-card-content>
        <p>{{item.description}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .mat-mdc-card{
      width: 50%;
      margin-left: 25%;
      margin-top: 2%
    }
  `
})
export class BlogComponent implements OnInit {

  constructor(private store: Store<AppStateModel>){};

  blogList !: BlogModel[];
  ngOnInit(): void {
    this.store.select(getBlog).subscribe(item=>{
      this.blogList=item;
      // console.log(this.blogList);
    })
  }
}
