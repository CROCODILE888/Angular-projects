import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrial]'
})
export class TrialDirective {

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
  @Input() appExampleDirectiveColor: string = ''; // You can define input properties for customization

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appExampleDirectiveColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

}
