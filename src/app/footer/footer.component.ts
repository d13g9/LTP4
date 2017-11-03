import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locatinos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subtitle = 'Bem vindo a Locatinos - Sua Locadora de carros online!';
  title = "Locatinos";

  constructor() { }

  ngOnInit() {
  }

}
