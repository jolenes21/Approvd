import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  canEdit = true;

  constructor() { }

  ngOnInit() {
  }

  switch() {
    this.canEdit = !this.canEdit;
  }

}
