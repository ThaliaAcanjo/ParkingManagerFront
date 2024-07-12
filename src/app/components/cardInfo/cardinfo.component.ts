import { Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.css']
})
export class CardInfoComponenet implements OnInit {
  @Input() title: string = "";
  @Input() valorTitle: string = "";
  @Input() colorIcon: string = "";
  @Input() classIcon: string = "bi bi-p-circle";
  @Input() className: string = "";

  constructor() { }

  ngOnInit(): void {

  }
}
