import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-book-trip-summary',
  standalone : true,

  imports: [SharedModule],
  templateUrl: './book-trip-summary.component.html',
  styleUrl: './book-trip-summary.component.scss'
})
export default class BookTripSummaryComponent {

  rating = 0;
  comment = '';
  stars = Array(5).fill(0);

  setRating(star: number) {
    this.rating = star;
  }

  submitReview() {
    console.log('Note :', this.rating);
    console.log('Commentaire :', this.comment);
  }
}
