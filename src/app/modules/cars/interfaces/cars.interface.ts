export interface ICar {
  id: number,
  model: string,
}

export interface ICar_details extends ICar {
  price: number,
  year: number
}
