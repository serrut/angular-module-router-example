import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Test1Component, Test2Component } from "./test.component";
import { DecorationComponent } from "./decorator/decorator.component";

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    DecorationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
