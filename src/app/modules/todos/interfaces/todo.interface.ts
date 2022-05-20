export interface ITodo {
  id: number,
  title: string,
}

export interface ITodo_details extends ITodo {
  userId: number,
  completed: boolean
}
