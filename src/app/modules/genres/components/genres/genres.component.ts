import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IGenre} from '../../interfaces';
import {GetByGenreStorageService} from '../../../../storageService';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];

  constructor(private activatedRoute: ActivatedRoute, private getByGenreService: GetByGenreStorageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData: {genres}}) =>
      this.genres = genres);
  }

  goGenre(id: number): void {
    const genre_Id_Name = this.genres.find(idx => idx.id === id);
    if (genre_Id_Name) this.getByGenreService.getByGenre.next(genre_Id_Name.id);
  }
}
