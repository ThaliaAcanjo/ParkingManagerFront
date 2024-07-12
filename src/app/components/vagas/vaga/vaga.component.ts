import { Component, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['../vagas.component.css']
})
export class VagaComponent implements OnInit{
  @Input() item : string = 'livre';
  @Input() status: boolean = false;
  @Input() tipoVeiculo: string = "";
  @Input() iconVeiculo: string = "";

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngOnInit(): void {

  }
  /*ngAfterViewInit(): void {
    const item = this.el.nativeElement.querySelector('.vagas-item');
    this.livreOuOcupado(item);
  }

  livreOuOcupado(selectedElement: HTMLElement): void {
    const item = this.el.nativeElement.querySelector('.vagas-item');
    // Remover a classe 'ativo' de todos os itens do menu
    this.renderer.removeClass(item, 'free');
    // Adicionar a classe 'ativo' apenas ao item clicado
    this.renderer.addClass(selectedElement, 'free');
  }*/
}
