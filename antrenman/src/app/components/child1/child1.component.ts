import { Component } from '@angular/core';
import { ExampleDirective } from '../../directives/example.directive';
import { ExamplePipe } from '../../pipes/example.pipe';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ExampleDirective,ExamplePipe],
  template: `Child1 component`
})
export class Child1Component {

}
