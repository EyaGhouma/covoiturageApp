import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-book-trip',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './book-trip.component.html',
  styleUrl: './book-trip.component.scss'
})
export default class BookTripComponent {

}
