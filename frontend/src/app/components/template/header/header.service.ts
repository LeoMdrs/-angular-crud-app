import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // Classe Behavior recebe um valor e avisa sempre que alguma mudança acontece
  // Os dados do headerData são atualizados pelas views nos seus respectivos componentes
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: ""
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  // Método é chamado no construtor das views para alterar o valor do headerData de acordo com a view atual
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }

}
