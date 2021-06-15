import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'who makes the best pizza',
      content: 'without out question it is the italains king of all food',
    },
    {
      title: 'who makes the cars',
      content: 'without out question it is the italains king of all cars',
    },
    {
      title: 'who has the best',
      content: 'without out question it is the italains ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
