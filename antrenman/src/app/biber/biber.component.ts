import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-biber',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <hr />
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="FirstName" formControlName="firstName" />
      <input type="text" placeholder="LastName" formControlName="lastName" />
      <input type="email" placeholder="Email" formControlName="email" />
      <input type="tel" placeholder="Tel No" formControlName="tel" />
      <div formGroupName="adress">
        <input type="text" placeholder="Country" formControlName="country" />
        <input type="text" placeholder="City" formControlName="city" />
        <input type="text" placeholder="Adress" formControlName="adress" />
      </div>
      <button>Send</button>
    </form>
    isValid:{{ frm.valid }}
    <button (click)="change()">Change</button>
  `,
})
export class BiberComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
      adress: formBuilder.group({
        country: [''],
        city: [''],
        adress: [''],
      }),
    });

    this.frm.valueChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    this.frm.statusChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  onSubmit() {
    this.frm.value;
  }

  change() {
    this.frm.get('firstName').setValue('cagdas', { onlySelf: true });
    this.frm.get('email').setValue('cds@gma.com', { onlySelf: true });
  }
}
