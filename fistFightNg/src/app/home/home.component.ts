import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'kamal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;
  constructor(private data: DataService) {}
  h1Style = false;
  ngOnInit() {
  this.data.getUsers().subscribe(data => {
    this.users = data;
    console.log(this.users);
  });
  }
}
