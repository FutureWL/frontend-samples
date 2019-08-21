import {Component} from '@angular/core';
import {HelloService} from "./hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';


  constructor(
    private helloService: HelloService
  ) {
  }

  hello() {
    this.helloService.hello()
      .subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
