import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
  @Input() tipoVeiculo: string = "1";
  @Input() iconVeiculo: string = '';
  public vagasCar: string[][] | undefined;
  public vagasMoto: string[][] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.preencherLista();
  }
  preencherLista() {
    let dadosCar: [string, string][] = [
      ['1', 'livre'],
      ['2', 'ocupado'],
      ['3', 'livre'],
      ['4', 'livre'],
      ['5', 'livre'],
      ['6', 'ocupado'],
      ['7', 'livre'],
      ['8', 'livre'],
      ['9', 'livre'],
      ['10', 'ocupado'],
      ['11', 'livre'],
      ['12', 'ocupado'],
    ];


    let dadosMoto: [string, string][] = [
      ['1', 'livre'],
      ['2', 'ocupado'],
      ['3', 'livre'],
      ['4', 'livre'],
      ['5', 'livre'],
      ['6', 'ocupado'],
      ['7', 'livre'],
      ['8', 'livre'],
      ['9', 'livre'],
      ['10', 'ocupado'],
      ['11', 'livre'],
      ['12', 'ocupado'],
    ];

    this.vagasCar = dadosCar;
    this.vagasMoto = dadosMoto;
    console.log(this.vagasCar);
  }
}
