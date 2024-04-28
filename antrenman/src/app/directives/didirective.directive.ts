import { Directive, ElementRef } from '@angular/core';

import * as $ from 'jquery';

@Directive({
  selector: '[appDidirective]',
  standalone: true,
})
export class DidirectiveDirective {


  constructor(private element: ElementRef) {
    // element.nativeElement.style.border = '1px solid red';
    // $(element.nativeElement).fadeOut(2000).fadeIn(1000);
  }
}
