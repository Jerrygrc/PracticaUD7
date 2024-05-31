import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-city-item',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './city-item.component.html',
  styleUrl: './city-item.component.scss'
})
export class CityItemComponent {

  @Input() city: any;
  @Output() visited = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  isVisited: boolean = false;

  markVisited() {
    this.visited.emit();
  }

  removeCity() {
    this.delete.emit();
  }

}
