import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaybesComponent } from './maybes/maybes.component'
import { MatchesComponent } from './matches/matches.component';
import { MatchersComponent } from './matchers/matchers.component';
import { MessagesComponent } from './messages/messages.component';
import { EditComponent } from './edit/edit.component';

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
    path: "edit",
    component: EditComponent
  },
  {
    path: "**/*",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }