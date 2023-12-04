
import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from 'src/app/models/genre.interface';
import { Cast } from 'src/app/models/actor-movie.interface';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movie | Cast;
  @Input() genres: Genre[] = [];

  urlImage(): string {
    return `https://image.tmdb.org/t/p/w440_and_h660_face${this.movie.poster_path}`;
  }

  raiting(): number {
    return this.movie.vote_average / 2;
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }

  constructor(config: NgbRatingConfig) {

    config.max = 5;
    config.readonly = true;
  }

}