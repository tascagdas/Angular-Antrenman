
import { Component } from '@angular/core';

@Component({
  selector: 'app-orman-meyvesi',
  standalone: true,
  imports: [],
  templateUrl: './orman-meyvesi.component.html',
  styleUrl: './orman-meyvesi.component.css'
})
export class OrmanMeyvesiComponent {
  numbers : number[] = []
  condition : boolean = true;
  data : number = 1;
}
