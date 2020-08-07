import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  urlImage = 'https://image.flaticon.com/icons/svg/3154/3154195.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
