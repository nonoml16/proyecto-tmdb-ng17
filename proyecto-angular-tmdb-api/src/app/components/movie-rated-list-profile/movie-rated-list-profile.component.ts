import { Component, Input } from '@angular/core';
import { MovieRated } from 'src/app/models/movie-list-rated.interface';

@Component({
  selector: 'app-movie-rated-list-profile',
  templateUrl: './movie-rated-list-profile.component.html',
  styleUrls: ['./movie-rated-list-profile.component.css']
})
export class MovieRatedListProfileComponent {

  @Input() mList!: MovieRated[];

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
