export interface IComment {
  id: number,
  name: string
}

export interface IComment_details extends IComment {
  postId: number,
  email: string,
  body: string
}
