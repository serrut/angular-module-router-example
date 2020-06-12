import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Module1Page1Component, Module1Page2Component} from './module1-page.component';
import {Module1RoutingModule} from './module1-routing.module';

@NgModule({
  declarations: [Module1Page1Component, Module1Page2Component],
  imports: [CommonModule, Module1RoutingModule],
})
export class Module1Module {
}
