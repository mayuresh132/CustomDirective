import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[MyTextBox]'
})
export class MyTextBoxDirective {

  constructor(eleRef: ElementRef, rend: Renderer2) {
this.eleRef.nativeElement.style.width='500px';
   }

}
