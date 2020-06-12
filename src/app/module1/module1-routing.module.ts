import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Module1Page1Component, Module1Page2Component} from './module1-page.component';

const routes: Routes = [
  {path: 'page1', component: Module1Page1Component},
  {path: 'page2', component: Module1Page2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module1RoutingModule {
}
