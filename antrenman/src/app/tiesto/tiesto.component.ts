import { Component } from '@angular/core';
import { DidirectiveDirective } from '../directives/didirective.directive';
declare var $: any;

@Component({
  selector: 'app-tiesto',
  standalone: true,
  imports: [DidirectiveDirective],
  templateUrl: './tiesto.component.html',
  styleUrl: './tiesto.component.css',
})
export class TiestoComponent {
  ngOnit() {
    $(() => {
      console.log('test');
    });
    $(document).ready(() => {
      console.log('test 2');
    });
  }
}
