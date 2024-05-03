import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-domat',
  standalone: true,
  imports: [FormsModule],
  template: `
    domatzzz show
    <br />
    <form #frmm="ngForm" (ngSubmit)="createUser(frmm.value)">
      <input type="text" placeholder="Name" name="firstName" ngModel />
      <input type="text" placeholder="Surame" name="lastName" ngModel />
      <input type="email" placeholder="Email" name="email" ngModel />
      <input type="tel" placeholder="Phone Number" name="tel" ngModel />
      <div ngModelGroup="adress">
        <input type="text" placeholder="Country" name="country" ngModel />
        <input type="text" placeholder="City" name="city" ngModel />
        <input type="text" placeholder="Adress" name="adress" ngModel />
      </div>
      <button>Send</button>
    </form>
    <button (click)="autofill()">Auto Fill</button>
    <button (click)="resetForm()">Reset Form</button>
  `,
})
export class DomatComponent implements OnInit {
  resetForm() {
    this.frmm.reset();
  }
  autofill() {
    this.frmm.setValue({
      firstName: 'Cagdas',
      lastName: 'Tas',
      email: 'tascagdas@gmail.com',
      tel: '+90 539 716 6827',
      adress: {
        country: 'Turkiye',
        city: 'Istanbul',
        adress: 'circir mah. sevda cad.',
      },
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.frmm.setValue({
        firstName: 'Hayriye',
        lastName: 'Karali',
        email: 'Hayrika@gmail.com',
        tel: '+90 123 435 1234',
        adress: {
          country: 'Gana',
          city: 'Davutpasa',
          adress: 'karadolap mah. mevlut sok.',
        },
      });
    }, 200);
  }
  @ViewChild('frmm', { static: true }) frmm: NgForm;

  createUser(data) {
    console.log(data);

    console.log(`Value:${this.frmm.value}`);

    console.log(`Valid:${this.frmm.valid}`);

    console.log(`Touched:${this.frmm.touched}`);

    console.log(`Submitted:${this.frmm.submitted}`);
  }
}
