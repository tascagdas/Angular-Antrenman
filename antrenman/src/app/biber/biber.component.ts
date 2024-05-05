import {JsonPipe, NgIf, NgStyle} from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {capitalLetterValidator} from "../validators/capitalLetterValidator";

@Component({
  selector: 'app-biber',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, JsonPipe, NgIf],
  template: `
    <hr />
    <br>
    <br>
    <br>
    <hr>
    <br>
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="FirstName" formControlName="firstName" />
      <div *ngIf="!firstName.valid&&(firstName.dirty||firstName.touched)">
        {{firstName.errors|json}}
      </div>
      <br>
      <input type="text" placeholder="LastName" formControlName="lastName" />
      <div *ngIf="!lastName.valid&&(lastName.dirty||lastName.touched)">
        {{lastName.errors|json}}
      </div>
      <br>

      <input type="email" placeholder="Email" formControlName="email" />
      <div *ngIf="!email.valid&&(email.dirty||email.touched)">
        {{email.errors|json}}
      </div>
      <br>

      <input type="tel" placeholder="Tel No" formControlName="tel" />

      <br>

      <div formGroupName="adress">
        <input type="text" placeholder="Country" formControlName="country" />
        <br>

        <input type="text" placeholder="City" formControlName="city" />
        <br>

        <input type="text" placeholder="Adress" formControlName="adress" />
      </div>
      <button>Send</button>
    </form>
    <div>isValid:{{ frm.valid }}        <span [ngStyle]="{ 'color': (frm.valid) ? 'green' : 'red' }">
          &block;
        </span></div>
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
    <div style="border: 1px solid black; width:300px">
      <div style="border: 1px solid black;">
        form touched:
        <span [ngStyle]="{ 'color': (frm.touched) ? 'green' : 'red' }">
          &block;
        </span>

        {{ frm.touched }} <br />
        FirstName form control touched: @if(frm.get('firstName').touched){
        <span style="width: 10px; color:green;">&block;</span>
        }@else{
        <span style="width: 10px; color:red;">&block;</span>
        }
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
      firstName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3),capitalLetterValidator]],
      lastName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
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
  get firstName(){
    return this.frm.get("firstName")
  }
  get email(){
    return this.frm.get("email")
  }
  get lastName(){
    return this.frm.get("lastName")
  }
  get country(){
    return this.frm.get("address").get("country")
  }  get city(){
    return this.frm.get("address").get("city")
  }  get address(){
    return this.frm.get("address").get("address")
  }
  get tel(){
    return this.frm.get("tel")
  }
}
