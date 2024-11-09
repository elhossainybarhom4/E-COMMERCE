import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number, discountNum:number): number {
    let disDiv = discountNum /100;
    let mull =value*disDiv;
    let result = value-mull;
    return result;
  }

}
