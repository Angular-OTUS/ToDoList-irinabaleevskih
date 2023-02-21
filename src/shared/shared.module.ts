import { NgModule } from "@angular/core";
import { ButtonComponent, TooltipComponent } from "./components";
import { TooltipDirective } from "./directives/tooltip.directive";

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [],
  providers: [],
})
export class SharedModule { }
