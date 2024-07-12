import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-estabelecimento-form',
  templateUrl: './formEstabelecimento.component.html',
  styleUrls: ['./formEstabelecimento.component.css']
})
export class EstabelecimentoFormComponent implements OnInit{
  @ViewChild('estabelecimentoForm', { static: false })
  estabelecimentoForm!: NgForm;

  constructor(){}

  ngOnInit(): void {
  }

  submitForm() {
    // Aqui você pode implementar a lógica para processar o envio do formulário
    // Por exemplo, enviar os dados para um serviço Angular, salvar no banco de dados, etc.
    // Você pode acessar os valores do formulário através de estabelecimentoForm.value

    // console.log('Formulário enviado:', estabelecimentoForm.value);
  }
}
