import {Component, Input, OnInit} from '@angular/core';

import {IFoundMovie} from '../../interfaces';

@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.css']
})
export class FindMovieComponent implements OnInit {
  @Input()
  film: IFoundMovie;

  constructor() {
  }

  ngOnInit(): void {
  }
}
