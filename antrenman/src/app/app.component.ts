import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { randomInt } from 'crypto';
import { TiestoComponent } from './tiesto/tiesto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <hr />
    <div [ngSwitch]="number">
      <div *ngSwitchCase="1">cagdas</div>
      <div *ngSwitchCase="2">selen</div>
      <div *ngSwitchCase="3">alaattin</div>
      <div *ngSwitchCase="4">dilek</div>
      <div *ngSwitchCase="5">dilan</div>
      <div *ngSwitchCase="6">meral</div>
      <div *ngSwitchCase="7">erkin</div>
      <div *ngSwitchCase="8">semih</div>
      <div *ngSwitchDefault>Hicbiri</div>
    </div>

    <hr />
    <app-tiesto> </app-tiesto>
  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NgFor, CommonModule, TiestoComponent],
})
export class AppComponent {
  names: string[] = [
    'cagdas',
    'selen',
    'alaattin',
    'dilek',
    'dilan',
    'meral',
    'erkin',
    'semih',
  ];
  number = randomInt(0, 9);

  dummyJson = {
    brand: 'apple',
    products: {
      phone: ['iphone 15', 'iphone 15 pro'],
      tablet: ['ipad pro 12.9', 'ipad air 11'],
      computers: ['macbook air', 'imac', 'mac studio'],
    },
    ceo: 'Tim Cook',
  };

  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
}
