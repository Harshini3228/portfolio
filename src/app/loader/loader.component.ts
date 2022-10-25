import { Component, Injector, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public val: boolean = false;
  private router: Router;
  public injector: Injector;
  constructor(injector: Injector) {
    this.injector = injector;
   }

  ngOnInit(): void {
    this.router = this.injector.get(Router);
    setTimeout(() => {
      this.redirectToList();
  }, 4000);
}
 /** Return to list NS Package List */
 public redirectToList(): void {
    this.router.navigate(['/layout']).catch();
  }
}
