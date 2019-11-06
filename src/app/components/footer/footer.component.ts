import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  url = "http://www.estartandodevs.com.br/img/fonte%20branca-min-min.png";
  menu;
  constructor() { 
    this.menu = [
      { texto: 'Home', url: '/' },
      { texto: 'Projects', url: '/Projects' },
      { texto: 'Contacts', url: '/Contacts' },
    ];
  }

  ngOnInit() {
  }

}
