import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFormComponent } from './city-form.component';
import { CityItemComponent } from '../city-item/city-item.component';

describe('CityFormComponent', () => {
  let component: CityFormComponent;
  let fixture: ComponentFixture<CityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
