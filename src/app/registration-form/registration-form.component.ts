import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationFg = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    cPassword: ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    role: [''],
    age: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
  }, { validators: [this.mustMatchValidator] });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private registration:RegistrationService, private r:Router) { }

  get firstName() { return this.registrationFg.get("firstName") }
  get lastName() { return this.registrationFg.get("lastName") }
  get email() { return this.registrationFg.get("email") }
  get password() { return this.registrationFg.get("password") }
  get cPassword() { return this.registrationFg.get("cPassword") }
  get age() { return this.registrationFg.get("age") }
  get phoneNumber() { return this.registrationFg.get("phoneNumber") }

  ngOnInit(): void {
  }
  onSubmit(){
    this.registration.postForm(this.registrationFg.value).subscribe(() => alert("Registration done Successfully!"))
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.registrationFg.reset();
    this.r.navigateByUrl("/login")
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("cPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false }
    }
    return null;
  }

}
