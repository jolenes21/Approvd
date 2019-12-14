import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "nga-matchee-signup",
  templateUrl: "./matchee-signup.component.html",
  styleUrls: ["./matchee-signup.component.sass"]
})
export class MatcheeSignupComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      memberUsername: ["", Validators.required],
      memberPassword: ["", Validators.required],
      memberFirstName: ["", Validators.required],
      memberLastName: ["", Validators.required],
      mmemberAge: ["", Validators.required],
      memberType: ["Matchee"],
      memberGender: ["", Validators.required],
      memberGenderInterestedIn: ["", Validators.required],
      memberActive: [true]
    });
  }
  doSubmit() {
    // write to CRUD service
    const userControl = this.loginForm.get("memberUsername");
    const passControl = this.loginForm.get("memberPassword");
    const firstControl = this.loginForm.get("memberFirstname");
    const lastControl = this.loginForm.get("memberLastname");
    const ageControl = this.loginForm.get("memberAge");
    const typeControl = this.loginForm.get("memberType");
    const genderControl = this.loginForm.get("memberGender");
    const genderInterestControl = this.loginForm.get("memberGenderInterest");

    const userValue = userControl.value;
    const passValue = passControl.value;
    const firstValue = firstControl.value;
    const lastValue = lastControl.value;
    const ageValue = ageControl.value;
    const typeValue = typeControl.value;
    const genderValue = genderControl.value;
    const genderInterestValue = genderInterestControl.value;

    console.log(
      userValue,
      passValue,
      firstValue,
      lastValue,
      ageValue,
      typeValue,
      genderValue,
      genderInterestValue
    );
  }
}
