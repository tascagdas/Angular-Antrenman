import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-domat',
  standalone: true,
  imports: [FormsModule],
  template: `
    domatzzz show
    <br />
    <input type="text" [(ngModel)]="data" />
    <br />
    <ng-content></ng-content>
  `,
})
export class DomatComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(' 1. adim  ILKK ILK ngOnChanges tetiklendi');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('2. adim ngOnInIt calistii');
  }
  ngDoCheck(): void {
    console.log('3.adim Docheck calistii birden cok calisabiliyor');
    //componentin stateinde vs bir degisim oldugunda tetikleniyor.
  }
  ngAfterContentInit(): void {
    console.log('4. Aftercontentinit');
    //content gonderildiginde tetiklenicek olan fonksiyon
  }
  ngAfterContentChecked(): void {
    console.log('5. tetiklenicek olan aftercontentcheck');
    //docheck ile ayni anda tetikleniyor. docheck butun degisikliklerde tetiklenirken aftercontentchech ise contentteki degisimde
  }
  ngAfterViewInit(): void {
    console.log('6. tetiklenen ngafterviewinit');
    //tamamiyle templatein handle edildiginde bu tetikleniyor.
  }
  ngAfterViewChecked(): void {
    console.log('7.tetiklenen AfterViewChecked');
    // bu event viewde bir degisiklik varsa tetikleniyor
  }
  ngOnDestroy(): void {
    console.log('8. tetiklenen ON DESTROYY');
  }
}
