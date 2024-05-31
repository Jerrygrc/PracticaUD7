import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import { CityItemComponent } from '../city-item/city-item.component';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CityItemComponent],
  templateUrl: './city-form.component.html',
  styleUrl: './city-form.component.scss'
})
export class CityFormComponent {

  cities: any[] = [];

  constructor(private fb:FormBuilder){}

  mForm = this.fb.group({
    name: ["", [Validators.required]],
    country: ["", [Validators.required]],
    month: ["", [Validators.required]]

  })

  sendForm() {
    if (this.mForm.valid) {
      this.cities.push(this.mForm.value);
      this.mForm.reset();
    } else {
      console.log('El formulario es cosa mala');
    }
  }

  markCityVisited(index: number) {
    this.cities[index].visited = true
    
  }

  deleteCity(index: number) {
    this.cities.splice(index, 1);
  }

}
