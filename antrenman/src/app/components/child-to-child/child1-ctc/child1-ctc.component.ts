import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1-ctc',
  standalone: true,
  imports: [],
  templateUrl: './child1-ctc.component.html',
  styleUrl: './child1-ctc.component.css'
})
export class Child1CtcComponent implements OnInit {
  @Output() data:EventEmitter<any> = new EventEmitter()
  ngOnInit(): void {
    this.data.emit("child-1'den gonderilen veri bu stringdirr..")
  }
}
