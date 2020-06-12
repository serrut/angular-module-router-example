import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  Module2Page1Component,
  Module2Page2Component
} from "./module2-page.component";

const routes: Routes = [
  { path: "page1", component: Module2Page1Component },
  { path: "page2", component: Module2Page2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule {}
