import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameThingComponent } from './name-thing.component';

describe('NameThingComponent', () => {
  let component: NameThingComponent;
  let fixture: ComponentFixture<NameThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
