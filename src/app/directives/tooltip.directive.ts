import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
} from "@angular/core";
import { TooltipComponent } from "../shared/components/tooltip/tooltip.component";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input()
  public tooltip = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {    
    const componentFactory = 
      this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    this.componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    const domElem = 
      (this.componentRef.hostView as EmbeddedViewRef<TooltipComponent>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.setTooltipComponentProperties();   
  }

  @HostListener('mouseleave')
  onMouseleave(): void {
    this.destroy();
  }

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) { }  

  ngOnDestroy(): void {
    this.destroy();
  }

  private setTooltipComponentProperties(): void {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      const { left, right, bottom } = 
        this.elementRef.nativeElement.getBoundingClientRect();
        this.componentRef.instance.left = (right - left) / 2 + left;
        this.componentRef.instance.top = bottom;
    }
  }

  private destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef == null;
    }
  }
}
