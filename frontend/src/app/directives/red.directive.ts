import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color = 'red'
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'heart');
    this.el.nativeElement.style.color = "darkred";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'heart');
    this.el.nativeElement.style.color = "red";
  }

}
