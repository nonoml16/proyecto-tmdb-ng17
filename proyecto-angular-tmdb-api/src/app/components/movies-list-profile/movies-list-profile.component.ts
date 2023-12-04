import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movies-list-profile',
  templateUrl: './movies-list-profile.component.html',
  styleUrls: ['./movies-list-profile.component.css']
})
export class MoviesListProfileComponent {

  @Input() mList!: Movie[];

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
