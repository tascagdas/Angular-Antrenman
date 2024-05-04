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
    <div>isValid:{{ frm.valid }}</div>
    <button (click)="change()">Change</button>
    <br />
    <button (click)="markAsTouched()">markAsTouched</button>
    <br />
    <button (click)="markAllAsTouched()">markAllAsTouched</button>
    <br />
    <button (click)="markAsUntouched()">markAsUntouched</button>
    <br />
    <button (click)="markAsDirty()">markAsDirty</button>
    <br />
    <button (click)="markAsPristine()">markAsPristine</button>
    <br />
    <button (click)="disable()">disable email</button>
    <br />
    <button (click)="enable()">enable email</button>
    <div style="border: 1px solid black; width:250px">
      <div style="border: 1px solid black;">
        form touched: {{ frm.touched }} <br />
        FirstName form control touched:
        {{ frm.get('firstName').touched }} <br />
        adress group from touched: {{ frm.get('adress').touched }} <br />
        Country from control touched:
        {{ frm.get('adress').get('country').touched }}
      </div>
      <div style="border: 1px solid black;">
        form dirty:{{ frm.dirty }}
        <br />
        firstName form control dirty: {{ frm.get('firstName').dirty }}
      </div>
      <div style="border: 1px solid black;">
        form pristine:{{ frm.pristine }}
        <br />
        firstName form control pristine: {{ frm.get('firstName').pristine }}
      </div>
    </div>
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

  enable() {
    this.frm.get('email').enable();
  }
  disable() {
    this.frm.get('email').disable();
  }
  markAsPristine() {
    this.frm.markAsPristine();
  }
  markAsDirty() {
    this.frm.markAsDirty();
  }
  markAsUntouched() {
    this.frm.markAsUntouched();
  }
  markAllAsTouched() {
    this.frm.markAllAsTouched();
  }
  markAsTouched() {
    this.frm.get('firstName').markAsTouched({ onlySelf: true });
  }
}
