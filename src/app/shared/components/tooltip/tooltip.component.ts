import { Component } from "@angular/core";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent { 
  public tooltip = '';
  public left = 0;
  public top = 0;
}
