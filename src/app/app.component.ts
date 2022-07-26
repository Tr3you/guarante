import { Component, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'guarante-demo';
  isLogged = false;

  constructor(private cookies: CookieService){

  }

  ngDoCheck(): void {
    this.isLogged = this.cookies.check("isLogged");
  }

}
