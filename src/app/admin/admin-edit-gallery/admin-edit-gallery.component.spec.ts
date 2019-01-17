import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditGalleryComponent } from './admin-edit-gallery.component';

describe('AdminEditGalleryComponent', () => {
  let component: AdminEditGalleryComponent;
  let fixture: ComponentFixture<AdminEditGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
