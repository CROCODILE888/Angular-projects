import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogoRendererComponent } from './company-logo-renderer.component';

describe('CompanyLogoRendererComponent', () => {
  let component: CompanyLogoRendererComponent;
  let fixture: ComponentFixture<CompanyLogoRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyLogoRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyLogoRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
