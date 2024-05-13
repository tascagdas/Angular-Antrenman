import { JsonPipe, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { capitalLetterValidator } from '../validators/capitalLetterValidator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-biber',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgStyle,
    JsonPipe,
    NgIf,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
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

.form-width{
    min-width: 150px;
  max-width: 500px;
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
    <hr />
    <br />
    <div style="display: flex;">
      <div style="width: 40vw; padding:30px;">
        <form class="" [formGroup]="frm" (ngSubmit)="onSubmit()">
          <mat-form-field style="width: 75%;">
            <mat-label>First Name</mat-label>
            <input
              matInput
              type="text"
              placeholder="FirstName"
              formControlName="firstName"
            />
            @if (firstName.hasError('firstName') &&
            !firstName.hasError('required')) {
            <mat-error>Please enter a valid First Name</mat-error>
            } @if (firstName.hasError('required')) {
            <mat-error>First Name is <strong>required</strong></mat-error>
            }
          </mat-form-field>

          <br />

          <mat-form-field style="width: 75%;">
            <mat-label>Last Name</mat-label>
            <input
              matInput
              type="text"
              placeholder="LastName"
              formControlName="lastName"
            />
            @if (lastName.hasError('lastName') &&
            !lastName.hasError('required')) {
            <mat-error>Please enter a valid Last Name</mat-error>
            } @if (lastName.hasError('minlength')||
            lastName.hasError('maxlength')) {
            <mat-error
              >Lastname should be between
              <strong>3-25</strong> characters</mat-error
            >
            }@if (lastName.hasError('required')) {
            <mat-error>Lastname is <strong>required</strong></mat-error>
            }
          </mat-form-field>

          <br />

          <mat-form-field style="width: 75%;">
            <mat-label>Email</mat-label>
            <input
              type="email"
              matInput
              placeholder="Ex. mail@example.com"
              formControlName="email"
            />
            @if (email.hasError('email') && !email.hasError('required')) {
            <mat-error>Please enter a valid email address</mat-error>
            } @if (email.hasError('required')) {
            <mat-error>Email is <strong>required</strong></mat-error>
            }
          </mat-form-field>

          <br />

          <mat-form-field style="width: 75%;">
            <mat-label>Telephone</mat-label>
            <span matTextPrefix>+90 &nbsp;</span>
            <input
              type="tel"
              matInput
              formControlName="tel"
              placeholder="512-345-6789"
            />
            <mat-icon matSuffix>mode_edit</mat-icon>
            <mat-hint align="end">{{ tel.value.length }} / 10</mat-hint>
            @if (tel.hasError('tel') && !tel.hasError('required')) {
            <mat-error>Please enter a valid tel address</mat-error>
            } @if (tel.hasError('required')) {
            <mat-error>Email is <strong>required</strong></mat-error>
            }
          </mat-form-field>

          <br />

          <div formGroupName="address">
            <mat-form-field style="width: 75%;">
              <mat-label>Country</mat-label>
              <input
                type="text"
                matInput
                formControlName="country"
                placeholder="COUNTRY"
              />
              @if (frm.get('address').get('country').hasError('country') &&
              !frm.get('address').get('country').hasError('required')) {
              <mat-error>Please enter a valid country address</mat-error>
              } @if (frm.get('address').get('country').hasError('required')) {
              <mat-error>country is <strong>required</strong></mat-error>
              }@if (frm.get('address').get('country').hasError('pattern')) {
              <mat-error>Please write your country name UPPERCASE</mat-error>
              }@if (frm.get('address').get('country').hasError('minlength')) {
              <mat-error>Country must be minimum 4 characters</mat-error>
              }
            </mat-form-field>
            <br />

            <mat-form-field style="width: 75%;">
              <mat-label>City</mat-label>
              <input
                type="text"
                matInput
                formControlName="city"
                placeholder="City"
              />
            </mat-form-field>

            <br />

            <mat-form-field style="width: 75%;">
              <mat-label>Address</mat-label>
              <textarea
                formControlName="address"
                matInput
                placeholder="Ex. 100 Main St"
              >
1600 Amphitheatre Pkwy</textarea
              >
            </mat-form-field>
          </div>
          <div style="display: flex;">
            <button style="background-color: yellow; color:black">Send</button>
            <button
              style="background-color: yellowgreen; color:black"
              (click)="makeFormValid()"
            >
              Fill form as valid
            </button>
          </div>
        </form>
        <hr />
        <div style="display: flex;">
          <div>
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
          <div>
            {{ frm.hasError }}
            {{ frm.valid }}
          </div>
        </div>
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
            <td>address group from touched:</td>
            <td>{{ frm.get('address').touched }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('address').touched ? 'green' : 'red'
                }"
              >
                &block;
              </span>
            </td>
          </tr>
          <tr>
            <td>Country from control touched:</td>
            <td>{{ frm.get('address').get('country').touched }}</td>
            <td>
              <span
                [ngStyle]="{
                  color: frm.get('address').get('country').touched
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
      address: formBuilder.group({
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern('[A-Z]*'),
          ],
        ],
        city: [''],
        address: [''],
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

  makeFormValid() {
    this.frm.setValue({
      firstName: 'Victoria',
      lastName: 'Kalinka',
      email: 'VK@gmail.com',
      tel: '1234351234',
      address: {
        country: 'KARS',
        city: 'Beykoz',
        address: 'karayolları mah. arkasokaklar sok.',
      },
    });
    // this.frm.get('firstName').setValue('Cağdaş');
    // // this.frm.get('lastName').setValue('Taş');
    // // this.frm.get('email').setValue('tascagdas@gmail.com');
    // // this.frm.get('tel').setValue('+905397166827');
    // this.country.setValue("TURKII")
    // this.frm.get('address').get('country').setValue('TURKIYE');
    // this.frm.get('address').get('city').setValue('İstanbul');
    // this.frm.get('address').get('address').setValue('Çırçır mah. Sevda Cad. No.22 D.23');
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
