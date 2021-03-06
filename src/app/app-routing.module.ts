import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaybesComponent } from './maybes/maybes.component'
import { MatchesComponent } from './matches/matches.component';
import { MatchersComponent } from './matchers/matchers.component';
import { MemberTypeComponent } from './member-type/member-type.component';
import { MessagesComponent } from './messages/messages.component';
import { MatcheeSignupComponent } from './matchee-signup/matchee-signup.component';
import { MatcherSignupComponent } from './matcher-signup/matcher-signup.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "maybes",
    component: MaybesComponent
  },
  {
    path: "matches",
    component: MatchesComponent
  },
  {
    path: "matchers",
    component: MatchersComponent
  },
  {
    path: "messages",
    component: MessagesComponent
  },
  {
    path: "member-type",
    component: MemberTypeComponent
  },
  {
    path: "matchee-signup",
    component: MatcheeSignupComponent
  },
  {
    path: "matcher-signup",
    component: MatcherSignupComponent
  },
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }