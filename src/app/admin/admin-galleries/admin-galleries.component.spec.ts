import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGalleriesComponent } from './admin-galleries.component';

describe('AdminGalleriesComponent', () => {
  let component: AdminGalleriesComponent;
  let fixture: ComponentFixture<AdminGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
