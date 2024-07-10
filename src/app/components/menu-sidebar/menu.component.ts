import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const menuItems = this.el.nativeElement.querySelectorAll('.item-menu');

    menuItems.forEach((item: HTMLElement) => {
      this.renderer.listen(item, 'click', () => {
        this.selectLink(item);
      });
    });

    //Expandir menu
    const btnExp = this.el.nativeElement.querySelector('#btn-exp');
    const menuSide = this.el.nativeElement.querySelector('.menu-lateral');
    this.renderer.listen(menuSide, 'click', () => {
      this.expandeMenu(menuSide)
    })
  }

  selectLink(selectedElement: HTMLElement): void {
    const menuItems = this.el.nativeElement.querySelectorAll('.item-menu');

    // Remover a classe 'ativo' de todos os itens do menu
    menuItems.forEach((item: any) => {
      this.renderer.removeClass(item, 'ativo');
    });

    // Adicionar a classe 'ativo' apenas ao item clicado
    this.renderer.addClass(selectedElement, 'ativo');
  }

  expandeMenu(selectedElement: HTMLElement): void{
    const menuSide = this.el.nativeElement.querySelector('.menu-lateral');
    menuSide.classList.toggle('expandir')
  }
}
