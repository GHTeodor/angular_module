export interface IYT_Videos {
  results: IYouTube[];
}

export interface IYouTube {
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string
}
