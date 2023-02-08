import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public title = '';

  @Input()
  public isDisabled = false;

  @Output()
  public readonly buttonClick = new EventEmitter<void>();
  
  protected onClick(): void {
    this.buttonClick.emit();
  }
}
