import type { FoodItem } from '../../types'
import {
  Card,
  FoodImage,
  FoodContent,
  FoodName,
  FoodDescription,
  FoodPrice,
  AddButton,
} from './styles'

type FoodCardProps = {
  food: FoodItem
  onAddToCart: (food: FoodItem) => void
}

const FoodCard = ({ food, onAddToCart }: FoodCardProps) => {
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Card>
      <FoodImage src={food.foto} alt={food.nome} />
      <FoodContent>
        <FoodName>{food.nome}</FoodName>
        <FoodDescription>{food.descricao}</FoodDescription>
        <FoodPrice>{formatPrice(food.preco)}</FoodPrice>
        <AddButton onClick={() => onAddToCart(food)}>Adicionar ao carrinho</AddButton>
      </FoodContent>
    </Card>
  )
}

export default FoodCard
