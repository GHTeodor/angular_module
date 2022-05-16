import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IComment_details} from '../../interfaces';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment_details;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(() =>
      this.comment = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IComment_details);
  }

  ngOnInit(): void {
  }
}
