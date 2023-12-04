import { Component, Input } from '@angular/core';
import { TvShowRated } from 'src/app/models/tv-show-list-rated.interface';

@Component({
  selector: 'app-tv-show-rated-list-profile',
  templateUrl: './tv-show-rated-list-profile.component.html',
  styleUrls: ['./tv-show-rated-list-profile.component.css']
})
export class TvShowRatedListProfileComponent {

  @Input() tvList!: TvShowRated[];

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
