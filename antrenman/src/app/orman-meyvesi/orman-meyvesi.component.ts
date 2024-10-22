import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orman-meyvesi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orman-meyvesi.component.html',
  styleUrl: './orman-meyvesi.component.css'
})
export class OrmanMeyvesiComponent {
  numbers : number[] = [1,2,3,4,5,6,7,8,9,10]
  condition : boolean = true;
}
