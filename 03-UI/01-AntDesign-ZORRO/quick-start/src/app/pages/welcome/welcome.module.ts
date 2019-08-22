import {NgModule} from '@angular/core';

import {NzButtonModule} from 'ng-zorro-antd/button';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
