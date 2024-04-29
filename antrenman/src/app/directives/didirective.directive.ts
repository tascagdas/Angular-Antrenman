import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appDidirective]',
  standalone: true,
})
export class DidirectiveDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    // element.nativeElement.style.border = '1px solid red';
    this.element.nativeElement.style.backgroundColor = this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn(1000);
  }

  @Input() color: string;

  @HostListener('click')
  onClick() {
    alert('Div e bastın');
  }
  @HostBinding('style.color')
  textColor: string = 'red';
}
