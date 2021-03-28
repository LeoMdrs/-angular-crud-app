import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  // Variável que vai amazenar o produto que será atualizado
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

  // Método que é chamado na interface de atualizar
  updateProduct(): void {
    // Chamando o método de update do service (subscribing the observable)
    this.productService.update(this.product).subscribe(() => {
      // Chamando o método de exibir mensagem
      this.productService.showMessage("Produto atualizado com sucesso!");
      // Navegando para uma rota
      this.router.navigate(['/products']);
    })
  }

  // Método chamado no botão de cancelar
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
