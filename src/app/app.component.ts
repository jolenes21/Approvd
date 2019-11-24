import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Approvd';
  toggle: boolean = false;
  themes = {
    light: this.toggle,
    dark: !this.toggle
  }
  switch() {
    this.toggle = !this.toggle;
  }
}
