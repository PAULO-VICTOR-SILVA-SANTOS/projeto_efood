import { useNavigate } from 'react-router-dom'
import type { Restaurant } from '../../types'
import {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  Rating,
  CardDescription,
  TagsContainer,
  Tag,
  FeaturedTag,
  CardButton,
} from './styles'

type RestaurantCardProps = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardImage src={restaurant.capa} alt={restaurant.titulo} />
      <CardContent>
        <CardHeader>
          <CardTitle>{restaurant.titulo}</CardTitle>
          <Rating>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plain_Yellow_Star.png/480px-Plain_Yellow_Star.png"
              alt="estrela"
            />
            {restaurant.avaliacao}
          </Rating>
        </CardHeader>
        <CardDescription>{restaurant.descricao}</CardDescription>
        <TagsContainer>
          {restaurant.destacado && <FeaturedTag>Destaque da semana</FeaturedTag>}
          {restaurant.tipo.split(' / ').map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <CardButton onClick={() => navigate(`/restaurante/${restaurant.id}`)}>
          Saiba mais
        </CardButton>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard
