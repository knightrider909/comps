import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'james', age: 24, job: 'marketing', employed: true },
    { name: 'craig', age: 29, job: 'Rugby player', employed: true },
    { name: 'aurther', age: 35, job: 'king', employed: false },
  ];

  headers = [
    { key: 'name', label: 'name' },
    { key: 'age', label: 'age' },
    { key: 'job', label: 'job' },
    { key: 'employed', label: 'current job' },
  ];
  constructor() {}

  ngOnInit() {}
}
