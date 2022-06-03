import {Component, OnInit} from '@angular/core';

import {SearchStorageService} from '../../../../storageService';
import {FindMoviesService} from '../../services'
import {IFoundMovies} from '../../interfaces';

@Component({
  selector: 'app-find-movies',
  templateUrl: './find-movies.component.html',
  styleUrls: ['./find-movies.component.css']
})
export class FindMoviesComponent implements OnInit {
  searchResult: IFoundMovies;
  searchLineFromStorage: string | null;
  page: number = 1;

  constructor(private searchStorageService: SearchStorageService,
              private findMoviesService: FindMoviesService) {
  }

  ngOnInit(): void {
    this.searchStorageService.searchLineStorage.subscribe(value => {
      this.searchLineFromStorage = value;

      this.findMoviesService.getAll(this.page, value).subscribe(value =>
        this.searchResult = value);
    });
  }

  prevPage(): void {
    this.findMoviesService.getAll(--this.page, this.searchLineFromStorage).subscribe(value =>
      this.searchResult = value);
  }

  nextPage(): void {
    this.findMoviesService.getAll(++this.page, this.searchLineFromStorage).subscribe(value =>
      this.searchResult = value);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
