import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddGalleryComponent } from './modal-add-gallery.component';

describe('ModalAddGalleryComponent', () => {
  let component: ModalAddGalleryComponent;
  let fixture: ComponentFixture<ModalAddGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
