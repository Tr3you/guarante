import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  title = 'Search-bar';

  @Input() textoBusqueda: string

  constructor(private router: Router){
    this.textoBusqueda = ""
  }

  goToResults(){
    this.router.navigate(['/results'])
  }
}