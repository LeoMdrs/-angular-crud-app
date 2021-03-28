import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Injetando o service HeaderService para conseguir ver os dados do header da view atual
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  // Métodos pegam os dados do headerData exibidos na view 
  get title(): String {
    return this.headerService.headerData.title;
  }
  get icon(): String {
    return this.headerService.headerData.icon;
  }
  get routeUrl(): String {
    return this.headerService.headerData.routeUrl;
  }

}
