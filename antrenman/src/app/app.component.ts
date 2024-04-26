import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  template: `
    <ul>
      <li
        *ngFor="
          let name of names;
          index as i;
          first as isFirst;
          last as isLast;
          even as isEven;
          odd as isOdd
        "
      >
        {{ name }} || {{ i }} || Birinci mi? {{ isFirst }} || Sonuncu mu?
        {{ isLast }} || Tek mi ? {{ isOdd }} || Cift mi? {{ isEven }}
      </li>
    </ul>
  `,
  styleUrl: './app.component.css',
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
}
