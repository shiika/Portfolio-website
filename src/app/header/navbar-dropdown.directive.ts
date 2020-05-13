import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarDropdown]'
})
export class NavbarDropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mousedown", ["$event"]) onClick(e: Event) {
    if (this.elRef.nativeElement.classList.value == "navbar-toggler p-0") {
      this.renderer.addClass(this.elRef.nativeElement.nextElementSibling, "show");
      this.renderer.addClass(this.elRef.nativeElement, "active");
      setTimeout(() => {
        this.renderer.addClass(this.elRef.nativeElement.nextElementSibling, "collapsed");
      }, 100);
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "active");
      this.renderer.removeClass(this.elRef.nativeElement.nextElementSibling, "collapsed");
      this.renderer.removeClass(this.elRef.nativeElement.nextElementSibling, "show");
    }
      
  }

}
