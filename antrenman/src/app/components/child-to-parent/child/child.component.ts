import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({
      message: 'childdan parente gönderilen bir string değer',
    });
  }
  @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();
}
