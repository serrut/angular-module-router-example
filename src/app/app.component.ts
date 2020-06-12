import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  name: string;

  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }

}
