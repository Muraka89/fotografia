import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisajesComponent } from './paisajes.component';

describe('PaisajesComponent', () => {
  let component: PaisajesComponent;
  let fixture: ComponentFixture<PaisajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
