import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IImage, IMovie, IYouTube} from '../../interfaces';
import {GetByGenreStorageService} from '../../../../storageService';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: IMovie;
  video: IYouTube;
  image: IImage[];

  constructor(private activatedRoute: ActivatedRoute,
              private getByGenreService: GetByGenreStorageService,
              private router: Router) {
  }

  @HostListener('window:scroll')
  showButtonScrollUp() {
    const btn_scrollUp = document.getElementsByClassName("scrollUp")[0] as HTMLElement;
    btn_scrollUp.style.visibility = window.pageYOffset < 500 ? "hidden" : 'visible';
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({movieData, videoData, imageData}) => {
      this.movie = movieData;
      this.video = videoData.results.shift();
      this.image = imageData.backdrops;
    });
  }

  goGenre(id: number): void {
    this.getByGenreService.getByGenre.next(id);
    this.router.navigate(['genres']);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

