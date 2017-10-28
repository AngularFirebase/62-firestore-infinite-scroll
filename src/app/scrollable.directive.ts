import { Directive, HostListener, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter()
  

  constructor(public el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {

      const top = event.target.scrollTop
      const height = this.el.nativeElement.scrollHeight
      const offset = this.el.nativeElement.offsetHeight


      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom')
      }

      if (top === 0) {
        this.scrollPosition.emit('top')
      }

    } catch (err) {}
  }

}
