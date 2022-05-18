export interface IPost {
  id: number,
  title: string
}

export interface IPost_details extends IPost {
  userId: number,
  body: string
}
