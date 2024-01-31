import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionsComponent } from './book-collections.component';

describe('BookCollectionsComponent', () => {
  let component: BookCollectionsComponent;
  let fixture: ComponentFixture<BookCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
