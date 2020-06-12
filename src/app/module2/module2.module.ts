import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Module2Page1Component, Module2Page2Component} from './module2-page.component';
import {Module2RoutingModule} from './module2-routing.module';

@NgModule({
  declarations: [Module2Page1Component, Module2Page2Component],
  imports: [CommonModule, Module2RoutingModule],
})
export class Module2Module {
}
