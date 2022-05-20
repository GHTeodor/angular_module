import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IComment_details } from '../../interfaces';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment_details;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) =>
      this.comment = commentData);
  }
}
