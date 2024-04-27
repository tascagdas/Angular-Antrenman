import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiestoComponent } from './tiesto.component';

describe('TiestoComponent', () => {
  let component: TiestoComponent;
  let fixture: ComponentFixture<TiestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
