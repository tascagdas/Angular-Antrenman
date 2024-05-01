import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  imports: [ChildComponent],
})
export class ParentComponent {
  data: any = 'parentte olusturulmus bir string veriii';
}
