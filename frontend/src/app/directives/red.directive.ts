import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // Diretiva que faz apenas mudar a cor de um elemento pra vermelho
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#e35e6b"
  }

}
