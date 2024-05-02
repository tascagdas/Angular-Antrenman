import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2-ctc',
  standalone: true,
  imports: [],
  templateUrl: './child2-ctc.component.html',
  styleUrl: './child2-ctc.component.css'
})
export class Child2CtcComponent {
@Input() data:string
}
