import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // Injetando o service HeaderService para alterar os dados do header
  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: "Produtos",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
  }

  // Método é chamado em botão da view
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
