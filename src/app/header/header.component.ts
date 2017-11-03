import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locatinos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    title = "Locatinos";
    urllogo = "../../assets/img/logo.jpg";

  constructor() { }

  ngOnInit() {
  }

}
