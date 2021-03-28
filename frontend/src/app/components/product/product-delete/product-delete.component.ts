import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  // Variável que vai amazenar o produto que será deletado
  product: Product;

  constructor(
    private productService: ProductService, // Service que armazena os métodos de operações com Produtos
    private router: Router, // Faz as rotas
    private route: ActivatedRoute // Usado para descobrir parametro de id na url
  ) { }

  // Método executado ao iniciar
  ngOnInit(): void {
    // Descobrindo parametro id da url e tansformando em tipo numeber como +
    const id = +this.route.snapshot.paramMap.get('id');
    // Lendo produto com id de parametro e salvando na variável product
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }
  
  // Método que é chamado na interface de deletar
  deleteProduct(): void {
    // Chamando o método de delete do service (subscribing the observable)
    this.productService.delete(this.product.id).subscribe(() => {
      // Chamando o método de exibir mensagem
      this.productService.showMessage("Produto deletado com sucesso!");
      // Navegando para uma rota
      this.router.navigate(['/products']);
    })
  }

  // Método chamado no botão de cancelar
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
