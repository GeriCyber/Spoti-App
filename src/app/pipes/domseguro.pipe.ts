import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizier: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.domSanitizier.bypassSecurityTrustResourceUrl(url + value);
  }

}
