import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IGenre} from '../../interfaces';
import {GetByGenreStorageService} from '../../../../storageService';
import {DarkModeService} from '../../../../storageService';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];
  isDark: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private getByGenreService: GetByGenreStorageService,
              private darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
    this.darkModeService.isDark.subscribe(value => {
      this.isDark = value;
    });

    this.activatedRoute.data.subscribe(({genresData: {genres}}) =>
      this.genres = genres);
  }

  goGenre(id: number): void {
    const genre_Id_Name = this.genres.find(idx => idx.id === id);
    if (genre_Id_Name) this.getByGenreService.getByGenre.next(genre_Id_Name.id);
  }
}
