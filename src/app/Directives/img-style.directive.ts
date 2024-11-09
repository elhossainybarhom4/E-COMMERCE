import { asNativeElements, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
  standalone: true
})
export class ImgStyleDirective {

  constructor(public elementRef:ElementRef) {

    this.elementRef.nativeElement.style.border = `2px solid brown`;

   }
   @HostListener('mouseover') mouseoverFunc(){

    this.elementRef.nativeElement.style.border = `2px solid brown`;
   }

   @HostListener('mouseleave') mouseleaveFunc(){

    this.elementRef.nativeElement.style.border = `2px solid grey`;
   }

}
