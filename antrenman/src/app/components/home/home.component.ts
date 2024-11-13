import { Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Child1Component],
  template: `
  Home Component
  <app-child1></app-child1>
  `
})
export class HomeComponent {

}
