import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityItemComponent } from './city-item.component';

describe('CityItemComponent', () => {
  let component: CityItemComponent;
  let fixture: ComponentFixture<CityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
