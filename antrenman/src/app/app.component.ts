import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
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
        <p *ngIf="isFirst" style="color: aqua;">
          {{ name }} || {{ i }} || Birinci mi? {{ isFirst }} || Sonuncu mu?
          {{ isLast }} || Tek mi ? {{ isOdd }} || Cift mi? {{ isEven }}
        </p>
        <p *ngIf="!isFirst" style="color: crimson;">
          {{ name }} || {{ i }} || Birinci mi? {{ isFirst }} || Sonuncu mu?
          {{ isLast }} || Tek mi ? {{ isOdd }} || Cift mi? {{ isEven }}
        </p>
      </li>
    </ul>

    <hr />
    <ul>
      @for(name of names; track name;let isFirst=$first;let i=$index;let
      isOdd=$odd;let isLast=$last; let isEven=$even) { @if(isFirst){

      <li *ngIf="isFirst" style="color: aqua;">
        {{ name }} || {{ i }} || Birinci mi? {{ isFirst }} || Sonuncu mu?
        {{ isLast }} || Tek mi ? {{ isOdd }} || Cift mi? {{ isEven }}
      </li>

      }@else{
      <li *ngIf="!isFirst" style="color: crimson;">
        {{ name }} || {{ i }} || Birinci mi? {{ isFirst }} || Sonuncu mu?
        {{ isLast }} || Tek mi ? {{ isOdd }} || Cift mi? {{ isEven }}
      </li>
      } } @empty {
      <li>No items found</li>
      }
    </ul>

    <hr />

    <ul>
      @for (char of "Angular"; track char;let i = $index) {
      <li>{{ char + +i }}</li>
      }
    </ul>
    <hr />

    <hr />

    <div>
      <p>Without JSON pipe:</p>
      <pre>{{ dummyJson }}</pre>
      <p>With JSON pipe:</p>
      <pre>{{ dummyJson | json }}</pre>
    </div>
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
