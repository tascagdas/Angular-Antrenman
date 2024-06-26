import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-CTP',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  imports: [ChildComponent],
})
export class ParentComponent {
  inComingMessage: string;

  childEvent(obj: any) {
    this.inComingMessage = obj.message;
  }
}
