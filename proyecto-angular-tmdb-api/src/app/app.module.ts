import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ActorItemComponent } from './components/actor-item/actor-item.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarHorizontalComponent } from './components/nav-bar-horizontal/nav-bar-horizontal.component';
import { PageMovieTopRatedComponent } from './ui/page-movie-top-rated/page-movie-top-rated.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageMovieNowPlayingComponent } from './ui/page-movie-now-playing/page-movie-now-playing.component';
import { PageMovieUpcomingComponent } from './ui/page-movie-upcoming/page-movie-upcoming.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PageTvShowAirlingTodayListComponent } from './ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { PageTvShowTopRatedListComponent } from './ui/page-tv-show-top-rated-list/page-tv-show-top-rated-list.component';
import { PageTvShowOnTheAirListComponent } from './ui/page-tv-show-on-the-air-list/page-tv-show-on-the-air-list.component';
import { PageTvShowPopularListComponent } from './ui/page-tv-show-popular-list/page-tv-show-popular-list.component';
import { PageDetailsTvShowComponent } from './ui/page-details-tv-show/page-details-tv-show.component';
import { PageActorDetailComponent } from './ui/page-actor-detail/page-actor-detail.component';
import { PageTrendingMovieComponent } from './ui/page-trending-movie/page-trending-movie.component';
import { PageTrendingTvshowComponent } from './ui/page-trending-tvshow/page-trending-tvshow.component';
import { PageTrendingActorsComponent } from './ui/page-trending-actors/page-trending-actors.component';
import { MoviesFilterComponent } from './components/movies-filter/movies-filter.component';
import { AuthAprovedComponent } from './components/auth-aproved/auth-aproved.component';
import { PageProfileComponent } from './ui/page-profile/page-profile.component';
import { MoviesListProfileComponent } from './components/movies-list-profile/movies-list-profile.component';
import { TvShowListProfileComponent } from './components/tv-show-list-profile/tv-show-list-profile.component';
import { MovieRatedListProfileComponent } from './components/movie-rated-list-profile/movie-rated-list-profile.component';
import { TvShowRatedListProfileComponent } from './components/tv-show-rated-list-profile/tv-show-rated-list-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    ActorItemComponent,
    MovieItemComponent,
    TvShowItemComponent,
    NavBarComponent,
    NavBarHorizontalComponent, 
    PageDetailsComponent,
    NavBarHorizontalComponent,
    PageMovieTopRatedComponent,
    PageMoviePopularComponent,
    PageMovieNowPlayingComponent,
    PageMovieUpcomingComponent,
    PageTvShowAirlingTodayListComponent,
    TvShowListComponent,
    PageMovieUpcomingComponent,
    PageActorDetailComponent,
    PageTvShowTopRatedListComponent,
    PageTvShowOnTheAirListComponent,
    PageTvShowAirlingTodayListComponent,
    PageTvShowPopularListComponent,
    PageDetailsTvShowComponent,
    PageTrendingMovieComponent,
    PageTrendingTvshowComponent,
    PageTrendingActorsComponent,
    MoviesFilterComponent,
    AuthAprovedComponent,
    PageProfileComponent,
    MoviesListProfileComponent,
    TvShowListProfileComponent,
    MovieRatedListProfileComponent,
    TvShowRatedListProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showBackground: true,
      backgroundColor: "#21242D",
      showSubtitle: false,
      responsive: true,
      titleFontSize: "100",
      showUnits: false,
      titleFontWeight: "600",
      titleColor: "#ffffff"

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
