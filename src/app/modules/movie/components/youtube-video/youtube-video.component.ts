import {Component, Input, OnInit} from '@angular/core';

import {IYouTube} from '../../interfaces';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input()
  video: IYouTube;

  constructor() {
  }

  ngOnInit(): void {
    const videoURL = 'https://www.youtube.com/embed/' + this.video.key;

    const iframe = document.getElementById('embeddedPage') as HTMLIFrameElement;
    iframe.contentWindow?.location.replace(videoURL);
  }
}
