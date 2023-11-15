import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostandaloneComponent } from './nostandalone.component';

describe('NostandaloneComponent', () => {
  let component: NostandaloneComponent;
  let fixture: ComponentFixture<NostandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NostandaloneComponent]
    });
    fixture = TestBed.createComponent(NostandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
