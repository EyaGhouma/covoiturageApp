import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {
  isCollapsed = true;
  sortOption : 'departure' | 'priceSort' = 'departure';
  petsFilter = false;
  cigaretteFilter = false;
  constructor(private router: Router) {


  }
  goToBookingTrip() : void
  {
    this.router.navigateByUrl("book-trip")
  }
}
