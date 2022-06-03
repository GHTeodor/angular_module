import {Component, Input, OnInit} from '@angular/core';

import {IImage} from '../../interfaces';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input()
  image: IImage;

  constructor() {
  }

  ngOnInit(): void {
  }
}
