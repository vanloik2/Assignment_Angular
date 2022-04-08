import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAsideComponent } from './client-aside.component';

describe('ClientAsideComponent', () => {
  let component: ClientAsideComponent;
  let fixture: ComponentFixture<ClientAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
