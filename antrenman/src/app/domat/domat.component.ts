import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from '../pipes/custom.pipe';

@Component({
  selector: 'app-domat',
  standalone: true,
  imports: [
    TitleCasePipe,
    SlicePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    PercentPipe,
    DecimalPipe,
    KeyValuePipe,
    UpperCasePipe,
    CustomPipe,
  ],
  templateUrl: './domat.component.html',
  styleUrl: './domat.component.css',
})
export class DomatComponent {
  constructor(private custom: CustomPipe) {
    console.log(custom.transform('denemedeneme', 2, 5));
  }
  name = 'cagdas';
  price = 12345;
}
