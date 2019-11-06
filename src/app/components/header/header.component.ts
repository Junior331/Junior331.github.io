import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url;
  menu;
  constructor() {
    this.url = 'http://www.estartandodevs.com.br/img/fonte%20branca-min-min.png';
    this.menu = [
      { texto: 'Home', url: '/' },
      { texto: 'Projects', url: '/Projects' },
      { texto: 'Contacts', url: '/Contacts' },
    ];
  }
  ngOnInit() {
  }

}
