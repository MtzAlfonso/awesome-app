import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras',
})
export class ChangeLetterPipe implements PipeTransform {
  removeAccents(str: string) {
    return str
      .replace(/[áÁ]/g, 'a')
      .replace(/[éÉ]/g, 'e')
      .replace(/[íÍ]/g, 'i')
      .replace(/[óÓ]/g, 'o')
      .replace(/[úÚüÜ]/g, 'u');
  }

  transform(value: string): string {
    return this.removeAccents(value)
      .replace(/a/gi, '4')
      .replace(/e/gi, '3')
      .replace(/i/gi, '1')
      .replace(/o/gi, '0')
      .replace(/u/gi, '9');
  }
}
