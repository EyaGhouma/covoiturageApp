import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/demo/models/user.model';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export default class AuthSignupComponent implements OnInit {

  formClasses = "card-body text-center"
  public userForm: FormGroup;
  constructor() {

  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.userForm = new FormGroup(
      {
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required),
        phoneNumber: new FormControl('',Validators.required),
        address: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      }
    )
  }

  public signUp(): void
  {
    if(this.userForm.valid){
      let user = Object.assign(new User(), this.userForm.getRawValue());
      console.log(user);
    }
    else {
      this.formClasses = this.formClasses + " was-validated";
    }
  }
}
