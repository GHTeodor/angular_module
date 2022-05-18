import {Component, OnInit} from '@angular/core';

import {CommentsDataService} from '../../services';
import {IComment} from '../../interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentsService: CommentsDataService) {
  }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value =>
      this.comments = value);
  }
}
