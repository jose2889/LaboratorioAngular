import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPrimengComponent } from './crud-primeng.component';

describe('CrudPrimengComponent', () => {
  let component: CrudPrimengComponent;
  let fixture: ComponentFixture<CrudPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
