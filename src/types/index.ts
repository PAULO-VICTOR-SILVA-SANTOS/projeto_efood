export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodItem[]
}

export type FoodItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
