import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button.component";
import {ButtonRoutingModule} from "./button-routing.module";

@NgModule({
  imports: [CommonModule,ButtonRoutingModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
