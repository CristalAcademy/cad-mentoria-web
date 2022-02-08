import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  open: boolean = false;

  ngOnInit(): void {}
  changeOpen(event: boolean) {
    this.open = event;
  }
}
