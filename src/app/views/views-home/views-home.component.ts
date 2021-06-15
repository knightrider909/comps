import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  items = [
    {
      images: 'assets/images/couch.jpeg',
      title: 'couch',
      description: 'amaxing to sit on',
    },
    {
      images: 'assets/images/dresser.jpeg',
      title: 'dresser',
      description: 'amaxing to put stuff in',
    },
  ];

  stats = [
    { image: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
