import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EditComponent } from "./edit/edit.component";
import { HeaderComponent } from "./header/header.component";
import { MatchesComponent } from "./matches/matches.component";
import { MaybesComponent } from "./maybes/maybes.component";
import { MessagesComponent } from "./messages/messages.component";
import { MatchersComponent } from "./matchers/matchers.component";
import { LoginComponent } from "./login/login.component";
import { MatcheeSignupComponent } from "./matchee-signup/matchee-signup.component";
import { MatcherSignupComponent } from "./matcher-signup/matcher-signup.component";
import { MemberTypeComponent } from "./member-type/member-type.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    HeaderComponent,
    MatchesComponent,
    MaybesComponent,
    MessagesComponent,
    MatchersComponent,
    LoginComponent,
    MatcheeSignupComponent,
    MatcherSignupComponent,
    MemberTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
