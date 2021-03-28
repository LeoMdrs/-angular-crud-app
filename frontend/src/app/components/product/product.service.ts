import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar, // Usado para criar janela de mensagem
    private http: HttpClient // Usado para conexões com o backend
  ) { }

  // Método que exibi mensagens de erro e sucesso
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // Cria um produto (é chamado no componente ProductCreateComponent)
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      // Coleta erro que tenha acontecido
      catchError((e) => this.errorHandler(e))
    );
  }

  // Retorna um array de produtos (é chamado no componente ProductReadComponent)
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      // Coleta erro que tenha acontecido
      catchError((e) => this.errorHandler(e))
    );
  }
  
  // Retorna um produto pela id (é chamado em vários componentes)
  readById(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      // Coleta erro que tenha acontecido
      catchError((e) => this.errorHandler(e))
    );
  }
  
  // Atualiza um produto (é chamado no componente ProductUpdateComponent)
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      // Coleta erro que tenha acontecido
      catchError((e) => this.errorHandler(e))
    );
  }
  
  // Remove um produto (é chamado no componente ProductDeleteComponent)
  delete(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      // Coleta erro que tenha acontecido
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método que retorna mensagem de erro
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    // Retorna um observable vazio
    return EMPTY;
  }

}
