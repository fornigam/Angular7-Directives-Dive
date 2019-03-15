import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector : "[appBasicHighlight]"
})

export class BasicHighlightDirective {

    //Note : elementRef must be private otherwise it can not access
    constructor(private elementRef : ElementRef, private renderer : Renderer2){
        
    }
 ngOnInit(){
     //use with elementRef
     //this.elementRef.nativeElement.style.backgroundColor = "green";          
     
     //use with Renderer2
     //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'RED');
 }
 
 //Using @HostListener..hover effet implementation
 @HostListener('mouseenter') mouseover (eventData : Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'RED');
 }

 @HostListener('mouseleave') mouseleave (eventData : Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
 }


}