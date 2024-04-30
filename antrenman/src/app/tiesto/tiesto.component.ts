import { Component, OnInit } from '@angular/core';
import { DidirectiveDirective } from '../directives/didirective.directive';
import $ from 'jquery';
import { CustomIfDirective } from '../directives/custom-if.directive';
import { CustomForDirective } from '../directives/custom-for.directive';

@Component({
  selector: 'app-tiesto',
  standalone: true,
  imports: [DidirectiveDirective, CustomIfDirective, CustomForDirective],
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

  names:string[]=["cagdas","hasan","huseyin"]
}
