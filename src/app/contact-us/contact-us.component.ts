import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor() {}

  ngOnInit(): void {}
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    userMessage: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      this.customeEmailValidator,
    ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  //Start Email Validation
  getError(control: any): string {
    if (control.errors?.required && control.touched)
      return 'This field is required!';
    else if (control.errors?.emailError && control.touched)
      return 'Please enter valid email address!';
    else return '';
  }
  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched) {
      return {
        emailError: true,
      };
    } else {
      return null;
    }
  }
  //End Email Validation
  //Start phone validation
  numericOnly(event: any) {
    let patt = /^([0-10])$/;
    let result = patt.test(event.key);
    return result;
  }
  get f() {
    return this.form.controls;
  }
  //End phone validation
  submit() {
    console.log(this.form.value);
  }
}
