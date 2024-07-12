import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public tiposVeiculos: string[][] | undefined;

  constructor(){}

  ngOnInit(): void {
    this.preencherLista();
  }

  preencherLista() {
    let veiculos: [string, string, string][] = [
      ['1', 'Veículo pequeno', 'bi bi-car-front-fill icon'],
      ['2', 'Veículo médio', ''],
      ['3', 'Veículo grande', ''],
      ['4', 'Veículo moto', 'bi bi-bicycle icon']
    ];
    this.tiposVeiculos = veiculos;
  }
}
