import {Component, OnInit} from '@angular/core';

import {GenreService} from '../../services';
import {GetByGenreStorageService} from '../../../../storageService';
import {IMoviesByGenre} from '../../interfaces';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  page: number = 1;
  maxPage: number;
  movieByGenre: IMoviesByGenre;

  constructor(private genreService: GenreService, private getByGenreService: GetByGenreStorageService) {
  }

  ngOnInit(): void {
    this.getByGenreService.getByGenre.subscribe(id => {
      this.genreService.getByGenre(id, this.page).subscribe(value => {
        this.movieByGenre = value;
        this.maxPage = (value.total_pages > 500) ? 500 : value.total_pages;
      });
    });
  }

  catchPageEmitter(page: number) {
    this.getByGenreService.getByGenre.subscribe(id =>
      this.genreService.getByGenre(id, page).subscribe(value =>
        this.movieByGenre = value));
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
