import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appdirbuttons]'
})
export class DirButtonsDirective {

  constructor(private el:ElementRef) { 
  el.nativeElement.color='danger';
  
  }

  

}