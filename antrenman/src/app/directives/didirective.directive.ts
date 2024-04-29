import { Directive, ElementRef, Input } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appDidirective]',
  standalone: true,
})
export class DidirectiveDirective {
  constructor(private element: ElementRef) {
    // element.nativeElement.style.border = '1px solid red';
    $(element.nativeElement).fadeOut(2000).fadeIn(1000);
  }

  @Input() color: string;
}
