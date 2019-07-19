import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoModifyComponent } from './photo-modify.component';

describe('PhotoModifyComponent', () => {
  let component: PhotoModifyComponent;
  let fixture: ComponentFixture<PhotoModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
