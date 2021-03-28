import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Injetando o service HeaderService para alterar os dados do header
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: ""
    }
  }

  ngOnInit(): void {
  }

}
