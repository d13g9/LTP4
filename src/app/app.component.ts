import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'locatinos-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo a Locatinos - Sua Locadora de carros online!';
  title = "Locatinos";

  constructor() { }

  ngOnInit() {
  }

}
