import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kamal-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle = 'Technology';
  constructor() {}

  ngOnInit() {}
}
