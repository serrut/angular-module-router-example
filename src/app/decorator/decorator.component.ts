import {Component} from '@angular/core';

@Component({
  selector: 'app-decorator',
  template: `
    <h2>Sub-module</h2>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DecorationComponent {
}
