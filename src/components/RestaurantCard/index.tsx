import { useNavigate } from 'react-router-dom'
import type { Restaurant } from '../../types'
import starIcon from '../../assets/images/star.svg'
import {
  Card,
  CardImageWrapper,
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
      <CardImageWrapper>
        <CardImage src={restaurant.capa} alt={restaurant.titulo} />
        <TagsContainer>
          {restaurant.destacado && <FeaturedTag>Destaque da semana</FeaturedTag>}
          {restaurant.tipo.split(' / ').map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </CardImageWrapper>
      <CardContent>
        <CardHeader>
          <CardTitle>{restaurant.titulo}</CardTitle>
          <Rating>
            <img src={starIcon} alt="estrela" />
            {restaurant.avaliacao}
          </Rating>
        </CardHeader>
        <CardDescription>{restaurant.descricao}</CardDescription>
        <CardButton onClick={() => navigate(`/restaurante/${restaurant.id}`)}>
          Saiba mais
        </CardButton>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard
