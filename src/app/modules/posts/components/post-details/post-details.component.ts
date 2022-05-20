import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IPost_details } from '../../interfaces';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost_details;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) =>
      this.post = postData);
  }
}
