import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter2Component } from './ajouter2.component';

describe('Ajouter2Component', () => {
  let component: Ajouter2Component;
  let fixture: ComponentFixture<Ajouter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ajouter2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
