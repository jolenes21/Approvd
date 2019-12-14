import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "nga-matcher-signup",
  templateUrl: "./matcher-signup.component.html",
  styleUrls: ["./matcher-signup.component.sass"]
})
export class MatcherSignupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      memberUsername: ["", Validators.required],
      memberPassword: ["", Validators.required],
      memberFirstName: ["", Validators.required],
      memberLastName: ["", Validators.required],
      mmemberAge: ["", Validators.required],
      memberType: ["Matcher"],
      memberActive: [true]
    });
  }
  doSubmit() {
    // write to CRUD service
    const userControl = this.loginForm.get("memberUsername");
    const passControl = this.loginForm.get("memberPassword");

    const userValue = userControl.value;
    const passValue = passControl.value;

    console.log(userValue, passValue);
  }
}
