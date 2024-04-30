import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  //pipein kullanildigi degeri manipule/transform etmemizi saglayan fonsiyondur.
  transform(value: string, a: number, b?: number): string {
    return value.slice(a, b);
  }
}
