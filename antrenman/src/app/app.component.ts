import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { randomInt } from 'crypto';
import { TiestoComponent } from './tiesto/tiesto.component';
import { DomatComponent } from './domat/domat.component';
import { ParentComponent as ParentComponent_PTC } from './components/parent-to-child/parent/parent.component';
import { ParentComponent as ParentComponent_CTP } from './components/child-to-parent/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <hr />
    <app-parent> </app-parent>
    <app-parent-CTP> </app-parent-CTP>
  `,
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NgFor,
    CommonModule,
    TiestoComponent,
    DomatComponent,
    ParentComponent_PTC,
    ParentComponent_CTP,
  ],
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

  // number = randomInt(1, 8);
  number = Math.random() * 10;

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
