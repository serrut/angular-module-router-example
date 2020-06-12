import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Test1Component, Test2Component } from "./test.component";
import { DecorationComponent } from "./decorator/decorator.component";

const routes: Routes = [
  { path: "", redirectTo: "test1", pathMatch: "full" },
  { path: "test1", component: Test1Component },
  { path: "test2", component: Test2Component },
  {
    path: "module1",
    loadChildren: () =>
      import("./module1/module1.module").then(m => m.Module1Module),
    component: DecorationComponent
  },
  {
    path: "module2",
    loadChildren: () =>
      import("./module2/module2.module").then(m => m.Module2Module),
    component: DecorationComponent
  },
  { path: "**", component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
