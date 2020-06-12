import { Component } from "@angular/core";

@Component({
  selector: "app-decorator",
  template: `
    <div style="background-color: #FF0000">
      <router-outlet></router-outlet>
    </div>
  `
})
export class DecorationComponent {}
