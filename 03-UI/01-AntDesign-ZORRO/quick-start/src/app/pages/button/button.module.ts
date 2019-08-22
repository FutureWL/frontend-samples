import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {ButtonComponent} from "./button.component";
import {ButtonRoutingModule} from "./button-routing.module";

@NgModule({
  imports: [CommonModule, ButtonRoutingModule, NzButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
