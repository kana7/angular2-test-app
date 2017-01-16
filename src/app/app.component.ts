import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My angular test app";
  delete = false;
  test = "Starting value";
  boundValue = 1000;
}
