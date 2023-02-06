import { NgModule } from "@angular/core";
import { TooltipDirective } from "../directives/tooltip.directive";
import { ButtonComponent } from "./components/button/button.component";
import { TooltipComponent } from "./components/tooltip/tooltip.component";

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
