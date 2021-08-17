import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(value: string, type: string): SafeResourceUrl {
    if (type === 'resourceUrl') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    } else {
      return '';
    }
  }
}
