import { Component, Input } from '@angular/core';
import { TvShow } from 'src/app/models/tv-show-list.interface';

@Component({
  selector: 'app-tv-show-list-profile',
  templateUrl: './tv-show-list-profile.component.html',
  styleUrls: ['./tv-show-list-profile.component.css']
})
export class TvShowListProfileComponent {

  @Input() tvList!: TvShow[];

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }
}
