import { Component, OnInit } from '@angular/core';
import { DidirectiveDirective } from '../directives/didirective.directive';
import $ from 'jquery';

@Component({
  selector: 'app-tiesto',
  standalone: true,
  imports: [DidirectiveDirective],
  templateUrl: './tiesto.component.html',
  styleUrl: './tiesto.component.css',
})
export class TiestoComponent implements OnInit {
  ngOnInit() {
    console.log('deneme');

    $(() => {
      console.log('test');
    });
    // $(document).ready(() => {
    //   console.log('test 2');
    // });
  }
}
