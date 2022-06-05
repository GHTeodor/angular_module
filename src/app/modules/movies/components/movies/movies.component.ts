import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IMovie} from '../../interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  @HostListener('window:scroll')
  showButtonScrollUp() {
    const btn_scrollUp = document.getElementById("btnScrollUp") as HTMLElement;
    btn_scrollUp.style.visibility = window.pageYOffset < 500 ? "hidden" : 'visible';
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({moviesData: {page, results}}) => {
      this.movies = results;
      this.page = page;
    });
  }

  catchPageEmitter(newPage: number) {
    this.router.navigate([`movies/${newPage}`]);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
