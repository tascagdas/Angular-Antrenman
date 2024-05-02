import { Component } from '@angular/core';
import { Child1CtcComponent } from '../child1-ctc/child1-ctc.component';
import { Child2CtcComponent } from '../child2-ctc/child2-ctc.component';

@Component({
  selector: 'app-parent-ctc',
  standalone: true,
  templateUrl: './parent-ctc.component.html',
  styleUrl: './parent-ctc.component.css',
  imports: [Child1CtcComponent, Child2CtcComponent],
})
export class ParentCtcComponent {
  transferringMessage: string;
  childData(message: string) {
    this.transferringMessage = message;
  }
}
