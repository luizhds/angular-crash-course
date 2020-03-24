import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';

  constructor(){
    console.log(123);

    this.changeName('testing my system');

  }

  changeName(name:string):void {
    this.title = name;
  }
}
