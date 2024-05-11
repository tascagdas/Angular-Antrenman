import { JsonPipe, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { capitalLetterValidator } from '../validators/capitalLetterValidator';

@Component({
  selector: 'app-biber',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, JsonPipe, NgIf],
  styles: `
  button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`,
  template: `
    <hr />
    <br />
    <br />
    <br />
    <hr />
    <br />
    <div style="display: flex;">
      <div style="width: 40vw;">
        <form [formGroup]="frm" (ngSubmit)="onSubmit()">
          <input
            type="text"
            placeholder="FirstName"
            formControlName="firstName"
          />
          <div
            *ngIf="!firstName.valid && (firstName.dirty || firstName.touched)"
          >
            {{ firstName.errors | json }}
          </div>
          <br />
          <input
            type="text"
            placeholder="LastName"
            formControlName="lastName"
          />
          <div *ngIf="!lastName.valid && (lastName.dirty || lastName.touched)">
            {{ lastName.errors | json }}
          </div>
          <br />

          <input type="email" placeholder="Email" formControlName="email" />
          <div *ngIf="!email.valid && (email.dirty || email.touched)">
            {{ email.errors | json }}
          </div>
          <br />

          <input type="tel" placeholder="Tel No" formControlName="tel" />

          <br />

          <div formGroupName="adress">
            <input
              type="text"
              placeholder="Country"
              formControlName="country"
            />
            <br />
            <div
              *ngIf="
                !frm.get('adress').get('country').valid &&
                (frm.get('adress').get('country').dirty ||
                  frm.get('adress').get('country').touched)
              "
            >
              {{ frm.get('adress').get('country').errors | json }}
              <br />
            </div>

            <input type="text" placeholder="City" formControlName="city" />
            <br />

            <input type="text" placeholder="Adress" formControlName="adress" />
          </div>
          <button style="background-color: yellow; color:black">Send</button>
        </form>
        <hr />
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
        <br />
        <button (click)="pending()">pending</button>
        <br />
        <button (click)="enable()">xx</button>
      </div>
      <div style="border: 1px solid black; width:50vw; padding:100px">
        <table>
          <tr>
            <td>form is Valid:</td>
            <td>{{ frm.valid }}</td>
            <td>
              <span [ngStyle]="{ color: frm.valid ? 'green' : 'red' }">
                &starf;
              </span>
            </td>
          </tr>
          <tr>
            <td>form touched:</td>
            <td>{{ frm.touched }}</td>
            <td>
              <span [ngStyle]="{ color: frm.touched ? 'green' : 'red' }">
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>FirstName form control touched:</td>
            <td>{{ frm.get('firstName').touched }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('firstName').touched ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>adress group from touched:</td>
            <td>{{ frm.get('adress').touched }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('adress').touched ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>Country from control touched:</td>
            <td>{{ frm.get('adress').get('country').touched }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('adress').get('country').touched
                    ? 'green'
                    : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>form dirty:</td>
            <td>{{ frm.dirty }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.dirty ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>firstName form control dirty</td>
            <td>{{ frm.get('firstName').dirty }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('firstName').dirty ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>form pristine</td>
            <td>{{ frm.pristine }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.pristine ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>firstName form control pristine:</td>
            <td>{{ frm.get('firstName').pristine }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('firstName').pristine ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>is frm pending</td>
            <td>{{ frm.pending }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.pending ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
})
export class BiberComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
          capitalLetterValidator,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
      adress: formBuilder.group({
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern('[A-Z]*'),
          ],
        ],
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
  pending() {
    this.frm.markAsPending();
  }
  get firstName() {
    return this.frm.get('firstName');
  }
  get email() {
    return this.frm.get('email');
  }
  get lastName() {
    return this.frm.get('lastName');
  }
  get country() {
    return this.frm.get('address').get('country');
  }
  get city() {
    return this.frm.get('address').get('city');
  }
  get address() {
    return this.frm.get('address').get('address');
  }
  get tel() {
    return this.frm.get('tel');
  }
}
