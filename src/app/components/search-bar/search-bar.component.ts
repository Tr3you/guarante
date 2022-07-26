import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements DoCheck{
  title = 'Search-bar';
  isLogged = false;

  @Input() textoBusqueda: string

  constructor(private router: Router, private cookies: CookieService){
    this.textoBusqueda = ""
  }
  ngDoCheck(): void {
    this.isLogged = this.cookies.check("isLogged")
  }

  goToResults(){
    this.router.navigate(['/results'])
  }
}